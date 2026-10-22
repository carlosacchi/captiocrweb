// Generates the 1200x630 social preview images (og:image / twitter:image) in
// public/images/og/ by screenshotting an HTML template with headless Chrome.
// Not part of the build: run `npm run generate:og` after adding a page or changing its copy.
// Set CHROME_PATH if Chrome is not installed in the default macOS location.
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const OUTPUT_DIR = path.join(PUBLIC_DIR, 'images', 'og');
const LOGO_PATH = path.join(PUBLIC_DIR, 'images', 'captiocr-logo.png');
const CHROME_PATH = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const THEMES = {
    blue: { from: '#1e3a8a', via: '#1e40af', to: '#1d4ed8', accent: '#93c5fd' },
    slate: { from: '#020617', via: '#0f172a', to: '#1e293b', accent: '#7dd3fc' }
};

const PAGES = [
    {
        slug: 'home',
        eyebrow: 'Free live caption transcriber',
        title: 'Turn live captions into private transcripts',
        subtitle: 'Teams, Zoom, Google Meet and more. Processed 100% on your device.'
    },
    {
        slug: 'download',
        eyebrow: 'Download',
        title: 'CaptiOCR for Windows & macOS',
        subtitle: 'Free and open source. Windows 10/11 and Macs with Apple Silicon.'
    },
    {
        slug: 'caption-transcriber',
        eyebrow: 'Caption transcriber',
        title: 'Convert live captions to editable text',
        subtitle: 'Real-time local OCR for meetings, webinars and online videos.'
    },
    {
        slug: 'live-caption-reader',
        eyebrow: 'Live caption reader',
        title: 'Read and save live subtitles as they appear',
        subtitle: 'For meetings, webinars and online courses. Accessible and private.'
    },
    {
        slug: 'meeting-transcriber',
        eyebrow: 'Meeting transcriber',
        title: 'Meeting minutes from live captions',
        subtitle: 'Document Teams, Zoom and Google Meet calls without cloud transcription.'
    },
    {
        slug: 'data-sovereignty',
        theme: 'slate',
        eyebrow: 'Data sovereignty',
        title: 'Keep meeting data under your control',
        subtitle: 'Local-first transcription: no cloud pipeline, no meeting bot.'
    },
    {
        slug: 'instructions',
        eyebrow: 'Documentation',
        title: 'Install and use CaptiOCR',
        subtitle: 'Step-by-step guide for Windows and macOS.'
    },
    {
        slug: 'transcriber-comparison',
        eyebrow: 'Comparison',
        title: 'CaptiOCR vs cloud transcribers',
        subtitle: 'Screen-based OCR as a privacy-first alternative to audio recording.'
    },
    {
        slug: 'privacy',
        eyebrow: 'Privacy policy',
        title: 'Your captions never leave your device',
        subtitle: 'No account, no telemetry, no remote storage.'
    },
    {
        slug: 'terms',
        eyebrow: 'Terms of use',
        title: 'CaptiOCR Terms of Use',
        subtitle: 'Free and open-source software under the MIT license.'
    },
    {
        slug: 'legal',
        eyebrow: 'Legal information',
        title: 'Legal and compliance information',
        subtitle: "How CaptiOCR's local caption extraction model works."
    }
];

