import React from 'react';
import { 
    BoltIcon, 
    LockClosedIcon, 
    ScaleIcon,
    ClockIcon,
    AcademicCapIcon,
    HeartIcon
} from '@heroicons/react/24/solid';
import Card from '../ui/Card';

export default function FeaturesSection() {
    const benefits = [
        {
            icon: AcademicCapIcon,
            title: "Reduce Mental Load",
            description: "Focus completely on conversations while CaptiOCR captures all important text content automatically, eliminating multitasking strain during meetings."
        },
        {
            icon: ClockIcon,
            title: "Save Valuable Time",
            description: "Eliminate manual note-taking and transcription work. Generate comprehensive summaries and action items in seconds, not hours."
        },
        {
            icon: HeartIcon,
            title: "Enhance Engagement",
            description: "Be fully present in discussions knowing that every detail is being captured. Improve relationship building and active participation."
        }
    ];

    const coreFeatures = [
        {
            icon: LockClosedIcon,
            title: "Privacy-First Design",
            description: "Unlike cloud solutions, CaptiOCR operates entirely locally. Your sensitive conversations never leave your device."
        },
        {
            icon: BoltIcon,
            title: "Real-Time Processing",
            description: "Extract text as it appears on screen with lightning-fast OCR technology. Never miss critical information during fast-paced discussions."
        },
        {
            icon: ScaleIcon,
            title: "AI-Ready Output",
            description: "Seamlessly integrate with your favorite AI tools for automatic summarization, action item extraction, and intelligent content processing."
        }
    ];

    return (
        <>
            {/* Benefits Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Reclaim Your Focus & Attention
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Modern teams spend a large portion of their workday in online meetings. CaptiOCR
                            reduces note-taking overhead so people can stay present in discussions and document
                            outcomes with less cognitive load.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <Card.Feature
                                key={index}
                                icon={benefit.icon}
                                title={benefit.title}
                                description={benefit.description}
                                className="border-l-4 border-blue-500"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Features Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Powerful Features for Modern Teams
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Built from the ground up for privacy, performance, and seamless integration 
                            with your existing workflow.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {coreFeatures.map((feature, index) => (
                            <Card.Feature
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                className="bg-white/80 backdrop-blur-sm border border-white/50"
                            />
                        ))}
                    </div>

                    {/* Feature Highlight */}
                    <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-blue-100">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                    Universal Platform Compatibility
                                </h3>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    CaptiOCR works with any application that displays captions on your screen. 
                                    Unlike platform-specific solutions, our universal approach means you can use 
                                    the same tool across all your communication platforms.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {['Microsoft Teams', 'Zoom', 'Google Meet', 'Webex', 'GoToMeeting', 'Discord'].map((platform) => (
                                        <span 
                                            key={platform} 
                                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                                        >
                                            {platform}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-8 text-center">
                                <div className="text-6xl mb-4">🌐</div>
                                <div className="text-2xl font-bold text-blue-900 mb-2">Works Everywhere</div>
                                <div className="text-blue-700">Any platform, any caption system</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}