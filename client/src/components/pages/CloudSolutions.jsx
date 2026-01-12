// CloudSolutions.jsx - Light Professional Theme
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CloudSolutions = () => {
  const navigate = useNavigate();
  const [selectedFeature, setSelectedFeature] = useState('scalability');
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredPlatform, setHoveredPlatform] = useState(null);
  const [stats, setStats] = useState({
    uptime: 0,
    cost: 0,
  });

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
        setStats(prev => {
          const updated = { ...prev };
          updated[key] = start.toFixed(key === 'uptime' ? 2 : 0);
          return updated;
        });
      }, 16);
    };

    animateCounter(99.99, 'uptime');
    animateCounter(50, 'cost');
  }, []);

  // Cloud services data
  const cloudServices = [
    {
      id: 1,
      title: "Cloud Migration",
      description: "Seamless transition to cloud infrastructure with zero downtime",
      icon: "🚀",
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-r from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
      features: ["Legacy System Migration", "Data Transfer", "Application Modernization", "Performance Optimization"],
      time: "4-8 Weeks"
    },
    {
      id: 2,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud infrastructure setup and management",
      icon: "🏗️",
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-r from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
      features: ["VPC Setup", "Load Balancing", "Auto-scaling", "Disaster Recovery"],
      time: "6-10 Weeks"
    },
    {
      id: 3,
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines and DevOps best practices",
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
      gradient: "bg-gradient-to-r from-green-500/20 to-emerald-500/20",
      border: "border-green-500/30",
      features: ["CI/CD Pipelines", "Container Orchestration", "Infrastructure as Code", "Monitoring & Logging"],
      time: "8-12 Weeks"
    },
    {
      id: 4,
      title: "Cloud Security",
      description: "Enterprise-grade security and compliance solutions",
      icon: "🔒",
      color: "from-orange-500 to-red-500",
      gradient: "bg-gradient-to-r from-orange-500/20 to-red-500/20",
      border: "border-orange-500/30",
      features: ["Identity Management", "Data Encryption", "Threat Detection", "Compliance Auditing"],
      time: "6-10 Weeks"
    },
    {
      id: 5,
      title: "Cloud Analytics",
      description: "Big data processing and real-time analytics on cloud",
      icon: "📈",
      color: "from-indigo-500 to-violet-500",
      gradient: "bg-gradient-to-r from-indigo-500/20 to-violet-500/20",
      border: "border-indigo-500/30",
      features: ["Data Warehousing", "Real-time Processing", "Business Intelligence", "Predictive Analytics"],
      time: "8-14 Weeks"
    },
    {
      id: 6,
      title: "Managed Services",
      description: "24/7 cloud infrastructure monitoring and management",
      icon: "👨‍💼",
      color: "from-yellow-500 to-amber-500",
      gradient: "bg-gradient-to-r from-yellow-500/20 to-amber-500/20",
      border: "border-yellow-500/30",
      features: ["24/7 Monitoring", "Performance Tuning", "Cost Optimization", "Proactive Support"],
      time: "Ongoing"
    }
  ];

  // Cloud platforms
  const platforms = [
    { 
      name: "AWS", 
      logo: "☁️", 
      description: "Amazon Web Services - Comprehensive cloud platform",
      color: "text-orange-500"
    },
    { 
      name: "Azure", 
      logo: "🔷", 
      description: "Microsoft Azure - Enterprise cloud solutions",
      color: "text-blue-500"
    },
    { 
      name: "Google Cloud", 
      logo: "🔵", 
      description: "Google Cloud Platform - AI-first cloud services",
      color: "text-red-500"
    },
    { 
      name: "Oracle Cloud", 
      logo: "🔶", 
      description: "Oracle Cloud Infrastructure - Database solutions",
      color: "text-red-600"
    },
    { 
      name: "DigitalOcean", 
      logo: "💧", 
      description: "Developer-friendly cloud infrastructure",
      color: "text-blue-600"
    },
    { 
      name: "IBM Cloud", 
      logo: "💼", 
      description: "Enterprise cloud and AI services",
      color: "text-gray-700"
    }
  ];

 
  // Cloud benefits
  const benefits = [
    {
      id: 'scalability',
      title: 'Dynamic Scalability',
      description: 'Automatically scale resources in real-time to match demand. Only pay for compute resources you actually use.',
      icon: '📊',
      metrics: 'Scales 10x+ capacity',
      color: 'from-blue-500 to-cyan-500',
      progress: 90,
      details: [
        'Automatic resource provisioning',
        'Performance-based scaling',
        'Predictive load management',
        'Optimized cost efficiency'
      ]
    },
    {
      id: 'reliability',
      title: 'Enterprise Reliability',
      description: 'Guaranteed 99.99% uptime with multi-region redundancy and automatic failover mechanisms.',
      icon: '⚡',
      metrics: '99.99% SLA uptime',
      color: 'from-green-500 to-emerald-500',
      progress: 99,
      details: [
        'Multi-AZ deployment architecture',
        'Automatic failover systems',
        'Real-time data replication',
        'Business continuity planning'
      ]
    },
    {
      id: 'security',
      title: 'Advanced Security',
      description: 'Military-grade encryption, zero-trust architecture, and comprehensive compliance with industry standards.',
      icon: '🛡️',
      metrics: 'AES 256-bit encryption',
      color: 'from-purple-500 to-pink-500',
      progress: 95,
      details: [
        'End-to-end encryption protocols',
        'Identity & access management',
        'Real-time threat detection',
        'Regulatory compliance audits'
      ]
    },
    {
      id: 'cost',
      title: 'Cost Optimization',
      description: 'Reduce cloud spending by up to 60% through intelligent resource allocation and consumption optimization.',
      icon: '💰',
      metrics: 'Up to 60% savings',
      color: 'from-yellow-500 to-amber-500',
      progress: 60,
      details: [
        'Reserved capacity planning',
        'Spot instance optimization',
        'Resource utilization tracking',
        'Financial reporting & alerts'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Back Button - Fixed on Right Side */}
      <button
        onClick={() => navigate('/#services')}
        className="fixed top-24 right-6 md:right-8 z-40 flex items-center gap-2 text-blue-600 hover:text-blue-700 bg-white/90 backdrop-blur-sm hover:bg-blue-50 px-4 py-2 rounded-lg border border-blue-200 transition-all duration-300 hover:border-blue-400 shadow-sm"
      >
        ← Back
      </button>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 bg-gradient-to-br from-white via-blue-50 to-cyan-50">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6 backdrop-blur-sm">
              <span className="text-blue-700 font-medium">☁️ Cloud First Strategy</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Enterprise Cloud{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Infrastructure Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Drive operational excellence with scalable, secure cloud infrastructure designed for enterprises. Reduce costs, improve agility, and accelerate time-to-market with our comprehensive cloud solutions.
            </p>
            
          
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Advantages of Our Platform
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Proven capabilities delivering measurable business outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {benefits.map((benefit) => (
              <button
                key={benefit.id}
                onClick={() => setSelectedFeature(benefit.id)}
                className={`rounded-xl p-5 sm:p-6 border-2 transition-all duration-300 text-left ${
                  selectedFeature === benefit.id
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : 'border-gray-200 bg-gray-50 hover:border-blue-300'
                }`}
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                <div className="text-sm font-medium text-blue-600">
                  {benefit.metrics}
                </div>
              </button>
            ))}
          </div>

          {/* Feature Detail */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefits.find(b => b.id === selectedFeature)?.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {benefits.find(b => b.id === selectedFeature)?.description}
                </p>
                <div className="space-y-3">
                  {benefits.find(b => b.id === selectedFeature)?.details.map((detail, detailIdx) => (
                    <div key={`detail-${detailIdx}`} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 shadow-sm">
                <div className="text-center mb-4">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {benefits.find(b => b.id === selectedFeature)?.metrics.split(' ')[0]}
                  </div>
                  <div className="text-gray-600 mt-2">
                    {benefits.find(b => b.id === selectedFeature)?.metrics.split(' ').slice(1).join(' ')}
                  </div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-6">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000"
                    style={{ width: `${benefits.find(b => b.id === selectedFeature)?.progress || 0}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Cloud Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              End-to-end cloud solutions for every business need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {cloudServices.map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group rounded-xl p-5 sm:p-6 border-2 transition-all duration-300 text-left bg-white ${
                  hoveredService === service.id ? 'border-blue-500 shadow-xl scale-105' : 'border-gray-200 hover:border-blue-300 hover:shadow-lg'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
                    <span className="text-2xl text-white">{service.icon}</span>
                  </div>
                  <div className="text-xs px-2 py-1 bg-blue-100 rounded text-blue-700 font-medium">
                    {service.time}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIdx) => (
                    <div key={`feature-${service.id}-${featureIdx}`} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Supported Cloud Platforms
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We work with all major cloud providers to give you the best solution
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {platforms.map((platform, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredPlatform(platform.name)}
                onMouseLeave={() => setHoveredPlatform(null)}
                className={`group rounded-xl p-4 sm:p-6 border-2 transition-all duration-300 text-left bg-white ${
                  hoveredPlatform === platform.name ? 'border-cyan-500 shadow-lg scale-105' : 'hover:border-blue-400 hover:shadow-md'
                }`}
              >
                <div className={`text-3xl sm:text-4xl mb-3 sm:mb-4 text-center ${platform.color}`}>
                  {platform.logo}
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900 mb-1">{platform.name}</div>
                  <div className={`text-xs text-gray-600 transition-all duration-300 ${
                    hoveredPlatform === platform.name ? 'opacity-100 h-auto mt-2' : 'opacity-0 h-0'
                  }`}>
                    {platform.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cloud Performance Metrics
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proven results that drive business transformation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stats.uptime}%
              </div>
              <div className="text-lg font-semibold text-gray-900">Uptime SLA</div>
              <div className="text-sm text-gray-600">Guaranteed availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                {stats.cost}%
              </div>
              <div className="text-lg font-semibold text-gray-900">Cost Reduction</div>
              <div className="text-sm text-gray-600">vs on-premise infrastructure</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                3x
              </div>
              <div className="text-lg font-semibold text-gray-900">Faster Deployment</div>
              <div className="text-sm text-gray-600">than traditional setup</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-lg font-semibold text-gray-900">Support</div>
              <div className="text-sm text-gray-600">Expert cloud engineers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/30 via-cyan-900/30 to-indigo-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Transform Your Infrastructure Today
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a complimentary cloud assessment and customized implementation roadmap from our expert architects
          </p>
         
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

export default CloudSolutions;



