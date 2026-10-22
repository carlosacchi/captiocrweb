import React from 'react';
import faqs from '../../data/faq.json';

// The FAQPage structured data for these questions is injected into build/index.html
// by scripts/inject-build-data.js, so it is readable by crawlers that do not run JavaScript.
export default function FAQSection() {
    return (
        <section id="faq" className="py-20 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Platforms, privacy and how CaptiOCR works.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map(({ question, answer }) => (
                        <details
                            key={question}
                            className="group rounded-xl border border-gray-200 bg-gray-50 p-6 open:bg-white open:shadow-md"
                        >
                            <summary className="cursor-pointer list-none text-lg font-semibold text-gray-900 flex justify-between items-center">
                                <h3>{question}</h3>
                                <span className="ml-4 text-blue-700 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">{answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
