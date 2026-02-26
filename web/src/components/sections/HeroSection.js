import React from 'react';
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/24/solid';
import { FaGithub } from 'react-icons/fa';
import Button from '../ui/Button';

export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-medium">
                            Privacy-focused • Local processing • Open source
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                        CaptiOCR
                    </h1>
                    
                    <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-blue-100">
                        Real-Time Caption Extraction & Transcription
                    </h2>
                    
                    <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed text-blue-100">
                        Automatically capture and process live captions from Teams, Zoom, and other platforms. 
                        <span className="text-white font-semibold"> Enhance productivity</span> and 
                        <span className="text-white font-semibold"> reduce digital fatigue</span> with 
                        privacy-focused text extraction.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                        <Button
                            href="https://github.com/carlosacchi/captiocr/releases"
                            target="_blank"
                            rel="noreferrer"
                            size="lg"
                            icon={ArrowDownTrayIcon}
                            className="!bg-white !text-blue-900 hover:!bg-blue-50 hover:!text-blue-800 shadow-2xl font-bold"
                        >
                            Download CaptiOCR
                        </Button>
                        
                        <Button
                            href="https://github.com/carlosacchi/captiocr"
                            target="_blank"
                            rel="noreferrer"
                            variant="outline"
                            size="lg"
                            icon={FaGithub}
                            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 backdrop-blur-sm font-semibold"
                        >
                            View on GitHub
                        </Button>
                    </div>

                    {/* Version Info */}
                    <div className="inline-flex items-center px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                        <span className="text-blue-200 text-sm mr-2">Current Version:</span>
                        <span data-current-version className="text-white font-mono text-sm">
                            Loading...
                        </span>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">100%</div>
                        <div className="text-blue-200">Local Processing</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">Universal</div>
                        <div className="text-blue-200">Platform Support</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">Open</div>
                        <div className="text-blue-200">Source & Free</div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        </section>
    );
}