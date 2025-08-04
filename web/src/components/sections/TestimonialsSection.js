import React from 'react';
import Card from '../ui/Card';

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Mark T.",
            role: "Project Manager",
            content: "CaptiOCR has transformed how I engage in online discussions. I can finally focus on the conversation instead of frantically taking notes. The transcripts are incredibly useful for creating summaries later.",
            avatar: "M"
        },
        {
            name: "Sofia L.", 
            role: "UX Researcher",
            content: "As someone who attends 15+ video calls weekly, digital exhaustion was real. CaptiOCR lets me capture everything without mental strain. The privacy aspect is crucial for our confidential user research.",
            avatar: "S"
        },
        {
            name: "James K.",
            role: "IT Director", 
            content: "I appreciate that CaptiOCR works locally without sending data to third parties. We've integrated it with our internal AI tools to automate documentation, saving hours of administrative work every week.",
            avatar: "J"
        }
    ];

    return (
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Trusted by Professionals
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        See how teams across industries are using CaptiOCR to improve productivity 
                        and reduce meeting fatigue.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <Card.Testimonial
                            key={index}
                            name={testimonial.name}
                            role={testimonial.role}
                            content={testimonial.content}
                            avatar={testimonial.avatar}
                            className="bg-white/80 backdrop-blur-sm"
                        />
                    ))}
                </div>

                {/* Key Features Highlight */}
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                        <div className="text-2xl mb-2">🔒</div>
                        <div className="text-lg font-bold text-blue-700 mb-2">100% Private</div>
                        <div className="text-gray-600">All processing happens locally</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                        <div className="text-2xl mb-2">⚡</div>
                        <div className="text-lg font-bold text-blue-700 mb-2">Real-Time</div>
                        <div className="text-gray-600">Instant text extraction</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                        <div className="text-2xl mb-2">🆓</div>
                        <div className="text-lg font-bold text-blue-700 mb-2">Open Source</div>
                        <div className="text-gray-600">Free forever, no subscriptions</div>
                    </div>
                </div>
            </div>
        </section>
    );
}