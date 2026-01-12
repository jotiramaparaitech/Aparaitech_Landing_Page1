import React from 'react';
import { Link } from 'react-router-dom';

const Ecommerce = () => {
  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <div className="relative bg-[#0a1f44] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00a1e0]/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <div className="inline-block px-4 py-1 mb-6 border border-blue-400/30 rounded-full bg-blue-900/30 backdrop-blur-sm">
              <span className="text-blue-300 font-semibold tracking-wide text-sm uppercase">Retail & Consumer Goods</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Unified Commerce. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4facfe] to-[#00f2fe]">Limitless Growth.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              Connect every touchpoint of the shopper journey. Deliver personalized experiences at scale with our AI-powered commerce solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/#contact" 
                className="px-8 py-4 bg-[#00a1e0] hover:bg-[#008cc2] text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-blue-500/50 text-center"
              >
                Start Your Transformation
              </Link>
              <button className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-bold rounded-lg transition-all text-center">
                View Demo
              </button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
              {/* Abstract Dashboard UI Representation */}
              <div className="flex items-center justify-between mb-6">
                <div className="h-4 w-32 bg-gray-600/50 rounded"></div>
                <div className="h-8 w-8 bg-blue-500 rounded-full"></div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="h-24 bg-blue-600/20 rounded-lg border border-blue-500/30 p-4">
                  <div className="text-2xl font-bold text-blue-400 mb-1">+124%</div>
                  <div className="text-xs text-gray-400">Conversion Rate</div>
                </div>
                <div className="h-24 bg-purple-600/20 rounded-lg border border-purple-500/30 p-4">
                  <div className="text-2xl font-bold text-purple-400 mb-1">2.4s</div>
                  <div className="text-xs text-gray-400">Page Load Speed</div>
                </div>
                <div className="h-24 bg-green-600/20 rounded-lg border border-green-500/30 p-4">
                  <div className="text-2xl font-bold text-green-400 mb-1">98%</div>
                  <div className="text-xs text-gray-400">CSAT Score</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-full bg-gray-700/50 rounded"></div>
                <div className="h-2 w-5/6 bg-gray-700/50 rounded"></div>
                <div className="h-2 w-4/6 bg-gray-700/50 rounded"></div>
              </div>
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
        </div>
      </div>

      {/* TRUST INDICATORS */}
      <div className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Trusted by leading retail innovators</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple Text Logos for demo purposes */}
            <span className="text-xl font-bold text-gray-800">FashionNova</span>
            <span className="text-xl font-bold text-gray-800">TechMart</span>
            <span className="text-xl font-bold text-gray-800">GlobalGrocer</span>
            <span className="text-xl font-bold text-gray-800">LuxeLiving</span>
            <span className="text-xl font-bold text-gray-800">AutoParts Direct</span>
          </div>
        </div>
      </div>

      {/* VALUE PROPOSITION GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-6">Everything you need to scale</h2>
            <p className="text-lg text-gray-600">
              Our comprehensive suite of e-commerce solutions empowers you to adapt quickly to market changes and customer demands.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Headless Commerce",
                desc: "Decouple frontend and backend to deliver lightning-fast experiences on any device.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                ),
                color: "bg-blue-600"
              },
              {
                title: "AI Personalization",
                desc: "Drive higher conversion rates with real-time product recommendations and tailored content.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                ),
                color: "bg-purple-600"
              },
              {
                title: "Omnichannel Order Mgmt",
                desc: "Gain a single view of inventory and orders across all channels for seamless fulfillment.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                ),
                color: "bg-indigo-600"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
                <div className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0a1f44] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                <a href="#" className="inline-flex items-center mt-4 text-blue-600 font-semibold hover:text-blue-800">
                  Learn more <span className="ml-2">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE SPOTLIGHT (Salesforce Style) */}
      <section className="py-24 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Analytics Dashboard" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/80 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-lg">Real-time Analytics</p>
                    <p className="text-sm text-gray-200">Monitor sales performance across all regions instantly.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                Data-Driven Insights
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-6">
                Make smarter decisions with unified data.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Break down silos. Our platform connects data from sales, marketing, and service to give you a 360-degree view of your customer. Predict trends, optimize inventory, and personalize marketing campaigns with precision.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Customer 360 View",
                  "Predictive Demand Forecasting",
                  "Automated Marketing Workflows"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                Explore Analytics Features
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-[#0a1f44] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to revolutionize your retail business?
          </h2>
          <p className="text-xl text-blue-200 mb-10">
            Join the leaders in digital commerce. Scalable, secure, and built for the future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/#contact" className="px-8 py-4 bg-[#00a1e0] hover:bg-[#008cc2] text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-blue-500/50">
              Contact Sales
            </Link>
            <Link to="/about" className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold rounded-lg transition-all">
              Read Success Stories
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Ecommerce;