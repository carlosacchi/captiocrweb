import React from 'react';
import Card from '../ui/Card';

export default function HowItWorksSection() {
    const steps = [
        {
            step: "01",
            title: "Enable Captions",
            description: "Turn on live captions in Teams, Zoom, Google Meet, or any platform that supports closed captioning."
        },
        {
            step: "02", 
            title: "Select Area",
            description: "Use CaptiOCR to define a rectangular area around where your captions appear on screen."
        },
        {
            step: "03",
            title: "Start Extraction", 
            description: "CaptiOCR continuously monitors and extracts text from captions, creating a complete transcript automatically."
        },
        {
            step: "04",
            title: "Process Content",
            description: "Use the extracted text with AI tools to generate summaries, extract action items, or create follow-ups."
        }
    ];

    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Get started with CaptiOCR in minutes. Our simple 4-step process works 
                        with any platform that displays captions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {steps.map((step, index) => (
                        <Card.Step
                            key={index}
                            step={step.step}
                            title={step.title}
                            description={step.description}
                        />
                    ))}
                </div>

                {/* Platform Compatibility */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Universal Platform Support
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Compatible with all major platforms: Microsoft Teams, Zoom, Google Meet, 
                        Webex, GoToMeeting, and any software that displays captions on screen.
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
                        {/* Platform logos would go here - using text for now */}
                        <div className="px-4 py-2 bg-white rounded-lg font-semibold text-gray-700">Teams</div>
                        <div className="px-4 py-2 bg-white rounded-lg font-semibold text-gray-700">Zoom</div>
                        <div className="px-4 py-2 bg-white rounded-lg font-semibold text-gray-700">Meet</div>
                        <div className="px-4 py-2 bg-white rounded-lg font-semibold text-gray-700">Webex</div>
                        <div className="px-4 py-2 bg-white rounded-lg font-semibold text-gray-700">Discord</div>
                        <div className="px-4 py-2 bg-white rounded-lg font-semibold text-gray-700">+ More</div>
                    </div>
                </div>
            </div>
        </section>
    );
}