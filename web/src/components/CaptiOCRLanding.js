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
            {/* Hero Section */}
            <header className="bg-blue-700 text-white py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">CaptiOCR</h1>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">Real-Time Text Extraction Tool</h2>
                    <p className="text-xl md:text-2xl mb-10">
                        Automatically extract and save meeting captions from Teams, Zoom, and other platforms to reduce meeting stress and boost productivity.
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
                            href="#more"
                            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition duration-300 ease-in-out"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </header>

            {/* Meeting Fatigue Section */}
            <section id="more" className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-6">Overcome Meeting Fatigue</h2>
                    <p className="text-xl text-center text-gray-700 mb-12 max-w-4xl mx-auto">
                        The average professional spends <span className="font-bold">21.5 hours per week</span> in meetings,
                        with over <span className="font-bold">71%</span> reporting meeting fatigue. CaptiOCR helps you reclaim
                        your focus and productivity.
                    </p>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="text-center p-8 bg-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <FaBrain className="h-12 w-12 text-red-500" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Reduce Cognitive Load</h3>
                            <p className="text-gray-700 text-lg">
                                Let CaptiOCR capture meeting text while you focus on the conversation, reducing the mental strain of simultaneous listening and note-taking.
                            </p>
                        </div>
                        <div className="text-center p-8 bg-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <ClockIcon className="h-12 w-12 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Save Valuable Time</h3>
                            <p className="text-gray-700 text-lg">
                                Eliminate manual note-taking and transcribing. CaptiOCR automatically captures text that can be quickly processed into meeting summaries.
                            </p>
                        </div>
                        <div className="text-center p-8 bg-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <FaHeadset className="h-12 w-12 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Enhance Meeting Presence</h3>
                            <p className="text-gray-700 text-lg">
                                Be fully present in your meetings knowing that CaptiOCR is capturing important information, allowing for more meaningful participation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: CaptiOCR vs Speech-to-Text Comparison */}
            <section className="py-16 px-4 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">CaptiOCR vs. Speech-to-Text: What's Different?</h2>
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-blue-700">Why Text Extraction Beats Audio Transcription</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <CheckCircleIcon className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
                                    <p><strong>Captures Speaker Information:</strong> CaptiOCR captures speaker names and roles exactly as they appear in captions, while audio-based STT usually struggles to identify who's speaking.</p>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircleIcon className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
                                    <p><strong>Preserves Metadata:</strong> Timestamps, chat references, and other visual elements are captured by CaptiOCR but lost in audio-only transcription.</p>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircleIcon className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
                                    <p><strong>Platform Independent:</strong> Works with any application showing captions, not limited to specific platform APIs like many STT tools.</p>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircleIcon className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
                                    <p><strong>Immune to Audio Issues:</strong> Background noise, poor microphones, and accents don't affect CaptiOCR's accuracy, unlike audio STT solutions.</p>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircleIcon className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
                                    <p><strong>Complete Privacy:</strong> All processing happens locally on your device, unlike cloud-based STT services that send audio to external servers.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-semibold mb-6 text-center">Comparison at a Glance</h3>
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-blue-100">
                                        <th className="p-3 text-left border border-gray-300">Feature</th>
                                        <th className="p-3 text-center border border-gray-300">CaptiOCR</th>
                                        <th className="p-3 text-center border border-gray-300">Audio STT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-3 border border-gray-300">Speaker Identification</td>
                                        <td className="p-3 text-center border border-gray-300 text-green-600">✓ Built-in</td>
                                        <td className="p-3 text-center border border-gray-300 text-red-600">✗ Limited/Manual</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-3 border border-gray-300">Timestamps</td>
                                        <td className="p-3 text-center border border-gray-300 text-green-600">✓ As shown</td>
                                        <td className="p-3 text-center border border-gray-300 text-green-600">✓ Generated</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-gray-300">Works Offline</td>
                                        <td className="p-3 text-center border border-gray-300 text-green-600">✓ Yes</td>
                                        <td className="p-3 text-center border border-gray-300 text-red-600">✗ Usually No</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-3 border border-gray-300">Data Privacy</td>
                                        <td className="p-3 text-center border border-gray-300 text-green-600">✓ 100% Local</td>
                                        <td className="p-3 text-center border border-gray-300 text-red-600">✗ Often Cloud-Based</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-gray-300">Platform Compatibility</td>
                                        <td className="p-3 text-center border border-gray-300 text-green-600">✓ Universal</td>
                                        <td className="p-3 text-center border border-gray-300 text-red-600">✗ Platform-Specific</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-3 border border-gray-300">Audio Quality Dependency</td>
                                        <td className="p-3 text-center border border-gray-300 text-green-600">✓ Not Affected</td>
                                        <td className="p-3 text-center border border-gray-300 text-red-600">✗ Highly Dependent</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Boost Meeting Productivity</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="text-center p-8 bg-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <LockClosedIcon className="h-12 w-12 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Privacy-First Approach</h3>
                            <p className="text-gray-700 text-lg">
                                Unlike cloud solutions, CaptiOCR operates entirely locally. Your meeting data remains on your device, guaranteeing confidentiality and security.
                            </p>
                        </div>
                        <div className="text-center p-8 bg-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <BoltIcon className="h-12 w-12 text-yellow-500" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Real-Time Capture</h3>
                            <p className="text-gray-700 text-lg">
                                Instantly extract meeting captions as they appear, ensuring you never miss key information even during fast-paced discussions or presentations.
                            </p>
                        </div>
                        <div className="text-center p-8 bg-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <ScaleIcon className="h-12 w-12 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">AI-Ready Output</h3>
                            <p className="text-gray-700 text-lg">
                                Seamlessly feed captured text to AI tools for automatic meeting summaries, action items extraction, and follow-up creation, maximizing your efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4 bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Meeting Transcription Made Simple</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <div className="flex items-start mb-6">
                                <FaDesktop className="text-blue-700 h-10 w-10 mr-4" />
                                <h3 className="text-2xl font-semibold">Live Caption Extraction</h3>
                            </div>
                            <p className="text-gray-700 text-lg ml-14">
                                Effortlessly select the caption area of any meeting platform and CaptiOCR will continuously extract and save the text, creating a complete record without manual effort.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-start mb-6">
                                <FaCopy className="text-green-600 h-10 w-10 mr-4" />
                                <h3 className="text-2xl font-semibold">Automatic Deduplication</h3>
                            </div>
                            <p className="text-gray-700 text-lg ml-14">
                                CaptiOCR intelligently filters duplicate content from captions, producing clean, readable meeting transcripts that are ready for review or AI processing.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-start mb-6">
                                <FaRobot className="text-purple-600 h-10 w-10 mr-4" />
                                <h3 className="text-2xl font-semibold">Combat Meeting Overload</h3>
                            </div>
                            <p className="text-gray-700 text-lg ml-14">
                                Feed captured text to your favorite AI tools to automatically generate meeting summaries, extract action items, and create concise reports, dramatically reducing meeting information overload.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-start mb-6">
                                <LockClosedIcon className="text-red-600 h-10 w-10 mr-4" />
                                <h3 className="text-2xl font-semibold">Complete Privacy Protection</h3>
                            </div>
                            <p className="text-gray-700 text-lg ml-14">
                                Unlike browser extensions or cloud services, CaptiOCR operates entirely on your local machine, ensuring sensitive meeting content never leaves your device without your explicit consent.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Why Choose CaptiOCR?</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-lg shadow-lg">
                            <thead>
                                <tr className="bg-blue-700 text-white">
                                    <th className="py-4 px-6 text-left">Features</th>
                                    <th className="py-4 px-6 text-center">CaptiOCR</th>
                                    <th className="py-4 px-6 text-center">Manual Note-Taking</th>
                                    <th className="py-4 px-6 text-center">Cloud Services</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="py-4 px-6 font-medium">Privacy Control</td>
                                    <td className="py-4 px-6 text-center text-green-600">✓ Complete (Local Only)</td>
                                    <td className="py-4 px-6 text-center text-green-600">✓</td>
                                    <td className="py-4 px-6 text-center text-red-600">✗</td>
                                </tr>
                                <tr className="bg-gray-50 border-b">
                                    <td className="py-4 px-6 font-medium">Meeting Presence</td>
                                    <td className="py-4 px-6 text-center text-green-600">✓ Stay Fully Engaged</td>
                                    <td className="py-4 px-6 text-center text-red-600">✗ Divided Attention</td>
                                    <td className="py-4 px-6 text-center text-green-600">✓</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-4 px-6 font-medium">Works With Any Platform</td>
                                    <td className="py-4 px-6 text-center text-green-600">✓ Universal</td>
                                    <td className="py-4 px-6 text-center text-green-600">✓</td>
                                    <td className="py-4 px-6 text-center text-red-600">✗ Limited Integrations</td>
                                </tr>
                                <tr className="bg-gray-50 border-b">
                                    <td className="py-4 px-6 font-medium">Cognitive Load</td>
                                    <td className="py-4 px-6 text-center text-green-600">✓ Minimal</td>
                                    <td className="py-4 px-6 text-center text-red-600">✗ High</td>
                                    <td className="py-4 px-6 text-center text-green-600">✓ Low</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-4 px-6 font-medium">Works Offline</td>
                                    <td className="py-4 px-6 text-center text-green-600">✓</td>
                                    <td className="py-4 px-6 text-center text-green-600">✓</td>
                                    <td className="py-4 px-6 text-center text-red-600">✗</td>
                                </tr>
                                <tr className="bg-gray-50 border-b">
                                    <td className="py-4 px-6 font-medium">AI Integration Flexibility</td>
                                    <td className="py-4 px-6 text-center text-green-600">✓ Use Any AI</td>
                                    <td className="py-4 px-6 text-center text-red-600">✗</td>
                                    <td className="py-4 px-6 text-center text-red-600">✗ Proprietary Only</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20 px-4 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Streamline Your Meeting Workflow</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="text-center">
                            <div className="mb-6">
                                <DocumentTextIcon className="h-16 w-16 text-blue-600 mx-auto" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Automated Meeting Minutes</h3>
                            <p className="text-gray-700 text-lg">
                                Stop struggling to take notes while listening. CaptiOCR captures meeting text that can be turned into comprehensive minutes with your preferred AI tool.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="mb-6">
                                <ChatBubbleBottomCenterTextIcon className="h-16 w-16 text-green-600 mx-auto" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Instant Follow-Up Creation</h3>
                            <p className="text-gray-700 text-lg">
                                Easily identify and extract action items from captured text to create follow-up emails and task lists immediately after your meeting ends.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="mb-6">
                                <SparklesIcon className="h-16 w-16 text-yellow-500 mx-auto" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Meeting Summarization</h3>
                            <p className="text-gray-700 text-lg">
                                Combat information overload by generating concise summaries from lengthy meetings, helping your team quickly extract key insights without reviewing full transcripts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">How to Extract Meeting Captions with CaptiOCR</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                1
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Enable Live Captions</h3>
                            <p className="text-gray-700">
                                Turn on live captions in Teams, Zoom, Google Meet, or any other meeting platform that supports closed captioning.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                2
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Select Caption Area</h3>
                            <p className="text-gray-700">
                                Use CaptiOCR to define a rectangular area around where your meeting captions appear on screen.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                3
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Start Automated Extraction</h3>
                            <p className="text-gray-700">
                                CaptiOCR continuously monitors and extracts text from the captions, creating a complete meeting transcript automatically.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                4
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Process with AI (Optional)</h3>
                            <p className="text-gray-700">
                                Use the extracted meeting text with your preferred AI tools to generate summaries, extract action items, or create follow-ups.
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <p className="text-gray-700 text-lg">
                            <strong className="text-blue-700">Works with all major meeting platforms:</strong> Microsoft Teams, Zoom, Google Meet, Webex, GoToMeeting, and any software that displays captions on screen.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-8 max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <h3 className="text-xl font-semibold mb-3">Is CaptiOCR secure for sensitive meetings?</h3>
                            <p className="text-gray-700">Yes, CaptiOCR processes everything locally on your device. No meeting content is ever sent to the cloud or external servers, making it suitable for confidential discussions.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <h3 className="text-xl font-semibold mb-3">How accurate is the caption extraction?</h3>
                            <p className="text-gray-700">CaptiOCR uses industry-standard OCR technology to achieve high accuracy. For best results, use a clear font, good contrast, and appropriate sizing in your meeting captions.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <h3 className="text-xl font-semibold mb-3">Does CaptiOCR work with all meeting platforms?</h3>
                            <p className="text-gray-700">Yes, CaptiOCR works with any platform that displays captions on your screen, including Teams, Zoom, Google Meet, Webex, and others. It's a universal solution independent of specific platform APIs.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <h3 className="text-xl font-semibold mb-3">How does CaptiOCR help with meeting fatigue?</h3>
                            <p className="text-gray-700">By automating the capture of meeting text, CaptiOCR reduces the cognitive load of trying to listen attentively while taking notes. This allows you to be more present and engaged during the meeting, reducing mental exhaustion.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <h3 className="text-xl font-semibold mb-3">Can I customize the language settings for different meetings?</h3>
                            <p className="text-gray-700">Yes, CaptiOCR supports multiple languages including English and Italian, with more coming soon. You can save different profiles with language preferences for various meeting types.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <h3 className="text-xl font-semibold mb-3">How do I optimize CaptiOCR for the best results?</h3>
                            <p className="text-gray-700">For optimal performance, select a narrow rectangular area that focuses precisely on the caption area, choose the correct language setting, and ensure captions have good contrast with their background.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">What Users Are Saying</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
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
                                "CaptiOCR has transformed my meeting experience. I can finally focus on the discussion instead of frantically taking notes. The transcripts are incredibly useful for creating summaries later."
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
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
                                "As someone who attends 15+ meetings weekly, meeting fatigue was real. CaptiOCR lets me capture everything without mental exhaustion. The privacy aspect is crucial for our confidential user research."
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
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
                                "I appreciate that CaptiOCR works locally without sending data to third parties. We've integrated it with our internal AI tools to automate meeting minutes, saving hours of administrative work every week."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action & GitHub */}
            <section className="py-20 px-4 bg-blue-700 text-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">Combat Meeting Fatigue Today!</h2>
                    <p className="text-xl mb-10">
                        Download CaptiOCR, reduce mental strain from meetings, and reclaim your productivity.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://github.com/CarloSacchi/CaptiOCR/"
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

            {/* Footer with SEO-rich links - UPDATED with Legal page link */}
            <footer className="bg-gray-900 text-white py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">CaptiOCR</h3>
                            <p className="text-gray-400">
                                Combat meeting fatigue with real-time caption extraction and text processing for online meetings.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><a href="https://github.com/CarloSacchi/CaptiOCR" className="text-gray-400 hover:text-white transition">GitHub Repository</a></li>
                                <li><a href="https://github.com/CarloSacchi/CaptiOCR/issues" className="text-gray-400 hover:text-white transition">Report Issues</a></li>
                                <li><a href="https://github.com/CarloSacchi/CaptiOCR/releases" className="text-gray-400 hover:text-white transition">Download Latest Version</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Solutions For</h3>
                            <ul className="space-y-2">
                                <li><a href="#features" className="text-gray-400 hover:text-white transition">Meeting Fatigue</a></li>
                                <li><a href="#features" className="text-gray-400 hover:text-white transition">Online Meeting Productivity</a></li>
                                <li><a href="#features" className="text-gray-400 hover:text-white transition">Meeting Transcription</a></li>
                                <li><a href="#features" className="text-gray-400 hover:text-white transition">Meeting Summarization</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center">
                        <p>© {new Date().getFullYear()} CaptiOCR. All rights reserved.</p>
                        <p className="text-gray-500 mt-2">
                            Real-time text extraction. CaptiOCR helps you during meetings
                            by capturing and processing captions automatically.
                        </p>
                        <div className="mt-6 flex justify-center space-x-6">
                            <a href="https://github.com/CarloSacchi/CaptiOCR" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300 ease-in-out">
                                GitHub
                            </a>
                            <a href="/privacy.html"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-blue-500 transition duration-300 ease-in-out" >
                                Privacy Policy
                            </a>
                            <a href="/terms.html"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-blue-500 transition duration-300 ease-in-out" >
                                Terms of Use
                            </a>
                            <a href="/legal.html"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-blue-500 transition duration-300 ease-in-out" >
                                Legal Information
                            </a>
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