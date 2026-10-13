// CloudSolutions.jsx - Corporate Palette Redesign
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
      features: ["Legacy System Migration", "Data Transfer", "Application Modernization", "Performance Optimization"],
      time: "4–8 Weeks"
    },
    {
      id: 2,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud infrastructure setup and management",
      icon: "🏗️",
      features: ["VPC Setup", "Load Balancing", "Auto-scaling", "Disaster Recovery"],
      time: "6–10 Weeks"
    },
    {
      id: 3,
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines and DevOps best practices",
      icon: "⚙️",
      features: ["CI/CD Pipelines", "Container Orchestration", "Infrastructure as Code", "Monitoring & Logging"],
      time: "8–12 Weeks"
    },
    {
      id: 4,
      title: "Cloud Security",
      description: "Enterprise-grade security and compliance solutions",
      icon: "🔒",
      features: ["Identity Management", "Data Encryption", "Threat Detection", "Compliance Auditing"],
      time: "6–10 Weeks"
    },
    {
      id: 5,
      title: "Cloud Analytics",
      description: "Big data processing and real-time analytics on cloud",
      icon: "📈",
      features: ["Data Warehousing", "Real-time Processing", "Business Intelligence", "Predictive Analytics"],
      time: "8–14 Weeks"
    },
    {
      id: 6,
      title: "Managed Services",
      description: "24/7 cloud infrastructure monitoring and management",
      icon: "👨‍💼",
      features: ["24/7 Monitoring", "Performance Tuning", "Cost Optimization", "Proactive Support"],
      time: "Ongoing"
    }
  ];

  // Cloud platforms
  const platforms = [
    { name: "AWS", logo: "☁️", description: "Amazon Web Services — Comprehensive cloud platform" },
    { name: "Azure", logo: "🔷", description: "Microsoft Azure — Enterprise cloud solutions" },
    { name: "Google Cloud", logo: "🔵", description: "Google Cloud Platform — AI-first cloud services" },
    { name: "Oracle Cloud", logo: "🔶", description: "Oracle Cloud Infrastructure — Database solutions" },
    { name: "DigitalOcean", logo: "💧", description: "Developer-friendly cloud infrastructure" },
    { name: "IBM Cloud", logo: "💼", description: "Enterprise cloud and AI services" }
  ];

  // Cloud benefits
  const benefits = [
    {
      id: 'scalability',
      title: 'Dynamic Scalability',
      description: 'Automatically scale resources in real-time to match demand. Only pay for compute resources you actually use.',
      icon: '📊',
      metrics: 'Scales 10x+ capacity',
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
      progress: 60,
      details: [
        'Reserved capacity planning',
        'Spot instance optimization',
        'Resource utilization tracking',
        'Financial reporting & alerts'
      ]
    }
  ];

  const selectedBenefit = benefits.find(b => b.id === selectedFeature);

  return (
    <div className="min-h-screen bg-[#F3F6FA] dark:bg-[#0B1220] text-[#475569] dark:text-[#CBD5E1]">
      {/* Back Button */}
      <button
        onClick={() => navigate('/#services')}
        className="fixed top-24 right-6 md:right-8 z-40 flex items-center gap-2 text-[#2563EB] dark:text-[#3B82F6] hover:text-[#1D4ED8] bg-white dark:bg-[#131F32] hover:bg-[#F3F6FA] dark:hover:bg-[#0B1220] px-4 py-2 rounded-lg border border-[#E2E8F0] dark:border-[#29384D] transition-all shadow-sm text-sm font-medium"
      >
        ← Back
      </button>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 bg-white dark:bg-[#131F32] border-b border-[#E2E8F0] dark:border-[#29384D]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] mb-6">
              <span className="text-[#0F9F8F] dark:text-[#2DD4BF] font-medium text-sm">☁️ Cloud First Strategy</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold mb-6 text-[#142B4A] dark:text-[#F1F5F9] leading-tight">
              Enterprise Cloud{' '}
              <span className="text-[#2563EB] dark:text-[#3B82F6]">
                Infrastructure Solutions
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#475569] dark:text-[#CBD5E1] mb-8 max-w-3xl mx-auto leading-relaxed">
              Drive operational excellence with scalable, secure cloud infrastructure designed for enterprises. Reduce costs, improve agility, and accelerate time-to-market with our comprehensive cloud solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#F3F6FA] dark:bg-[#0B1220]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#142B4A] dark:text-[#F1F5F9] mb-4">
              Core Advantages of Our Platform
            </h2>
            <p className="text-[#64748B] dark:text-[#94A3B8] max-w-2xl mx-auto text-lg">
              Proven capabilities delivering measurable business outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
            {benefits.map((benefit) => (
              <button
                key={benefit.id}
                onClick={() => setSelectedFeature(benefit.id)}
                className={`rounded-lg p-5 sm:p-6 border-2 transition-all duration-200 text-left ${
                  selectedFeature === benefit.id
                    ? 'border-[#2563EB] bg-white dark:bg-[#131F32] shadow-md'
                    : 'border-[#E2E8F0] dark:border-[#29384D] bg-white dark:bg-[#131F32] hover:border-[#2563EB]/50'
                }`}
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-base font-semibold text-[#142B4A] dark:text-[#F1F5F9] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#475569] dark:text-[#94A3B8] text-sm mb-3">{benefit.description}</p>
                <div className="text-sm font-medium text-[#2563EB] dark:text-[#3B82F6]">
                  {benefit.metrics}
                </div>
              </button>
            ))}
          </div>

          {/* Feature Detail */}
          <div className="bg-white dark:bg-[#131F32] rounded-xl p-6 md:p-8 border border-[#E2E8F0] dark:border-[#29384D] shadow-sm">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#142B4A] dark:text-[#F1F5F9] mb-4">
                  {selectedBenefit?.title}
                </h3>
                <p className="text-[#475569] dark:text-[#CBD5E1] mb-6 leading-relaxed">
                  {selectedBenefit?.description}
                </p>
                <div className="space-y-3">
                  {selectedBenefit?.details.map((detail, detailIdx) => (
                    <div key={`detail-${detailIdx}`} className="flex items-center">
                      <div className="w-2 h-2 bg-[#0F9F8F] dark:bg-[#2DD4BF] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-[#475569] dark:text-[#CBD5E1] text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#F3F6FA] dark:bg-[#0B1220] rounded-xl p-5 md:p-6 border border-[#E2E8F0] dark:border-[#29384D]">
                <div className="text-center mb-4">
                  <div className="text-3xl md:text-4xl font-bold text-[#2563EB] dark:text-[#3B82F6]">
                    {selectedBenefit?.metrics.split(' ')[0]}
                  </div>
                  <div className="text-[#64748B] dark:text-[#94A3B8] mt-2 text-sm">
                    {selectedBenefit?.metrics.split(' ').slice(1).join(' ')}
                  </div>
                </div>
                <div className="h-2 bg-[#E2E8F0] dark:bg-[#29384D] rounded-full overflow-hidden mt-6">
                  <div
                    className="h-full bg-[#2563EB] dark:bg-[#3B82F6] rounded-full transition-all duration-700"
                    style={{ width: `${selectedBenefit?.progress || 0}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-[#64748B] dark:text-[#94A3B8] mt-2">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-16 bg-white dark:bg-[#131F32] border-t border-b border-[#E2E8F0] dark:border-[#29384D]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#142B4A] dark:text-[#F1F5F9] mb-4">
              Comprehensive Cloud Services
            </h2>
            <p className="text-[#64748B] dark:text-[#94A3B8] max-w-2xl mx-auto text-lg">
              End-to-end cloud solutions for every business need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {cloudServices.map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group rounded-lg p-5 sm:p-6 border-2 transition-all duration-200 text-left bg-[#F3F6FA] dark:bg-[#0B1220] ${
                  hoveredService === service.id
                    ? 'border-[#2563EB] shadow-md'
                    : 'border-[#E2E8F0] dark:border-[#29384D] hover:border-[#2563EB]/50'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{service.icon}</div>
                  <div className="text-xs px-2.5 py-1 bg-[#EFF6FF] dark:bg-[#1E293B] rounded text-[#2563EB] dark:text-[#3B82F6] font-medium border border-[#DBEAFE] dark:border-[#29384D]">
                    {service.time}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#142B4A] dark:text-[#F1F5F9] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#475569] dark:text-[#94A3B8] mb-4 text-sm">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIdx) => (
                    <div key={`feature-${service.id}-${featureIdx}`} className="flex items-center text-sm text-[#475569] dark:text-[#CBD5E1]">
                      <svg className="w-4 h-4 text-[#0F9F8F] dark:text-[#2DD4BF] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-16 bg-[#F3F6FA] dark:bg-[#0B1220]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#142B4A] dark:text-[#F1F5F9] mb-4">
              Supported Cloud Platforms
            </h2>
            <p className="text-[#64748B] dark:text-[#94A3B8] max-w-2xl mx-auto">
              We work with all major cloud providers to give you the best solution
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {platforms.map((platform, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredPlatform(platform.name)}
                onMouseLeave={() => setHoveredPlatform(null)}
                className={`group rounded-lg p-4 sm:p-5 border-2 transition-all duration-200 text-center bg-white dark:bg-[#131F32] ${
                  hoveredPlatform === platform.name
                    ? 'border-[#0F9F8F] shadow-md'
                    : 'border-[#E2E8F0] dark:border-[#29384D] hover:border-[#2563EB]/50'
                }`}
              >
                <div className="text-3xl sm:text-4xl mb-3 text-center">{platform.logo}</div>
                <div className="text-center">
                  <div className="font-semibold text-[#142B4A] dark:text-[#F1F5F9] mb-1 text-sm">{platform.name}</div>
                  <div className={`text-xs text-[#64748B] dark:text-[#94A3B8] transition-all duration-300 ${
                    hoveredPlatform === platform.name ? 'opacity-100 mt-2' : 'opacity-0 h-0 overflow-hidden'
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
      <section className="py-16 bg-white dark:bg-[#131F32] border-t border-b border-[#E2E8F0] dark:border-[#29384D]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#142B4A] dark:text-[#F1F5F9] mb-4">
              Cloud Performance Metrics
            </h2>
            <p className="text-[#64748B] dark:text-[#94A3B8] max-w-2xl mx-auto">
              Proven results that drive business transformation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center p-6 rounded-lg bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D]">
              <div className="text-3xl md:text-4xl font-bold text-[#2563EB] dark:text-[#3B82F6] mb-2">
                {stats.uptime}%
              </div>
              <div className="text-base font-semibold text-[#142B4A] dark:text-[#F1F5F9]">Uptime SLA</div>
              <div className="text-sm text-[#64748B] dark:text-[#94A3B8]">Guaranteed availability</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D]">
              <div className="text-3xl md:text-4xl font-bold text-[#0F9F8F] dark:text-[#2DD4BF] mb-2">
                {stats.cost}%
              </div>
              <div className="text-base font-semibold text-[#142B4A] dark:text-[#F1F5F9]">Cost Reduction</div>
              <div className="text-sm text-[#64748B] dark:text-[#94A3B8]">vs on-premise infrastructure</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D]">
              <div className="text-3xl md:text-4xl font-bold text-[#2563EB] dark:text-[#3B82F6] mb-2">
                3x
              </div>
              <div className="text-base font-semibold text-[#142B4A] dark:text-[#F1F5F9]">Faster Deployment</div>
              <div className="text-sm text-[#64748B] dark:text-[#94A3B8]">than traditional setup</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D]">
              <div className="text-3xl md:text-4xl font-bold text-[#0F9F8F] dark:text-[#2DD4BF] mb-2">
                24/7
              </div>
              <div className="text-base font-semibold text-[#142B4A] dark:text-[#F1F5F9]">Support</div>
              <div className="text-sm text-[#64748B] dark:text-[#94A3B8]">Expert cloud engineers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F3F6FA] dark:bg-[#0B1220] text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#142B4A] dark:text-[#F1F5F9] mb-4">
            Transform Your Infrastructure Today
          </h2>
          <p className="text-lg text-[#475569] dark:text-[#CBD5E1] mb-8 max-w-2xl mx-auto">
            Get a complimentary cloud assessment and customized implementation roadmap from our expert architects.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex h-[48px] items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-8 text-sm font-semibold text-white hover:bg-[#1D4ED8] transition-all"
          >
            Request a Cloud Assessment
          </button>
        </div>
      </section>
    </div>
  );
};

export default CloudSolutions;
