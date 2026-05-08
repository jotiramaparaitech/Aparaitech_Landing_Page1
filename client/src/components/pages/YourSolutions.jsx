// Solutions.jsx - Dark Theme
import React, { useState } from 'react';

const Solutions = () => {
    const [activeSolution, setActiveSolution] = useState('software');
    const [hoveredIndustry, setHoveredIndustry] = useState(null);
    const [selectedTech, setSelectedTech] = useState('all');

    // Main solutions
    const mainSolutions = [
        {
            id: 'software',
            title: 'Custom Software',
            icon: '💻',
            description: 'Tailored software solutions built specifically for your business needs',
            color: 'from-blue-500 to-cyan-500',
            features: [
                'Web Applications',
                'Mobile Apps',
                'Desktop Software',
                'Enterprise Systems'
            ]
        },
        {
            id: 'ai',
            title: 'AI & ML Solutions',
            icon: '🧠',
            description: 'Intelligent systems that learn, adapt, and automate complex processes',
            color: 'from-purple-500 to-pink-500',
            features: [
                'Predictive Analytics',
                'Natural Language Processing',
                'Computer Vision',
                'Automated Decision Systems'
            ]
        },
        {
            id: 'cloud',
            title: 'Cloud Solutions',
            icon: '☁️',
            description: 'Scalable cloud infrastructure and migration services',
            color: 'from-green-500 to-emerald-500',
            features: [
                'Cloud Migration',
                'DevOps & CI/CD',
                'Serverless Architecture',
                'Cloud Security'
            ]
        },
        {
            id: 'data',
            title: 'Data Solutions',
            icon: '📊',
            description: 'Data-driven insights and analytics platforms',
            color: 'from-orange-500 to-red-500',
            features: [
                'Big Data Processing',
                'Business Intelligence',
                'Data Warehousing',
                'Real-time Analytics'
            ]
        }
    ];

    // Industry solutions
    const industrySolutions = [
        {
            id: 1,
            title: 'Healthcare',
            icon: '🏥',
            color: 'bg-blue-900/30 text-blue-300 border-blue-800',
            solutions: [
                'Electronic Health Records',
                'Telemedicine Platforms',
                'Medical Imaging AI',
                'Patient Management Systems'
            ],
            stats: '90% faster diagnosis'
        },
        {
            id: 2,
            title: 'Finance',
            icon: '💰',
            color: 'bg-green-900/30 text-green-300 border-green-800',
            solutions: [
                'Fraud Detection Systems',
                'Algorithmic Trading',
                'Digital Banking',
                'Risk Management'
            ],
            stats: '99.9% fraud accuracy'
        },
        {
            id: 3,
            title: 'Retail',
            icon: '🛍️',
            color: 'bg-purple-900/30 text-purple-300 border-purple-800',
            solutions: [
                'E-commerce Platforms',
                'Inventory Management',
                'Customer Analytics',
                'Supply Chain Optimization'
            ],
            stats: '40% sales increase'
        },
        {
            id: 4,
            title: 'Manufacturing',
            icon: '🏭',
            color: 'bg-orange-900/30 text-orange-300 border-orange-800',
            solutions: [
                'IoT Integration',
                'Predictive Maintenance',
                'Quality Control AI',
                'Supply Chain Automation'
            ],
            stats: '60% reduced downtime'
        },
        {
            id: 5,
            title: 'Education',
            icon: '🎓',
            color: 'bg-indigo-900/30 text-indigo-300 border-indigo-800',
            solutions: [
                'Learning Management Systems',
                'Virtual Classrooms',
                'Adaptive Learning',
                'Student Analytics'
            ],
            stats: '3x engagement boost'
        },
        {
            id: 6,
            title: 'Logistics',
            icon: '🚚',
            color: 'bg-cyan-900/30 text-cyan-300 border-cyan-800',
            solutions: [
                'Route Optimization',
                'Fleet Management',
                'Warehouse Automation',
                'Delivery Tracking'
            ],
            stats: '30% fuel savings'
        }
    ];

    // Technologies
    const technologies = [
        { id: 'all', name: 'All Technologies', category: 'all' },
        { id: 'frontend', name: 'Frontend', category: 'tech' },
        { id: 'backend', name: 'Backend', category: 'tech' },
        { id: 'mobile', name: 'Mobile', category: 'tech' },
        { id: 'database', name: 'Database', category: 'tech' },
        { id: 'cloud', name: 'Cloud', category: 'tech' },
        { id: 'ai', name: 'AI/ML', category: 'tech' }
    ];

    const techStack = [
        { name: 'React', category: 'frontend', color: 'bg-blue-500' },
        { name: 'Vue.js', category: 'frontend', color: 'bg-green-500' },
        { name: 'Angular', category: 'frontend', color: 'bg-red-500' },
        { name: 'Node.js', category: 'backend', color: 'bg-green-600' },
        { name: 'Python', category: 'backend', color: 'bg-yellow-500' },
        { name: 'Java', category: 'backend', color: 'bg-red-600' },
        { name: 'Swift', category: 'mobile', color: 'bg-orange-500' },
        { name: 'Kotlin', category: 'mobile', color: 'bg-purple-500' },
        { name: 'React Native', category: 'mobile', color: 'bg-blue-400' },
        { name: 'PostgreSQL', category: 'database', color: 'bg-blue-600' },
        { name: 'MongoDB', category: 'database', color: 'bg-green-500' },
        { name: 'Redis', category: 'database', color: 'bg-red-500' },
        { name: 'AWS', category: 'cloud', color: 'bg-orange-600' },
        { name: 'Azure', category: 'cloud', color: 'bg-blue-700' },
        { name: 'Docker', category: 'cloud', color: 'bg-blue-500' },
        { name: 'TensorFlow', category: 'ai', color: 'bg-orange-500' },
        { name: 'PyTorch', category: 'ai', color: 'bg-red-500' },
        { name: 'OpenAI', category: 'ai', color: 'bg-purple-500' }
    ];

    // Case studies
    const caseStudies = [
        {
            id: 1,
            client: 'Global Retail Chain',
            challenge: 'Legacy systems causing inventory mismanagement',
            solution: 'Custom inventory management platform with AI prediction',
            results: ['40% reduction in stockouts', '25% decrease in excess inventory', '60% faster reporting'],
            duration: '6 months'
        },
        {
            id: 2,
            client: 'Healthcare Provider',
            challenge: 'Manual patient scheduling leading to inefficiencies',
            solution: 'AI-powered scheduling and telemedicine platform',
            results: ['90% reduction in scheduling errors', '50% increase in patient capacity', '24/7 virtual care'],
            duration: '8 months'
        },
        {
            id: 3,
            client: 'FinTech Startup',
            challenge: 'Need for scalable, secure transaction processing',
            solution: 'Microservices architecture with blockchain integration',
            results: ['99.99% uptime', '10x transaction processing speed', 'Zero security breaches'],
            duration: '9 months'
        }
    ];

    // Process steps
    const processSteps = [
        {
            step: 1,
            title: 'Discovery',
            description: 'Understanding your business needs and challenges',
            icon: '🔍',
            duration: '1-2 weeks'
        },
        {
            step: 2,
            title: 'Planning',
            description: 'Creating detailed architecture and implementation roadmap',
            icon: '📋',
            duration: '2-3 weeks'
        },
        {
            step: 3,
            title: 'Development',
            description: 'Agile development with regular progress updates',
            icon: '⚙️',
            duration: '8-16 weeks'
        },
        {
            step: 4,
            title: 'Testing',
            description: 'Comprehensive quality assurance and performance testing',
            icon: '🧪',
            duration: '2-4 weeks'
        },
        {
            step: 5,
            title: 'Deployment',
            description: 'Smooth launch and transition to production',
            icon: '🚀',
            duration: '1-2 weeks'
        },
        {
            step: 6,
            title: 'Support',
            description: 'Ongoing maintenance, updates, and optimization',
            icon: '🛠️',
            duration: 'Ongoing'
        }
    ];

    // Stats
    const stats = [
        { value: "500+", label: "Projects Completed", sub: "across industries" },
        { value: "99%", label: "Client Satisfaction", sub: "rate" },
        { value: "2M+", label: "Users Impacted", sub: "by our solutions" },
        { value: "40%", label: "Average ROI", sub: "for clients" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-24 pb-16">
                {/* Animated background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
                    <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
                            <span className="font-medium">🚀 Comprehensive Solutions</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                            Transformative{' '}
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                                Solutions
                            </span>
                            {' '}That Drive Results
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            End-to-end software solutions designed to solve complex business challenges,
                            drive innovation, and deliver measurable value.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25">
                                Explore Solutions
                            </button>
                            <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                                View Case Studies
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Solutions */}
            <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our Core Solutions
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Comprehensive technology solutions tailored to your specific business needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {mainSolutions.map((solution) => (
                            <div
                                key={solution.id}
                                onClick={() => setActiveSolution(solution.id)}
                                className={`rounded-xl p-6 border-2 cursor-pointer transition-all duration-300 ${activeSolution === solution.id
                                        ? 'border-blue-500 bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl shadow-blue-500/10'
                                        : 'border-gray-700 bg-gray-800/50 hover:border-blue-400 hover:shadow-lg hover:bg-gray-800'
                                    }`}
                            >
                                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${solution.color} mb-4`}>
                                    <span className="text-2xl text-white">{solution.icon}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {solution.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    {solution.description}
                                </p>

                                <div className="space-y-2">
                                    {solution.features.map((feature, index) => (
                                        <div key={index} className="flex items-center text-sm text-gray-300">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Active Solution Detail */}
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-lg">
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {mainSolutions.find(s => s.id === activeSolution)?.title} Solutions
                                </h3>
                                <p className="text-gray-300 mb-6">
                                    {mainSolutions.find(s => s.id === activeSolution)?.description} Our team of experts
                                    delivers cutting-edge solutions that drive efficiency, innovation, and growth.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400">Development Time</span>
                                        <span className="font-semibold text-white">8-16 Weeks</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400">Team Size</span>
                                        <span className="font-semibold text-white">5-10 Experts</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400">Success Rate</span>
                                        <span className="font-semibold text-green-400">98%</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                                <h4 className="font-semibold text-white mb-4">Ideal For</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-300">Startups</span>
                                        <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-300">SMEs</span>
                                        <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{ width: '95%' }}></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-300">Enterprise</span>
                                        <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{ width: '70%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our Technology Stack
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Cutting-edge technologies powering our solutions
                        </p>
                    </div>

                    {/* Tech Filters */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {technologies.map((tech) => (
                            <button
                                key={tech.id}
                                onClick={() => setSelectedTech(tech.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedTech === tech.id
                                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                    }`}
                            >
                                {tech.name}
                            </button>
                        ))}
                    </div>

                    {/* Tech Stack Display */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                        {techStack
                            .filter(tech => selectedTech === 'all' || tech.category === selectedTech)
                            .map((tech, index) => (
                                <div
                                    key={index}
                                    className="group bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
                                >
                                    <div className="flex flex-col items-center">
                                        <div className={`w-10 h-10 ${tech.color} rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                                            <span className="text-white text-sm font-bold">
                                                {tech.name.charAt(0)}
                                            </span>
                                        </div>
                                        <div className="text-sm font-medium text-white text-center">
                                            {tech.name}
                                        </div>
                                        <div className="text-xs text-gray-400 capitalize mt-1">
                                            {tech.category}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-16 bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Success Stories
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Real results from our client partnerships
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {caseStudies.map((study) => (
                            <div key={study.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:border-blue-500 transition-all duration-300">
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {study.client}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4">
                                        <span className="font-medium text-gray-300">Challenge:</span> {study.challenge}
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        <span className="font-medium text-gray-300">Solution:</span> {study.solution}
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <h4 className="font-medium text-white">Results:</h4>
                                    {study.results.map((result, index) => (
                                        <div key={index} className="flex items-center text-sm text-gray-300">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            {result}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-700">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-400">Project Duration</span>
                                        <span className="font-medium text-white">{study.duration}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats & CTA */}
            <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Proven Results
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Trusted by businesses worldwide to deliver exceptional solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-lg font-semibold text-white">{stat.label}</div>
                                <div className="text-sm text-gray-300">{stat.sub}</div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Ready to Transform Your Business?
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg">
                                Get Free Consultation
                            </button>
                            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300">
                                Request Proposal
                            </button>
                        </div>
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

export default Solutions;