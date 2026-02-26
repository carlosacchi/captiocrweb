import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Caption', href: '/caption-transcriber' },
        { name: 'Live Reader', href: '/live-caption-reader' },
        { name: 'Meetings', href: '/meeting-transcriber' },
        { name: 'Sovereignty', href: '/data-sovereignty' },
        { name: 'Docs', href: '/legal/instructions.html' }
    ];

    const isActiveItem = (item) => {
        if (item.href === '/legal/instructions.html') {
            return location.pathname.startsWith('/legal/');
        }
        return location.pathname === item.href;
    };

    const desktopNavClass = (isActive) =>
        `whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
            isActive
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
        }`;

    const mobileNavClass = (isActive) =>
        `block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200 ${
            isActive
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
        }`;

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold text-blue-700">CaptiOCR</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2 lg:gap-3">
                        {navigation.map((item) => {
                            if (item.name === 'Docs') {
                                return (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={desktopNavClass(isActiveItem(item))}
                                    >
                                        {item.name}
                                    </a>
                                );
                            }
                            return (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={desktopNavClass(isActiveItem(item))}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                        
                        {/* CTA Buttons */}
                        <div className="flex items-center space-x-4">
                            <a
                                href="https://github.com/carlosacchi/captiocr"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-700 hover:text-blue-700 transition-colors duration-200"
                                title="View on GitHub"
                            >
                                <FaGithub className="h-5 w-5" />
                            </a>
                            <a
                                href="https://github.com/carlosacchi/captiocr/releases"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-800 transition-all duration-200 flex items-center"
                            >
                                <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                                Download
                            </a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-blue-700 focus:outline-none focus:text-blue-700"
                        >
                            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                            {navigation.map((item) => {
                                if (item.name === 'Docs') {
                                    return (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={mobileNavClass(isActiveItem(item))}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.name}
                                        </a>
                                    );
                                }
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={mobileNavClass(isActiveItem(item))}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                            <div className="pt-4 border-t border-gray-200 mt-4">
                                <a
                                    href="https://github.com/carlosacchi/captiocr/releases"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-800 transition-all duration-200 flex items-center justify-center mx-3"
                                >
                                    <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                                    Download CaptiOCR
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}