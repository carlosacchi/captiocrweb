import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowDownTrayIcon, ShieldCheckIcon, ServerIcon } from '@heroicons/react/24/solid';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function DataSovereigntyPage() {
    const pillars = [
        {
            icon: ShieldCheckIcon,
            title: 'Local Processing by Design',
            description:
                'CaptiOCR extracts on-screen captions directly on your device. Your meeting text is not routed through third-party transcription APIs.'
        },
        {
            icon: ServerIcon,
            title: 'No Mandatory Cloud Backend',
            description:
                'You can run your transcription workflow without depending on external cloud infrastructure for core capture and processing.'
        },
        {
            icon: ShieldCheckIcon,
            title: 'Operational Control',
            description:
                'Transcripts are stored where your team decides, supporting internal governance, retention policies, and compliance controls.'
        }
    ];

    return (
        <>
            <Helmet>
                <title>Meeting Transcription Data Sovereignty | CaptiOCR</title>
                <meta
                    name="description"
                    content="Understand how local caption transcription supports data sovereignty. CaptiOCR keeps meeting text processing on your own device instead of forcing cloud pipelines."
                />
                <meta property="og:title" content="Meeting Transcription Data Sovereignty | CaptiOCR" />
                <meta
                    property="og:description"
                    content="Keep transcription workflows local, reduce cloud exposure, and strengthen data sovereignty with CaptiOCR."
                />
                <meta property="og:url" content="https://www.captiocr.com/data-sovereignty" />
                <link rel="canonical" href="https://www.captiocr.com/data-sovereignty" />
            </Helmet>

            <div className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Meeting Transcription Data Sovereignty
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                            Local-First Control for Sensitive Meeting Data
                        </h2>
                        <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed text-slate-100">
                            Most transcription tools rely on cloud processing, which can move sensitive meeting
                            data outside your direct control. CaptiOCR follows a local-first model so teams can
                            document meetings while preserving operational sovereignty.
                        </p>

                        <div className="flex justify-center">
                            <Button
                                href="https://github.com/carlosacchi/captiocr/releases"
                                target="_blank"
                                rel="noreferrer"
                                size="lg"
                                icon={ArrowDownTrayIcon}
                                className="!bg-white !text-slate-900 hover:!bg-slate-100 hover:!text-slate-800 shadow-2xl font-bold"
                            >
                                Download CaptiOCR
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-14">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Sovereignty Matters</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                For legal, security, and governance-sensitive environments, where meeting data is
                                processed can be as important as transcription quality.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {pillars.map((pillar, index) => (
                                <Card.Feature
                                    key={index}
                                    icon={pillar.icon}
                                    title={pillar.title}
                                    description={pillar.description}
                                    className="border-l-4 border-slate-600"
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 bg-gray-100">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                            Practical Governance Benefits
                        </h2>
                        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200">
                            <ul className="space-y-4 text-gray-700 text-lg">
                                <li>Reduce dependency on vendor cloud storage for meeting content.</li>
                                <li>Align transcript handling with internal data residency requirements.</li>
                                <li>Support security reviews with transparent, open-source behavior.</li>
                                <li>Limit exposure of confidential project and client conversations.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
