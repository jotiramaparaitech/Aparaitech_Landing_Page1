// src/components/services/SalesforceSolutionsPage.jsx
import React, { useState } from 'react';

const SalesforceSolutionsPage = () => {
    const [activeSection, setActiveSection] = useState('overview');

    // Page section navigation
    const pageSections = [
        { id: 'overview', label: 'Overview' },
        { id: 'implementation', label: 'Implementation' },
        { id: 'customization', label: 'Customization' },
        { id: 'integration', label: 'Integration' },
        { id: 'services', label: 'Services' },
        { id: 'contact', label: 'Contact Us' }
    ];

    // Implementation services data
    const implementationServices = [
        {
            title: 'Strategy & Planning',
            description: 'Comprehensive Salesforce strategy development aligned with your business goals and digital transformation roadmap.',
            icon: '🎯',
            features: ['Business process analysis', 'Roadmap development', 'ROI forecasting']
        },
        {
            title: 'Deployment & Configuration',
            description: 'End-to-end Salesforce deployment with optimal configuration for your specific industry and business needs.',
            icon: '⚙️',
            features: ['System configuration', 'Data migration', 'User setup & training']
        },
        {
            title: 'Post-Implementation Support',
            description: 'Ongoing support and optimization to ensure your Salesforce platform continues to deliver maximum value.',
            icon: '🛟',
            features: ['Performance monitoring', 'Regular optimization', 'User support']
        }
    ];

    // Customization services data
    const customizationServices = [
        {
            title: 'Custom Object Development',
            description: 'Create custom objects and fields to track unique business data specific to your organization.',
            icon: '📊',
            features: ['Custom fields & relationships', 'Page layouts', 'Record types']
        },
        {
            title: 'Apex & Lightning Components',
            description: 'Custom code development using Apex and Lightning components for advanced functionality.',
            icon: '💻',
            features: ['Apex classes & triggers', 'Lightning Web Components', 'Visualforce pages']
        },
        {
            title: 'Workflow Automation',
            description: 'Automate business processes with workflows, process builder, and flows.',
            icon: '🤖',
            features: ['Workflow rules', 'Process Builder', 'Flow automation']
        }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900 pt-16 md:pt-0"> {/* Added pt-16 for mobile, md:pt-0 for desktop */}
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-5 md:py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                        Unlock the Full Potential of Salesforce for Your Business
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12">
                        Helping businesses implement, customize, and integrate Salesforce for smarter processes, stronger customer relationships, and accelerated growth.
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* In-page Navigation */}
                <div className="sticky top-20 bg-white z-40 border-b mb-12">
                    <div className="flex overflow-x-auto space-x-1 py-4">
                        {pageSections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => {
                                    setActiveSection(section.id);
                                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={`px-6 py-3 whitespace-nowrap rounded-lg font-medium transition ${activeSection === section.id
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {section.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Overview Section */}
                <section id="overview" className="mb-20 scroll-mt-32">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-4xl font-bold mb-8">Transform Your Business with Salesforce integration</h2>
                        <p className="text-xl text-gray-700 mb-8">
                            As the world's #1 CRM platform, Salesforce empowers businesses to connect with customers in entirely new ways. Our expertise helps you harness this power through strategic implementation, intelligent customization, and seamless integration.
                        </p>
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl mb-12">
                            <p className="text-2xl font-semibold text-gray-900">
                                From initial strategy to ongoing optimization, we ensure your Salesforce investment delivers maximum ROI and drives sustainable business growth.
                            </p>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid md:grid-cols-4 gap-8 mt-12">
                        {[
                            { number: '150+', label: 'Projects Completed' },
                            { number: '40%', label: 'Average Efficiency Gain' },
                            { number: '99%', label: 'Client Satisfaction' },
                            { number: '24/7', label: 'Support Available' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold text-blue-500 mb-2">{stat.number}</div>
                                <div className="text-gray-700">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Implementation Section */}
                <section id="implementation" className="mb-20 scroll-mt-32">
                    <h2 className="text-4xl font-bold mb-12">Complete Salesforce Implementation</h2>
                    <p className="text-xl text-gray-700 mb-8">
                        From strategy to execution, we ensure seamless integration with your existing systems and business processes.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {implementationServices.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow">
                                <div className="text-5xl mb-6">{service.icon}</div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                                <p className="text-gray-700 mb-6">{service.description}</p>
                                <ul className="space-y-3">
                                    {service.features.map((item, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Implementation Process */}
                    <div className="bg-white rounded-2xl p-10 border border-gray-100">
                        <h3 className="text-3xl font-bold mb-8 text-center">Our Implementation Process</h3>
                        <div className="grid md:grid-cols-5 gap-6">
                            {[
                                { step: '1', title: 'Discovery', desc: 'Requirements analysis' },
                                { step: '2', title: 'Planning', desc: 'Solution design' },
                                { step: '3', title: 'Development', desc: 'Configuration & build' },
                                { step: '4', title: 'Testing', desc: 'Quality assurance' },
                                { step: '5', title: 'Launch', desc: 'Deployment & training' }
                            ].map((process, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                        {process.step}
                                    </div>
                                    <div className="font-bold text-lg mb-1">{process.title}</div>
                                    <div className="text-sm text-gray-600">{process.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Customization Section */}
                <section id="customization" className="mb-20 scroll-mt-32">
                    <h2 className="text-4xl font-bold mb-8">Tailored Salesforce Customization</h2>
                    <p className="text-xl text-gray-700 mb-12">
                        We create Salesforce solutions that match your unique business processes and requirements, extending platform capabilities to meet your specific needs.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {customizationServices.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow">
                                <div className="text-5xl mb-6">{service.icon}</div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                                <p className="text-gray-700 mb-6">{service.description}</p>
                                <ul className="space-y-3">
                                    {service.features.map((item, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Customization Examples */}
                    <div className="bg-white rounded-2xl p-10 border border-gray-100">
                        <h3 className="text-2xl font-bold mb-6">Customization Success Stories</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl p-6">
                                <h4 className="font-bold text-lg mb-3">Manufacturing Company</h4>
                                <p className="text-gray-700 mb-4">Customized Salesforce for complex supply chain tracking, reducing order processing time by 60%.</p>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                                    <span>Custom objects for inventory management</span>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-6">
                                <h4 className="font-bold text-lg mb-3">Financial Services</h4>
                                <p className="text-gray-700 mb-4">Built custom compliance workflows, automating 80% of regulatory reporting requirements.</p>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                                    <span>Automated compliance tracking</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="mb-20 scroll-mt-32">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-6">Comprehensive Salesforce Services</h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Beyond implementation and customization, we offer a full spectrum of Salesforce services to support your journey.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-10">
                                <h3 className="text-2xl font-bold mb-6">Managed Services</h3>
                                <ul className="space-y-6">
                                    {[
                                        'Continuous platform optimization',
                                        'Performance monitoring & tuning',
                                        'Security updates & patching',
                                        'User training & support',
                                        'Regular health checks'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">
                                                ✓
                                            </div>
                                            <span className="text-lg font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Why Choose Our Salesforce Solutions</h3>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: 'Certified Experts',
                                        desc: 'Our team includes Salesforce-certified architects, developers, and consultants.'
                                    },
                                    {
                                        title: 'Industry Experience',
                                        desc: 'Deep expertise across finance, healthcare, manufacturing, and retail sectors.'
                                    },
                                    {
                                        title: 'Proven Methodology',
                                        desc: 'Agile implementation approach with clear milestones and deliverables.'
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start space-x-4">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                            <p className="text-gray-700">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 bg-white rounded-xl p-8 border border-gray-100">
                                <h4 className="font-bold text-lg mb-4">Certifications</h4>
                                <div className="flex flex-wrap gap-4">
                                    {['Salesforce Admin', 'Platform Developer', 'App Builder', 'Sales Cloud', 'Service Cloud'].map((cert, idx) => (
                                        <span key={idx} className="px-4 py-2 bg-white border border-gray-300 rounded-lg">
                                            {cert}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="scroll-mt-32">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl p-12 text-white text-center">
                        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business with Salesforce?</h2>
                        <p className="text-xl mb-10 max-w-3xl mx-auto">
                            Book a free consultation to discover how our Salesforce solutions can drive efficiency, enhance customer relationships, and accelerate your business growth.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                                <div className="text-3xl mb-4">📞</div>
                                <h3 className="text-xl font-bold mb-3">Phone Consultation</h3>
                                <p>Schedule a 30-minute discovery call</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                                <div className="text-3xl mb-4">💼</div>
                                <h3 className="text-xl font-bold mb-3">Business Assessment</h3>
                                <p>Comprehensive needs analysis</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                                <div className="text-3xl mb-4">🎯</div>
                                <h3 className="text-xl font-bold mb-3">Proof of Concept</h3>
                                <p>Test-drive a customized solution</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default SalesforceSolutionsPage;