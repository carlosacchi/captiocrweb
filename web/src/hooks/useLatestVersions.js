import { useEffect, useState } from 'react';
import { PLATFORMS } from '../config/releases';

// One request per platform for the whole page lifetime, shared by every component.
let versionsPromise = null;

function parseVersionFile(text) {
    // version.txt: first line is the version, second line the release date (DD/MM/YYYY).
    const [version = '', date = ''] = text.split('\n').map((line) => line.trim());
    return /^\d+\.\d+\.\d+/.test(version) ? { version, date } : null;
}

function fetchPlatformVersion(platform) {
    return fetch(PLATFORMS[platform].versionUrl)
        .then((response) => (response.ok ? response.text() : Promise.reject(response.status)))
        .then(parseVersionFile)
        .catch((error) => {
            console.error(`Error fetching ${platform} version:`, error);
            return null;
        });
}

function loadVersions() {
    if (!versionsPromise) {
        const platforms = Object.keys(PLATFORMS);
        versionsPromise = Promise.all(platforms.map(fetchPlatformVersion)).then((results) =>
            Object.fromEntries(platforms.map((platform, index) => [platform, results[index]]))
        );
    }
    return versionsPromise;
}

/**
 * Returns `{ loading, windows, macos }` where each platform is
 * `{ version, date, releaseUrl }`, or null if the version could not be fetched.
 */
export default function useLatestVersions() {
    const [state, setState] = useState({ loading: true, windows: null, macos: null });

    useEffect(() => {
        let active = true;
        loadVersions().then((versions) => {
            if (!active) return;
            const withUrls = Object.fromEntries(
                Object.entries(versions).map(([platform, info]) => [
                    platform,
                    info && { ...info, releaseUrl: PLATFORMS[platform].releaseUrl(info.version) }
                ])
            );
            setState({ loading: false, ...withUrls });
        });
        return () => {
            active = false;
        };
    }, []);

    return state;
}

export function versionLabel(state, platform) {
    if (state.loading) return 'Loading...';
    return state[platform]?.version || 'Check GitHub';
}

export function downloadUrl(state, platform) {
    return state[platform]?.releaseUrl || PLATFORMS[platform].fallbackUrl;
}
