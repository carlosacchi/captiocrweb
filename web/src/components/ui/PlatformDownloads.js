import React from 'react';
import { FaApple, FaWindows } from 'react-icons/fa';
import Button from './Button';
import useLatestVersions, { downloadUrl, versionLabel } from '../../hooks/useLatestVersions';

const PLATFORM_BUTTONS = [
    { platform: 'windows', label: 'Download for Windows', icon: FaWindows },
    { platform: 'macos', label: 'Download for macOS', icon: FaApple }
];

// Download buttons for both platforms, styled for the dark blue hero/CTA backgrounds.
export function PlatformDownloadButtons({ size = 'lg' }) {
    const versions = useLatestVersions();

    return PLATFORM_BUTTONS.map(({ platform, label, icon }) => (
        <Button
            key={platform}
            href={downloadUrl(versions, platform)}
            target="_blank"
            rel="noreferrer"
            size={size}
            icon={icon}
            className="!bg-white !text-blue-900 hover:!bg-blue-50 hover:!text-blue-800 shadow-2xl font-bold"
        >
            {label}
        </Button>
    ));
}

// "Latest Version" badge showing the Windows and macOS release lines side by side.
export function LatestVersions({ label = 'Latest Version', className = '' }) {
    const versions = useLatestVersions();

    return (
        <div className={`inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-6 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 ${className}`}>
            <span className="inline-flex items-center">
                <FaWindows className="h-4 w-4 mr-2 text-blue-200" aria-hidden="true" />
                <span className="text-blue-200 text-sm mr-2">{label} (Windows):</span>
                <span className="text-white font-mono text-sm">{versionLabel(versions, 'windows')}</span>
            </span>
            <span className="inline-flex items-center">
                <FaApple className="h-4 w-4 mr-2 text-blue-200" aria-hidden="true" />
                <span className="text-blue-200 text-sm mr-2">{label} (macOS):</span>
                <span className="text-white font-mono text-sm">{versionLabel(versions, 'macos')}</span>
            </span>
        </div>
    );
}
