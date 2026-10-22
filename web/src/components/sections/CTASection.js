import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Button from '../ui/Button';
import { LatestVersions, PlatformDownloadButtons } from '../ui/PlatformDownloads';

export default function CTASection() {
    return (
        <section className="py-20 px-4 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent" />
            
            <div className="relative max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Ready to Transform Your Meetings?
                </h2>
                <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                    Free and open source for Windows and macOS. Capture live captions locally,
                    improve your productivity and reduce digital fatigue with CaptiOCR.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-12">
                    <PlatformDownloadButtons size="lg" />

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

                {/* Feature Highlights */}
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <div className="text-2xl mb-2">🔒</div>
                        <h3 className="font-semibold mb-2">100% Private</h3>
                        <p className="text-blue-100 text-sm">All processing happens locally on your device</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <div className="text-2xl mb-2">⚡</div>
                        <h3 className="font-semibold mb-2">Lightning Fast</h3>
                        <p className="text-blue-100 text-sm">Real-time text extraction with instant results</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <div className="text-2xl mb-2">🆓</div>
                        <h3 className="font-semibold mb-2">Always Free</h3>
                        <p className="text-blue-100 text-sm">Open source and free forever, no subscriptions</p>
                    </div>
                </div>

                {/* Version Info */}
                <LatestVersions label="Latest Version" className="mt-12" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        </section>
    );
}