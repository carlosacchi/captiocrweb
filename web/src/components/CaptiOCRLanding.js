import React from 'react';
import { FaGithub, FaRobot, FaCopy, FaDesktop, FaFileAlt, FaLanguage, FaChartLine, FaVideo } from 'react-icons/fa';
import { ArrowDownTrayIcon, SparklesIcon, ChatBubbleBottomCenterTextIcon, DocumentTextIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

export default function CaptiOCRLanding() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* Hero Section */}
            <header className="bg-blue-600 text-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">CaptiOCR: Real-Time Screen Text Extraction</h1>
                    <p className="text-xl md:text-2xl mb-8">Capture Live Captions, Extract Insights, and Transform Meeting Content with AI</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://github.com/CarloSacchi/CaptiOCR"
                            target="_blank"
                            rel="noreferrer"
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

            {/* How It Works Section - Moved up for better storytelling */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">How CaptiOCR Works</h2>
                    <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {[
                            {
                                step: 1,
                                title: "Enable Live Captions",
                                description: "Turn on live captions in your meeting software (Teams, Zoom, etc.)",
                                icon: <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-blue-600" />
                            },
                            {
                                step: 2,
                                title: "Select Caption Area",
                                description: "Use CaptiOCR to select the screen area where captions appear",
                                icon: <FaDesktop className="h-8 w-8 text-blue-600" />
                            },
                            {
                                step: 3,
                                title: "Capture Text",
                                description: "CaptiOCR automatically extracts and saves all caption text in real-time",
                                icon: <FaCopy className="h-8 w-8 text-blue-600" />
                            },
                            {
                                step: 4,
                                title: "Process with AI",
                                description: "Submit captured text to LLMs for summaries, action items, and insights",
                                icon: <FaRobot className="h-8 w-8 text-blue-600" />
                            }
                        ].map((step) => (
                            <div key={step.step} className="relative">
                                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                    {step.step}
                                </div>
                                {step.step < 4 && (
                                    <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-blue-300 -z-10 transform -translate-x-6"></div>
                                )}
                                <div className="text-center">
                                    <div className="flex justify-center mb-3">{step.icon}</div>
                                    <h3 className="font-semibold mb-2">{step.title}</h3>
                                    <p className="text-sm text-gray-600">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Real-World Applications - Moved up before platform list */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Real-World Applications</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <DocumentTextIcon className="h-12 w-12 text-blue-600" />,
                                title: "Executive Meetings",
                                description: "Capture critical decisions and strategic discussions without constant note-taking."
                            },
                            {
                                icon: <FaLanguage className="h-12 w-12 text-green-600" />,
                                title: "Multilingual Teams",
                                description: "Extract text in multiple languages and generate translations for international teams."
                            },
                            {
                                icon: <SparklesIcon className="h-12 w-12 text-purple-600" />,
                                title: "Research & Learning",
                                description: "Create searchable archives of lectures, presentations, and training sessions."
                            }
                        ].map((useCase, index) => (
                            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                                <div className="flex justify-center mb-4">{useCase.icon}</div>
                                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                                <p className="text-gray-600">{useCase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Supported Platforms Section - Redesigned with logos */}
            <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4">Compatible with Popular Platforms</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                        Works with any platform that provides live captions
                    </p>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                            <div className="col-span-2 md:col-span-1">
                                <div className="bg-blue-100 rounded-xl p-6 h-full flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all">
                                    <div className="w-16 h-16 mb-3 rounded-full bg-blue-700 flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                                            <path d="M11.995 0C5.371 0 0 5.371 0 11.995S5.371 23.99 11.995 23.99 23.99 18.619 23.99 11.995 18.619 0 11.995 0zm5.278 16.816c-.103.131-.247.197-.39.197a.59.59 0 01-.293-.079l-4.284-2.397a.551.551 0 01-.287-.484V5.188c0-.316.253-.572.575-.572.316 0 .572.256.572.572v8.517l4.003 2.232c.284.158.379.519.224.797l-.12.082z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-blue-800 text-center">Microsoft Teams</h3>
                                </div>
                            </div>

                            <div className="col-span-2 md:col-span-1">
                                <div className="bg-blue-100 rounded-xl p-6 h-full flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all">
                                    <div className="w-16 h-16 mb-3 rounded-full bg-blue-500 flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                                            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.797 17.124c-.768 1.424-2.254 2.399-4.003 2.399-1.777 0-3.304-1.021-4.055-2.5H7.693a4.857 4.857 0 01-.563-2.3c0-.825.184-1.606.512-2.3h2.081c-.326 1.487.435 2.406 1.02 2.887.586.48 1.084.825 1.757.814.673-.01 1.261-.324 1.621-.887.36-.562.432-1.158.425-1.754-.008-.597-.014-1.067-.781-1.548-.768-.48-1.177-.48-2.761-.462-1.583.018-2.93-.576-3.523-1.773-.592-1.196-.195-2.703.782-3.86.977-1.158 1.97-1.538 3.495-1.567 1.525-.03 2.754.577 3.366 1.853h2.095A4.843 4.843 0 0018.298 7H15.2c.591 1.401.133 2.456-.443 2.887-.576.431-1.128.714-1.694.677-.566-.036-1.119-.24-1.44-.663-.322-.422-.322-1.042-.307-1.548.015-.505.056-.86.647-1.194.591-.334 1.12-.334 2.71-.317 1.588.018 2.948-.49 3.691-1.626.743-1.136.447-2.648-.384-3.934-.831-1.286-1.869-1.642-3.464-1.579-1.595.062-2.809.693-3.585 1.944H7.796A4.831 4.831 0 017.202 2h3.112c-.532-1.32-.175-2.424.328-2.975C11.145-1.526 11.702-1.7 12.2-1.7c.499 0 1.056.284 1.353.758.297.473.508 1.25-.022 2.942H16.5a4.83 4.83 0 012.299 2H15.85c.485 1.496.208 2.576-.167 3.089-.375.514-.77.832-1.518.745-.748-.086-1.429-.4-1.762-.857-.334-.457-.278-1.327-.2-1.738.078-.41.222-.744.913-1.009s1.156-.265 2.526-.244c1.37.021 2.604-.616 3.382-1.864.778-1.249.557-2.77-.423-3.862C17.62-4.582 16.415-5 14.833-5c-1.582 0-2.89.725-3.796 2H7.88A4.823 4.823 0 017 5.2v.12a4.823 4.823 0 01.88 2.8H7.8c.876 1.614 2.337 2.7 4.067 2.7 1.8 0 3.28-1.067 4.033-2.596h2.155c.327.694.512 1.475.512 2.3 0 .825-.185 1.606-.512 2.3h-2.156a4.877 4.877 0 01-4.033 2.5c-1.73 0-3.191-1.086-4.067-2.7h.013a4.845 4.845 0 01-.578-2.3c0-.827.186-1.61.516-2.306H5.702A4.823 4.823 0 015 10.32v.12a4.823 4.823 0 01.702 2.8h2.046c.922 2.36 3.154 4.026 5.752 4.026 2.67 0 4.923-1.748 5.812-4.142h2.9c-.148.696-.401 1.355-.732 1.965l-2.313-.001a.596.596 0 00-.529.318.578.578 0 00.054.615l1.85 2.681a.605.605 0 00.862.129.605.605 0 00.129-.862l-1.257-1.824h1.972c-.732 1.328-1.999 2.418-3.511 2.972z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-blue-600 text-center">Zoom</h3>
                                </div>
                            </div>

                            <div className="col-span-2 md:col-span-1">
                                <div className="bg-green-100 rounded-xl p-6 h-full flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all">
                                    <div className="w-16 h-16 mb-3 rounded-full bg-green-600 flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                                            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm6.536 13.192l-3.58 3.58c-.54.54-1.256.839-2.017.839-.763 0-1.48-.3-2.02-.84l-3.58-3.58a2.854 2.854 0 01-.838-2.019c0-.762.298-1.479.838-2.02l3.58-3.58a2.854 2.854 0 012.02-.838c.761 0 1.477.299 2.017.839l3.58 3.58c.54.54.838 1.256.838 2.02 0 .762-.298 1.478-.838 2.019zm-1.442-2.596l-3.096-3.096a.978.978 0 00-1.414 0L9.488 10.596a.978.978 0 000 1.414l3.096 3.096a.978.978 0 001.414 0l3.096-3.096a.978.978 0 000-1.414z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-green-700 text-center">Google Meet</h3>
                                </div>
                            </div>

                            <div className="col-span-2 md:col-span-1">
                                <div className="bg-orange-100 rounded-xl p-6 h-full flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all">
                                    <div className="w-16 h-16 mb-3 rounded-full bg-orange-500 flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 13h-5v5h-2v-5H6v-2h5V6h2v5h5v2z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-orange-700 text-center">GoToWebinar</h3>
                                </div>
                            </div>

                            <div className="col-span-2 md:col-span-1">
                                <div className="bg-gray-100 rounded-xl p-6 h-full flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all">
                                    <div className="w-16 h-16 mb-3 rounded-full bg-gray-600 flex items-center justify-center">
                                        <FaVideo className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-semibold text-gray-700 text-center">And Many More</h3>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-center bg-blue-50 p-6 rounded-lg shadow-sm">
                            <p className="text-gray-700">
                                <span className="font-semibold">Note:</span> Platforms must have live captioning enabled for CaptiOCR to work
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FaDesktop className="text-blue-600 h-12 w-12" />,
                                title: "Real-Time Capture",
                                description: "Instantly extract text from live captions in meetings and webinars with precision and speed."
                            },
                            {
                                icon: <FaRobot className="text-green-600 h-12 w-12" />,
                                title: "AI-Powered Analysis",
                                description: "Generate summaries, extract key points, and analyze meeting sentiment using advanced LLM technology."
                            },
                            {
                                icon: <FaCopy className="text-purple-600 h-12 w-12" />,
                                title: "Seamless Integration",
                                description: "Works with any platform that offers live captions - Microsoft Teams, Zoom, GoToWebinar, and more."
                            }
                        ].map((feature, index) => (
                            <div key={index} className="text-center p-6 bg-gray-100 rounded-xl hover:shadow-lg transition-all">
                                <div className="flex justify-center mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Capabilities Section */}
            <section className="py-16 px-4 bg-blue-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4">Transform Meetings with AI</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                        Submit captured text to AI models to unlock powerful insights and automate post-meeting tasks
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <DocumentTextIcon className="h-10 w-10 text-blue-600" />,
                                title: "Automated Meeting Minutes",
                                description: "Generate comprehensive, structured meeting notes with key decisions and action items highlighted."
                            },
                            {
                                icon: <CheckCircleIcon className="h-10 w-10 text-green-600" />,
                                title: "Action Item Extraction",
                                description: "Automatically identify and compile action items, assignees, and deadlines from meeting discussions."
                            },
                            {
                                icon: <FaChartLine className="text-purple-600 h-10 w-10" />,
                                title: "Sentiment Analysis",
                                description: "Understand meeting dynamics by analyzing sentiment and engagement levels of participants."
                            },
                            {
                                icon: <ChatBubbleBottomCenterTextIcon className="h-10 w-10 text-red-600" />,
                                title: "Meeting Summaries",
                                description: "Create concise summaries of lengthy meetings that capture the essential points and decisions."
                            },
                            {
                                icon: <SparklesIcon className="h-10 w-10 text-yellow-600" />,
                                title: "Key Insights Extraction",
                                description: "Identify and highlight critical information, opportunities, and challenges discussed."
                            },
                            {
                                icon: <ArrowDownTrayIcon className="h-10 w-10 text-indigo-600" />,
                                title: "Follow-up Generation",
                                description: "Create professional follow-up emails and tasks based on meeting content and outcomes."
                            }
                        ].map((capability, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                                <div className="flex items-center mb-4">
                                    <div className="mr-4">{capability.icon}</div>
                                    <h3 className="text-xl font-semibold">{capability.title}</h3>
                                </div>
                                <p className="text-gray-600">{capability.description}</p>
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
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://github.com/CarloSacchi/CaptiOCR/releases"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-full font-semibold flex items-center"
                        >
                            <ArrowDownTrayIcon className="h-5 w-5 mr-2" /> Download Now
                        </a>
                        <a
                            href="https://github.com/CarloSacchi/CaptiOCR/issues"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center"
                        >
                            <FaGithub className="mr-2" /> Report Issues
                        </a>
                        <a
                            href="https://github.com/CarloSacchi/CaptiOCR/pulls"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center"
                        >
                            <FaGithub className="mr-2" /> Contribute
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 px-4 text-center">
                <p>© {new Date().getFullYear()} CaptiOCR. Open-Source Text Extraction Tool.</p>
                <div className="mt-4 space-x-4">
                    <a href="https://github.com/CarloSacchi/CaptiOCR" target="_blank" rel="noreferrer" className="hover:text-blue-400">GitHub</a>
                    <a href="#" className="hover:text-blue-400">License</a>
                    <a href="#" className="hover:text-blue-400">Contact</a>
                </div>
            </footer>
        </div>
    );
}