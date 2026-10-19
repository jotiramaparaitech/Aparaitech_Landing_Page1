
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CloudSolutions = () => {
  const navigate = useNavigate();
  const [selectedFeature, setSelectedFeature] = useState('scalability');
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredPlatform, setHoveredPlatform] = useState(null);
  const [stats, setStats] = useState({ uptime: 0, cost: 0 });

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
          [key]: start.toFixed(key === 'uptime' ? 2 : 0),
        }));
      }, 16);
    };

    animateCounter(99.99, 'uptime');
    animateCounter(50, 'cost');
  }, []);

  const cloudServices = [
    {
      id: 1,
      title: 'Cloud Migration',
      description: 'Seamless transition to cloud infrastructure with zero downtime',
      icon: '🚀',
      color: 'from-blue-500 to-cyan-500',
      features: ['Legacy System Migration', 'Data Transfer', 'Application Modernization', 'Performance Optimization'],
      time: '4-8 Weeks',
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure setup and management',
      icon: '🏗️',
      color: 'from-purple-500 to-pink-500',
      features: ['VPC Setup', 'Load Balancing', 'Auto-scaling', 'Disaster Recovery'],
      time: '6-10 Weeks',
    },
    {
      id: 3,
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and DevOps best practices',
      icon: '⚙️',
      color: 'from-green-500 to-emerald-500',
      features: ['CI/CD Pipelines', 'Container Orchestration', 'Infrastructure as Code', 'Monitoring & Logging'],
      time: '8-12 Weeks',
    },
    {
      id: 4,
      title: 'Cloud Security',
      description: 'Enterprise-grade security and compliance solutions',
      icon: '🔒',
      color: 'from-orange-500 to-red-500',
      features: ['Identity Management', 'Data Encryption', 'Threat Detection', 'Compliance Auditing'],
      time: '6-10 Weeks',
    },
    {
      id: 5,
      title: 'Cloud Analytics',
      description: 'Big data processing and real-time analytics on cloud',
      icon: '📈',
      color: 'from-indigo-500 to-violet-500',
      features: ['Data Warehousing', 'Real-time Processing', 'Business Intelligence', 'Predictive Analytics'],
      time: '8-14 Weeks',
    },
    {
      id: 6,
      title: 'Managed Services',
      description: '24/7 cloud infrastructure monitoring and management',
      icon: '👨‍💼',
      color: 'from-yellow-500 to-amber-500',
      features: ['24/7 Monitoring', 'Performance Tuning', 'Cost Optimization', 'Proactive Support'],
      time: 'Ongoing',
    },
  ];

  const platforms = [
    {
      name: 'AWS',
      logo: '☁️',
      description: 'Amazon Web Services - Comprehensive cloud platform',
      color: 'text-orange-500',
    },
    {
      name: 'Azure',
      logo: '🔷',
      description: 'Microsoft Azure - Enterprise cloud solutions',
      color: 'text-blue-500',
    },
    {
      name: 'Google Cloud',
      logo: '🔵',
      description: 'Google Cloud Platform - AI-first cloud services',
      color: 'text-red-500',
    },
    {
      name: 'Oracle Cloud',
      logo: '🔶',
      description: 'Oracle Cloud Infrastructure - Database solutions',
      color: 'text-red-600',
    },
    {
      name: 'DigitalOcean',
      logo: '💧',
      description: 'Developer-friendly cloud infrastructure',
      color: 'text-blue-600',
    },
    {
      name: 'IBM Cloud',
      logo: '💼',
      description: 'Enterprise cloud and AI services',
      color: 'text-gray-700 dark:text-slate-300',
    },
  ];

  const benefits = [
    {
      id: 'scalability',
      title: 'Dynamic Scalability',
      description: 'Automatically scale resources in real-time to match demand. Only pay for compute resources you actually use.',
      icon: '📊',
      metrics: 'Scales 10x+ capacity',
      progress: 90,
      details: ['Automatic resource provisioning', 'Performance-based scaling', 'Predictive load management', 'Optimized cost efficiency'],
    },
    {
      id: 'reliability',
      title: 'Enterprise Reliability',
      description: 'Guaranteed 99.99% uptime with multi-region redundancy and automatic failover mechanisms.',
      icon: '⚡',
      metrics: '99.99% SLA uptime',
      progress: 99,
      details: ['Multi-AZ deployment architecture', 'Automatic failover systems', 'Real-time data replication', 'Business continuity planning'],
    },
    {
      id: 'security',
      title: 'Advanced Security',
      description: 'Military-grade encryption, zero-trust architecture, and comprehensive compliance with industry standards.',
      icon: '🛡️',
      metrics: 'AES 256-bit encryption',
      progress: 95,
      details: ['End-to-end encryption protocols', 'Identity & access management', 'Real-time threat detection', 'Regulatory compliance audits'],
    },
    {
      id: 'cost',
      title: 'Cost Optimization',
      description: 'Reduce cloud spending by up to 60% through intelligent resource allocation and consumption optimization.',
      icon: '💰',
      metrics: 'Up to 60% savings',
      progress: 60,
      details: ['Reserved capacity planning', 'Spot instance optimization', 'Resource utilization tracking', 'Financial reporting & alerts'],
    },
  ];

  const activeBenefit = benefits.find(b => b.id === selectedFeature) || benefits[0];

  const sectionTitle = 'text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4';
  const sectionDescription = 'text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg';
  const card = 'rounded-xl border border-blue-100 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm transition-all duration-300';
  const bodyText = 'text-slate-600 dark:text-slate-300';

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-[#0B1120] dark:text-slate-100">

      {/* Back Button */}
      <button
        onClick={() => navigate('/#services')}
        className="fixed top-24 right-6 md:right-8 z-40 flex items-center gap-2 rounded-lg border border-blue-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-4 py-2 text-blue-700 dark:text-sky-300 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all shadow-sm"
      >
        ← Back
      </button>

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16 bg-gradient-to-br from-white via-blue-50 to-sky-50 dark:from-[#0B1120] dark:via-slate-900 dark:to-blue-950">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-blue-400/10 blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-indigo-400/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/80 dark:bg-blue-400/10 border border-blue-200 dark:border-blue-400/30 mb-6">
              <span className="text-blue-700 dark:text-sky-300 font-medium">☁️ Cloud First Strategy</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
              Enterprise Cloud{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-sky-400 dark:to-cyan-300 bg-clip-text text-transparent">
                Infrastructure Solutions
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Drive operational excellence with scalable, secure cloud infrastructure designed for enterprises. Reduce costs, improve agility, and accelerate time-to-market with our comprehensive cloud solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white dark:bg-[#0B1120] transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={sectionTitle}>Core Advantages of Our Platform</h2>
            <p className={sectionDescription}>Proven capabilities delivering measurable business outcomes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {benefits.map(benefit => (
              <button
                key={benefit.id}
                onClick={() => setSelectedFeature(benefit.id)}
                className={`rounded-xl p-5 sm:p-6 border text-left transition-all duration-300 ${
                  selectedFeature === benefit.id
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/50 shadow-lg'
                    : 'border-blue-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 hover:border-blue-300 dark:hover:border-sky-500'
                }`}
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">{benefit.description}</p>
                <div className="text-sm font-medium text-blue-600 dark:text-sky-300">{benefit.metrics}</div>
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-sky-50 dark:from-slate-900 dark:to-blue-950 rounded-2xl p-6 md:p-8 border border-blue-100 dark:border-slate-700 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{activeBenefit.title}</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">{activeBenefit.description}</p>
                <div className="space-y-3">
                  {activeBenefit.details.map((detail, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-xl p-5 md:p-6 border border-blue-100 dark:border-slate-700 shadow-sm">
                <div className="text-center mb-4">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-sky-400 dark:to-cyan-300 bg-clip-text text-transparent">
                    {activeBenefit.metrics.split(' ')[0]}
                  </div>
                  <div className={bodyText + ' mt-2'}>
                    {activeBenefit.metrics.split(' ').slice(1).join(' ')}
                  </div>
                </div>
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mt-6">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000"
                    style={{ width: `${activeBenefit.progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mt-2">
                  <span>0%</span><span>100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={sectionTitle}>Comprehensive Cloud Services</h2>
            <p className={sectionDescription}>End-to-end cloud solutions for every business need</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {cloudServices.map(service => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group rounded-xl p-5 sm:p-6 border transition-all duration-300 bg-white dark:bg-slate-900 ${
                  hoveredService === service.id
                    ? 'border-blue-400 dark:border-sky-500 shadow-xl -translate-y-1'
                    : 'border-blue-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-sky-500 hover:shadow-lg'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
                    <span className="text-2xl text-white">{service.icon}</span>
                  </div>
                  <div className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-950 rounded text-blue-700 dark:text-sky-300 font-medium">
                    {service.time}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm sm:text-base">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                      <svg className="w-4 h-4 text-blue-500 dark:text-sky-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-16 bg-white dark:bg-[#0B1120] transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={sectionTitle}>Supported Cloud Platforms</h2>
            <p className={sectionDescription}>We work with all major cloud providers to give you the best solution</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {platforms.map(platform => (
              <div
                key={platform.name}
                onMouseEnter={() => setHoveredPlatform(platform.name)}
                onMouseLeave={() => setHoveredPlatform(null)}
                className={`group rounded-xl p-4 sm:p-6 border transition-all duration-300 bg-white dark:bg-slate-900 ${
                  hoveredPlatform === platform.name
                    ? 'border-cyan-500 shadow-lg -translate-y-1'
                    : 'border-blue-100 dark:border-slate-700 hover:border-blue-400 dark:hover:border-sky-500'
                }`}
              >
                <div className={`text-3xl sm:text-4xl mb-3 sm:mb-4 text-center ${platform.color}`}>{platform.logo}</div>
                <div className="text-center">
                  <div className="font-semibold text-slate-900 dark:text-white mb-1">{platform.name}</div>
                  <div className={`text-xs text-slate-600 dark:text-slate-300 transition-all duration-300 ${
                    hoveredPlatform === platform.name ? 'opacity-100 h-auto mt-2' : 'opacity-0 h-0 overflow-hidden'
                  }`}>
                    {platform.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats: corrected metric labels and descriptions */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-[#0B1120] dark:via-slate-900 dark:to-blue-950 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={sectionTitle}>Cloud Performance Metrics</h2>
            <p className={sectionDescription}>Proven results that drive business transformation</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-sky-400 dark:to-cyan-300 bg-clip-text text-transparent mb-2">
                {stats.uptime}%
              </div>
              <div className="text-lg font-semibold text-slate-900 dark:text-white">Uptime SLA</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Guaranteed availability</div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-300 bg-clip-text text-transparent mb-2">
                {stats.cost}%
              </div>
              <div className="text-lg font-semibold text-slate-900 dark:text-white">Cost Reduction</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">vs on-premise infrastructure</div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-300 bg-clip-text text-transparent mb-2">
                3x
              </div>
              <div className="text-lg font-semibold text-slate-900 dark:text-white">Faster Deployment</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">than traditional setup</div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-yellow-400 dark:to-amber-300 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-lg font-semibold text-slate-900 dark:text-white">Support</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Expert cloud engineers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={sectionTitle + ' mb-6'}>Transform Your Infrastructure Today</h2>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Get a complimentary cloud assessment and customized implementation roadmap from our expert architects.
          </p>
        </div>
      </section>

      {/* Production Deployment Proof */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-[#F4F8FF] via-[#EAF2FF] to-[#F7FAFF] dark:from-[#0B1120] dark:via-slate-900 dark:to-blue-950 transition-colors duration-300">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-blue-300/20 dark:bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-sky-300/20 dark:bg-sky-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-sky-300 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              PRODUCTION DEPLOYMENT PROOF
            </span>

            <h2 className="mt-7 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Powering mission-critical platforms
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-sky-500 dark:from-sky-400 dark:to-cyan-300 bg-clip-text text-transparent">
                with zero downtime.
              </span>
            </h2>

            <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">
              Reliable cloud infrastructure built for performance, security,
              scalability, and business continuity.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <div className={card + ' px-5 py-4'}>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Availability</p>
                <p className="mt-1 text-xl font-bold text-blue-700 dark:text-sky-300">99.99%</p>
              </div>

              <div className={card + ' px-5 py-4'}>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Infrastructure</p>
                <p className="mt-1 text-xl font-bold text-blue-700 dark:text-sky-300">Scalable</p>
              </div>

              <div className={card + ' px-5 py-4'}>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Security</p>
                <p className="mt-1 text-xl font-bold text-blue-700 dark:text-sky-300">Enterprise-grade</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudSolutions;