function escapeHtml(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderTemplate({ eyebrow, title, subtitle, theme = 'blue' }, logoDataUri) {
    const colors = THEMES[theme];
    return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>
* { box-sizing: border-box; }
body { margin: 0; width: 1200px; height: 630px; overflow: hidden; color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Arial, sans-serif;
    background: linear-gradient(135deg, ${colors.from} 0%, ${colors.via} 50%, ${colors.to} 100%); position: relative; }
.grid { position: absolute; inset: 0;
    background-image: linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px);
    background-size: 60px 60px; }
.glow { position: absolute; border-radius: 50%; filter: blur(80px); }
.glow.a { width: 420px; height: 420px; right: -120px; top: -140px; background: rgba(96,165,250,.35); }
.glow.b { width: 380px; height: 380px; left: -140px; bottom: -160px; background: rgba(59,130,246,.30); }
.left { position: absolute; left: 64px; top: 56px; width: 620px; }
.brand { display: flex; align-items: center; gap: 16px; }
.tile { width: 64px; height: 64px; border-radius: 16px; background: #fff; display: flex; align-items: center; justify-content: center;
    box-shadow: 0 10px 30px rgba(0,0,0,.25); }
.tile img { width: 72px; height: 72px; }
.brand span { font-size: 34px; font-weight: 800; letter-spacing: -0.01em; }
.eyebrow { margin-top: 52px; font-size: 20px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: ${colors.accent}; }
h1 { text-wrap: balance; margin: 14px 0 0; font-size: 60px; line-height: 1.06; font-weight: 800; letter-spacing: -0.02em; }
p { text-wrap: pretty; margin: 20px 0 0; font-size: 26px; line-height: 1.35; color: #dbeafe; }
.chips { position: absolute; left: 64px; bottom: 52px; display: flex; gap: 12px; }
.chip { font-size: 19px; font-weight: 600; padding: 9px 18px; border-radius: 999px; background: rgba(255,255,255,.12);
    border: 1px solid rgba(255,255,255,.28); }
.url { position: absolute; right: 60px; bottom: 60px; font-size: 22px; font-weight: 600; color: #bfdbfe; }
.visual { position: absolute; right: 60px; top: 64px; width: 400px; }
.window { border-radius: 18px; background: #0b1220; box-shadow: 0 24px 60px rgba(0,0,0,.45); overflow: hidden; border: 1px solid rgba(255,255,255,.12); }
.bar { height: 30px; display: flex; align-items: center; gap: 7px; padding: 0 14px; background: #111a2e; }
.bar i { width: 10px; height: 10px; border-radius: 50%; background: #334155; display: block; }
.video { height: 196px; position: relative; background: linear-gradient(160deg, #1e293b, #334155); }
.person { position: absolute; left: 50%; top: 26px; transform: translateX(-50%); width: 74px; height: 74px; border-radius: 50%; background: #475569; }
.person::after { content: ""; position: absolute; left: -38px; top: 84px; width: 150px; height: 70px; border-radius: 75px 75px 0 0; background: #475569; }
.caption { text-wrap: balance; position: absolute; left: 16px; right: 16px; bottom: 14px; padding: 10px 12px; border-radius: 8px; background: rgba(0,0,0,.78);
    font-size: 17px; line-height: 1.3; color: #fff; outline: 3px dashed #60a5fa; outline-offset: 5px; }
.tag { position: absolute; right: 12px; top: 54px; font-size: 13px; font-weight: 700; padding: 3px 9px; border-radius: 6px; background: #3b82f6; }
.arrow { text-align: center; font-size: 30px; line-height: 44px; color: ${colors.accent}; }
.doc { border-radius: 16px; background: #fff; color: #0f172a; padding: 14px 18px; box-shadow: 0 24px 60px rgba(0,0,0,.35);
    font-family: "SF Mono", Menlo, Consolas, monospace; font-size: 15px; line-height: 1.55; }
.doc b { display: block; font-family: -apple-system, "Segoe UI", Arial, sans-serif; font-size: 14px; color: #1d4ed8; margin-bottom: 4px; }
.doc span { color: #64748b; }
</style></head>
<body>
<div class="grid"></div><div class="glow a"></div><div class="glow b"></div>
<div class="left">
    <div class="brand"><div class="tile"><img src="${logoDataUri}" alt=""></div><span>CaptiOCR</span></div>
    <div class="eyebrow">${escapeHtml(eyebrow)}</div>
    <h1 id="title">${escapeHtml(title)}</h1>
    <p>${escapeHtml(subtitle)}</p>
</div>
<div class="visual">
    <div class="window">
        <div class="bar"><i></i><i></i><i></i></div>
        <div class="video"><div class="person"></div><div class="tag">CaptiOCR</div>
            <div class="caption">Anna: Let's review the release plan for Friday.</div></div>
    </div>
    <div class="arrow">&darr;</div>
    <div class="doc"><b>transcript.txt &middot; saved locally</b>
        <span>10:02</span> Anna: Let's review the release<br>plan for Friday.<br>
        <span>10:03</span> Marco: I'll update the notes.</div>
</div>
<div class="chips"><div class="chip">Windows &middot; macOS</div><div class="chip">100% local</div><div class="chip">Free &amp; open source</div></div>
<div class="url">captiocr.com</div>
<script>
    // Shrink long titles so the text block never runs into the chips row.
    const title = document.getElementById('title');
    const left = document.querySelector('.left');
    let size = 60;
    while (left.getBoundingClientRect().bottom > 520 && size > 40) {
        size -= 2;
        title.style.fontSize = size + 'px';
    }
</script>
</body></html>`;
}

function main() {
    if (!fs.existsSync(CHROME_PATH)) {
        throw new Error(`Chrome not found at ${CHROME_PATH}. Set CHROME_PATH.`);
    }
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    const logoDataUri = `data:image/png;base64,${fs.readFileSync(LOGO_PATH).toString('base64')}`;
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'captiocr-og-'));

    for (const page of PAGES) {
        const htmlPath = path.join(tmpDir, `${page.slug}.html`);
        const outputPath = path.join(OUTPUT_DIR, `${page.slug}.png`);
        fs.writeFileSync(htmlPath, renderTemplate(page, logoDataUri), 'utf8');
        execFileSync(CHROME_PATH, [
            '--headless=new',
            `--user-data-dir=${path.join(tmpDir, 'profile')}`,
            '--no-first-run',
            '--no-default-browser-check',
            '--disable-extensions',
            '--virtual-time-budget=1000',
            '--disable-gpu',
            '--hide-scrollbars',
            '--force-device-scale-factor=1',
            '--window-size=1200,630',
            `--screenshot=${outputPath}`,
            `file://${htmlPath}`
        ], { stdio: 'ignore' });
        console.log(`Generated ${path.relative(PUBLIC_DIR, outputPath)}`);
    }

    fs.rmSync(tmpDir, { recursive: true, force: true });
}

main();
