// Release channels for the CaptiOCR desktop app.
// Windows builds are tagged `vX.Y.Z` on the main branch; macOS builds are tagged
// `macos-vX.Y.Z` on the macos branch. Each branch publishes its own version.txt.
export const REPO_URL = 'https://github.com/carlosacchi/captiocr';
export const RELEASES_URL = `${REPO_URL}/releases`;
export const DOWNLOAD_PAGE_URL = '/download';

export const PLATFORMS = {
    windows: {
        label: 'Windows',
        versionUrl: 'https://raw.githubusercontent.com/carlosacchi/captiocr/main/version.txt',
        fallbackUrl: `${RELEASES_URL}/latest`,
        releaseUrl: (version) => `${RELEASES_URL}/tag/v${version}`
    },
    macos: {
        label: 'macOS',
        versionUrl: 'https://raw.githubusercontent.com/carlosacchi/captiocr/macos/version.txt',
        fallbackUrl: `${RELEASES_URL}?q=macos&expanded=true`,
        releaseUrl: (version) => `${RELEASES_URL}/tag/macos-v${version}`
    }
};
