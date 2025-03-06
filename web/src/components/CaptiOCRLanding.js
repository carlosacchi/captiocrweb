import React from 'react';

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
                            <span className="mr-2">📂</span> View on GitHub
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
                                icon: "🖥️",
                                title: "Real-Time Capture",
                                description: "Instantly extract text from live captions in meetings and webinars with precision and speed."
                            },
                            {
                                icon: "🤖",
                                title: "AI-Powered Analysis",
                                description: "Generate summaries, extract key points, and analyze meeting sentiment using advanced LLM technology."
                            },
                            {
                                icon: "📋",
                                title: "Seamless Integration",
                                description: "Works with any platform that offers live captions - Microsoft Teams, Zoom, GoToWebinar, and more."
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

            {/* AI Capabilities Section - NEW */}
            <section className="py-16 px-4 bg-blue-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4">Transform Meetings with AI</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                        Submit captured text to AI models to unlock powerful insights and automate post-meeting tasks
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: "📄",
                                title: "Automated Meeting Minutes",
                                description: "Generate comprehensive, structured meeting notes with key decisions and action items highlighted."
                            },
                            {
                                icon: "✅",
                                title: "Action Item Extraction",
                                description: "Automatically identify and compile action items, assignees, and deadlines from meeting discussions."
                            },
                            {
                                icon: "📊",
                                title: "Sentiment Analysis",
                                description: "Understand meeting dynamics by analyzing sentiment and engagement levels of participants."
                            },
                            {
                                icon: "💬",
                                title: "Meeting Summaries",
                                description: "Create concise summaries of lengthy meetings that capture the essential points and decisions."
                            },
                            {
                                icon: "✨",
                                title: "Key Insights Extraction",
                                description: "Identify and highlight critical information, opportunities, and challenges discussed."
                            },
                            {
                                icon: "⏬",
                                title: "Follow-up Generation",
                                description: "Create professional follow-up emails and tasks based on meeting content and outcomes."
                            }
                        ].map((capability, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                                <div className="flex items-center mb-4">
                                    <div className="mr-4 text-3xl">{capability.icon}</div>
                                    <h3 className="text-xl font-semibold">{capability.title}</h3>
                                </div>
                                <p className="text-gray-600">{capability.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Supported Platforms Section - NEW */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4">Compatible with Popular Platforms</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                        CaptiOCR works with any application that provides live captions, including:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {[
                            {
                                name: "Microsoft Teams",
                                // For production, replace with actual logo path
                                // logoSrc: "/assets/logos/teams-logo.png", 
                                color: "bg-blue-100",
                                textColor: "text-blue-800"
                            },
                            {
                                name: "Zoom",
                                // logoSrc: "/assets/logos/zoom-logo.png", 
                                color: "bg-blue-100",
                                textColor: "text-blue-600"
                            },
                            {
                                name: "Google Meet",
                                // logoSrc: "/assets/logos/meet-logo.png", 
                                color: "bg-green-100",
                                textColor: "text-green-700"
                            },
                            {
                                name: "GoToWebinar",
                                // logoSrc: "/assets/logos/gotowebinar-logo.png", 
                                color: "bg-orange-100",
                                textColor: "text-orange-700"
                            },
                            {
                                name: "Webex",
                                // logoSrc: "/assets/logos/webex-logo.png", 
                                color: "bg-blue-100",
                                textColor: "text-blue-700"
                            },
                            {
                                name: "Skype",
                                // logoSrc: "/assets/logos/skype-logo.png", 
                                color: "bg-blue-100",
                                textColor: "text-blue-500"
                            },
                            {
                                name: "BlueJeans",
                                // logoSrc: "/assets/logos/bluejeans-logo.png", 
                                color: "bg-indigo-100",
                                textColor: "text-indigo-700"
                            },
                            {
                                name: "Any Software with Live Captions",
                                color: "bg-gray-100",
                                textColor: "text-gray-700"
                            }
                        ].map((platform, index) => (
                            <div key={index} className={`text-center p-6 ${platform.color} rounded-xl hover:shadow-md transition-all`}>
                                {/* When you have logos, uncomment this
                                {platform.logoSrc && (
                                    <img 
                                        src={platform.logoSrc} 
                                        alt={`${platform.name} logo`} 
                                        className="h-12 w-auto mx-auto mb-3" 
                                    />
                                )}
                                */}
                                <h3 className={`font-medium ${platform.textColor}`}>{platform.name}</h3>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <p className="italic text-gray-600">
                            Note: Platforms must have live captioning enabled for CaptiOCR to work
                        </p>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Real-World Applications</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "📋",
                                title: "Executive Meetings",
                                description: "Capture critical decisions and strategic discussions without constant note-taking."
                            },
                            {
                                icon: "🌐",
                                title: "Multilingual Support",
                                description: "Extract text in multiple languages and generate translations for international teams."
                            },
                            {
                                icon: "🎓",
                                title: "Research & Learning",
                                description: "Create searchable archives of lectures, presentations, and training sessions."
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

            {/* How It Works Section - NEW */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                    <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {[
                            {
                                step: 1,
                                title: "Enable Live Captions",
                                description: "Turn on live captions in your meeting software (Teams, Zoom, etc.)"
                            },
                            {
                                step: 2,
                                title: "Select Caption Area",
                                description: "Use CaptiOCR to select the screen area where captions appear"
                            },
                            {
                                step: 3,
                                title: "Capture Text",
                                description: "CaptiOCR automatically extracts and saves all caption text in real-time"
                            },
                            {
                                step: 4,
                                title: "Process with AI",
                                description: "Submit captured text to LLMs for summaries, action items, and insights"
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
                                    <h3 className="font-semibold mb-2">{step.title}</h3>
                                    <p className="text-sm text-gray-600">{step.description}</p>
                                </div>
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
                            <span className="mr-2">⬇️</span> Download Now
                        </a>
                        <a
                            href="https://github.com/CarloSacchi/CaptiOCR/issues"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center"
                        >
                            <span className="mr-2">🐛</span> Report Issues
                        </a>
                        <a
                            href="https://github.com/CarloSacchi/CaptiOCR/pulls"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center"
                        >
                            <span className="mr-2">🔀</span> Contribute
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 px-4 text-center">
                <p>© 2024 CaptiOCR. Open-Source Text Extraction Tool.</p>
                <div className="mt-4 space-x-4">
                    <a href="https://github.com/CarloSacchi/CaptiOCR" target="_blank" rel="noreferrer" className="hover:text-blue-400">GitHub</a>
                    <a href="#" className="hover:text-blue-400">License</a>
                    <a href="#" className="hover:text-blue-400">Contact</a>
                </div>
            </footer>
        </div>
    );
}