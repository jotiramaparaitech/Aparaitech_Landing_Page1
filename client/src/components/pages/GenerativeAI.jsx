// GenerativeAI.jsx - Enhanced Dark Theme
import React, { useState, useEffect } from 'react';

const GenerativeAI = () => {
    const [activeTab, setActiveTab] = useState('business');
    const [hoveredCard, setHoveredCard] = useState(null);
    const [stats, setStats] = useState({
        accuracy: 0,
        speed: 0,
        cost: 0,
        availability: 0
    });

    // Demo states
    const [prompt, setPrompt] = useState('');
    const [generating, setGenerating] = useState(false);
    const [aiResponse, setAiResponse] = useState('');

    // Animate counters
    useEffect(() => {
        const animateCounter = (target, key, duration = 2000) => {
            let start = 0;
            const increment = target / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    start = target;
                    clearInterval(timer);
                }
                setStats(prev => ({
                    ...prev,
                    [key]: Math.floor(start)
                }));
            }, 16);
        };

        animateCounter(95, 'accuracy');
        animateCounter(40, 'cost');
        // For 10x and 24/7, we'll handle separately
    }, []);

    // Use cases data
    const useCases = [
        {
            id: 1,
            title: "Content Generation",
            description: "Automated creation of marketing copy, blog posts, and social media content",
            icon: "📝",
            color: "from-blue-500 to-cyan-500",
            gradient: "bg-gradient-to-r from-blue-500/20 to-cyan-500/20",
            border: "border-blue-500/30"
        },
        {
            id: 2,
            title: "Code Assistant",
            description: "AI-powered code generation, debugging, and documentation",
            icon: "💻",
            color: "from-purple-500 to-pink-500",
            gradient: "bg-gradient-to-r from-purple-500/20 to-pink-500/20",
            border: "border-purple-500/30"
        },
        {
            id: 3,
            title: "Data Analysis",
            description: "Intelligent data processing, pattern recognition, and insights generation",
            icon: "📊",
            color: "from-green-500 to-emerald-500",
            gradient: "bg-gradient-to-r from-green-500/20 to-emerald-500/20",
            border: "border-green-500/30"
        },
        {
            id: 4,
            title: "Customer Support",
            description: "AI chatbots and automated customer service solutions",
            icon: "🤖",
            color: "from-orange-500 to-red-500",
            gradient: "bg-gradient-to-r from-orange-500/20 to-red-500/20",
            border: "border-orange-500/30"
        },
        {
            id: 5,
            title: "Design Automation",
            description: "AI-generated graphics, layouts, and design assets",
            icon: "🎨",
            color: "from-indigo-500 to-violet-500",
            gradient: "bg-gradient-to-r from-indigo-500/20 to-violet-500/20",
            border: "border-indigo-500/30"
        },
        {
            id: 6,
            title: "Process Optimization",
            description: "AI-driven workflow automation and business process improvement",
            icon: "⚡",
            color: "from-yellow-500 to-amber-500",
            gradient: "bg-gradient-to-r from-yellow-500/20 to-amber-500/20",
            border: "border-yellow-500/30"
        }
    ];

    // AI solutions
    const solutions = [
        {
            category: "business",
            title: "Enterprise AI Solutions",
            features: [
                "Custom LLM integration",
                "Data privacy compliance",
                "Scalable architecture",
                "24/7 AI monitoring"
            ],
            benefits: [
                "Increased productivity by 60%",
                "Reduced operational costs",
                "Enhanced decision-making",
                "Scalable infrastructure"
            ]
        },
        {
            category: "development",
            title: "AI Development Platform",
            features: [
                "Model fine-tuning",
                "API integration",
                "Real-time analytics",
                "Multi-model support"
            ],
            benefits: [
                "Faster time-to-market",
                "Reduced development costs",
                "Better model performance",
                "Easy integration"
            ]
        },
    ];

    // Demo AI generation
    const handleGenerate = () => {
        if (!prompt.trim()) return;

        setGenerating(true);
        setAiResponse('');

        // Simulate AI response
        setTimeout(() => {
            const responses = [
                `Based on your query "${prompt}", I'd recommend implementing an AI-powered solution that analyzes customer data in real-time to identify patterns and predict future trends. This would involve:\n\n1. Data collection and preprocessing\n2. Model training with historical data\n3. Real-time inference engine\n4. Dashboard visualization`,
                `For "${prompt}", consider a multi-modal AI approach combining:\n\n• Natural Language Processing for text analysis\n• Computer Vision for image recognition\n• Predictive Analytics for forecasting\n\nThe system could increase efficiency by 40-60% based on similar implementations.`,
                `Our AI solution for "${prompt}" would feature:\n\n✅ Automated workflow optimization\n✅ Real-time anomaly detection\n✅ Predictive maintenance alerts\n✅ Intelligent resource allocation\n\nImplementation timeline: 8-12 weeks`
            ];

            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            setAiResponse(randomResponse);
            setGenerating(false);
        }, 2000);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(aiResponse);
        // Add toast notification in real implementation
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-24 pb-16">
                {/* Animated background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
                    <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6 backdrop-blur-sm">
                            <span className="text-blue-300 font-medium">✨ AI Innovation</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Transform with{' '}
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                                Generative AI
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Unlock unprecedented capabilities with our cutting-edge generative AI solutions.
                            Automate, innovate, and scale like never before.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25">
                                Start AI Journey
                            </button>
                            <button className="px-6 sm:px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                                View Case Studies
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            {/* Use Cases Section */}
            <section className="py-16 bg-gradient-to-b from-black to-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            AI Use Cases
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Discover how generative AI can transform every aspect of your business
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {useCases.map((useCase) => (
                            <div
                                key={useCase.id}
                                onMouseEnter={() => setHoveredCard(useCase.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 sm:p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer"
                            >
                                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${useCase.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <span className="text-2xl">{useCase.icon}</span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold mb-3">{useCase.title}</h3>
                                <p className="text-gray-400 text-sm sm:text-base">{useCase.description}</p>

                                <div className={`mt-4 pt-4 border-t ${useCase.border} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                    <div className="flex items-center text-sm text-cyan-400">
                                        <span>Explore solution</span>
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Tabs */}
            <section className="py-16 bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Our AI Solutions
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Choose the perfect AI solution for your needs
                            </p>
                        </div>

                        {/* Tabs */}
                        <div className="flex flex-wrap justify-center gap-3 mb-8">
                            {solutions.map((solution) => (
                                <button
                                    key={solution.category}
                                    onClick={() => setActiveTab(solution.category)}
                                    className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${activeTab === solution.category
                                            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/25'
                                            : 'bg-gray-800 hover:bg-gray-700 border border-gray-700'
                                        }`}
                                >
                                    {solution.title.split(' ')[0]}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 border border-gray-700 shadow-xl">
                            {solutions.map((solution) => (
                                activeTab === solution.category && (
                                    <div key={solution.category} className="animate-fadeIn">
                                        <div className="flex items-center mb-6">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                                                <span className="text-xl">🤖</span>
                                            </div>
                                            <h3 className="text-2xl font-bold">{solution.title}</h3>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                            <div>
                                                <h4 className="text-lg font-semibold mb-4 text-cyan-400">Key Features</h4>
                                                <ul className="space-y-3">
                                                    {solution.features.map((feature, index) => (
                                                        <li key={index} className="flex items-center">
                                                            <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                                                            <span className="text-gray-300">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="bg-gray-800/50 rounded-xl p-5 md:p-6 border border-gray-700">
                                                <h4 className="text-lg font-semibold mb-4 text-green-400">Benefits</h4>
                                                <ul className="space-y-2.5">
                                                    {solution.benefits.map((benefit, index) => (
                                                        <li key={index} className="flex items-start text-gray-300">
                                                            <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            {benefit}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            AI Performance Metrics
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Proven results that drive business transformation
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                                {stats.accuracy}%
                            </div>
                            <div className="text-lg font-semibold text-white">Accuracy Rate</div>
                            <div className="text-sm text-gray-400">in predictions</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                                10x
                            </div>
                            <div className="text-lg font-semibold text-white">Faster Processing</div>
                            <div className="text-sm text-gray-400">vs manual methods</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                                {stats.cost}%
                            </div>
                            <div className="text-lg font-semibold text-white">Cost Reduction</div>
                            <div className="text-sm text-gray-400">on average</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent mb-2">
                                24/7
                            </div>
                            <div className="text-lg font-semibold text-white">AI Availability</div>
                            <div className="text-sm text-gray-400">continuous operation</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-cyan-900/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Harness AI Power?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Schedule a personalized demo and see how our AI solutions can transform your business
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg">
                            Book a Demo
                        </button>
                        <button className="px-6 sm:px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300">
                            Download Whitepaper
                        </button>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
        </div>
    );
};

export default GenerativeAI;