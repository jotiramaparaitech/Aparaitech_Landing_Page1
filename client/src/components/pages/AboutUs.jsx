// AboutUs.jsx - Compact Professional Dark Theme
import React, { useState, useEffect } from 'react';

const AboutUs = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    years: 0
  });

  useEffect(() => {
    const animateCounter = (target, key, duration = 1500) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(start)
        }));
      }, 16);
    };

    animateCounter(250, 'clients');
    animateCounter(500, 'projects');
    animateCounter(15, 'years');
  }, []);

  return (
    <div className="min-h-screen bg-[#F3F6FA] dark:bg-[#0B1220] text-[#475569] dark:text-[#CBD5E1] transition-colors">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24 pb-16 border-b border-[#E2E8F0] dark:border-[#29384D]">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] shadow-sm mb-6">
              <span className="text-[#2563EB] dark:text-[#3B82F6] font-mono text-xs font-semibold">Since 2023 • Pune CoE</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#142B4A] dark:text-[#F1F5F9] tracking-tight mb-6">
              We Build Digital Solutions That{' '}
              <span className="text-[#2563EB] dark:text-[#3B82F6]">
                Drive Growth
              </span>
            </h1>
            <p className="text-lg text-[#64748B] dark:text-[#94A3B8] mb-8 leading-relaxed">
              Crafting innovative software that transforms businesses and delivers measurable results.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 border-b border-[#E2E8F0] dark:border-[#29384D]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { value: counters.clients, suffix: '+', label: 'Satisfied Clients', color: 'text-[#2563EB] dark:text-[#3B82F6]' },
              { value: counters.projects, suffix: '+', label: 'Projects Delivered', color: 'text-[#0F9F8F] dark:text-[#2DD4BF]' },
              { value: counters.years, suffix: '+', label: 'Years of Excellence', color: 'text-[#2563EB] dark:text-[#3B82F6]' },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-2xl bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] shadow-sm transition-all duration-200"
              >
                <div className={`text-4xl font-extrabold ${stat.color} mb-2`}>
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-[#64748B] dark:text-[#94A3B8] font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Our Mission */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mr-4 text-[#2563EB] dark:text-[#3B82F6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#142B4A] dark:text-[#F1F5F9]">Our Mission</h2>
              </div>
              <p className="text-base text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                To empower businesses with intelligent software solutions that streamline operations, 
                enhance customer experiences, and drive sustainable growth.
              </p>
            </div>

            {/* What We Do */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#142B4A] dark:text-[#F1F5F9] mb-6">What We Do</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-[#131F32] p-6 rounded-xl border border-[#E2E8F0] dark:border-[#29384D] shadow-sm">
                  <h3 className="text-lg font-bold text-[#142B4A] dark:text-[#F1F5F9] mb-3">Custom Software Development</h3>
                  <p className="text-[#64748B] dark:text-[#94A3B8] text-sm leading-relaxed">
                    Tailored solutions designed specifically for your business needs, 
                    built with modern technologies and best practices.
                  </p>
                </div>
                <div className="bg-white dark:bg-[#131F32] p-6 rounded-xl border border-[#E2E8F0] dark:border-[#29384D] shadow-sm">
                  <h3 className="text-lg font-bold text-[#142B4A] dark:text-[#F1F5F9] mb-3">Digital Transformation</h3>
                  <p className="text-[#64748B] dark:text-[#94A3B8] text-sm leading-relaxed">
                    Helping businesses evolve with technology, modernizing legacy systems 
                    and implementing new digital strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#142B4A] dark:text-[#F1F5F9] mb-8">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Innovation',
                    description: 'We constantly explore new technologies to create forward-thinking solutions.',
                    icon: '💡',
                  },
                  {
                    title: 'Excellence',
                    description: 'Quality is embedded in everything we do, from code to customer service.',
                    icon: '⭐',
                  },
                  {
                    title: 'Partnership',
                    description: 'We work alongside our clients as strategic partners in their success.',
                    icon: '🤝',
                  }
                ].map((value, index) => (
                  <div 
                    key={index}
                    className="bg-white dark:bg-[#131F32] rounded-xl p-6 border border-[#E2E8F0] dark:border-[#29384D] shadow-sm hover:border-[#2563EB]/40 transition-all duration-200"
                  >
                    <div className="inline-flex p-3 rounded-lg bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] mb-4">
                      <span className="text-2xl">{value.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#142B4A] dark:text-[#F1F5F9] mb-2">{value.title}</h3>
                    <p className="text-[#64748B] dark:text-[#94A3B8] text-sm leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Story */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#142B4A] dark:text-[#F1F5F9] mb-6">Our Story</h2>
              <div className="bg-white dark:bg-[#131F32] rounded-2xl p-8 border border-[#E2E8F0] dark:border-[#29384D] shadow-sm">
                <p className="text-[#475569] dark:text-[#CBD5E1] mb-4 leading-relaxed">
                  Founded in 2023, Aparaitech began with a vision to make enterprise-grade software 
                  accessible to businesses of all sizes. What started as a small team of passionate 
                  developers has grown into a trusted technology partner for companies across industries.
                </p>
                <p className="text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                  We continuously learn and adapt to deliver solutions that meet today's needs while 
                  anticipating tomorrow's challenges.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="py-16 bg-gradient-to-r from-blue-900/30 to-indigo-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Something Great?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let's discuss how we can help transform your business with technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-[#142B4A] dark:text-[#F1F5F9] font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg">
                Start a Conversation
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-[#142B4A] dark:text-[#F1F5F9] font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;