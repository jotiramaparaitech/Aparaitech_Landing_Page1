// CloudSolutions.jsx - Final Enhanced Dark Theme
import React, { useState, useEffect } from 'react';

const CloudSolutions = () => {
  const [activePlan, setActivePlan] = useState('business');
  const [selectedFeature, setSelectedFeature] = useState('scalability');
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredPlatform, setHoveredPlatform] = useState(null);
  const [stats, setStats] = useState({
    uptime: 0,
    cost: 0,
    deployment: 0,
    support: 0
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
        setStats(prev => ({
          ...prev,
          [key]: start.toFixed(key === 'uptime' ? 2 : 0)
        }));
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
      color: "text-orange-400",
      gradient: "from-orange-500/10 to-orange-600/5"
    },
    { 
      name: "Azure", 
      logo: "🔷", 
      description: "Microsoft Azure - Enterprise cloud solutions",
      color: "text-blue-400",
      gradient: "from-blue-500/10 to-blue-600/5"
    },
    { 
      name: "Google Cloud", 
      logo: "🔵", 
      description: "Google Cloud Platform - AI-first cloud services",
      color: "text-red-400",
      gradient: "from-red-500/10 to-red-600/5"
    },
    { 
      name: "Oracle Cloud", 
      logo: "🔶", 
      description: "Oracle Cloud Infrastructure - Database-focused solutions",
      color: "text-red-500",
      gradient: "from-red-600/10 to-red-700/5"
    },
    { 
      name: "DigitalOcean", 
      logo: "💧", 
      description: "Developer-friendly cloud infrastructure",
      color: "text-blue-300",
      gradient: "from-blue-400/10 to-blue-500/5"
    },
    { 
      name: "IBM Cloud", 
      logo: "💼", 
      description: "IBM Cloud - Hybrid and enterprise cloud",
      color: "text-blue-500",
      gradient: "from-blue-600/10 to-blue-700/5"
    }
  ];

  // Pricing plans
  const pricingPlans = [
    {
      name: 'startup',
      title: 'Startup',
      price: '$999',
      period: '/month',
      description: 'Perfect for small businesses starting their cloud journey',
      features: ['10 GB Storage', '100 GB Bandwidth', 'Basic Support', 'Daily Backups', '99.5% Uptime'],
      popular: false,
      color: 'from-blue-500 to-cyan-500',
      highlight: 'bg-blue-500/10'
    },
    {
      name: 'business',
      title: 'Business',
      price: '$2,499',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: ['100 GB Storage', '1 TB Bandwidth', 'Priority Support', 'Hourly Backups', '99.9% Uptime', '24/7 Monitoring'],
      popular: true,
      color: 'from-purple-500 to-pink-500',
      highlight: 'bg-purple-500/10'
    },
    {
      name: 'enterprise',
      title: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'Complete cloud solution for large organizations',
      features: ['1 TB Storage', '10 TB Bandwidth', 'Dedicated Support', 'Real-time Backups', '99.99% Uptime', 'Custom Solutions', 'Security Audit'],
      popular: false,
      color: 'from-indigo-500 to-violet-500',
      highlight: 'bg-indigo-500/10'
    }
  ];

  // Cloud benefits
  const benefits = [
    {
      id: 'scalability',
      title: 'Elastic Scalability',
      description: 'Scale resources up or down based on demand. Pay only for what you use.',
      icon: '📊',
      metrics: 'Auto-scales to 10x peak load',
      color: 'from-blue-500 to-cyan-500',
      progress: 90,
      details: [
        'Dynamic resource allocation',
        'Auto-scaling groups',
        'Load-based provisioning',
        'Cost-effective scaling'
      ]
    },
    {
      id: 'reliability',
      title: 'High Availability',
      description: 'Multi-region redundancy ensures 99.99% uptime for critical applications.',
      icon: '⚡',
      metrics: '99.99% SLA Guarantee',
      color: 'from-green-500 to-emerald-500',
      progress: 99,
      details: [
        'Multi-AZ deployment',
        'Automatic failover',
        'Data replication',
        'Disaster recovery'
      ]
    },
    {
      id: 'security',
      title: 'Enterprise Security',
      description: 'Military-grade encryption, zero-trust architecture, and compliance certifications.',
      icon: '🛡️',
      metrics: '256-bit Encryption',
      color: 'from-purple-500 to-pink-500',
      progress: 95,
      details: [
        'End-to-end encryption',
        'IAM & access control',
        'Threat detection',
        'Compliance monitoring'
      ]
    },
    {
      id: 'cost',
      title: 'Cost Optimization',
      description: 'Intelligent resource allocation and spot instances for maximum savings.',
      icon: '💰',
      metrics: 'Up to 60% Cost Savings',
      color: 'from-yellow-500 to-amber-500',
      progress: 60,
      details: [
        'Reserved instances',
        'Spot instance usage',
        'Resource optimization',
        'Cost monitoring'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6 backdrop-blur-sm">
              <span className="text-cyan-300 font-medium">☁️ Cloud First Strategy</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Elevate Your Business with{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                Cloud Excellence
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of scalable, secure, and efficient cloud infrastructure.
              Transform your operations and accelerate digital innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25">
                Start Cloud Journey
              </button>
              <button className="px-6 sm:px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Cloud Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the advantages of modern cloud infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                onClick={() => setSelectedFeature(benefit.id)}
                className={`rounded-xl p-5 sm:p-6 border-2 cursor-pointer transition-all duration-300 ${
                  selectedFeature === benefit.id
                    ? 'border-cyan-500 bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl shadow-cyan-500/10'
                    : 'border-gray-700 bg-gray-800/50 hover:border-cyan-400 hover:shadow-lg'
                }`}
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{benefit.description}</p>
                <div className="text-sm font-medium text-cyan-400">
                  {benefit.metrics}
                </div>
              </div>
            ))}
          </div>

          {/* Feature Detail */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 border border-gray-700 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {benefits.find(b => b.id === selectedFeature)?.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {benefits.find(b => b.id === selectedFeature)?.description}
                </p>
                <div className="space-y-3">
                  {benefits.find(b => b.id === selectedFeature)?.details.map((detail, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                      <span className="text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-5 md:p-6 border border-gray-700">
                <div className="text-center mb-4">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {benefits.find(b => b.id === selectedFeature)?.metrics.split(' ')[0]}
                  </div>
                  <div className="text-gray-400 mt-2">
                    {benefits.find(b => b.id === selectedFeature)?.metrics.split(' ').slice(1).join(' ')}
                  </div>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden mt-6">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000"
                    style={{ width: `${benefits.find(b => b.id === selectedFeature)?.progress || 0}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Cloud Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              End-to-end cloud solutions for every business need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {cloudServices.map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group rounded-xl p-5 sm:p-6 border border-gray-700 transition-all duration-300 cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900 ${
                  hoveredService === service.id ? 'border-cyan-500 shadow-xl scale-[1.02]' : 'hover:border-cyan-400 hover:shadow-lg'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
                    <span className="text-2xl text-white">{service.icon}</span>
                  </div>
                  <div className="text-xs px-2 py-1 bg-gray-700 rounded text-gray-300">
                    {service.time}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <svg className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Supported Cloud Platforms
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We work with all major cloud providers to give you the best solution
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {platforms.map((platform, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredPlatform(platform.name)}
                onMouseLeave={() => setHoveredPlatform(null)}
                className={`group rounded-xl p-4 sm:p-6 border border-gray-700 transition-all duration-300 bg-gradient-to-br from-gray-800 to-gray-900 ${
                  hoveredPlatform === platform.name ? 'border-cyan-500 shadow-lg scale-105' : 'hover:border-cyan-400 hover:shadow-md'
                }`}
              >
                <div className={`text-3xl sm:text-4xl mb-3 sm:mb-4 text-center ${platform.color}`}>
                  {platform.logo}
                </div>
                <div className="text-center">
                  <div className="font-semibold text-white mb-1">{platform.name}</div>
                  <div className={`text-xs text-gray-400 transition-all duration-300 ${
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

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan for your cloud infrastructure needs
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch mb-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                onClick={() => setActivePlan(plan.name)}
                className={`relative rounded-2xl p-6 md:p-8 border-2 cursor-pointer transition-all duration-300 flex-1 min-w-[280px] max-w-md ${
                  activePlan === plan.name
                    ? 'border-cyan-500 bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl shadow-cyan-500/10'
                    : 'border-gray-700 bg-gray-800/50 hover:border-cyan-400'
                } ${plan.popular ? 'lg:scale-105 z-10' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{plan.price}</div>
                  <div className="text-gray-400">{plan.period}</div>
                  <p className="text-gray-300 text-sm mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activePlan === plan.name
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 hover:scale-105'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cloud Performance Metrics
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Proven results that drive business transformation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stats.uptime}%
              </div>
              <div className="text-lg font-semibold text-white">Uptime SLA</div>
              <div className="text-sm text-gray-400">Guaranteed availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                {stats.cost}%
              </div>
              <div className="text-lg font-semibold text-white">Cost Reduction</div>
              <div className="text-sm text-gray-400">vs on-premise infrastructure</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                3x
              </div>
              <div className="text-lg font-semibold text-white">Faster Deployment</div>
              <div className="text-sm text-gray-400">than traditional setup</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-lg font-semibold text-white">Support</div>
              <div className="text-sm text-gray-400">Expert cloud engineers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/30 via-cyan-900/30 to-indigo-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Cloud Transformation?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free cloud assessment and migration strategy tailored to your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg">
              Request Free Assessment
            </button>
            <button className="px-6 sm:px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300">
              Download Cloud Guide
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

export default CloudSolutions;