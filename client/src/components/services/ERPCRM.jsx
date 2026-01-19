// src/components/services/ERPCRM.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Database, Users, Link, TrendingUp, Shield, BarChart3, Zap, Settings } from 'lucide-react';

const ERPCRM = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    implementations: 0,
    efficiency: 0,
    clients: 0,
    integration: 0
  });

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
          [key]: start.toFixed(0)
        }));
      }, 16);
    };

    animateCounter(300, 'implementations');
    animateCounter(50, 'efficiency');
    animateCounter(200, 'clients');
    animateCounter(500, 'integration');
  }, []);

  const capabilities = [
    {
      title: 'Custom ERP Solutions',
      description: 'Tailored ERP systems to streamline business operations and improve efficiency.',
      icon: <Database className="w-8 h-8" />,
      features: ['Inventory management', 'Financial modules', 'Supply chain', 'HR management'],
      color: 'from-blue-500 to-indigo-500',
      modules: ['Finance', 'Inventory', 'HR', 'Manufacturing']
    },
    {
      title: 'CRM Integration',
      description: 'Seamless CRM integrations to enhance customer relationships and sales processes.',
      icon: <Users className="w-8 h-8" />,
      features: ['Salesforce integration', 'Customer data management', 'Sales automation', 'Marketing automation'],
      color: 'from-purple-500 to-pink-500',
      platforms: ['Salesforce', 'HubSpot', 'Microsoft Dynamics', 'Zoho']
    },
    {
      title: 'System Integration',
      description: 'Connect ERP/CRM with existing business systems for unified operations.',
      icon: <Link className="w-8 h-8" />,
      features: ['API integration', 'Data synchronization', 'Third-party connectors', 'Real-time sync'],
      color: 'from-green-500 to-emerald-500',
      integrations: ['E-commerce', 'Payment Gateways', 'Accounting', 'Email Marketing']
    },
    {
      title: 'Cloud ERP/CRM',
      description: 'Modern cloud-based ERP and CRM solutions for scalability and accessibility.',
      icon: <Zap className="w-8 h-8" />,
      features: ['Cloud deployment', 'Mobile access', 'Auto-scaling', 'Multi-tenant'],
      color: 'from-orange-500 to-red-500',
      benefits: ['Lower costs', 'Better accessibility', 'Automatic updates']
    },
    {
      title: 'Analytics & Reporting',
      description: 'Advanced analytics and reporting for data-driven business decisions.',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Custom dashboards', 'Real-time reports', 'Business intelligence', 'Predictive analytics'],
      color: 'from-cyan-500 to-blue-500',
      reports: ['Sales Reports', 'Financial Reports', 'Inventory Reports', 'Performance Metrics']
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance for sensitive business data.',
      icon: <Shield className="w-8 h-8" />,
      features: ['Data encryption', 'Access control', 'Audit trails', 'GDPR compliance'],
      color: 'from-red-500 to-pink-500',
      standards: ['GDPR', 'SOC 2', 'ISO 27001', 'HIPAA']
    }
  ];

  const erpModules = [
    { module: 'Financial Management', description: 'Complete financial accounting and reporting' },
    { module: 'Inventory Management', description: 'Real-time inventory tracking and optimization' },
    { module: 'Supply Chain', description: 'End-to-end supply chain management' },
    { module: 'Human Resources', description: 'HR management and payroll processing' },
    { module: 'Manufacturing', description: 'Production planning and quality control' },
    { module: 'Project Management', description: 'Project tracking and resource management' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-16 md:pt-0 overflow-x-hidden">
      {/* Back Button */}
      <button
        onClick={() => navigate('/#services')}
        className="fixed top-24 right-6 md:right-8 z-40 flex items-center gap-2 text-blue-600 hover:text-blue-700 bg-white/80 backdrop-blur-sm hover:bg-gray-50/80 px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 hover:border-blue-500/50"
      >
        ← Back
      </button>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Database className="w-4 h-4" />
              Enterprise Solutions
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ERP / CRM Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              Custom ERP and CRM integrations to streamline operations, enhance customer relationships, 
              and drive business growth with unified systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate('/#contact-form')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Started
              </button>
              <button
                onClick={() => navigate('/#services')}
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
              >
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: stats.implementations, suffix: '+', label: 'Implementations', icon: <Database className="w-6 h-6" /> },
              { value: stats.efficiency, suffix: '%', label: 'Efficiency Gain', icon: <TrendingUp className="w-6 h-6" /> },
              { value: stats.clients, suffix: '+', label: 'Enterprise Clients', icon: <Users className="w-6 h-6" /> },
              { value: stats.integration, suffix: '+', label: 'Integrations', icon: <Link className="w-6 h-6" /> }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-3 text-blue-600">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our ERP/CRM Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive enterprise solutions for business operations and customer management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${cap.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {cap.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{cap.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Key Features:</p>
                  <ul className="space-y-2">
                    {cap.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <span className="text-blue-500 mr-2 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {cap.modules && (
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-500 mb-2">Modules:</p>
                    <div className="flex flex-wrap gap-2">
                      {cap.modules.map((item, i) => (
                        <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {cap.platforms && (
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-500 mb-2">Platforms:</p>
                    <div className="flex flex-wrap gap-2">
                      {cap.platforms.map((item, i) => (
                        <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {cap.integrations && (
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-500 mb-2">Integrations:</p>
                    <div className="flex flex-wrap gap-2">
                      {cap.integrations.map((item, i) => (
                        <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {cap.benefits && (
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-500 mb-2">Benefits:</p>
                    <div className="flex flex-wrap gap-2">
                      {cap.benefits.map((item, i) => (
                        <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {cap.reports && (
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-500 mb-2">Reports:</p>
                    <div className="flex flex-wrap gap-2">
                      {cap.reports.map((item, i) => (
                        <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {cap.standards && (
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-500 mb-2">Standards:</p>
                    <div className="flex flex-wrap gap-2">
                      {cap.standards.map((item, i) => (
                        <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Modules Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">ERP Modules</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive modules to manage all aspects of your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {erpModules.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.module}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Streamline Your Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how ERP/CRM solutions can transform your business processes and customer relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/#contact-form')}
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Schedule Consultation
            </button>
            <button
              onClick={() => navigate('/#services')}
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-all duration-300"
            >
              Explore More Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ERPCRM;
