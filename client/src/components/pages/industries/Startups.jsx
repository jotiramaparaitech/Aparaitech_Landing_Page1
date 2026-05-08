import React from 'react';
import { Link } from 'react-router-dom';

const Startups = () => {
  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <div className="relative bg-[#18181b] text-white overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ec4899]/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <div className="inline-block px-4 py-1 mb-6 border border-pink-400/30 rounded-full bg-pink-900/30 backdrop-blur-sm">
              <span className="text-pink-300 font-semibold tracking-wide text-sm uppercase">Startup Accelerator</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Launch Fast. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] to-[#8b5cf6]">Scale Fearlessly.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              We turn ambitious ideas into market-ready products. MVP development, scalable architecture, and growth-focused engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-[#ec4899] hover:bg-[#db2777] text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-pink-500/50 text-center"
              >
                Build Your MVP
              </Link>
              <button className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-bold rounded-lg transition-all text-center" onClick={(e) => e.preventDefault()}>
                See Portfolio
              </button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            {/* Abstract UI for Startups */}
            <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl transform -rotate-1 hover:rotate-0 transition-all duration-500">
               <div className="flex items-center justify-between mb-8">
                 <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-pink-500 rounded-full flex items-center justify-center text-xl">🚀</div>
                    <div>
                        <div className="text-sm text-pink-200">Monthly Growth</div>
                        <div className="text-lg font-bold">Exponential</div>
                    </div>
                 </div>
                 <div className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-bold">Series A Ready</div>
               </div>
               
               <div className="space-y-6">
                 <div className="flex items-end gap-2 h-32">
                    <div className="w-1/5 bg-pink-500/30 rounded-t-lg h-[20%]"></div>
                    <div className="w-1/5 bg-pink-500/50 rounded-t-lg h-[40%]"></div>
                    <div className="w-1/5 bg-pink-500/70 rounded-t-lg h-[60%]"></div>
                    <div className="w-1/5 bg-pink-500/90 rounded-t-lg h-[80%]"></div>
                    <div className="w-1/5 bg-pink-500 rounded-t-lg h-[100%] relative">
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded shadow">
                            IPO
                        </div>
                    </div>
                 </div>
                 <div className="flex justify-between text-xs text-gray-400">
                    <span>Q1</span>
                    <span>Q2</span>
                    <span>Q3</span>
                    <span>Q4</span>
                    <span>Future</span>
                 </div>
               </div>
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
        </div>
      </div>

      {/* TRUST INDICATORS */}
      <div className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Fueling the next generation of unicorns</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-bold text-gray-800">Disruptor Inc</span>
            <span className="text-xl font-bold text-gray-800">NextGen AI</span>
            <span className="text-xl font-bold text-gray-800">FinFlow</span>
            <span className="text-xl font-bold text-gray-800">HealthMate</span>
            <span className="text-xl font-bold text-gray-800">EcoTech</span>
          </div>
        </div>
      </div>

      {/* VALUE PROPOSITION GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#18181b] mb-6">Built for Speed & Scalability</h2>
            <p className="text-lg text-gray-600">
              We understand the startup lifecycle. Our agile teams deliver high-quality code fast, so you can validate, iterate, and grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Rapid MVP Development",
                desc: "Go from concept to launch in weeks, not months. Validate your idea with a functional product.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                ),
                color: "bg-pink-600"
              },
              {
                title: "Scalable Architecture",
                desc: "Future-proof codebases designed to handle millions of users as you grow.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                ),
                color: "bg-purple-600"
              },
              {
                title: "Fractional CTO",
                desc: "Get expert technical leadership and strategy without the full-time executive cost.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                ),
                color: "bg-indigo-600"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
                <div className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#18181b] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                <a href="#" className="inline-flex items-center mt-4 text-pink-600 font-semibold hover:text-pink-800">
                  Learn more <span className="ml-2">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-[#18181b] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to disrupt the market?
          </h2>
          <p className="text-xl text-pink-200 mb-10">
            Let's build something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-[#ec4899] hover:bg-[#db2777] text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-pink-500/50">
              Start Your Project
            </Link>
            <button className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold rounded-lg transition-all" onClick={(e) => e.preventDefault()}>
              Read Success Stories
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Startups;