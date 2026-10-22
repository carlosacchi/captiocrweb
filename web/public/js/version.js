// Fetches the latest Windows (main branch) and macOS (macos branch) versions from GitHub
// and updates the static pages:
//   [data-current-version] / [data-macos-version]   -> version text
//   [data-windows-download] / [data-macos-download] -> link to the matching release
// Build-time values injected by scripts/inject-build-data.js are kept if the fetch fails.
(function () {
    var RELEASES_URL = 'https://github.com/carlosacchi/captiocr/releases';
    var PLATFORMS = [
        {
            versionUrl: 'https://raw.githubusercontent.com/carlosacchi/captiocr/main/version.txt',
            versionSelector: '[data-current-version]',
            linkSelector: '[data-windows-download]',
            tagPrefix: 'v'
        },
        {
            versionUrl: 'https://raw.githubusercontent.com/carlosacchi/captiocr/macos/version.txt',
            versionSelector: '[data-macos-version]',
            linkSelector: '[data-macos-download]',
            tagPrefix: 'macos-v'
        }
    ];

    function update(platform) {
        fetch(platform.versionUrl)
            .then(function (response) {
                if (!response.ok) throw new Error('HTTP ' + response.status);
                return response.text();
            })
            .then(function (text) {
                // Only the first line holds the version number.
                var version = text.split('\n')[0].trim();
                if (!/^\d+\.\d+\.\d+/.test(version)) throw new Error('Unexpected version: ' + version);
                document.querySelectorAll(platform.versionSelector).forEach(function (element) {
                    element.textContent = version;
                });
                document.querySelectorAll(platform.linkSelector).forEach(function (link) {
                    link.href = RELEASES_URL + '/tag/' + platform.tagPrefix + version;
                });
            })
            .catch(function (error) {
                console.error('Error fetching version:', error);
                document.querySelectorAll(platform.versionSelector).forEach(function (element) {
                    if (!/\d/.test(element.textContent)) element.textContent = 'Check GitHub';
                });
            });
    }

    function run() {
        PLATFORMS.forEach(update);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', run);
    } else {
        run();
    }
})();
