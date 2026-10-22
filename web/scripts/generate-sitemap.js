const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const SITE_ORIGIN = 'https://www.captiocr.com';
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const OUTPUT_FILE = path.join(PUBLIC_DIR, 'sitemap.xml');

const rootPages = [
    { file: 'index.html', url: '/' },
    { file: 'caption-transcriber.html', url: '/caption-transcriber' },
    { file: 'live-caption-reader.html', url: '/live-caption-reader' },
    { file: 'meeting-transcriber.html', url: '/meeting-transcriber' },
    { file: 'data-sovereignty.html', url: '/data-sovereignty' },
    { file: 'download.html', url: '/download' }
];

function formatDate(date) {
    return date.toISOString().slice(0, 10);
}

function toAbsoluteUrl(urlPath) {
    return urlPath === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${urlPath}`;
}

// Date of the last commit touching the file. File mtimes are useless in CI, where every
// file is freshly checked out; fall back to them only for uncommitted files.
function getLastModified(filePath) {
    try {
        const commitDate = execFileSync('git', ['log', '-1', '--format=%cs', '--', filePath], {
            cwd: PUBLIC_DIR,
            encoding: 'utf8',
            stdio: ['ignore', 'pipe', 'ignore']
        }).trim();
        if (commitDate) return commitDate;
    } catch (error) {
        // git not available: fall through to the file system date.
    }
    return formatDate(fs.statSync(filePath).mtime);
}

function getLegalPages() {
    const legalDir = path.join(PUBLIC_DIR, 'legal');

    return fs
        .readdirSync(legalDir)
        .filter((fileName) => fileName.endsWith('.html'))
        .sort()
        .map((fileName) => ({
            file: path.join('legal', fileName),
            url: `/legal/${fileName}`
        }));
}

function buildUrlEntry({ file, url }) {
    const filePath = path.join(PUBLIC_DIR, file);

    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing sitemap source file: ${file}`);
    }

    return [
        '  <url>',
        `    <loc>${toAbsoluteUrl(url)}</loc>`,
        `    <lastmod>${getLastModified(filePath)}</lastmod>`,
        '  </url>'
    ].join('\n');
}

function generateSitemap() {
    const pages = [...rootPages, ...getLegalPages()];
    const xml = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...pages.map(buildUrlEntry),
        '</urlset>',
        ''
    ].join('\n');

    fs.writeFileSync(OUTPUT_FILE, xml, 'utf8');
    console.log(`Generated sitemap with ${pages.length} URLs at ${OUTPUT_FILE}`);
}

generateSitemap();
