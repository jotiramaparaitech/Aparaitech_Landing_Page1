// src/components/services/SecurePlatformPage.jsx
import React, { useState } from 'react';

const SecurePlatformPage = () => {
    const [activeSection, setActiveSection] = useState('overview');

    // Page section navigation
    const pageSections = [
        { id: 'overview', label: 'Overview' },
        { id: 'core-platform', label: 'Core Security Platform' },
        { id: 'data-governance', label: 'Data Governance & Compliance' },
        { id: 'security-shield', label: 'Security Shield Suite' },
        { id: 'privacy-center', label: 'Privacy Management Center' },
        { id: 'contact', label: 'Contact Us' }
    ];

    // Platform features data
    const platformFeatures = [
        {
            title: 'Infrastructure Security',
            description: 'Provides data replication, backup, and disaster recovery planning at the infrastructure layer to ensure business continuity.',
            icon: '🏗️',
            features: ['Global data center redundancy', 'Automated backups', 'Disaster recovery as a service']
        },
        {
            title: 'Network & Transport Security',
            description: 'Network services feature encryption in transit and advanced threat detection to protect data during transmission.',
            icon: '🛡️',
            features: ['TLS 1.2+ encrypted transport', 'Real-time threat intelligence', 'DDoS protection']
        },
        {
            title: 'Application & Identity Security',
            description: 'Application services implement strict authentication, authorization, and user permission management ensuring least privilege access.',
            icon: '🔑',
            features: ['Multi-factor authentication (MFA)', 'Single sign-on (SSO)', 'Role-based access control']
        }
    ];

    // Compliance frameworks data
    const complianceFrameworks = [
        { name: 'GDPR', region: 'European Union', icon: '🇪🇺' },
        { name: 'CCPA', region: 'California, USA', icon: '🇺🇸' },
        { name: 'SOC 2', region: 'Global', icon: '🌍' },
        { name: 'ISO 27001', region: 'Global', icon: '📜' },
        { name: 'HIPAA', region: 'Healthcare', icon: '🏥' },
        { name: 'PCI DSS', region: 'Payment Card Industry', icon: '💳' }
    ];

    return (
        <div className="min-h-screen mt-5 bg-white text-gray-900">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-10 md:py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                        Build Trust and Transparency with Protection Built into All Our Products
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12">
                        Across sales, service, marketing, and more, we're dedicated to keeping your customers' data safe and secure, building a trusted digital environment.
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
                                    ? 'bg-blue-600 text-white'
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
                        <h2 className="text-4xl font-bold mb-8">Create Transparent, Secure Customer Experiences with Platform</h2>
                        <p className="text-xl text-gray-700 mb-8">
                            As data intelligence becomes more prevalent as a way for companies to understand and better serve customers, companies must remain accountable for safeguarding the privacy and security of individuals' data. As the leading CRM platform, we provide companies like yours with tools to build trust while enhancing customer experiences.
                        </p>
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border-l-4 border-blue-600 mb-12">
                            <p className="text-2xl font-semibold text-gray-900">
                                Gain increased transparency and control of your customers' data, while harnessing the power of that data to connect with customers in new ways.
                            </p>
                        </div>
                        <p className="text-lg text-gray-700">
                            We offer customers a robust data processing addendum containing strong privacy commitments. This addendum contains data transfer mechanisms to enable our customers to lawfully transfer personal data to us from any geography by relying (depending on the service) on our Processor Binding Corporate Rules or the European Commission's standard contractual clauses. This addendum also contains specific provisions to assist customers in their compliance with applicable data protection laws.
                        </p>
                    </div>
                </section>

                {/* Core Security Platform Section */}
                <section id="core-platform" className="mb-20 scroll-mt-32">
                    <h2 className="text-4xl font-bold mb-12">Security Built Into Every Layer of the Platform</h2>
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {platformFeatures.map((feature, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow">
                                <div className="text-5xl mb-6">{feature.icon}</div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                                <p className="text-gray-700 mb-6">{feature.description}</p>
                                <ul className="space-y-3">
                                    {feature.features.map((item, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Compliance Frameworks Display */}
                    <div className="bg-gray-50 rounded-2xl p-10">
                        <h3 className="text-3xl font-bold mb-8 text-center">Global Compliance & Certifications</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {complianceFrameworks.map((framework, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
                                    <div className="text-3xl mb-3">{framework.icon}</div>
                                    <div className="font-bold text-lg mb-1">{framework.name}</div>
                                    <div className="text-sm text-gray-600">{framework.region}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Data Governance & Compliance Section */}
                <section id="data-governance" className="mb-20 scroll-mt-32">
                    <h2 className="text-4xl font-bold mb-8">Data Governance & Compliance Obligations</h2>
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <p className="text-lg text-gray-700 mb-8">
                                You may need to access, export, delete, or update customer data to comply with data protection regulations. Our platform offers customers a rich set of features to help you meet your legal obligations.
                            </p>
                            <div className="bg-white border border-gray-200 rounded-xl p-8">
                                <h3 className="text-2xl font-bold mb-6">Key Privacy Rights Management Features</h3>
                                <ul className="space-y-6">
                                    {[
                                        { title: 'Restriction of Processing', desc: 'Restrict processing of specific data as required by regulations' },
                                        { title: 'Consent Management', desc: 'Track, manage, and record user consent preferences' },
                                        { title: 'Data Portability', desc: 'Export customer data in a structured, commonly used format' },
                                        { title: 'Right to Be Forgotten', desc: 'Securely and completely delete personal data' }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <div className="bg-blue-100 text-blue-600 rounded-lg p-3 mr-4">
                                                <span className="font-bold">{idx + 1}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                                <p className="text-gray-700">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-10 text-white">
                            <h3 className="text-2xl font-bold mb-6">Data Processing Addendum</h3>
                            <p className="mb-8">
                                Our addendum contains robust data transfer mechanisms that support customers in legally transferring personal data to us from any region worldwide.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center">
                                    <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                                    <span>Processor Binding Corporate Rules (Processor BCRs)</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                                    <span>EU Standard Contractual Clauses (SCCs)</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                                    <span>Supplemental terms for specific geographic regions</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Security Shield Section */}
                <section id="security-shield" className="mb-20 scroll-mt-32">
                    <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white">
                        <div className="max-w-3xl">
                            <h2 className="text-4xl font-bold mb-6">Additional Layer of Trust: Security Shield Suite</h2>
                            <p className="text-xl mb-10 opacity-90">
                                We offer an additional layer of trust with Platform Encryption, Event Monitoring, and Field Audit Trail, providing enterprise-grade security and compliance capabilities for critical business data.
                            </p>
                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    {
                                        title: 'Platform Encryption',
                                        desc: 'Encrypt sensitive data at rest, providing end-to-end data protection',
                                        icon: '🔐'
                                    },
                                    {
                                        title: 'Event Monitoring',
                                        desc: 'Monitor user activities in real-time, detecting anomalous behavior and security events',
                                        icon: '📊'
                                    },
                                    {
                                        title: 'Field Audit Trail',
                                        desc: 'Detailed tracking of field-level data changes to meet compliance audit requirements',
                                        icon: '📝'
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                        <div className="text-3xl mb-4">{item.icon}</div>
                                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                        <p className="opacity-80">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Privacy Management Center Section */}
                <section id="privacy-center" className="mb-20 scroll-mt-32">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-6">Privacy Management Center</h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Your complete privacy and data management solution that simplifies data privacy, compliance, and archiving.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-10">
                                <h3 className="text-2xl font-bold mb-6">Centralized Privacy Management</h3>
                                <ul className="space-y-6">
                                    {[
                                        'Unified data catalog and classification',
                                        'Automated Data Subject Access Request (DSAR) processing',
                                        'Privacy Impact Assessment (PIA) workflows',
                                        'Compliance reporting & dashboards'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-4">
                                                ✓
                                            </div>
                                            <span className="text-lg font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Simplify Global Compliance Processes</h3>
                            <p className="text-gray-700 mb-8">
                                The Privacy Management Center helps you manage privacy obligations across multiple jurisdictions worldwide, from GDPR to CCPA and other regional regulations, all within a unified platform.
                            </p>
                            <div className="bg-white border border-gray-200 rounded-xl p-8">
                                <h4 className="font-bold text-lg mb-4">Key Benefits</h4>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <div className="text-3xl font-bold text-blue-600 mb-2">70%</div>
                                        <div className="text-gray-700">Reduction in manual compliance work time</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                                        <div className="text-gray-700">Auditable tracking of DSAR requests</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Us Section */}
                <section id="contact" className="scroll-mt-32">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-white text-center">
                        <h2 className="text-4xl font-bold mb-6">We Understand That Better Customer Experiences Start with Data Privacy</h2>
                        <p className="text-xl mb-10 max-w-3xl mx-auto">
                            Contact us if you have questions, comments, or requests related to our Privacy Statement, our data privacy practices, or how we embrace privacy and data protection laws.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                                <div className="text-3xl mb-4">📧</div>
                                <h3 className="text-xl font-bold mb-3">Email Contact</h3>
                                <p>info@aparaitech.org</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                                <div className="text-3xl mb-4">📞</div>
                                <h3 className="text-xl font-bold mb-3">Phone Support</h3>
                                <p>+6364326342</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                                <div className="text-3xl mb-4">📋</div>
                                <h3 className="text-xl font-bold mb-3">Documentation Center</h3>
                                <p>Access complete Help & Training documentation</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SecurePlatformPage;