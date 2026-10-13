// src/components/services/GrowthAnalytics.jsx
import React, { useState } from 'react';

const GrowthAnalytics = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Page section navigation
  const pageSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'use-cases', label: 'Use Cases' },
    { id: 'methodology', label: 'Methodology' },
    { id: 'contact', label: 'Get Started' }
  ];

  // Analytics capabilities data
  const analyticsCapabilities = [
    {
      title: 'Predictive Analytics',
      description: 'Forecast trends and identify opportunities using advanced machine learning algorithms.',
      icon: '🔮',
      features: ['Sales forecasting', 'Customer churn prediction', 'Market trend analysis']
    },
    {
      title: 'Real-Time Dashboards',
      description: 'Monitor performance with up-to-the-minute insights and interactive visualizations.',
      icon: '📊',
      features: ['Custom KPIs tracking', 'Automated reporting', 'Interactive data exploration']
    },
    {
      title: 'Customer Intelligence',
      description: 'Deep understanding of customer behavior and segmentation for targeted strategies.',
      icon: '👥',
      features: ['Customer segmentation', 'Behavioral analysis', 'Personalization insights']
    }
  ];

  // Use cases data
  const useCases = [
    {
      industry: 'E-commerce',
      challenge: 'Optimizing customer acquisition costs',
      solution: 'Implemented predictive models that reduced CAC by 35%',
      icon: '🛒'
    },
    {
      industry: 'SaaS',
      challenge: 'Reducing customer churn',
      solution: 'Churn prediction system decreased churn rate by 28%',
      icon: '💻'
    },
    {
      industry: 'Manufacturing',
      challenge: 'Improving supply chain efficiency',
      solution: 'Analytics platform reduced inventory costs by 22%',
      icon: '🏭'
    },
    {
      industry: 'Healthcare',
      challenge: 'Patient outcome optimization',
      solution: 'Predictive analytics improved patient satisfaction by 40%',
      icon: '🏥'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#0B1220] text-[#142B4A] dark:text-[#F1F5F9] pt-8 md:pt-0"> {/* ADDED: pt-16 for mobile top padding */}
      {/* Hero Section - FIXED: Added more top padding for mobile */}
      <div className="bg-gradient-to-br from-slate-50 dark:from-[#0B0F19] to-slate-100 dark:to-[#111827] pt-24 pb-16 md:pt-32 md:pb-24"> {/* CHANGED: Increased top padding */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Transform Your Business With
            <span className="block text-blue-600 mt-4">Intelligent Growth Analytics</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#475569] dark:text-[#CBD5E1] max-w-4xl mx-auto mb-12">
            Get data-driven insights that help you make smarter decisions, optimize operations, 
            and accelerate business growth.
          </p>
        </div>
      </div>

      {/* Main Content Area - FIXED: Added more top padding for in-page nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"> {/* CHANGED: Adjusted padding */}
        {/* In-page Navigation - FIXED: Adjusted sticky positioning */}
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
                    ? 'bg-blue-500 text-white'
                    : 'text-[#475569] dark:text-[#CBD5E1] hover:bg-[#F3F6FA] dark:bg-[#0B1220]'
                  }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Section - FIXED: Adjusted scroll margin */}
        <section id="overview" className="mb-16 md:mb-20 scroll-mt-24 md:scroll-mt-32"> {/* CHANGED: Adjusted scroll margin */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Drive Business Growth with Data Intelligence</h2>
            <p className="text-lg md:text-xl text-[#475569] dark:text-[#CBD5E1] mb-6 md:mb-8">
              In today's competitive landscape, data is your most valuable asset. Our Growth Analytics platform transforms raw data into actionable insights that drive measurable business outcomes.
            </p>
            <div className="bg-gradient-to-r from-slate-50 dark:from-[#0B0F19] to-slate-100 dark:to-[#111827] p-6 md:p-8 rounded-2xl mb-8 md:mb-12">
              <p className="text-xl md:text-2xl font-semibold text-[#142B4A] dark:text-[#F1F5F9]">
                From predictive modeling to real-time dashboards, we provide the tools and expertise to turn data into your competitive advantage.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8 md:mt-12"> {/* CHANGED: Adjusted grid for mobile */}
            {[
              { number: '40%', label: 'Average ROI Increase' },
              { number: '2.5x', label: 'Faster Decision Making' },
              { number: '99%', label: 'Customer Satisfaction' },
              { number: '500+', label: 'Companies Trust Us' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100 dark:border-[#1E293B]">
                <div className="text-2xl md:text-4xl font-bold text-[#2563EB] dark:text-[#3B82F6] mb-1 md:mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-[#475569] dark:text-[#CBD5E1]">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="mb-16 md:mb-20 scroll-mt-24 md:scroll-mt-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Advanced Analytics Capabilities</h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {analyticsCapabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-[#E2E8F0] dark:border-[#29384D] p-6 md:p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl md:text-5xl mb-4 md:mb-6">{capability.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#142B4A] dark:text-[#F1F5F9]">{capability.title}</h3>
                <p className="text-[#475569] dark:text-[#CBD5E1] mb-4 md:mb-6">{capability.description}</p>
                <ul className="space-y-2 md:space-y-3">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 md:mr-3"></div>
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#0F172A] rounded-2xl p-6 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Platform Features</h3>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { title: 'AI-Powered Insights', icon: '🤖' },
                { title: 'Automated Reporting', icon: '📈' },
                { title: 'Multi-Source Integration', icon: '🔗' },
                { title: 'Enterprise Security', icon: '🛡️' },
                { title: 'Real-Time Alerts', icon: '🔔' },
                { title: 'Custom Dashboards', icon: '🎨' },
                { title: 'Collaborative Analysis', icon: '👥' },
                { title: 'Mobile Access', icon: '📱' }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-4 md:p-6 text-center shadow-sm hover:shadow-md transition">
                  <div className="text-2xl md:text-3xl mb-2 md:mb-3">{feature.icon}</div>
                  <div className="font-bold text-sm md:text-base">{feature.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="mb-16 md:mb-20 scroll-mt-24 md:scroll-mt-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Key Business Benefits</h2>
          
          <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
            {[
              {
                icon: '📈',
                title: 'Predictive Insights',
                desc: 'Forecast trends and identify opportunities before your competitors with advanced machine learning algorithms.'
              },
              {
                icon: '🎯',
                title: 'Actionable Intelligence',
                desc: 'Get clear, data-backed recommendations, not just raw data. Make decisions with confidence.'
              },
              {
                icon: '⚡',
                title: 'Real-Time Analytics',
                desc: 'Monitor performance with up-to-the-minute dashboards that update as your business evolves.'
              },
              {
                icon: '🛡️',
                title: 'Enterprise Security',
                desc: 'Bank-level security protocols ensure your sensitive business data remains protected at all times.'
              }
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-4 md:space-x-6 p-6 md:p-8 bg-white rounded-2xl shadow-sm border border-slate-100 dark:border-[#1E293B] hover:shadow-md transition dark:bg-[#131F32]">
                <div className="text-3xl md:text-4xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-[#142B4A] dark:text-[#F1F5F9]">{feature.title}</h3>
                  <p className="text-[#475569] dark:text-[#CBD5E1] text-sm md:text-base">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ROI Calculator */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 md:p-10 text-[#142B4A] dark:text-[#F1F5F9]">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Calculate Your Potential ROI</h3>
              <p className="mb-6 md:mb-8 text-base md:text-lg">
                On average, our clients see a 40% increase in ROI within the first 6 months of implementation.
              </p>
              <div className="grid grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-10">
                <div>
                  <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">3-6</div>
                  <div className="text-sm md:text-base">Months to Value</div>
                </div>
                <div>
                  <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">40%</div>
                  <div className="text-sm md:text-base">Average ROI Increase</div>
                </div>
                <div>
                  <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">70%</div>
                  <div className="text-sm md:text-base">Time Savings on Reporting</div>
                </div>
              </div>
              <button className="px-6 md:px-8 py-3 md:py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-[#F3F6FA] dark:bg-[#0B1220] transition text-sm md:text-base">
                Request Personalized ROI Analysis
              </button>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="mb-16 md:mb-20 scroll-mt-24 md:scroll-mt-32">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Industry Success Stories</h2>
            <p className="text-lg md:text-xl text-[#475569] dark:text-[#CBD5E1] max-w-3xl mx-auto">
              See how businesses across various industries are leveraging our analytics platform to drive growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] p-6 md:p-8 hover:shadow-xl transition dark:bg-[#131F32]">
                <div className="text-3xl md:text-4xl mb-4 md:mb-6">{useCase.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-[#142B4A] dark:text-[#F1F5F9]">{useCase.industry}</h3>
                <div className="mb-3 md:mb-4">
                  <div className="font-semibold text-[#475569] dark:text-[#CBD5E1] mb-1 text-sm md:text-base">Challenge:</div>
                  <p className="text-[#475569] dark:text-[#CBD5E1] text-sm md:text-base">{useCase.challenge}</p>
                </div>
                <div>
                  <div className="font-semibold text-[#475569] dark:text-[#CBD5E1] mb-1 text-sm md:text-base">Solution:</div>
                  <p className="text-[#475569] dark:text-[#CBD5E1] text-sm md:text-base">{useCase.solution}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Industry Adoption */}
          <div className="bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#0F172A] rounded-2xl p-6 md:p-10">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">Trusted Across Industries</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { name: 'Technology', clients: 150 },
                { name: 'Retail', clients: 120 },
                { name: 'Finance', clients: 90 },
                { name: 'Healthcare', clients: 75 },
                { name: 'Manufacturing', clients: 65 },
                { name: 'Education', clients: 50 },
                { name: 'Transportation', clients: 40 },
                { name: 'Energy', clients: 35 }
              ].map((industry, index) => (
                <div key={index} className="bg-white dark:bg-[#131F32] rounded-xl p-4 md:p-6 text-center">
                  <div className="text-lg md:text-2xl font-bold text-blue-600 mb-1 md:mb-2">{industry.clients}+</div>
                  <div className="font-medium text-sm md:text-base">{industry.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section id="methodology" className="mb-16 md:mb-20 scroll-mt-24 md:scroll-mt-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Our Implementation Methodology</h2>
          
          <div className="grid grid-cols-5 gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              { step: '1', title: 'Assessment', desc: 'Data audit & goal setting' },
              { step: '2', title: 'Planning', desc: 'Solution architecture design' },
              { step: '3', title: 'Integration', desc: 'Data pipeline setup' },
              { step: '4', title: 'Training', desc: 'Team enablement' },
              { step: '5', title: 'Optimization', desc: 'Continuous improvement' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-[#142B4A] dark:text-[#F1F5F9] rounded-full flex items-center justify-center text-lg md:text-2xl font-bold mx-auto mb-2 md:mb-4">
                  {step.step}
                </div>
                <div className="font-bold text-sm md:text-lg mb-1">{step.title}</div>
                <div className="text-xs md:text-sm text-[#475569] dark:text-[#94A3B8]">{step.desc}</div>
              </div>
            ))}
          </div>

          {/* Process Details */}
          <div className="bg-gradient-to-r from-slate-50 dark:from-[#0B0F19] to-slate-100 dark:to-[#111827] rounded-2xl p-6 md:p-10">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Expert Implementation</h3>
                <ul className="space-y-3 md:space-y-4">
                  {[
                    'Dedicated implementation team',
                    'Customized data integration',
                    '24/7 support during deployment',
                    'Regular progress reviews'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm md:text-base mr-3 md:mr-4">
                        ✓
                      </div>
                      <span className="text-sm md:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Ongoing Support</h3>
                <p className="text-[#475569] dark:text-[#CBD5E1] mb-4 md:mb-6 text-sm md:text-base">
                  We provide continuous support and optimization to ensure your analytics platform evolves with your business needs.
                </p>
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-white dark:bg-[#131F32] rounded-xl p-3 md:p-4">
                    <div className="text-lg md:text-xl font-bold text-blue-600 mb-1">99.9%</div>
                    <div className="text-xs md:text-sm text-[#475569] dark:text-[#94A3B8]">Platform Uptime</div>
                  </div>
                  <div className="bg-white dark:bg-[#131F32] rounded-xl p-3 md:p-4">
                    <div className="text-lg md:text-xl font-bold text-blue-600 mb-1">15min</div>
                    <div className="text-xs md:text-sm text-[#475569] dark:text-[#94A3B8]">Avg. Support Response</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section id="contact" className="scroll-mt-24 md:scroll-mt-32">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-6 md:p-12 text-[#142B4A] dark:text-[#F1F5F9] text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Accelerate Your Growth?</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto">
              Book a free consultation to discover how our Growth Analytics platform can transform your business decision-making.
            </p>
            
            {/* Contact Options */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8">
                <div className="text-2xl md:text-3xl mb-3 md:mb-4">🎯</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Strategy Session</h3>
                <p className="text-sm md:text-base">30-minute growth strategy consultation</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8">
                <div className="text-2xl md:text-3xl mb-3 md:mb-4">📊</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Platform Demo</h3>
                <p className="text-sm md:text-base">Live demonstration of analytics capabilities</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8">
                <div className="text-2xl md:text-3xl mb-3 md:mb-4">📈</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">ROI Analysis</h3>
                <p className="text-sm md:text-base">Personalized growth potential assessment</p>
              </div>
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="mb-4 md:mb-6">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="w-full px-4 md:px-6 py-3 md:py-4 rounded-lg text-[#142B4A] dark:text-[#F1F5F9] text-sm md:text-base"
                />
              </div>
              <button className="w-full px-6 md:px-8 py-3 md:py-4 bg-white text-blue-600 font-bold text-base md:text-lg rounded-lg hover:bg-[#F3F6FA] dark:bg-[#0B1220] transform hover:-translate-y-1 transition duration-300">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Trusted by Industry Leaders</h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              quote: "Growth Analytics helped us increase our marketing ROI by 45% in just 3 months.",
              author: "Sarah Chen",
              role: "CMO, TechScale Inc.",
              avatar: "SC"
            },
            {
              quote: "The predictive insights saved us $2M in operational costs this year.",
              author: "Michael Rodriguez",
              role: "COO, Global Retail Corp",
              avatar: "MR"
            },
            {
              quote: "Best analytics platform we've used. Implementation was seamless and results were immediate.",
              author: "Priya Sharma",
              role: "Head of Analytics, FinTech Pro",
              avatar: "PS"
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white dark:bg-[#131F32] p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-[#1E293B]">
              <div className="text-yellow-400 text-xl md:text-2xl mb-3 md:mb-4">★★★★★</div>
              <p className="text-[#475569] dark:text-[#CBD5E1] italic mb-4 md:mb-6 text-sm md:text-base">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-[#142B4A] dark:text-[#F1F5F9] font-bold">
                  {testimonial.avatar}
                </div>
                <div className="ml-3 md:ml-4">
                  <div className="font-bold text-sm md:text-base">{testimonial.author}</div>
                  <div className="text-[#475569] dark:text-[#CBD5E1] text-xs md:text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#F3F6FA] dark:bg-[#0B1220] text-[#142B4A] dark:text-[#F1F5F9] py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base md:text-lg mb-6 md:mb-8">Growth Analytics — Transform Data into Business Growth</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-400 text-xs md:text-sm">
              <a href="#" className="hover:text-[#142B4A] dark:text-[#F1F5F9]">Case Studies</a>
              <a href="#" className="hover:text-[#142B4A] dark:text-[#F1F5F9]">Documentation</a>
              <a href="#" className="hover:text-[#142B4A] dark:text-[#F1F5F9]">Blog</a>
              <a href="#" className="hover:text-[#142B4A] dark:text-[#F1F5F9]">Support</a>
              <a href="#" className="hover:text-[#142B4A] dark:text-[#F1F5F9]">Privacy Policy</a>
            </div>
            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-800 text-[#64748B] dark:text-[#94A3B8] dark:text-[#64748B] dark:text-[#94A3B8] text-sm">
              <p>© 2024 Growth Analytics. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GrowthAnalytics;