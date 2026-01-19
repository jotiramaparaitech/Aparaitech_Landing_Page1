// src/components/services/ITConsulting.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ITConsulting = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(0);
  const [stats, setStats] = useState({
    consulting: 0,
    implementations: 0,
    roi: 0,
    clients: 0
  });

  // Animate counters
  useEffect(() => {
    const animateCounter = (target, key, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const updateStats = (value) => {
        setStats(prev => {
          const updated = { ...prev };
          updated[key] = value;
          return updated;
        });
      };

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        const formatted = start.toFixed(key === 'roi' ? 1 : 0);
        updateStats(formatted);
      }, 16);
    };

    animateCounter(1500, 'consulting');
    animateCounter(450, 'implementations');
    animateCounter(3.2, 'roi');
    animateCounter(200, 'clients');
  }, []);

  const consultingServices = [
    {
      id: 1,
      title: "IT Strategy Consulting",
      icon: "🎯",
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-r from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
      description: "Develop comprehensive IT strategies aligned with business goals",
      benefits: [
        "Digital Transformation Roadmap",
        "Technology Assessment",
        "Cost Optimization Analysis",
        "Competitive Advantage Planning"
      ],
      duration: "4-8 Weeks"
    },
    {
      id: 2,
      title: "Infrastructure Consulting",
      icon: "🏢",
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-r from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
      description: "Optimize your IT infrastructure for performance and security",
      benefits: [
        "Infrastructure Audit",
        "Architecture Design",
        "Server Consolidation",
        "Disaster Recovery Planning"
      ],
      duration: "6-10 Weeks"
    },
    {
      id: 3,
      title: "Security Consulting",
      icon: "🔐",
      color: "from-red-500 to-orange-500",
      gradient: "bg-gradient-to-r from-red-500/20 to-orange-500/20",
      border: "border-red-500/30",
      description: "Protect your organization with comprehensive security solutions",
      benefits: [
        "Vulnerability Assessment",
        "Security Audit",
        "Compliance Management",
        "Incident Response Planning"
      ],
      duration: "8-12 Weeks"
    },
    {
      id: 4,
      title: "Digital Transformation",
      icon: "🚀",
      color: "from-green-500 to-emerald-500",
      gradient: "bg-gradient-to-r from-green-500/20 to-emerald-500/20",
      border: "border-green-500/30",
      description: "Transform your business with modern digital technologies",
      benefits: [
        "Process Automation",
        "Cloud Migration",
        "Legacy Modernization",
        "Business Innovation"
      ],
      duration: "12-16 Weeks"
    },
    {
      id: 5,
      title: "Change Management",
      icon: "🔄",
      color: "from-indigo-500 to-violet-500",
      gradient: "bg-gradient-to-r from-indigo-500/20 to-violet-500/20",
      border: "border-indigo-500/30",
      description: "Smooth transition through organizational IT changes",
      benefits: [
        "Change Impact Assessment",
        "Stakeholder Communication",
        "Training Programs",
        "Performance Monitoring"
      ],
      duration: "6-10 Weeks"
    },
    {
      id: 6,
      title: "IT Operations",
      icon: "⚙️",
      color: "from-yellow-500 to-amber-500",
      gradient: "bg-gradient-to-r from-yellow-500/20 to-amber-500/20",
      border: "border-yellow-500/30",
      description: "Optimize your IT operations for maximum efficiency",
      benefits: [
        "Operations Review",
        "Process Optimization",
        "Team Development",
        "Performance Analytics"
      ],
      duration: "4-8 Weeks"
    }
  ];

  const consultingPillars = [
    {
      pillar: "Assessment",
      description: "Thorough evaluation of current IT environment",
      items: ["IT Audit", "Gap Analysis", "Risk Assessment", "Capacity Planning"]
    },
    {
      pillar: "Strategy",
      description: "Developing actionable strategic plans",
      items: ["Roadmap Creation", "Prioritization", "Resource Planning", "KPI Definition"]
    },
    {
      pillar: "Implementation",
      description: "Executing strategic initiatives",
      items: ["Project Management", "Vendor Selection", "Deployment", "Integration"]
    },
    {
      pillar: "Optimization",
      description: "Continuous improvement and enhancement",
      items: ["Performance Tuning", "Cost Reduction", "User Experience", "Innovation"]
    }
  ];

  const industryExperience = [
    { industry: "Finance & Banking", expertise: "95%" },
    { industry: "Healthcare", expertise: "90%" },
    { industry: "Retail & E-commerce", expertise: "92%" },
    { industry: "Manufacturing", expertise: "88%" },
    { industry: "Education", expertise: "85%" },
    { industry: "Telecommunications", expertise: "93%" }
  ];

  const consultingProcess = [
    {
      step: 1,
      title: "Discovery & Assessment",
      description: "In-depth analysis of your current IT environment, challenges, and opportunities"
    },
    {
      step: 2,
      title: "Strategy Development",
      description: "Creating comprehensive roadmaps aligned with your business objectives"
    },
    {
      step: 3,
      title: "Planning & Design",
      description: "Detailed implementation plans with clear milestones and success metrics"
    },
    {
      step: 4,
      title: "Execution Support",
      description: "Hands-on guidance and support during implementation and deployment"
    },
    {
      step: 5,
      title: "Training & Transition",
      description: "Comprehensive training programs for smooth team adoption"
    },
    {
      step: 6,
      title: "Ongoing Support",
      description: "Continuous monitoring, optimization, and strategic guidance"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24">
      {/* Back Button - Fixed on Right Side */}
      <button
        onClick={() => navigate('/#services')}
        className="fixed top-24 right-6 md:right-8 z-40 flex items-center gap-2 text-orange-600 hover:text-orange-300 bg-white/80 backdrop-blur-sm hover:bg-gray-50/80 px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 hover:border-orange-500/50"
      >
        ← Back
      </button>

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-orange-900/10 opacity-50" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent">
            Enterprise IT Consulting & Digital Transformation
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
            Expert guidance to navigate complex IT challenges and unlock digital opportunities. Transform your technology landscape with strategic consulting.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: stats.consulting, label: "Consulting Hours", suffix: "+" },
              { value: stats.implementations, label: "Successful Projects", suffix: "+" },
              { value: stats.roi, label: "Avg ROI Increase", suffix: "x" },
              { value: stats.clients, label: "Enterprise Clients", suffix: "+" }
            ].map((stat, statIdx) => (
              <div key={`stat-${stat.label}`} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border border-gray-200 text-center hover:border-orange-500/50 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Consulting Services</h2>
            <p className="text-gray-600 text-lg">Comprehensive IT consulting solutions for enterprises</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service) => (
              <button
                key={service.id}
                type="button"
                onMouseEnter={() => setActiveService(service.id)}
                className={`group text-left cursor-pointer rounded-xl border border-gray-200 p-8 transition-all duration-300 hover:border-orange-500/50 ${service.gradient}`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm">{service.description}</p>

                {activeService === service.id && (
                  <div className="space-y-4 animate-fadeIn border-t border-gray-200 pt-4">
                    <div>
                      <p className="text-sm text-gray-700 font-semibold mb-3">Key Benefits:</p>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitId) => (
                          <li key={`benefit-${service.id}-${benefitId}`} className="text-sm text-gray-600 flex items-center">
                            <span className="text-orange-600 mr-2">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 text-sm text-orange-600 font-semibold">
                      Timeline: {service.duration}
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Pillars */}
      <section className="px-4 md:px-8 py-20 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Four Pillars of Our Consulting</h2>
            <p className="text-gray-600 text-lg">Holistic approach to IT transformation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultingPillars.map((pillar, pillarIdx) => (
              <div
                key={`pillar-${pillar.pillar}`}
                className="group cursor-pointer bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border border-gray-200 hover:border-orange-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-orange-600 mb-3 group-hover:text-orange-300 transition-colors">{pillar.pillar}</h3>
                <p className="text-gray-600 mb-6">{pillar.description}</p>

                <div className="grid grid-cols-2 gap-3">
                  {pillar.items.map((item, itemId) => (
                    <div
                      key={`item-${pillarIdx}-${itemId}`}
                      className="bg-gray-700/30 rounded-lg p-3 text-sm text-gray-700 border border-gray-600/50 hover:border-orange-500/50 transition-all duration-300 text-center"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Experience */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Expertise</h2>
            <p className="text-gray-600 text-lg">Proven experience across diverse sectors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryExperience.map((industry, industryIdx) => (
              <div key={`industry-${industry.industry}`} className="bg-gradient-to-r from-white to-gray-50 rounded-xl p-8 border border-gray-200 hover:border-orange-500/50 transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{industry.industry}</h3>
                  <span className="text-orange-600 font-bold">{industry.expertise}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-full transition-all duration-1000"
                    style={{ width: industry.expertise }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section className="px-4 md:px-8 py-20 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Consulting Process</h2>
            <p className="text-gray-600 text-lg">Structured approach to IT transformation</p>
          </div>

          <div className="space-y-6">
            {consultingProcess.map((item) => (
              <div key={`process-${item.step}`} className="group flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-gray-900 font-bold text-lg group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow pt-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl border border-orange-500/30 p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your IT?</h2>
            <p className="text-gray-700 mb-8 text-lg">Let's discuss your IT strategy and chart a path to success</p>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITConsulting;
