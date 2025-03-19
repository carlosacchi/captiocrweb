import React from 'react';
import { FaGithub, FaRobot, FaCopy, FaDesktop, FaLanguage, FaChartLine, FaVideo, FaBrain, FaHeadset } from 'react-icons/fa';
import {
    ArrowDownTrayIcon,
    SparklesIcon,
    ChatBubbleBottomCenterTextIcon,
    DocumentTextIcon,
    CheckCircleIcon,
    LockClosedIcon,
    BoltIcon,
    ScaleIcon,
    ClockIcon,
    BellAlertIcon,
    ChartBarIcon,
    MicrophoneIcon
} from '@heroicons/react/24/solid';

export default function CaptiOCRLanding() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* Hero Section - Simplified language */}
            <header className="bg-blue-700 text-white py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">CaptiOCR</h1>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">Real-Time Live Captions Text Extraction Tool</h2>
                    <p className="text-xl md:text-2xl mb-10">
                        Automatically extract and save on-screen Live catptions text from Teams, Zoom, and other platforms to enhance productivity and reduce digital strain.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://github.com/carlosacchi/captiocr"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white text-blue-700 hover:bg-blue-100 px-8 py-4 rounded-full font-semibold text-lg flex items-center transition duration-300 ease-in-out"
                        >
                            <FaGithub className="mr-3 text-2xl" /> View on GitHub
                        </a>
                        <a
                            href="#more"
                            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition duration-300 ease-in-out"
                        >
                            Learn More
                        </a>
                    </div>
                    <div className="mt-6 text-white/80 font-medium">
                        <p>Current Version: <span id="current-version">Loading...</span></p>
                    </div>
                </div>
            </header>

            {/* Benefits Section - Renamed from "Meeting Fatigue" to be more positive */}
            <section id="more" className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-6">Reclaim Your Focus & Attention</h2>
                    <p className="text-xl text-center text-gray-700 mb-12 max-w-4xl mx-auto">
                        The average professional spends <span className="font-bold">21.5 hours per week</span> in online conversations,
                        with over <span className="font-bold">71%</span> reporting digital exhaustion. CaptiOCR helps you preserve
                        your mental energy and enhance productivity.
                    </p>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="text-center p-8 bg-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <FaBrain className="h-12 w-12 text-red-500" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Lighten Mental Workload</h3>
                            <p className="text-gray-700 text-lg">
                                Let CaptiOCR capture text content while you focus on the conversation, eliminating the strain of multitasking during important discussions.
                            </p>
                        </div>
                        <div className="text-center p-8 bg-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <ClockIcon className="h-12 w-12 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Save Valuable Time</h3>
                            <p className="text-gray-700 text-lg">
                                Eliminate manual note-taking and transcribing. CaptiOCR automatically captures text that can be quickly processed into comprehensive summaries.
                            </p>
                        </div>
                        <div className="text-center p-8 bg-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <FaHeadset className="h-12 w-12 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Enhance Active Participation</h3>
                            <p className="text-gray-700 text-lg">
                                Be fully present in your conversations knowing that CaptiOCR is capturing important information, allowing for more meaningful engagement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMPROVED SECTION: Combined Comparison with better structure */}
            <section className="py-16 px-4 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Why Text Extraction Outperforms Audio Solutions</h2>

                    {/* Visual comparison chart */}
                    <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
                        <h3 className="text-2xl font-semibold mb-6 text-center">Complete Solution Comparison</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-blue-100">
                                        <th className="p-3 text-left border border-gray-300">Feature</th>
                                        <th className="p-3 text-center border border-gray-300">CaptiOCR</th>
                                        <th className="p-3 text-center border border-gray-300">Speech-to-Text</th>
                                        <th className="p-3 text-center border border-gray-300">Manual Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-3 border border-gray-300">Speaker Identification</td>
                                        <td className="p-3 text-center border border-gray-300 text-green-600">✓ Built-in</td>
                                        <td className="p-3 text-center border border-gray-300 text-red-600">✗ Limited/Manual</td>
                                        <td className="p-3 text-center border border-gray-300 text-yellow-600">⚠ Requires Effort</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-3 border border-gray-300">Metadata Capture</td>
                                        <td className="p-3 text-center border border-gray-300 text-green-600">✓ Full</td>
                                        <td className="p-3 text-center border border-gray-300 text-red-600">✗ None</td>
                                        <td className="p-3 text-center border border-gray-300 text-yellow-600">⚠ Partial</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-gray-300">Works Offline</td>
                                        <td className="p-3 text-center border border-gray-300 text-green-600">✓ Yes</td>
                                        <td className="p-3 text-center border border-gray-300 text-red-600">✗ Usually No</td>
                                        <td className="p-3 text-center border border-gray-300 text-green-600">✓ Yes</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-3 border border-gray-300">Data Privacy</td>
                                        <td className="p-3 text-center border border-gray-300 text-green-600">✓ 100% Local</td>
                                        <td className="p-3 text-center border border-gray-300 text-red-600">✗ Often Cloud-Based</td>
                                        <td className="p-3 text-center border border-gray-300 text-green-600">✓ Complete</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-gray-300">Platform Compatibility</td>
                                        <td className="p-3 text-center border border-gray-300 text-green-600">✓ Universal</td>
                                        <td className="p-3 text-center border border-gray-300 text-red-600">✗ Platform-Specific</td>
                                        <td className="p-3 text-center border border-gray-300 text-green-600">✓ Universal</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-3 border border-gray-300">Allows Full Attention</td>
                                        <td className="p-3 text-center border border-gray-300 text-green-600">✓ Yes</td>
                                        <td className="p-3 text-center border border-gray-300 text-green-600">✓ Yes</td>
                                        <td className="p-3 text-center border border-gray-300 text-red-600">✗ No</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-gray-300">Audio Quality Dependency</td>
                                        <td className="p-3 text-center border border-gray-300 text-green-600">✓ Not Affected</td>
                                        <td className="p-3 text-center border border-gray-300 text-red-600">✗ Highly Dependent</td>
                                        <td className="p-3 text-center border border-gray-300 text-green-600">✓ Not Affected</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-3 border border-gray-300">AI Integration Flexibility</td>
                                        <td className="p-3 text-center border border-gray-300 text-green-600">✓ Use Any AI</td>
                                        <td className="p-3 text-center border border-gray-300 text-red-600">✗ Proprietary Only</td>
                                        <td className="p-3 text-center border border-gray-300 text-red-600">✗ Manual Process</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Key differences explanation - properly centered title and responsive columns */}
                    <h3 className="text-2xl font-semibold mb-10 text-blue-700 text-center w-full">Key Advantages of CaptiOCR</h3>

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-16">
                        <div>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <CheckCircleIcon className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
                                    <p><strong>Captures Speaker Information:</strong> CaptiOCR preserves speaker names and roles exactly as they appear in captions, while audio-based solutions struggle with speaker identification.</p>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircleIcon className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
                                    <p><strong>Retains Visual Context:</strong> Timestamps, chat references, and other on-screen elements are captured by CaptiOCR but lost in audio-only transcription.</p>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircleIcon className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
                                    <p><strong>Works Across Platforms:</strong> Functions with any application showing captions, not limited to specific platform APIs like many audio transcription tools.</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <CheckCircleIcon className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
                                    <p><strong>Immune to Audio Challenges:</strong> Background noise, poor microphones, and accents don't affect CaptiOCR's accuracy, unlike speech recognition technology.</p>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircleIcon className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
                                    <p><strong>Complete Privacy:</strong> All processing happens locally on your device, unlike cloud-based services that send audio to external servers.</p>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircleIcon className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
                                    <p><strong>No Recording Concerns:</strong> Since CaptiOCR only captures displayed text, it doesn't create the consent and legal issues associated with audio recording in many jurisdictions.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits Section - Refreshed language */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Core Advantages of CaptiOCR</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="text-center p-8 bg-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <LockClosedIcon className="h-12 w-12 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Privacy-First Design</h3>
                            <p className="text-gray-700 text-lg">
                                Unlike cloud solutions, CaptiOCR operates entirely locally. Your conversation data remains on your device, guaranteeing confidentiality and security.
                            </p>
                        </div>
                        <div className="text-center p-8 bg-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <BoltIcon className="h-12 w-12 text-yellow-500" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Instant Text Capture</h3>
                            <p className="text-gray-700 text-lg">
                                Extract on-screen text as it appears, ensuring you never miss key information even during fast-paced discussions or important presentations.
                            </p>
                        </div>
                        <div className="text-center p-8 bg-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <ScaleIcon className="h-12 w-12 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">AI-Ready Output</h3>
                            <p className="text-gray-700 text-lg">
                                Seamlessly feed captured text to AI tools for automatic summarization, action item extraction, and follow-up creation, maximizing your efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section - Updated titles */}
            <section id="features" className="py-20 px-4 bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">How CaptiOCR Simplifies Your Workflow</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <div className="flex flex-col items-center justify-center text-center mb-6">
                                <FaDesktop className="text-blue-700 h-10 w-10 mr-4" />
                                <h3 className="text-2xl text-center font-semibold">Seamless Caption Extraction</h3>
                            </div>
                            <p className="text-gray-700 text-lg ml-14">
                                Effortlessly select any caption area on your screen and CaptiOCR will continuously extract and save the text, creating a complete record without manual effort.
                            </p>
                        </div>
                        <div>
                            <div className="flex flex-col items-center justify-center text-center mb-6">
                                <FaCopy className="text-green-600 h-10 w-10 mr-4" />
                                <h3 className="text-2xl text-center font-semibold">Smart Text Processing</h3>
                            </div>
                            <p className="text-gray-700 text-lg ml-14">
                                CaptiOCR intelligently filters duplicate content from captions, producing clean, readable transcripts that are ready for review or AI processing.
                            </p>
                        </div>
                        <div>
                            <div className="flex flex-col items-center justify-center text-center mb-6">
                                <FaRobot className="text-purple-600 h-10 w-10 mr-4" />
                                <h3 className="text-2xl text-center font-semibold">Information Management</h3>
                            </div>
                            <p className="text-gray-700 text-lg ml-14">
                                Feed captured text to your favorite AI tools to automatically generate summaries, extract action items, and create concise reports, dramatically reducing information overload.
                            </p>
                        </div>
                        <div>
                            <div className="flex flex-col items-center justify-center text-center mb-6">
                                <LockClosedIcon className="text-red-600 h-10 w-10 mr-4" />
                                <h3 className="text-2xl text-center font-semibold">Total Data Control</h3>
                            </div>
                            <p className="text-gray-700 text-lg ml-14">
                                Unlike browser extensions or cloud services, CaptiOCR operates entirely on your local machine, ensuring sensitive content never leaves your device without your explicit consent.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section - Updated language */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Practical Applications</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="text-center">
                            <div className="mb-6">
                                <DocumentTextIcon className="h-16 w-16 text-blue-600 mx-auto" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Automated Documentation</h3>
                            <p className="text-gray-700 text-lg">
                                Stop struggling to take notes while listening. CaptiOCR captures text that can be turned into comprehensive documentation with your preferred AI tool.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="mb-6">
                                <ChatBubbleBottomCenterTextIcon className="h-16 w-16 text-green-600 mx-auto" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Quick Action Planning</h3>
                            <p className="text-gray-700 text-lg">
                                Easily identify and extract action items from captured text to create follow-up emails and task lists immediately after your conversation ends.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="mb-6">
                                <SparklesIcon className="h-16 w-16 text-yellow-500 mx-auto" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Content Summarization</h3>
                            <p className="text-gray-700 text-lg">
                                Transform lengthy transcripts into concise summaries, helping your team quickly extract key insights without reviewing full texts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section - Updated language */}
            <section className="py-20 px-4 bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Quick Start Guide</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                1
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Enable Captions</h3>
                            <p className="text-gray-700">
                                Turn on live captions in Teams, Zoom, Google Meet, or any other platform that supports closed captioning.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                2
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Select Screen Area</h3>
                            <p className="text-gray-700">
                                Use CaptiOCR to define a rectangular area around where your captions appear on screen.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                3
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Start Extraction</h3>
                            <p className="text-gray-700">
                                CaptiOCR continuously monitors and extracts text from the captions, creating a complete transcript automatically.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                4
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Process Content</h3>
                            <p className="text-gray-700">
                                Use the extracted text with your preferred AI tools to generate summaries, extract action items, or create follow-ups.
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <p className="text-gray-700 text-lg">
                            <strong className="text-blue-700">Compatible with all major platforms:</strong> Microsoft Teams, Zoom, Google Meet, Webex, GoToMeeting, and any software that displays captions on screen.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:gap-8 max-w-5xl mx-auto">
                        <div className="bg-gray-100 rounded-xl p-6 shadow-md">
                            <h3 className="text-xl font-semibold mb-3">Is CaptiOCR secure for sensitive conversations?</h3>
                            <p className="text-gray-700">Yes, CaptiOCR processes everything locally on your device. No content is ever sent to the cloud or external servers, making it suitable for confidential discussions.</p>
                        </div>
                        <div className="bg-gray-100 rounded-xl p-6 shadow-md">
                            <h3 className="text-xl font-semibold mb-3">How accurate is the text extraction?</h3>
                            <p className="text-gray-700">CaptiOCR uses industry-standard OCR technology to achieve high accuracy. For best results, use a clear font, good contrast, and appropriate sizing in your captions.</p>
                        </div>
                        <div className="bg-gray-100 rounded-xl p-6 shadow-md">
                            <h3 className="text-xl font-semibold mb-3">Does CaptiOCR work with all platforms?</h3>
                            <p className="text-gray-700">Yes, CaptiOCR works with any platform that displays captions on your screen, including Teams, Zoom, Google Meet, Webex, and others. It's a universal solution independent of specific platform APIs.</p>
                        </div>
                        <div className="bg-gray-100 rounded-xl p-6 shadow-md">
                            <h3 className="text-xl font-semibold mb-3">How does CaptiOCR improve focus and attention?</h3>
                            <p className="text-gray-700">By automating the capture of text, CaptiOCR reduces the cognitive load of trying to listen attentively while taking notes. This allows you to be more present and engaged during the conversation, reducing mental exhaustion.</p>
                        </div>
                        <div className="bg-gray-100 rounded-xl p-6 shadow-md">
                            <h3 className="text-xl font-semibold mb-3">Can I customize the language settings for different sessions?</h3>
                            <p className="text-gray-700">Yes, CaptiOCR supports multiple languages including English and Italian, with more coming soon. You can save different profiles with language preferences for various conversation types.</p>
                        </div>
                        <div className="bg-gray-100 rounded-xl p-6 shadow-md">
                            <h3 className="text-xl font-semibold mb-3">How do I optimize CaptiOCR for the best results?</h3>
                            <p className="text-gray-700">For optimal performance, select a narrow rectangular area that focuses precisely on the caption area, choose the correct language setting, and ensure captions have good contrast with their background.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">What Users Are Saying</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    M
                                </div>
                                <div className="ml-4">
                                    <h3 className="font-semibold">Mark T.</h3>
                                    <p className="text-gray-600">Project Manager</p>
                                </div>
                            </div>
                            <p className="text-gray-700">
                                "CaptiOCR has transformed how I engage in online discussions. I can finally focus on the conversation instead of frantically taking notes. The transcripts are incredibly useful for creating summaries later."
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    S
                                </div>
                                <div className="ml-4">
                                    <h3 className="font-semibold">Sofia L.</h3>
                                    <p className="text-gray-600">UX Researcher</p>
                                </div>
                            </div>
                            <p className="text-gray-700">
                                "As someone who attends 15+ video calls weekly, digital exhaustion was real. CaptiOCR lets me capture everything without mental strain. The privacy aspect is crucial for our confidential user research."
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    J
                                </div>
                                <div className="ml-4">
                                    <h3 className="font-semibold">James K.</h3>
                                    <p className="text-gray-600">IT Director</p>
                                </div>
                            </div>
                            <p className="text-gray-700">
                                "I appreciate that CaptiOCR works locally without sending data to third parties. We've integrated it with our internal AI tools to automate documentation, saving hours of administrative work every week."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action & GitHub - Updated language */}
            <section className="py-20 px-4 bg-blue-700 text-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">Start Capturing Text Today</h2>
                    <p className="text-xl mb-10">
                        Download CaptiOCR, streamline your digital communication, and unlock greater productivity.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://github.com/carlosacchi/captiocr/releases"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white text-blue-700 hover:bg-blue-100 px-8 py-4 rounded-full font-semibold text-lg flex items-center transition duration-300 ease-in-out"
                        >
                            <ArrowDownTrayIcon className="h-6 w-6 mr-3" /> Download Now
                        </a>
                        <a
                            href="https://github.com/carlosacchi/captiocr"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-full font-semibold text-lg flex items-center transition duration-300 ease-in-out"
                        >
                            <FaGithub className="mr-3 text-2xl" /> Contribute on GitHub
                        </a>
                    </div>
                    <div className="mt-6 text-white/80 font-small">
                        <p>Current Version: <span id="current-version">Loading...</span></p>
                    </div>
                </div>
            </section>

            {/* Footer with SEO-rich links */}
            <footer className="bg-gray-900 text-white py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">CaptiOCR</h3>
                            <p className="text-gray-400">
                                Enhance productivity with real-time caption extraction and text processing for online communications.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><a href="https://github.com/carlosacchi/captiocr" target="_blank" className="text-gray-400 hover:text-white transition">GitHub Repository</a></li>
                                <li><a href="https://github.com/carlosacchi/captiocr/issues" target="_blank" className="text-gray-400 hover:text-white transition">Report Issues</a></li>
                                <li><a href="https://github.com/carlosacchi/captiocr/releases" target="_blank" className="text-gray-400 hover:text-white transition">Download Latest Version</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Use Cases</h3>
                            <ul className="space-y-2">
                                <li><a href="caption-transcriber.html" className="text-gray-400 hover:text-white transition">Caption Transcriber</a></li>
                                <li><a href="#features" className="text-gray-400 hover:text-white transition">Remote Work Optimization</a></li>
                                <li><a href="#features" className="text-gray-400 hover:text-white transition">Digital Communication</a></li>
                                <li><a href="#features" className="text-gray-400 hover:text-white transition">Text Extraction</a></li>
                                <li><a href="#features" className="text-gray-400 hover:text-white transition">Content Summarization</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center">
                        <p>© {new Date().getFullYear()} CaptiOCR. All rights reserved.</p>
                        <p className="text-gray-500 mt-2">
                            Real-time text extraction technology that helps you capture and process on-screen text automatically.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center space-x-2 sm:space-x-6 gap-y-2">
                            {[
                                { href: "https://github.com/carlosacchi/captiocr", text: "GitHub" },
                                { href: "legal/privacy.html", text: "Privacy Policy" },
                                { href: "legal/terms.html", text: "Terms of Use" },
                                { href: "legal/legal.html", text: "Legal Information" },
                                { href: "legal/instructions.html", text: "Instructions" },
                                { href: "legal/transcriber-comparison.html", text: "Transcribers Comparison" }
                            ].map(({ href, text }) => (
                                <a
                                    key={text}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-400 hover:text-blue-500 transition duration-300 ease-in-out text-sm sm:text-base"
                                >
                                    {text}
                                </a>
                            ))}
                        </div>
                        <p className="text-gray-600 text-sm mt-8">
                            Supported platforms: Microsoft Teams, Zoom, Google Meet, Webex, GoToMeeting, and more.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}