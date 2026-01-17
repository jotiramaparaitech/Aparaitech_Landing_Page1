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
        <div className="min-h-screen bg-white text-gray-900 pt-16 md:pt-0"> {/* ADDED: pt-16 for mobile */}
            {/* Hero Section - FIXED: Added more top padding */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 pt-24 pb-16 md:pt-32 md:pb-24"> {/* CHANGED: Increased padding */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8"> {/* CHANGED: Smaller text on mobile */}
                        Build Trust and Transparency with Protection Built into All Our Products
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 md:mb-12"> {/* CHANGED: Smaller text on mobile */}
                        Across sales, service, marketing, and more, we're dedicated to keeping your customers' data safe and secure, building a trusted digital world.
                    </p>
                </div>
            </div>

            {/* Main Content Area - FIXED: Adjusted padding */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"> {/* CHANGED: Adjusted padding */}
                {/* In-page Navigation - FIXED: Adjusted positioning */}
                <div className="sticky top-16 md:top-20 bg-white z-40 border-b mb-8 md:mb-12"> {/* CHANGED: top-16 for mobile */}
                    <div className="flex overflow-x-auto space-x-1 py-3 md:py-4"> {/* CHANGED: Adjusted padding */}
                        {pageSections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => {
                                    setActiveSection(section.id);
                                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={`px-4 md:px-6 py-2 md:py-3 whitespace-nowrap rounded-lg font-medium text-sm md:text-base transition ${activeSection === section.id
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {section.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Overview Section - FIXED: Adjusted spacing */}
                <section id="overview" className="mb-16 md:mb-20 scroll-mt-24 md:scroll-mt-32"> {/* CHANGED: Adjusted scroll margin */}
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Create Transparent, Secure Customer Experiences with Platform</h2>
                        <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8">
                            As data intelligence becomes more prevalent as a way for companies to understand and better serve customers, companies must remain accountable for safeguarding the privacy and security of individuals' data. As the leading CRM platform, we provide companies like yours with tools to build trust while enhancing customer experiences.
                        </p>
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 md:p-8 rounded-2xl border-l-4 border-blue-600 mb-8 md:mb-12"> {/* CHANGED: Adjusted padding */}
                            <p className="text-xl md:text-2xl font-semibold text-gray-900">
                                Gain increased transparency and control of your customers' data, while harnessing the power of that data to connect with customers in new ways.
                            </p>
                        </div>
                        <p className="text-base md:text-lg text-gray-700"> {/* CHANGED: Adjusted text size */}
                            We offer customers a robust data processing addendum containing strong privacy commitments. This addendum contains data transfer mechanisms to enable our customers to lawfully transfer personal data to us from any geography by relying (depending on the service) on our Processor Binding Corporate Rules or the European Commission's standard contractual clauses. This addendum also contains specific provisions to assist customers in their compliance with applicable data protection laws.
                        </p>
                    </div>
                </section>

                {/* Core Security Platform Section */}
                <section id="core-platform" className="mb-16 md:mb-20 scroll-mt-24 md:scroll-mt-32"> {/* CHANGED: Adjusted scroll margin */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Security Built Into Every Layer of the Platform</h2>
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"> {/* CHANGED: Adjusted gaps */}
                        {platformFeatures.map((feature, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8 hover:shadow-xl transition-shadow">
                                <div className="text-4xl md:text-5xl mb-4 md:mb-6">{feature.icon}</div> {/* CHANGED: Adjusted icon size */}
                                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">{feature.title}</h3>
                                <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">{feature.description}</p> {/* CHANGED: Adjusted text size */}
                                <ul className="space-y-2 md:space-y-3"> {/* CHANGED: Adjusted spacing */}
                                    {feature.features.map((item, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 md:mr-3"></div>
                                            <span className="text-sm md:text-base">{item}</span> {/* CHANGED: Adjusted text size */}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Compliance Frameworks Display */}
                    <div className="bg-gray-50 rounded-2xl p-6 md:p-10"> {/* CHANGED: Adjusted padding */}
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Global Compliance & Certifications</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"> {/* CHANGED: Adjusted gaps */}
                            {complianceFrameworks.map((framework, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 md:p-6 text-center shadow-sm hover:shadow-md transition"> {/* CHANGED: Adjusted padding */}
                                    <div className="text-2xl md:text-3xl mb-2 md:mb-3">{framework.icon}</div> {/* CHANGED: Adjusted icon size */}
                                    <div className="font-bold text-sm md:text-lg mb-1">{framework.name}</div> {/* CHANGED: Adjusted text size */}
                                    <div className="text-xs md:text-sm text-gray-600">{framework.region}</div> {/* CHANGED: Adjusted text size */}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Data Governance & Compliance Section */}
                <section id="data-governance" className="mb-16 md:mb-20 scroll-mt-24 md:scroll-mt-32"> {/* CHANGED: Adjusted scroll margin */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Data Governance & Compliance Obligations</h2>
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12"> {/* CHANGED: Adjusted gap */}
                        <div>
                            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8"> {/* CHANGED: Adjusted text size */}
                                You may need to access, export, delete, or update customer data to comply with data protection regulations. Our platform offers customers a rich set of features to help you meet your legal obligations.
                            </p>
                            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8"> {/* CHANGED: Adjusted padding */}
                                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Key Privacy Rights Management Features</h3>
                                <ul className="space-y-4 md:space-y-6"> {/* CHANGED: Adjusted spacing */}
                                    {[
                                        { title: 'Restriction of Processing', desc: 'Restrict processing of specific data as required by regulations' },
                                        { title: 'Consent Management', desc: 'Track, manage, and record user consent preferences' },
                                        { title: 'Data Portability', desc: 'Export customer data in a structured, commonly used format' },
                                        { title: 'Right to Be Forgotten', desc: 'Securely and completely delete personal data' }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <div className="bg-blue-100 text-blue-600 rounded-lg p-2 md:p-3 mr-3 md:mr-4"> {/* CHANGED: Adjusted padding */}
                                                <span className="font-bold text-sm md:text-base">{idx + 1}</span> {/* CHANGED: Adjusted text size */}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-base md:text-lg mb-1">{item.title}</h4> {/* CHANGED: Adjusted text size */}
                                                <p className="text-gray-700 text-sm md:text-base">{item.desc}</p> {/* CHANGED: Adjusted text size */}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 md:p-10 text-white"> {/* CHANGED: Adjusted padding */}
                            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Data Processing Addendum</h3>
                            <p className="mb-6 md:mb-8 text-sm md:text-base"> {/* CHANGED: Adjusted text size */}
                                Our addendum contains robust data transfer mechanisms that support customers in legally transferring personal data to us from any region worldwide.
                            </p>
                            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10"> {/* CHANGED: Adjusted spacing */}
                                <li className="flex items-center">
                                    <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full mr-3 md:mr-4"></div> {/* CHANGED: Adjusted dot size */}
                                    <span className="text-sm md:text-base">Processor Binding Corporate Rules (Processor BCRs)</span> {/* CHANGED: Adjusted text size */}
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full mr-3 md:mr-4"></div> {/* CHANGED: Adjusted dot size */}
                                    <span className="text-sm md:text-base">EU Standard Contractual Clauses (SCCs)</span> {/* CHANGED: Adjusted text size */}
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full mr-3 md:mr-4"></div> {/* CHANGED: Adjusted dot size */}
                                    <span className="text-sm md:text-base">Supplemental terms for specific geographic regions</span> {/* CHANGED: Adjusted text size */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Security Shield Section */}
                <section id="security-shield" className="mb-16 md:mb-20 scroll-mt-24 md:scroll-mt-32"> {/* CHANGED: Adjusted scroll margin */}
                    <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-6 md:p-12 text-white"> {/* CHANGED: Adjusted padding */}
                        <div className="max-w-3xl">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Additional Layer of Trust: Security Shield Suite</h2>
                            <p className="text-lg md:text-xl mb-6 md:mb-10 opacity-90"> {/* CHANGED: Adjusted text size */}
                                We offer an additional layer of trust with Platform Encryption, Event Monitoring, and Field Audit Trail, providing enterprise-grade security and compliance capabilities for critical business data.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 md:gap-8"> {/* CHANGED: Adjusted gap */}
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
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6"> {/* CHANGED: Adjusted padding */}
                                        <div className="text-2xl md:text-3xl mb-3 md:mb-4">{item.icon}</div> {/* CHANGED: Adjusted icon size */}
                                        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{item.title}</h3> {/* CHANGED: Adjusted text size */}
                                        <p className="opacity-80 text-sm md:text-base">{item.desc}</p> {/* CHANGED: Adjusted text size */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Privacy Management Center Section */}
                <section id="privacy-center" className="mb-16 md:mb-20 scroll-mt-24 md:scroll-mt-32"> {/* CHANGED: Adjusted scroll margin */}
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Privacy Management Center</h2>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"> {/* CHANGED: Adjusted text size */}
                            Your complete privacy and data management solution that simplifies data privacy, compliance, and archiving.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"> {/* CHANGED: Adjusted gap */}
                        <div>
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 md:p-10"> {/* CHANGED: Adjusted padding */}
                                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Centralized Privacy Management</h3>
                                <ul className="space-y-4 md:space-y-6"> {/* CHANGED: Adjusted spacing */}
                                    {[
                                        'Unified data catalog and classification',
                                        'Automated Data Subject Access Request (DSAR) processing',
                                        'Privacy Impact Assessment (PIA) workflows',
                                        'Compliance reporting & dashboards'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <div className="w-6 h-6 md:w-8 md:h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm md:text-base mr-3 md:mr-4"> {/* CHANGED: Adjusted size */}
                                                ✓
                                            </div>
                                            <span className="text-sm md:text-lg font-medium">{item}</span> {/* CHANGED: Adjusted text size */}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Simplify Global Compliance Processes</h3>
                            <p className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base"> {/* CHANGED: Adjusted text size */}
                                The Privacy Management Center helps you manage privacy obligations across multiple jurisdictions worldwide, from GDPR to CCPA and other regional regulations, all within a unified platform.
                            </p>
                            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8"> {/* CHANGED: Adjusted padding */}
                                <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Key Benefits</h4> {/* CHANGED: Adjusted text size */}
                                <div className="grid grid-cols-2 gap-4 md:gap-6"> {/* CHANGED: Adjusted gap */}
                                    <div>
                                        <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">70%</div> {/* CHANGED: Adjusted text size */}
                                        <div className="text-gray-700 text-sm md:text-base">Reduction in manual compliance work time</div> {/* CHANGED: Adjusted text size */}
                                    </div>
                                    <div>
                                        <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">100%</div> {/* CHANGED: Adjusted text size */}
                                        <div className="text-gray-700 text-sm md:text-base">Auditable tracking of DSAR requests</div> {/* CHANGED: Adjusted text size */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Us Section */}
                <section id="contact" className="scroll-mt-24 md:scroll-mt-32"> {/* CHANGED: Adjusted scroll margin */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-6 md:p-12 text-white text-center"> {/* CHANGED: Adjusted padding */}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">We Understand That Better Customer Experiences Start with Data Privacy</h2>
                        <p className="text-lg md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto"> {/* CHANGED: Adjusted text size */}
                            Contact us if you have questions, comments, or requests related to our Privacy Statement, our data privacy practices, or how we embrace privacy and data protection laws.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12"> {/* CHANGED: Adjusted gap */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8">
                                <div className="text-2xl md:text-3xl mb-3 md:mb-4">📧</div> {/* CHANGED: Adjusted icon size */}
                                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Email Contact</h3> {/* CHANGED: Adjusted text size */}
                                <p className="text-sm md:text-base">info@aparaitech.org</p> {/* CHANGED: Adjusted text size */}
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8">
                                <div className="text-2xl md:text-3xl mb-3 md:mb-4">📞</div> {/* CHANGED: Adjusted icon size */}
                                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Phone Support</h3> {/* CHANGED: Adjusted text size */}
                                <p className="text-sm md:text-base">+6364326342</p> {/* CHANGED: Adjusted text size */}
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8">
                                <div className="text-2xl md:text-3xl mb-3 md:mb-4">📋</div> {/* CHANGED: Adjusted icon size */}
                                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Documentation Center</h3> {/* CHANGED: Adjusted text size */}
                                <p className="text-sm md:text-base">Access complete Help & Training documentation</p> {/* CHANGED: Adjusted text size */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SecurePlatformPage;