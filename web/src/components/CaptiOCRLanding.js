// import { useState } from 'react';
// import { motion } from 'framer-motion';

// const CaptiOCRLanding = () => {
//     const [activeFeature, setActiveFeature] = useState(0);

//     const features = [
//         {
//             title: "Real-Time Extraction",
//             description: "Capture text instantly from any area of your screen with continuous updates.",
//             icon: "⚡"
//         },
//         {
//             title: "Easy Selection",
//             description: "Simply drag to select the area you want to extract text from.",
//             icon: "🎯"
//         },
//         {
//             title: "Multiple Languages",
//             description: "Support for over 100 languages with Tesseract OCR integration.",
//             icon: "🌍"
//         }
//     ];

//     const useCases = [
//         {
//             title: "Live Captioning",
//             description: "Perfect for creating real-time captions during presentations or videos"
//         },
//         {
//             title: "Content Creation",
//             description: "Extract text from images or videos for content repurposing"
//         },
//         {
//             title: "Accessibility",
//             description: "Make screen content accessible to screen readers and text-to-speech tools"
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
//             {/* Hero Section */}
//             <section className="container mx-auto px-6 py-16">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     className="text-center"
//                 >
//                     <h1 className="text-5xl font-bold text-blue-900 mb-6">
//                         Transform Screen Text into Actionable Data
//                     </h1>
//                     <p className="text-xl text-gray-600 mb-8">
//                         CaptiOCR brings the power of real-time text extraction to your screen.
//                         Select, capture, and utilize text instantly.
//                     </p>
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
//                     >
//                         Download CaptiOCR
//                     </motion.button>
//                 </motion.div>

//                 {/* Demo Preview */}
//                 <div className="mt-16 flex justify-center">
//                     <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full max-w-3xl h-64 flex items-center justify-center">
//                         <span className="text-gray-500">Demo Preview Animation</span>
//                     </div>
//                 </div>
//             </section>

//             {/* How it Works */}
//             <section className="bg-white py-16">
//                 <div className="container mx-auto px-6">
//                     <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
//                         How CaptiOCR Works
//                     </h2>
//                     <div className="grid md:grid-cols-3 gap-8">
//                         {[1, 2, 3].map((step) => (
//                             <motion.div
//                                 key={step}
//                                 whileHover={{ y: -5 }}
//                                 className="bg-blue-50 p-6 rounded-lg"
//                             >
//                                 <div className="text-2xl font-bold text-blue-600 mb-4">
//                                     Step {step}
//                                 </div>
//                                 <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-32 mb-4" />
//                                 <p className="text-gray-600">
//                                     {step === 1
//                                         ? "Launch CaptiOCR and select your target area"
//                                         : step === 2
//                                             ? "The software continuously monitors the selected region"
//                                             : "Get real-time extracted text ready for use"}
//                                 </p>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Features */}
//             <section className="py-16 bg-blue-50">
//                 <div className="container mx-auto px-6">
//                     <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
//                         Powerful Features
//                     </h2>
//                     <div className="grid md:grid-cols-3 gap-8">
//                         {features.map((feature, index) => (
//                             <motion.div
//                                 key={index}
//                                 whileHover={{ scale: 1.03 }}
//                                 className="bg-white p-6 rounded-lg shadow-lg"
//                                 onHover={() => setActiveFeature(index)}
//                             >
//                                 <div className="text-4xl mb-4">{feature.icon}</div>
//                                 <h3 className="text-xl font-semibold text-blue-900 mb-2">
//                                     {feature.title}
//                                 </h3>
//                                 <p className="text-gray-600">{feature.description}</p>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Use Cases */}
//             <section className="py-16">
//                 <div className="container mx-auto px-6">
//                     <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
//                         Real-World Applications
//                     </h2>
//                     <div className="grid md:grid-cols-3 gap-8">
//                         {useCases.map((useCase, index) => (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: index * 0.2 }}
//                                 className="bg-blue-50 p-6 rounded-lg"
//                             >
//                                 <h3 className="text-xl font-semibold text-blue-900 mb-4">
//                                     {useCase.title}
//                                 </h3>
//                                 <p className="text-gray-600">{useCase.description}</p>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* CTA Section */}
//             <section className="bg-blue-900 text-white py-16">
//                 <div className="container mx-auto px-6 text-center">
//                     <h2 className="text-3xl font-bold mb-6">
//                         Ready to Transform Your Screen Text Experience?
//                     </h2>
//                     <p className="text-lg mb-8 text-blue-100">
//                         Join thousands of users who are already using CaptiOCR to streamline their workflow.
//                     </p>
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
//                     >
//                         Download Now - It's Free!
//                     </motion.button>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="bg-blue-950 text-white py-8">
//                 <div className="container mx-auto px-6 text-center">
//                     <p>© 2025 CaptiOCR. Open Source Software.</p>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default CaptiOCRLanding;

