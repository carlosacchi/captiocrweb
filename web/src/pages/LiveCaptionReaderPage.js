import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowDownTrayIcon, CheckCircleIcon, EyeIcon } from '@heroicons/react/24/solid';
import { FaGithub } from 'react-icons/fa';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function LiveCaptionReaderPage() {
    const features = [
        {
            icon: EyeIcon,
            title: "Real-Time Caption Reading",
            description: "Instantly capture and display live captions from any video conferencing platform as they appear on screen."
        },
        {
            icon: CheckCircleIcon,
            title: "Universal Compatibility",
            description: "Works with Teams, Zoom, Google Meet, Discord, and any application that displays live captions."
        },
        {
            icon: CheckCircleIcon,
            title: "Privacy Protection",
            description: "All processing happens locally on your device. No data is sent to external servers or stored in the cloud."
        }
    ];

    const useCases = [
        {
            title: "Accessibility Enhancement",
            description: "Improve readability of captions with larger fonts, better contrast, and customizable display options for users with visual impairments.",
            icon: "♿"
        },
        {
            title: "Multi-Language Support", 
            description: "Real-time caption reading works with multiple languages, making international meetings more accessible for all participants.",
            icon: "🌍"
        },
        {
            title: "Focus Improvement",
            description: "Read captions in a dedicated window while staying focused on the main video content, reducing eye strain and improving comprehension.",
            icon: "🎯"
        },
        {
            title: "Caption Archiving",
            description: "Automatically save caption streams for later review, analysis, or compliance requirements without recording audio or video.",
            icon: "📚"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Live Caption Reader - Accessibility and Focus Support | CaptiOCR</title>
                <meta
                    name="description"
                    content="Read and capture live captions from meetings and online courses with a privacy-first workflow. CaptiOCR keeps caption processing local and improves accessibility for daily collaboration."
                />
                <meta property="og:title" content="Live Caption Reader - Online Course & Lecture Transcription | CaptiOCR" />
                <meta property="og:description" content="Capture and transcribe online courses, lectures, and webinars in real-time with CaptiOCR's live caption reader" />
                <meta property="og:url" content="https://www.captiocr.com/live-caption-reader" />
                <meta name="twitter:title" content="Live Caption Reader - Online Course Transcription | CaptiOCR" />
                <meta name="twitter:description" content="AI note taker for webinars and online training. Transcribe lectures and courses automatically with CaptiOCR" />
                <link rel="canonical" href="https://www.captiocr.com/live-caption-reader" />
            </Helmet>
            
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Live Caption Reader
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                        Enhanced Real-Time Caption Display & Accessibility
                    </h2>
                    <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed text-green-100">
                        Improve your video meeting experience with enhanced caption reading capabilities. 
                        Perfect for accessibility, multi-language support, and better focus during 
                        important conversations.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button
                            href="https://github.com/carlosacchi/captiocr/releases"
                            target="_blank"
                            rel="noreferrer"
                            size="lg"
                            icon={ArrowDownTrayIcon}
                            className="!bg-white !text-green-900 hover:!bg-green-50 hover:!text-green-800 shadow-2xl font-bold"
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
                            className="border-2 border-white text-white hover:bg-white hover:text-green-900 font-semibold"
                        >
                            View on GitHub
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Advanced Caption Reading Features
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            More than just caption extraction - enhance accessibility and comprehension 
                            with intelligent caption processing.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {features.map((feature, index) => (
                            <Card.Feature
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                className="border-l-4 border-green-500"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-green-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Perfect for Every Scenario
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Live caption reading enhances communication accessibility across 
                            various professional and educational contexts.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {useCases.map((useCase, index) => (
                            <Card
                                key={index}
                                hover
                                className="bg-white/80 backdrop-blur-sm border border-green-100"
                            >
                                <div className="flex items-start">
                                    <div className="text-4xl mr-4 flex-shrink-0">
                                        {useCase.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-3 text-gray-900">
                                            {useCase.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            {useCase.description}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Simple Setup, Powerful Results
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card.Step
                            step="1"
                            title="Enable Captions"
                            description="Turn on live captions in your video platform of choice"
                        />
                        <Card.Step
                            step="2"
                            title="Launch Reader"
                            description="Start CaptiOCR and select the caption display area"
                        />
                        <Card.Step
                            step="3"
                            title="Enhanced Reading"
                            description="Enjoy improved caption visibility and accessibility features"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-green-700 text-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Enhance Your Meeting Accessibility
                    </h2>
                    <p className="text-xl mb-10 text-green-100">
                        Make every meeting more accessible and inclusive with enhanced caption reading.
                    </p>
                    <Button
                        href="https://github.com/carlosacchi/captiocr/releases"
                        target="_blank"
                        rel="noreferrer"
                        size="xl"
                        icon={ArrowDownTrayIcon}
                        className="!bg-white !text-green-900 hover:!bg-green-50 hover:!text-green-800 shadow-2xl font-bold"
                    >
                        Download for Free
                    </Button>
                </div>
            </section>
        </div>
        </>
    );
}