import React from 'react';
import { Link } from 'react-router-dom';

const Manufacturing = () => {
  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <div className="relative bg-[#0f172a] text-white overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#f59e0b]/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <div className="inline-block px-4 py-1 mb-6 border border-amber-400/30 rounded-full bg-amber-900/30 backdrop-blur-sm">
              <span className="text-amber-300 font-semibold tracking-wide text-sm uppercase">Manufacturing & IoT</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Build the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#d97706]">Factory of the Future.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              Drive efficiency with Industry 4.0 solutions. Connect machines, data, and people with our industrial IoT platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/#contact" 
                className="px-8 py-4 bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-amber-500/50 text-center"
              >
                Start Transformation
              </Link>
              <button className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-bold rounded-lg transition-all text-center">
                View Capabilities
              </button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            {/* Abstract UI for Manufacturing */}
            <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
               <div className="flex justify-between items-center mb-6">
                 <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-amber-500 rounded-lg flex items-center justify-center text-xl">⚙️</div>
                    <div>
                        <div className="text-sm text-amber-200">Production Line A</div>
                        <div className="text-lg font-bold">Running Efficiently</div>
                    </div>
                 </div>
                 <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-bold">Active</div>
               </div>
               
               <div className="space-y-4">
                 <div className="flex justify-between text-sm text-gray-300 mb-1">
                    <span>OEE Score</span>
                    <span>94%</span>
                 </div>
                 <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                   <div className="h-full w-[94%] bg-gradient-to-r from-amber-500 to-orange-600"></div>
                 </div>
                 
                 <div className="grid grid-cols-3 gap-2 mt-6">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center">
                        <div className="text-amber-300 text-xs mb-1">Output</div>
                        <div className="font-bold">1,240</div>
                    </div>
                    <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center">
                        <div className="text-amber-300 text-xs mb-1">Downtime</div>
                        <div className="font-bold">0.5%</div>
                    </div>
                    <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center">
                        <div className="text-amber-300 text-xs mb-1">Quality</div>
                        <div className="font-bold">99.8%</div>
                    </div>
                 </div>
               </div>
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
        </div>
      </div>

      {/* TRUST INDICATORS */}
      <div className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Powering industrial leaders</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-bold text-gray-800">AutoMotive Corp</span>
            <span className="text-xl font-bold text-gray-800">SteelWorks</span>
            <span className="text-xl font-bold text-gray-800">Global Logistics</span>
            <span className="text-xl font-bold text-gray-800">Precision Eng</span>
            <span className="text-xl font-bold text-gray-800">EnergyGrid</span>
          </div>
        </div>
      </div>

      {/* VALUE PROPOSITION GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6">Smart Manufacturing Solutions</h2>
            <p className="text-lg text-gray-600">
              Bridge the gap between OT and IT. We deliver end-to-end solutions that optimize production, reduce waste, and ensure quality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Industrial IoT (IIoT)",
                desc: "Connect sensors and machines to the cloud for real-time monitoring and data collection.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                ),
                color: "bg-amber-600"
              },
              {
                title: "Supply Chain Visibility",
                desc: "End-to-end tracking of materials and products using blockchain and advanced analytics.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path></svg>
                ),
                color: "bg-blue-600"
              },
              {
                title: "Digital Twins",
                desc: "Create virtual replicas of physical systems to simulate performance and predict outcomes.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>
                ),
                color: "bg-indigo-600"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
                <div className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                <a href="#" className="inline-flex items-center mt-4 text-amber-600 font-semibold hover:text-amber-800">
                  Learn more <span className="ml-2">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE SPOTLIGHT */}
      <section className="py-24 bg-[#fffbeb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                Predictive Maintenance
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6">
                Stop downtime before it happens.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Leverage AI to analyze vibration, temperature, and performance data from your equipment. Predict failures weeks in advance and schedule maintenance only when needed.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Real-time Asset Monitoring",
                  "Anomaly Detection Algorithms",
                  "Automated Work Orders"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                Explore Maintenance AI
              </button>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Smart Factory" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-lg">Smart Factory</p>
                    <p className="text-sm text-gray-200">Automated, connected, and intelligent.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to optimize your production?
          </h2>
          <p className="text-xl text-amber-100 mb-10">
            Partner with Aparaitech to implement Industry 4.0 solutions that scale.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/#contact" className="px-8 py-4 bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-amber-500/50">
              Contact Sales
            </Link>
            <Link to="/about" className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold rounded-lg transition-all">
              Read Case Studies
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Manufacturing;