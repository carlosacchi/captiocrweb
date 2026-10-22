import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { DOWNLOAD_PAGE_URL, RELEASES_URL } from '../../config/releases';
import useLatestVersions, { versionLabel } from '../../hooks/useLatestVersions';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const versions = useLatestVersions();

    const footerLinks = {
        resources: [
            { href: "https://github.com/carlosacchi/captiocr", text: "GitHub Repository", external: true },
            { href: "https://github.com/carlosacchi/captiocr/issues", text: "Report Issues", external: true },
            { href: DOWNLOAD_PAGE_URL, text: "Download (Windows & macOS)" },
            { href: RELEASES_URL, text: "All Releases", external: true }
        ],
        useCases: [
            { href: "/caption-transcriber", text: "Caption Transcriber" },
            { href: "/live-caption-reader", text: "Live Caption Reader" },
            { href: "/meeting-transcriber", text: "Meeting Transcriber" },
            { href: "/data-sovereignty", text: "Data Sovereignty" },
            { href: "/legal/transcriber-comparison.html", text: "Transcriber Comparison" }
        ],
        legal: [
            { href: "/legal/privacy.html", text: "Privacy Policy" },
            { href: "/legal/terms.html", text: "Terms of Use" },
            { href: "/legal/legal.html", text: "Legal Information" },
            { href: "/legal/instructions.html", text: "Instructions" }
        ]
    };

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold mb-4 text-blue-400">CaptiOCR</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Real-time caption extraction and transcription technology that enhances productivity 
                            and reduces digital fatigue in online communications.
                        </p>
                        <div className="mt-4">
                            <a
                                href="https://github.com/carlosacchi/captiocr"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                <FaGithub className="h-5 w-5 mr-2" />
                                Star on GitHub
                            </a>
                        </div>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            {footerLinks.resources.map((link) => (
                                <li key={link.text}>
                                    <a
                                        href={link.href}
                                        target={link.external ? "_blank" : undefined}
                                        rel={link.external ? "noreferrer" : undefined}
                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Use Cases Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Use Cases</h4>
                        <ul className="space-y-2">
                            {footerLinks.useCases.map((link) => (
                                <li key={link.text}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Legal & Support</h4>
                        <ul className="space-y-2">
                            {footerLinks.legal.map((link) => (
                                <li key={link.text}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <p className="text-gray-500 text-sm">
                                © {currentYear} CaptiOCR. All rights reserved.
                            </p>
                            <p className="text-gray-600 text-xs mt-1">
                                Privacy-focused text extraction for Microsoft Teams, Zoom, Google Meet, and more.
                            </p>
                        </div>
                        
                        <div className="flex items-center space-x-1">
                            <span className="text-gray-500 text-xs">Windows:</span>
                            <span className="text-gray-400 text-xs font-mono">{versionLabel(versions, 'windows')}</span>
                            <span className="text-gray-600 text-xs px-1">•</span>
                            <span className="text-gray-500 text-xs">macOS:</span>
                            <span className="text-gray-400 text-xs font-mono">{versionLabel(versions, 'macos')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}