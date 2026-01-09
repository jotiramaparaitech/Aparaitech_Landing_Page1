// src/components/services/CloudComputingPage.jsx
import React, { useState } from 'react';

const CloudComputingPage = () => {
    const [activeSection, setActiveSection] = useState('what-is-cloud');

    return (
        <div className="min-h-screen bg-white mt-5 text-gray-900">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Guide to Cloud Computing
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-10">
                        Unlock the power of the cloud and discover how cloud computing drives innovation,
                        scalability, and efficiency for businesses of all sizes.
                    </p>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-3">
                        Think about the last time you streamed a show, saved photos online, or collaborated on a project
                        with your team. Chances are, you were tapping into the power of cloud computing.
                    </p>
                </div>
            </div>

            {/* Main Content with Side Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Sidebar Navigation */}
                    <div className="lg:w-1/4">
                        <div className="sticky top-32 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                            <h3 className="text-lg font-bold mb-6 text-gray-900">On This Page</h3>
                            <nav className="space-y-4">
                                {[
                                    { id: 'what-is-cloud', label: 'What is Cloud Computing?' },
                                    { id: 'types', label: 'Types of Cloud Computing' },
                                    { id: 'benefits', label: 'Benefits of Cloud Computing' },
                                    { id: 'how-it-works', label: 'How Does Cloud Computing Work?' },
                                    { id: 'applications', label: 'Applications and Uses' },
                                    { id: 'examples', label: 'Examples of Cloud Computing' },
                                    { id: 'future', label: 'Future Trends' },
                                    { id: 'choose-solution', label: 'How to Choose' },
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            setActiveSection(item.id);
                                            document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className={`block text-left w-full px-4 py-3 rounded-lg transition ${activeSection === item.id
                                                ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600 font-semibold'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:w-3/4">
                        {/* What is Cloud Computing */}
                        <section id="what-is-cloud" className="mb-16 scroll-mt-24">
                            <h2 className="text-4xl font-bold mb-6 text-gray-900">What is cloud computing?</h2>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-xl text-gray-700 mb-6">
                                    Cloud computing is the on-demand delivery of computing resources like servers,
                                    storage, databases, networking, and software over the internet — so you only pay
                                    for what you use (pay-as-you-go pricing). It removes the need to buy, manage, or
                                    maintain physical hardware yourself.
                                </p>
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
                                    <p className="text-gray-800 italic">
                                        Whether you're a startup building an app, a global business crunching massive data sets,
                                        or simply storing personal files, cloud computing puts the power of top-tier IT
                                        infrastructure at your fingertips.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Types of Cloud Computing */}
                        <section id="types" className="mb-16 scroll-mt-24">
                            <h2 className="text-4xl font-bold mb-8 text-gray-900">Types of cloud computing</h2>

                            <h3 className="text-2xl font-bold mb-6 text-gray-800">Deployment models</h3>
                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                {[
                                    {
                                        title: 'Public Cloud',
                                        description: 'Services hosted by third-party providers and shared among multiple customers.',
                                        points: ['Cost-effective', 'Flexible resources', 'Scalable based on needs'],
                                        color: 'from-blue-500 to-blue-400'
                                    },
                                    {
                                        title: 'Private Cloud',
                                        description: 'Infrastructure dedicated solely to one organization.',
                                        points: ['Strict compliance', 'Enhanced security', 'Maximum control'],
                                        color: 'from-purple-500 to-purple-400'
                                    },
                                    {
                                        title: 'Hybrid Cloud',
                                        description: 'Combines private and public clouds.',
                                        points: ['Flexibility', 'Data management options', 'Cost-efficiency'],
                                        color: 'from-green-500 to-green-400'
                                    },
                                    {
                                        title: 'Multicloud',
                                        description: 'Uses multiple cloud providers.',
                                        points: ['Avoid vendor lock-in', 'Optimize costs', 'Best provider for each task'],
                                        color: 'from-orange-500 to-orange-400'
                                    },
                                ].map((cloud, index) => (
                                    <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                        <div className={`h-2 bg-gradient-to-r ${cloud.color}`}></div>
                                        <div className="p-8">
                                            <h4 className="text-2xl font-bold mb-4 text-gray-900">{cloud.title}</h4>
                                            <p className="text-gray-700 mb-6">{cloud.description}</p>
                                            <ul className="space-y-3">
                                                {cloud.points.map((point, idx) => (
                                                    <li key={idx} className="flex items-center">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                                        <span className="text-gray-700">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Cloud Computing Services - This section was already there, keeping it */}
                            <h3 className="text-2xl font-bold mb-6 text-gray-800">Cloud computing services</h3>
                            <div className="space-y-8">
                                {[
                                    {
                                        title: 'Infrastructure as a Service (IaaS)',
                                        description: 'Access to essential IT infrastructure like virtual machines, storage, and networks.',
                                        useCase: 'Great for businesses needing flexibility and cost control.',
                                        icon: '🖥️'
                                    },
                                    {
                                        title: 'Platform as a Service (PaaS)',
                                        description: 'Platform where developers can build, test, and deploy applications.',
                                        useCase: 'Accelerates development process, focus on coding.',
                                        icon: '🚀'
                                    },
                                    {
                                        title: 'Software as a Service (SaaS)',
                                        description: 'Delivers software applications over the internet.',
                                        useCase: 'No IT maintenance required, easy to deploy and scale.',
                                        icon: '📱'
                                    },
                                    {
                                        title: 'Serverless computing',
                                        description: 'Build and run applications without managing infrastructure.',
                                        useCase: 'Ideal for dynamic applications with fluctuating resource usage.',
                                        icon: '⚡'
                                    },
                                ].map((service, index) => (
                                    <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                                        <div className="flex items-start space-x-6">
                                            <div className="text-4xl">{service.icon}</div>
                                            <div>
                                                <h4 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h4>
                                                <p className="text-gray-700 mb-4">{service.description}</p>
                                                <p className="text-gray-600 italic">{service.useCase}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Benefits of Cloud Computing - This section was already there, keeping it */}
                        <section id="benefits" className="mb-16 scroll-mt-24">
                            <h2 className="text-4xl font-bold mb-8 text-gray-900">Benefits of Cloud Computing</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    { icon: '⏱️', title: 'Convenience', desc: 'Instant access from anywhere, anytime' },
                                    { icon: '🔄', title: 'Flexibility', desc: 'Scale resources up or down as needed' },
                                    { icon: '💰', title: 'Cost', desc: 'Pay-as-you-go pricing, no upfront costs' },
                                    { icon: '📈', title: 'Scalability', desc: 'Grow without hardware limitations' },
                                    { icon: '✅', title: 'Reliability', desc: 'Built-in redundancies and backups' },
                                    { icon: '🔒', title: 'Security', desc: 'Top-tier security measures and encryption' },
                                ].map((benefit, index) => (
                                    <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
                                        <div className="text-3xl mb-4">{benefit.icon}</div>
                                        <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                                        <p className="text-gray-700">{benefit.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* How Does Cloud Computing Work - ADDED NEW SECTION */}
                        <section id="how-it-works" className="mb-16 scroll-mt-24">
                            <h2 className="text-4xl font-bold mb-6 text-gray-900">How does cloud computing work?</h2>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-xl text-gray-700 mb-6">
                                    Cloud computing uses a vast network of remote servers hosted on the internet, rather than on local computers or physical servers. When you use cloud services, you're essentially borrowing space and processing power from these remote data centers.
                                </p>
                                <p className="text-lg text-gray-700 mb-6">
                                    Here's how it works: instead of buying, owning, and maintaining physical servers and data centers, businesses rent access to storage, computing power, and other technology resources as needed. This allows for greater flexibility – you can scale up resources when demand spikes or scale down during slower periods without investing in expensive infrastructure.
                                </p>
                                <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-2xl my-8">
                                    <h4 className="text-2xl font-bold mb-4">Key Technologies:</h4>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                            <span className="text-gray-800"><strong>Virtualization:</strong> Allows multiple users to share the same physical hardware securely</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                            <span className="text-gray-800"><strong>Management Tools:</strong> Tools that manage and optimize cloud resources efficiently</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                            <span className="text-gray-800"><strong>Automation:</strong> Cloud providers handle server maintenance, security patches, and system updates</span>
                                        </li>
                                    </ul>
                                </div>
                                <p className="text-lg text-gray-700">
                                    The result? Businesses can operate more efficiently, without the burden of managing infrastructure, and focus on delivering value to customers – whether that's building apps, analysing data, or supporting remote teams.
                                </p>
                            </div>
                        </section>

                        {/* Applications and Uses - This section was already there, keeping it */}
                        <section id="applications" className="mb-16 scroll-mt-24">
                            <h2 className="text-4xl font-bold mb-8 text-gray-900">Applications and uses of cloud computing</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8">
                                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Common Applications</h3>
                                    <ul className="space-y-4">
                                        {[
                                            'Create cloud-native applications',
                                            'Store, back up, and recover data',
                                            'Stream audio and video',
                                            'Deliver software on demand',
                                            'Test and build applications',
                                            'Analyse data with big data analytics',
                                        ].map((app, index) => (
                                            <li key={index} className="flex items-center">
                                                <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                                                <span className="text-gray-800">{app}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
                                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Examples</h3>
                                    <ul className="space-y-4">
                                        {[
                                            'E-commerce platforms (like Amazon)',
                                            'Collaboration tools (Teams, Slack, Zoom)',
                                            'CRM systems (like Salesforce)',
                                            'Streaming services (Netflix, Spotify)',
                                            'Data analytics platforms',
                                            'IoT and edge computing solutions',
                                        ].map((example, index) => (
                                            <li key={index} className="flex items-center">
                                                <div className="w-3 h-3 bg-purple-500 rounded-full mr-4"></div>
                                                <span className="text-gray-800">{example}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Examples of Cloud Computing - ADDED NEW SECTION */}
                        <section id="examples" className="mb-16 scroll-mt-24">
                            <h2 className="text-4xl font-bold mb-8 text-gray-900">Examples of cloud computing</h2>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-xl text-gray-700 mb-8">
                                    Cloud computing is everywhere, powering some of the most familiar services and platforms we use daily. Here are some examples you may be familiar with:
                                </p>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
                                        <h3 className="text-2xl font-bold mb-6 text-gray-900">E-commerce platforms</h3>
                                        <p className="text-gray-700 mb-4">
                                            Online retailers like Amazon use cloud infrastructure to manage massive amounts of data and traffic, especially during peak shopping seasons.
                                        </p>
                                        <div className="flex items-center">
                                            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">Handles millions of transactions</span>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">Scales automatically during sales events</span>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
                                        <h3 className="text-2xl font-bold mb-6 text-gray-900">Collaboration tools</h3>
                                        <p className="text-gray-700 mb-4">
                                            Services like Microsoft Teams, Slack, or Zoom use the cloud to offer instant collaboration, file sharing, and communication for remote teams.
                                        </p>
                                        <div className="flex items-center">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">Real-time communication</span>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">Secure file storage and sharing</span>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
                                        <h3 className="text-2xl font-bold mb-6 text-gray-900">CRM systems</h3>
                                        <p className="text-gray-700 mb-4">
                                            Cloud-based CRM solutions, like Salesforce, help businesses with customer data protection, simplify workflows, and improve customer service.
                                        </p>
                                        <div className="flex items-center">
                                            <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">Accessible from anywhere</span>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">Real-time customer insights</span>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
                                        <h3 className="text-2xl font-bold mb-6 text-gray-900">Streaming services</h3>
                                        <p className="text-gray-700 mb-4">
                                            Netflix, Spotify, and other streaming platforms rely entirely on cloud infrastructure to deliver content to millions of users worldwide.
                                        </p>
                                        <div className="flex items-center">
                                            <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">Global content delivery</span>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">Personalized recommendations</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Future Trends - ADDED NEW SECTION */}
                        <section id="future" className="mb-16 scroll-mt-24">
                            <h2 className="text-4xl font-bold mb-8 text-gray-900">Future of cloud computing and trends to watch for</h2>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-xl text-gray-700 mb-8">
                                    The future of cloud computing is shaping up to be even more dynamic and innovative. Here are key trends that are transforming the cloud landscape:
                                </p>
                                <div className="space-y-8">
                                    <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-2xl">
                                        <h3 className="text-2xl font-bold mb-4 text-gray-900">Edge Computing</h3>
                                        <p className="text-gray-700 mb-4">
                                            The rise of edge computing brings data processing closer to users, reducing latency and improving performance for real-time applications.
                                        </p>
                                        <div className="flex items-center text-gray-600">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            <span>Faster response times for IoT devices</span>
                                        </div>
                                        <div className="flex items-center text-gray-600 mt-2">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            <span>Reduced bandwidth costs</span>
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
                                        <h3 className="text-2xl font-bold mb-4 text-gray-900">AI and Machine Learning Integration</h3>
                                        <p className="text-gray-700 mb-4">
                                            Custom AI and machine learning will continue to integrate into cloud platforms, making it possible to make even smarter, more data-driven decision-making for businesses.
                                        </p>
                                        <div className="flex items-center text-gray-600">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                            <span>Automated business insights</span>
                                        </div>
                                        <div className="flex items-center text-gray-600 mt-2">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                            <span>Predictive analytics capabilities</span>
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl">
                                        <h3 className="text-2xl font-bold mb-4 text-gray-900">Sustainability Focus</h3>
                                        <p className="text-gray-700 mb-4">
                                            Sustainability is also gaining traction, with more cloud providers focusing on eco-friendly data centers to reduce their carbon footprint.
                                        </p>
                                        <div className="flex items-center text-gray-600">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            <span>Renewable energy-powered data centers</span>
                                        </div>
                                        <div className="flex items-center text-gray-600 mt-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            <span>Improved energy efficiency</span>
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-2xl">
                                        <h3 className="text-2xl font-bold mb-4 text-gray-900">Hybrid and Multicloud Strategies</h3>
                                        <p className="text-gray-700 mb-4">
                                            As businesses continue to adopt hybrid and multicloud strategies, expect to see more customization and flexibility in how companies use the cloud to meet their needs.
                                        </p>
                                        <div className="flex items-center text-gray-600">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                                            <span>Vendor independence</span>
                                        </div>
                                        <div className="flex items-center text-gray-600 mt-2">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                                            <span>Optimized cost and performance</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* How to Choose - ADDED NEW SECTION */}
                        <section id="choose-solution" className="mb-16 scroll-mt-24">
                            <h2 className="text-4xl font-bold mb-8 text-gray-900">How to choose the best cloud computing solution</h2>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-xl text-gray-700 mb-8">
                                    Choosing the right cloud computing solution depends on your business needs, goals, and resources. Here's a step-by-step guide to help you make the best decision:
                                </p>
                                <div className="grid md:grid-cols-2 gap-8 mb-12">
                                    <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
                                        <h3 className="text-2xl font-bold mb-6 text-gray-900">1. Evaluate Your Needs</h3>
                                        <ul className="space-y-4">
                                            <li className="flex items-start">
                                                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                                <span className="text-gray-800"><strong>Scalability requirements</strong> – How much growth do you anticipate?</span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                                <span className="text-gray-800"><strong>Service types needed</strong> – IaaS, PaaS, SaaS, or a combination?</span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                                <span className="text-gray-800"><strong>Security requirements</strong> – Industry compliance, data sensitivity</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
                                        <h3 className="text-2xl font-bold mb-6 text-gray-900">2. Consider Provider Flexibility</h3>
                                        <ul className="space-y-4">
                                            <li className="flex items-start">
                                                <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                                <span className="text-gray-800"><strong>Pricing models</strong> – Pay-as-you-go, reserved instances, spot pricing</span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                                <span className="text-gray-800"><strong>Service levels</strong> – Uptime guarantees, support response times</span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                                <span className="text-gray-800"><strong>Support options</strong> – 24/7 support, dedicated account managers</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-2xl">
                                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Key Considerations</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-xl font-bold mb-4">For Development Needs</h4>
                                            <ul className="space-y-3">
                                                <li className="flex items-center">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                                    <span>Platforms supporting cloud-native development</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                                    <span>DevOps and CI/CD integration</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                                    <span>Container and microservices support</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-4">For Security & Compliance</h4>
                                            <ul className="space-y-3">
                                                <li className="flex items-center">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                                    <span>Strong data protection options</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                                    <span>Industry-specific compliance certifications</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                                    <span>Encryption and access control features</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                                        <p className="text-lg text-gray-800 italic">
                                            The key is to find a solution that grows with your business, integrates seamlessly with existing tools, and meets your operational needs without over-complicating your IT infrastructure.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-12 text-white text-center">
                            <h2 className="text-3xl font-bold mb-6">Ready to take the next step?</h2>
                            <p className="text-xl mb-8 max-w-2xl mx-auto">
                                Try our Platform Services for 30 days and experience the power of cloud computing.
                            </p>
                            <button className="px-12 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                                Start Your Free Trial
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CloudComputingPage;