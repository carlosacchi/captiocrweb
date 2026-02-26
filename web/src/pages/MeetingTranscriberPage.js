import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowDownTrayIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { FaGithub } from 'react-icons/fa';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SchemaMarkup from '../components/SEO/SchemaMarkup';

export default function MeetingTranscriberPage() {
    const benefits = [
        'Capture meeting captions in real time without recording audio',
        'Keep sensitive business data on-device with local processing',
        'Document standups, sprint reviews, and stakeholder meetings',
        'Generate clean text output ready for summaries and action items',
        'Work across Teams, Zoom, Google Meet, and other captioned platforms',
        'Build consistent documentation habits across distributed teams'
    ];

    const steps = [
        {
            step: '01',
            title: 'Enable Meeting Captions',
            description: 'Turn on live captions in your meeting platform before the session starts.'
        },
        {
            step: '02',
            title: 'Select Caption Region',
            description: 'Highlight the on-screen area where captions are displayed.'
        },
        {
            step: '03',
            title: 'Capture Live Transcript',
            description: 'CaptiOCR extracts the caption stream into structured text in real time.'
        },
        {
            step: '04',
            title: 'Save and Share Outcomes',
            description: 'Use the transcript for minutes, follow-ups, and task extraction.'
        }
    ];

    const breadcrumbData = {
        items: [
            { name: 'Home', url: 'https://www.captiocr.com' },
            { name: 'Meeting Transcriber', url: 'https://www.captiocr.com/meeting-transcriber' }
        ]
    };

    const howToData = {
        title: 'How to Use CaptiOCR for Meeting Transcription',
        description: 'Capture meeting captions and create privacy-first transcripts in four steps.',
        steps: steps.map((step) => ({
            name: step.title,
            text: step.description
        }))
    };

    return (
        <>
            <Helmet>
                <title>Meeting Transcriber for Agile Teams | CaptiOCR</title>
                <meta
                    name="description"
                    content="Transcribe meeting captions locally and create reliable meeting minutes without cloud recording. CaptiOCR helps agile and business teams document decisions while keeping data on-device."
                />
                <meta property="og:title" content="Meeting Transcriber for Agile Teams | CaptiOCR" />
                <meta
                    property="og:description"
                    content="Capture meeting captions in real time and generate private, local meeting transcripts with CaptiOCR."
                />
                <meta property="og:url" content="https://www.captiocr.com/meeting-transcriber" />
                <meta name="twitter:title" content="Meeting Transcriber for Agile Teams | CaptiOCR" />
                <meta
                    name="twitter:description"
                    content="Privacy-first meeting caption transcription for standups, sprint reviews, and stakeholder meetings."
                />
                <link rel="canonical" href="https://www.captiocr.com/meeting-transcriber" />
            </Helmet>

            <SchemaMarkup type="breadcrumb" data={breadcrumbData} />
            <SchemaMarkup type="howto" data={howToData} />

            <div className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Meeting Transcriber</h1>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                            Private Meeting Minutes from Live Captions
                        </h2>
                        <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed text-blue-100">
                            Capture discussions from agile ceremonies and business meetings without cloud
                            recording tools. CaptiOCR converts visible captions into searchable transcripts while
                            your data stays on your own machine.
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

                <section className="py-20 px-4 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Teams Use It</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Designed for teams that need high-quality meeting documentation without exposing
                                internal conversations to third-party cloud systems.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-blue-700">Core Benefits</h3>
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
                                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Best Fit Scenarios</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                                        <span className="text-blue-800">Daily standups and sprint retrospectives</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                                        <span className="text-blue-800">Stakeholder review and planning sessions</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                                        <span className="text-blue-800">Compliance-oriented internal meetings</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                                        <span className="text-blue-800">Remote team documentation workflows</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Simple process from live captions to shareable meeting documentation.
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
            </div>
        </>
    );
}
