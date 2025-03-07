import React from 'react';
import { FaGithub, FaRobot, FaCopy, FaDesktop, FaLanguage, FaChartLine, FaVideo } from 'react-icons/fa';
import {
    ArrowDownTrayIcon,
    SparklesIcon,
    ChatBubbleBottomCenterTextIcon,
    DocumentTextIcon,
    CheckCircleIcon,
    LockClosedIcon,
    BoltIcon,
    ScaleIcon
} from '@heroicons/react/24/solid';

export default function CaptiOCRLanding() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* Hero Section */}
            <header className="bg-blue-700 text-white py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">CaptiOCR</h1>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">Real-Time Screen Text Extraction</h2>
                    <p className="text-xl md:text-2xl mb-10">
                        Dynamically capture on-screen text for live captions, subtitles, and instant text recognition.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://github.com/CarloSacchi/CaptiOCR"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white text-blue-700 hover:bg-blue-100 px-8 py-4 rounded-full font-semibold text-lg flex items-center transition duration-300 ease-in-out"
                        >
                            <FaGithub className="mr-3 text-2xl" /> View on GitHub
                        </a>
                        <a
                            href="#features"
                            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition duration-300 ease-in-out"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </header>

            {/* Key Benefits Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Unlock New Levels of Productivity</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="text-center p-8 bg-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <LockClosedIcon className="h-12 w-12 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Uncompromising Privacy</h3>
                            <p className="text-gray-700 text-lg">
                                CaptiOCR operates entirely locally. Your data remains on your device, guaranteeing confidentiality and security.
                            </p>
                        </div>
                        <div className="text-center p-8 bg-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <BoltIcon className="h-12 w-12 text-yellow-500" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Blazing Fast Performance</h3>
                            <p className="text-gray-700 text-lg">
                                Real-time text extraction ensures you never miss a word, making it perfect for live captions and immediate insights.
                            </p>
                        </div>
                        <div className="text-center p-8 bg-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <ScaleIcon className="h-12 w-12 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Boost Your Workflow</h3>
                            <p className="text-gray-700 text-lg">
                                Seamlessly integrate with AI tools to automate minutes, summaries, follow-ups, and more, maximizing your efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4 bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Powerful Features, Limitless Potential</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <div className="flex items-start mb-6">
                                <FaDesktop className="text-blue-700 h-10 w-10 mr-4" />
                                <h3 className="text-2xl font-semibold">Real-Time Screen Capture</h3>
                            </div>
                            <p className="text-gray-700 text-lg ml-14">
                                Effortlessly select any area of your screen and CaptiOCR will continuously extract the text, making it ideal for live captions and subtitles.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-start mb-6">
                                <FaCopy className="text-green-600 h-10 w-10 mr-4" />
                                <h3 className="text-2xl font-semibold">Continuous Text Extraction</h3>
                            </div>
                            <p className="text-gray-700 text-lg ml-14">
                                CaptiOCR doesn't just take screenshots; it extracts text *continuously*, providing a dynamic stream of information.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-start mb-6">
                                <FaRobot className="text-purple-600 h-10 w-10 mr-4" />
                                <h3 className="text-2xl font-semibold">AI-Powered Enhancement</h3>
                            </div>
                            <p className="text-gray-700 text-lg ml-14">
                                While CaptiOCR doesn't automatically generate minutes or summaries, it seamlessly integrates with LLMs and AI tools. Feed the extracted text to your favorite AI to unlock powerful analysis, summarization, and more.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-start mb-6">
                                <LockClosedIcon className="text-red-600 h-10 w-10 mr-4" />
                                <h3 className="text-2xl font-semibold">Complete Privacy</h3>
                            </div>
                            <p className="text-gray-700 text-lg ml-14">
                                CaptiOCR is *not* a browser extension or a meeting platform plugin.  It runs locally, ensuring your data never leaves your machine and is never shared with external systems.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Ideal for Meetings, Webinars, and More</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="text-center">
                            <div className="mb-6">
                                <DocumentTextIcon className="h-16 w-16 text-blue-600 mx-auto" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Meeting Minutes</h3>
                            <p className="text-gray-700 text-lg">
                                Capture every detail of your meetings. Use the extracted text with AI tools to generate comprehensive minutes.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="mb-6">
                                <ChatBubbleBottomCenterTextIcon className="h-16 w-16 text-green-600 mx-auto" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Follow-Ups</h3>
                            <p className="text-gray-700 text-lg">
                                Easily create follow-up emails and action items by feeding the captured text to your preferred AI assistant.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="mb-6">
                                <SparklesIcon className="h-16 w-16 text-yellow-500 mx-auto" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Summarization</h3>
                            <p className="text-gray-700 text-lg">
                                Quickly get the gist of lengthy webinars or presentations.  Let AI tools condense the extracted text into concise summaries.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 px-4 bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">How to Use CaptiOCR</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                1
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Enable Live Captions</h3>
                            <p className="text-gray-700">
                                Turn on live captions in your meeting or webinar platform (e.g., Microsoft Teams, Zoom, Google Meet, GoToWebinar).
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                2
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Select Screen Area</h3>
                            <p className="text-gray-700">
                                Use CaptiOCR to select the area of your screen where the live captions are displayed.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                3
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Capture Text</h3>
                            <p className="text-gray-700">
                                CaptiOCR will continuously extract the text displayed in the selected area.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                4
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Leverage AI</h3>
                            <p className="text-gray-700">
                                Use the extracted text file with your favorite LLMs or AI tools (local or cloud-based) for further processing.
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <p className="text-gray-700 text-lg">
                            <strong className="text-blue-700">Supported Platforms:</strong> Any platform that supports live captions, including but not limited to:
                        </p>
                        <ul className="mt-4 inline-flex flex-wrap justify-center gap-x-8 gap-y-4">
                            <li className="text-gray-600 font-medium">Microsoft Teams</li>
                            <li className="text-gray-600 font-medium">Zoom</li>
                            <li className="text-gray-600 font-medium">Google Meet</li>
                            <li className="text-gray-600 font-medium">GoToWebinar</li>
                            <li className="text-gray-600 font-medium">...and many more!</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Call to Action & GitHub */}
            <section className="py-20 px-4 bg-blue-700 text-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">Get Started with CaptiOCR Today!</h2>
                    <p className="text-xl mb-10">
                        Download CaptiOCR, contribute to the project, and join our community on GitHub.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://github.com/CarloSacchi/CaptiOCR/releases"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white text-blue-700 hover:bg-blue-100 px-8 py-4 rounded-full font-semibold text-lg flex items-center transition duration-300 ease-in-out"
                        >
                            <ArrowDownTrayIcon className="h-6 w-6 mr-3" /> Download Now
                        </a>
                        <a
                            href="https://github.com/CarloSacchi/CaptiOCR"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-full font-semibold text-lg flex items-center transition duration-300 ease-in-out"
                        >
                            <FaGithub className="mr-3 text-2xl" /> Contribute on GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-4 text-center">
                <p>© {new Date().getFullYear()} CaptiOCR. All rights reserved.</p>
                <div className="mt-6">
                    <a href="https://github.com/CarloSacchi/CaptiOCR" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 mx-4 transition duration-300 ease-in-out">
                        GitHub
                    </a>
                    {/* Add other links as needed */}
                </div>
            </footer>
        </div>
    );
}