import React from 'react';
import { FaGithub, FaRobot, FaCopy, FaDesktop, FaFileAlt, FaLanguage } from 'react-icons/fa';
import { ArrowDownTrayIcon, SparklesIcon } from '@heroicons/react/24/solid';

export default function CaptiOCRLanding() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* Hero Section */}
            <header className="bg-blue-600 text-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">CaptiOCR: Real-Time Screen Text Extraction</h1>
                    <p className="text-xl md:text-2xl mb-8">Capture, Extract, and Transform On-Screen Text Instantly</p>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="https://github.com/CarloSacchi/CaptiOCR"
                            target="_blank"
                            className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-full font-semibold flex items-center"
                        >
                            <FaGithub className="mr-2" /> View on GitHub
                        </a>
                        <a
                            href="#features"
                            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full font-semibold"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </header>

            {/* Features Section */}
            <section id="features" className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FaDesktop className="text-blue-600" />,
                                title: "Real-Time Capture",
                                description: "Instantly extract text from any screen area with precision and speed."
                            },
                            {
                                icon: <FaRobot className="text-green-600" />,
                                title: "AI-Powered Recognition",
                                description: "Advanced OCR technology ensures accurate text extraction across various formats."
                            },
                            {
                                icon: <FaCopy className="text-purple-600" />,
                                title: "Easy Copying",
                                description: "Seamlessly copy extracted text to your clipboard with a single click."
                            }
                        ].map((feature, index) => (
                            <div key={index} className="text-center p-6 bg-gray-100 rounded-xl hover:shadow-lg transition-all">
                                <div className="text-6xl flex justify-center mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Versatile Use Cases</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FaFileAlt className="text-blue-600" />,
                                title: "Meeting Minutes",
                                description: "Automatically capture and summarize key points during meetings and webinars."
                            },
                            {
                                icon: <FaLanguage className="text-green-600" />,
                                title: "Multilingual Support",
                                description: "Extract text in multiple languages with high accuracy."
                            },
                            {
                                icon: <SparklesIcon className="h-12 w-12 text-purple-600" />,
                                title: "Research & Learning",
                                description: "Quickly extract information from lectures, presentations, and online content."
                            }
                        ].map((useCase, index) => (
                            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                                <div className="text-6xl flex justify-center mb-4">{useCase.icon}</div>
                                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                                <p className="text-gray-600">{useCase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GitHub & Collaboration Section */}
            <section className="py-16 px-4 bg-blue-600 text-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Join the CaptiOCR Community</h2>
                    <p className="text-xl mb-8">Open-source and community-driven. Help us improve and expand CaptiOCR!</p>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="https://github.com/CarloSacchi/CaptiOCR/issues"
                            target="_blank"
                            className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-full font-semibold flex items-center"
                        >
                            <ArrowDownTrayIcon className="h-5 w-5 mr-2" /> Report Issues
                        </a>
                        <a
                            href="https://github.com/CarloSacchi/CaptiOCR/pulls"
                            target="_blank"
                            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center"
                        >
                            <FaGithub className="mr-2" /> Contribute
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 px-4 text-center">
                <p>© 2024 CaptiOCR. Open-Source Text Extraction Tool.</p>
                <div className="mt-4 space-x-4">
                    <a href="https://github.com/CarloSacchi/CaptiOCR" target="_blank" className="hover:text-blue-400">GitHub</a>
                    <a href="#" className="hover:text-blue-400">License</a>
                    <a href="#" className="hover:text-blue-400">Contact</a>
                </div>
            </footer>
        </div>
    );
}