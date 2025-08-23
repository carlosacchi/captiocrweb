import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowDownTrayIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { FaGithub } from 'react-icons/fa';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SchemaMarkup from '../components/SEO/SchemaMarkup';

export default function CaptionTranscriberPage() {
    const benefits = [
        "Automatic live caption extraction from any video platform",
        "Privacy-first approach - all processing happens locally",
        "Compatible with Teams, Zoom, Google Meet, and more",
        "Clean text output ready for AI processing",
        "No recording required - just capture displayed text",
        "Multi-language support for international teams"
    ];

    const steps = [
        {
            step: "01",
            title: "Enable Live Captions",
            description: "Turn on captions in your video conferencing software (Teams, Zoom, Meet, etc.)"
        },
        {
            step: "02",
            title: "Select Caption Area",
            description: "Use CaptiOCR to define the rectangular area where captions appear on your screen"
        },
        {
            step: "03",
            title: "Start Transcription",
            description: "CaptiOCR automatically extracts and saves all caption text in real-time"
        },
        {
            step: "04",
            title: "Process & Share",
            description: "Use the transcript with AI tools for summaries, action items, or documentation"
        }
    ];

    const breadcrumbData = {
        items: [
            { name: 'Home', url: 'https://www.captiocr.com' },
            { name: 'Caption Transcriber', url: 'https://www.captiocr.com/caption-transcriber' }
        ]
    };

    const howToData = {
        title: 'How to Use CaptiOCR Caption Transcriber',
        description: 'Learn how to transcribe live captions from video platforms using CaptiOCR',
        steps: steps.map(s => ({
            name: s.title,
            text: s.description
        }))
    };

    return (
        <>
            <Helmet>
                <title>Caption Transcriber - Meeting Minutes Generator | CaptiOCR</title>
                <meta name="description" content="Automated meeting minutes generator for webinars and online lessons. Transcribe live captions from Zoom, Teams, YouTube automatically. Free lecture transcription software with real-time call transcription." />
                <meta name="keywords" content="caption transcriber, meeting minutes generator, automated meeting minutes, webinar transcription, online lesson transcription, lecture transcription software, real-time call transcription, transcribe online courses, AI note taker for webinars, captioning tool for live online lessons" />
                <meta property="og:title" content="Caption Transcriber - Meeting Minutes Generator | CaptiOCR" />
                <meta property="og:description" content="Transform live captions into automated meeting minutes and webinar transcriptions with CaptiOCR's privacy-focused caption transcriber" />
                <meta property="og:url" content="https://www.captiocr.com/caption-transcriber" />
                <meta name="twitter:title" content="Caption Transcriber - Meeting Minutes Generator | CaptiOCR" />
                <meta name="twitter:description" content="Automatically generate meeting minutes and transcribe webinars from live captions with CaptiOCR" />
            </Helmet>
            
            <SchemaMarkup type="breadcrumb" data={breadcrumbData} />
            <SchemaMarkup type="howto" data={howToData} />
            
            <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Caption Transcriber
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                        Transform Live Captions into Perfect Transcripts
                    </h2>
                    <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed text-blue-100">
                        Stop taking notes during important meetings. CaptiOCR automatically captures 
                        live captions and converts them into clean, searchable transcripts you can use 
                        for documentation, AI processing, or team sharing.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
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
                            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold"
                        >
                            View on GitHub
                        </Button>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Why Choose Caption Transcription?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Caption transcription offers unique advantages over traditional audio recording 
                            and manual note-taking approaches.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-blue-700">Key Benefits</h3>
                            <ul className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Perfect For:</h3>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                                    <span className="text-blue-800">Business meetings and conferences</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                                    <span className="text-blue-800">Educational lectures and seminars</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                                    <span className="text-blue-800">Client presentations and demos</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                                    <span className="text-blue-800">Team standups and retrospectives</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                                    <span className="text-blue-800">Webinars and training sessions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            How Caption Transcription Works
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Simple 4-step process to turn any captioned video into a searchable transcript
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <Card.Step
                                key={index}
                                step={step.step}
                                title={step.title}
                                description={step.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-blue-700 text-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Start Transcribing Captions Today
                    </h2>
                    <p className="text-xl mb-10 text-blue-100">
                        Download CaptiOCR and transform how you capture and process meeting content.
                    </p>
                    <Button
                        href="https://github.com/carlosacchi/captiocr/releases"
                        target="_blank"
                        rel="noreferrer"
                        size="xl"
                        icon={ArrowDownTrayIcon}
                        className="!bg-white !text-blue-900 hover:!bg-blue-50 hover:!text-blue-800 shadow-2xl font-bold"
                    >
                        Download for Free
                    </Button>
                </div>
            </section>
        </div>
        </>
    );
}