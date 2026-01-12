// src/components/services/CloudSolutions.jsx
import React, { useState } from 'react';

const CloudSolutions = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24 text-gray-900 overflow-x-hidden"> {/* CHANGED: mt-10 to pt-20 md:pt-24 */}
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Cloud Computing Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Harness the power of cloud technology to transform your business operations, 
              enhance scalability, and drive innovation with our comprehensive cloud computing solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Rest of the code remains exactly the same as the fixed version above */}
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 mb-8 overflow-x-auto">
          <nav className="flex space-x-8 min-w-max pb-2 hide-scrollbar">
            {['overview', 'types', 'services', 'benefits', 'applications'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 text-lg font-medium border-b-2 transition-colors whitespace-nowrap flex-shrink-0 ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="py-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">What is Cloud Computing?</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Cloud computing delivers computing resources—servers, storage, databases, networking, 
                  and software—over the internet on a pay-as-you-go basis. This eliminates the need for 
                  businesses to purchase, manage, or maintain physical hardware, providing instant access 
                  to powerful infrastructure whenever needed.
                </p>
                <div className="bg-blue-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">How It Works</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { number: '1', title: 'Access Resources', desc: 'Connect to cloud infrastructure via internet' },
                      { number: '2', title: 'Scale On-Demand', desc: 'Adjust resources based on business needs' },
                      { number: '3', title: 'Pay As You Go', desc: 'Only pay for what you actually use' }
                    ].map((step, idx) => (
                      <div key={idx} className="text-center">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                          {step.number}
                        </div>
                        <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                        <p className="text-gray-600">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Types Tab */}
          {activeTab === 'types' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Cloud Deployment Models</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Public Cloud',
                    desc: 'Cost-effective, flexible resources shared among multiple customers',
                    features: ['Pay-per-use pricing', 'No hardware management', 'Automatic scaling'],
                    color: 'from-blue-500 to-blue-400'
                  },
                  {
                    title: 'Private Cloud',
                    desc: 'Dedicated infrastructure for maximum control and security',
                    features: ['Enterprise security', 'Custom configurations', 'Regulatory compliance'],
                    color: 'from-purple-500 to-purple-400'
                  },
                  {
                    title: 'Hybrid Cloud',
                    desc: 'Combine private and public clouds for optimal flexibility',
                    features: ['Data sovereignty', 'Cost optimization', 'Workload flexibility'],
                    color: 'from-green-500 to-green-400'
                  },
                  {
                    title: 'Multi-Cloud',
                    desc: 'Use multiple providers to avoid vendor lock-in',
                    features: ['Best-of-breed services', 'Risk distribution', 'Cost optimization'],
                    color: 'from-orange-500 to-orange-400'
                  }
                ].map((model, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className={`h-2 bg-gradient-to-r ${model.color} rounded-t-lg -mx-6 -mt-6 mb-6`}></div>
                    <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
                    <p className="text-gray-600 mb-6">{model.desc}</p>
                    <ul className="space-y-2">
                      {model.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center">
                          <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Cloud Computing Services</h2>
              <div className="space-y-8">
                {[
                  {
                    title: 'Infrastructure as a Service (IaaS)',
                    desc: 'Access virtualized computing resources over the internet',
                    useCases: ['Website hosting', 'Development environments', 'Storage solutions'],
                    icon: '🖥️'
                  },
                  {
                    title: 'Platform as a Service (PaaS)',
                    desc: 'Complete development platform without infrastructure management',
                    useCases: ['App development', 'Database management', 'Business analytics'],
                    icon: '🚀'
                  },
                  {
                    title: 'Software as a Service (SaaS)',
                    desc: 'Ready-to-use software applications delivered online',
                    useCases: ['CRM systems', 'Collaboration tools', 'Email services'],
                    icon: '📱'
                  },
                  {
                    title: 'Serverless Computing',
                    desc: 'Run applications without managing servers or infrastructure',
                    useCases: ['Event-driven apps', 'APIs and microservices', 'Data processing'],
                    icon: '⚡'
                  }
                ].map((service, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-6">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                        <p className="text-gray-600 mb-6">{service.desc}</p>
                        <div className="bg-gray-50 rounded-xl p-6">
                          <h4 className="font-bold text-lg mb-4">Common Use Cases:</h4>
                          <div className="flex flex-wrap gap-3">
                            {service.useCases.map((useCase, uIdx) => (
                              <span key={uIdx} className="px-4 py-2 bg-white border border-gray-200 rounded-lg whitespace-nowrap">
                                {useCase}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Why Choose Our Cloud Solutions?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: '💼', title: 'Cost Efficiency', desc: 'Reduce IT costs by up to 40% with pay-as-you-go pricing' },
                  { icon: '📈', title: 'Scalability', desc: 'Instantly scale resources to meet business demands' },
                  { icon: '🛡️', title: 'Security', desc: 'Enterprise-grade security with 99.9% uptime SLA' },
                  { icon: '⚡', title: 'Performance', desc: 'High-performance computing with global edge network' },
                  { icon: '🌍', title: 'Global Reach', desc: 'Deploy applications closer to your users worldwide' },
                  { icon: '🔧', title: 'Managed Services', desc: '24/7 monitoring, support, and maintenance' }
                ].map((benefit, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Applications Tab */}
          {activeTab === 'applications' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Cloud Computing Applications</h2>
              <div className="space-y-6">
                {[
                  {
                    category: 'Business Applications',
                    applications: ['CRM Systems', 'ERP Solutions', 'Collaboration Tools', 'HR Management']
                  },
                  {
                    category: 'Development & DevOps',
                    applications: ['CI/CD Pipelines', 'Container Orchestration', 'Microservices', 'API Management']
                  },
                  {
                    category: 'Data & Analytics',
                    applications: ['Big Data Processing', 'Business Intelligence', 'Machine Learning', 'Data Warehousing']
                  },
                  {
                    category: 'Infrastructure',
                    applications: ['Disaster Recovery', 'Content Delivery', 'Virtual Desktops', 'IoT Platforms']
                  }
                ].map((section, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-6">{section.category}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {section.applications.map((app, aIdx) => (
                        <div key={aIdx} className="bg-gray-50 rounded-lg p-4 text-center">
                          <span className="font-medium">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-12 text-center text-white mt-12">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with Cloud Solutions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your cloud journey with a free consultation and discover how our solutions can drive your business growth.
          </p>
        </div>
      </div>

      {/* Add custom CSS for hiding scrollbar */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CloudSolutions;