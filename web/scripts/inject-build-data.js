// Post-build step: writes the latest Windows/macOS versions and the homepage FAQ into the
// static files of the build, so crawlers and LLMs that do not execute JavaScript still see
// them. The browser refreshes the versions at runtime (useLatestVersions / js/version.js).
const fs = require('fs');
const path = require('path');
const faqs = require('../src/data/faq.json');

const BUILD_DIR = path.resolve(__dirname, '..', process.env.BUILD_PATH || 'build');
const RELEASES_URL = 'https://github.com/carlosacchi/captiocr/releases';
const TEXT_EXTENSIONS = new Set(['.html', '.txt']);

const PLATFORMS = {
    WINDOWS: {
        versionUrl: 'https://raw.githubusercontent.com/carlosacchi/captiocr/main/version.txt',
        releaseUrl: (version) => `${RELEASES_URL}/tag/v${version}`,
        fallbackUrl: `${RELEASES_URL}/latest`
    },
    MACOS: {
        versionUrl: 'https://raw.githubusercontent.com/carlosacchi/captiocr/macos/version.txt',
        releaseUrl: (version) => `${RELEASES_URL}/tag/macos-v${version}`,
        fallbackUrl: `${RELEASES_URL}?q=macos&expanded=true`
    }
};

function escapeHtml(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// version.txt: first line is the version, second line the release date (DD/MM/YYYY).
function parseVersionFile(text) {
    const [version = '', date = ''] = text.split('\n').map((line) => line.trim());
    if (!/^\d+\.\d+\.\d+$/.test(version)) {
        throw new Error(`Unexpected version "${version}"`);
    }
    const [day, month, year] = date.split('/');
    const isoDate = year && month && day ? `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}` : null;
    return { version, isoDate };
}

async function fetchPlatform(name, platform) {
    try {
        const response = await fetch(platform.versionUrl, { signal: AbortSignal.timeout(10000) });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const { version, isoDate } = parseVersionFile(await response.text());
        console.log(`${name}: ${version} (${isoDate || 'no date'})`);
        return {
            [`${name}_VERSION`]: version,
            [`${name}_DATE`]: isoDate || 'see GitHub Releases',
            [`${name}_RELEASE_URL`]: platform.releaseUrl(version)
        };
    } catch (error) {
        console.warn(`Could not fetch ${name} version (${error.message}); using fallbacks.`);
        return {
            [`${name}_VERSION`]: 'latest',
            [`${name}_DATE`]: 'see GitHub Releases',
            [`${name}_RELEASE_URL`]: platform.fallbackUrl
        };
    }
}

function buildFaqHtml() {
    return faqs
        .map(({ question, answer }) => `<h3>${escapeHtml(question)}</h3>\n<p>${escapeHtml(answer)}</p>`)
        .join('\n');
}

function buildFaqJsonLd() {
    return JSON.stringify(
        faqs.map(({ question, answer }) => ({
            '@type': 'Question',
            name: question,
            acceptedAnswer: { '@type': 'Answer', text: answer }
        }))
    );
}

function listFiles(dir) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) return entry.name === 'static' ? [] : listFiles(fullPath);
        return TEXT_EXTENSIONS.has(path.extname(entry.name)) ? [fullPath] : [];
    });
}

async function main() {
    const results = await Promise.all(
        Object.entries(PLATFORMS).map(([name, platform]) => fetchPlatform(name, platform))
    );
    const replacements = {
        ...Object.assign({}, ...results),
        FAQ_HTML: buildFaqHtml()
    };

    for (const file of listFiles(BUILD_DIR)) {
        const original = fs.readFileSync(file, 'utf8');
        let content = original.replace('"__FAQ_MAIN_ENTITY__"', buildFaqJsonLd());
        content = content.replace(/__([A-Z_]+)__/g, (match, key) =>
            key in replacements ? replacements[key] : match
        );
        if (content !== original) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Injected build data into ${path.relative(BUILD_DIR, file)}`);
        }
        const leftover = content.match(/__[A-Z][A-Z_]+[A-Z]__/g);
        if (leftover) {
            console.warn(`Unreplaced placeholders in ${path.relative(BUILD_DIR, file)}: ${[...new Set(leftover)].join(', ')}`);
        }
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
