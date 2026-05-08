// src/components/services/DigitalTransformation.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RefreshCw, Settings, TrendingUp, Zap, Cloud, Shield, Users, BarChart3 } from 'lucide-react';

const DigitalTransformation = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    transformations: 0,
    efficiency: 0,
    cost: 0,
    clients: 0
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

    animateCounter(500, 'transformations');
    animateCounter(60, 'efficiency');
    animateCounter(45, 'cost');
    animateCounter(250, 'clients');
  }, []);

  const capabilities = [
    {
      title: 'Legacy Modernization',
      description: 'Transform legacy systems into modern, scalable solutions with minimal disruption.',
      icon: <RefreshCw className="w-8 h-8" />,
      features: ['System migration', 'Architecture redesign', 'Cloud migration', 'Data migration'],
      color: 'from-cyan-500 to-blue-500',
      benefits: ['Improved performance', 'Reduced maintenance', 'Better scalability']
    },
    {
      title: 'Process Automation',
      description: 'Automate business processes to improve efficiency and reduce manual errors.',
      icon: <Zap className="w-8 h-8" />,
      features: ['Workflow automation', 'RPA solutions', 'Business process optimization', 'Task automation'],
      color: 'from-purple-500 to-pink-500',
      benefits: ['Time savings', 'Error reduction', 'Cost optimization']
    },
    {
      title: 'Digital Strategy',
      description: 'Strategic consulting for digital transformation initiatives aligned with business goals.',
      icon: <TrendingUp className="w-8 h-8" />,
      features: ['Digital roadmap', 'Technology assessment', 'Change management', 'ROI analysis'],
      color: 'from-green-500 to-emerald-500',
      benefits: ['Clear direction', 'Risk mitigation', 'Better outcomes']
    },
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms for improved scalability and cost efficiency.',
      icon: <Cloud className="w-8 h-8" />,
      features: ['Cloud assessment', 'Migration planning', 'Hybrid cloud', 'Multi-cloud'],
      color: 'from-blue-500 to-indigo-500',
      benefits: ['Cost reduction', 'Scalability', 'Flexibility']
    },
    {
      title: 'API Integration',
      description: 'Connect disparate systems and enable seamless data flow across your organization.',
      icon: <Settings className="w-8 h-8" />,
      features: ['API development', 'System integration', 'Data synchronization', 'Third-party connectors'],
      color: 'from-orange-500 to-red-500',
      benefits: ['Better connectivity', 'Data consistency', 'Improved workflows']
    },
    {
      title: 'Change Management',
      description: 'Support your team through digital transformation with comprehensive change management.',
      icon: <Users className="w-8 h-8" />,
      features: ['Training programs', 'Stakeholder engagement', 'Communication plans', 'Adoption support'],
      color: 'from-pink-500 to-rose-500',
      benefits: ['Smooth transition', 'Higher adoption', 'User satisfaction']
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Streamline operations and reduce manual work',
      improvement: '60%',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Cost Reduction',
      description: 'Optimize costs through automation and cloud',
      improvement: '45%',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: 'Better Agility',
      description: 'Respond faster to market changes',
      improvement: '70%',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Enhanced Security',
      description: 'Modern security practices and compliance',
      improvement: '85%',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-16 md:pt-0 overflow-x-hidden">
      {/* Back Button */}
      <button
        onClick={() => navigate('/#services')}
        className="fixed top-24 right-6 md:right-8 z-40 flex items-center gap-2 text-cyan-600 hover:text-cyan-700 bg-white/80 backdrop-blur-sm hover:bg-gray-50/80 px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 hover:border-cyan-500/50"
      >
        ← Back
      </button>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <RefreshCw className="w-4 h-4" />
              Digital Innovation
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Digital Transformation
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              Modernize your business with legacy system transformation, process automation, and digital strategy. 
              Accelerate growth and stay competitive in the digital age.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate('/#contact-form')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Start Transformation
              </button>
              <button
                onClick={() => navigate('/#services')}
                className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg border-2 border-cyan-200 hover:border-cyan-400 hover:shadow-lg transition-all duration-300"
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
              { value: stats.transformations, suffix: '+', label: 'Transformations', icon: <RefreshCw className="w-6 h-6" /> },
              { value: stats.efficiency, suffix: '%', label: 'Efficiency Gain', icon: <Zap className="w-6 h-6" /> },
              { value: stats.cost, suffix: '%', label: 'Cost Reduction', icon: <BarChart3 className="w-6 h-6" /> },
              { value: stats.clients, suffix: '+', label: 'Enterprise Clients', icon: <TrendingUp className="w-6 h-6" /> }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-100 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-3 text-cyan-600">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-600 mb-2">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Transformation Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital transformation solutions for modern businesses
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
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-cyan-600 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{cap.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Key Features:</p>
                  <ul className="space-y-2 mb-4">
                    {cap.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <span className="text-cyan-500 mr-2 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-500 mb-2">Benefits:</p>
                    <div className="flex flex-wrap gap-2">
                      {cap.benefits.map((benefit, i) => (
                        <span key={i} className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Transformation Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results from digital transformation initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border-2 border-cyan-100 hover:border-cyan-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white">
                    {benefit.icon}
                  </div>
                  <div className="text-3xl font-bold text-cyan-600">{benefit.improvement}</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how digital transformation can modernize your operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/#contact-form')}
              className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
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

export default DigitalTransformation;
