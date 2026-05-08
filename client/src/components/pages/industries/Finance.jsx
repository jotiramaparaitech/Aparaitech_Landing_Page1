import React from 'react';
import { Link } from 'react-router-dom';

const Finance = () => {
  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <div className="relative bg-[#0f172a] text-white overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#3b82f6]/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <div className="inline-block px-4 py-1 mb-6 border border-blue-400/30 rounded-full bg-blue-900/30 backdrop-blur-sm">
              <span className="text-blue-300 font-semibold tracking-wide text-sm uppercase">Fintech & Banking</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Secure the Future of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#34d399]">Digital Finance.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              We build high-performance, compliant, and secure software solutions for banks, insurers, and fintech startups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-blue-500/50 text-center"
              >
                Start Your Transformation
              </Link>
              <button className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-bold rounded-lg transition-all text-center" onClick={(e) => e.preventDefault()}>
                View Demo
              </button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            {/* Abstract UI for Finance */}
            <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
               <div className="flex justify-between items-center mb-8">
                 <div>
                   <div className="text-gray-400 text-sm">Total Assets</div>
                   <div className="text-3xl font-bold text-white">$4,250,000.00</div>
                 </div>
                 <div className="h-10 w-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                   ▲ 12%
                 </div>
               </div>
               <div className="space-y-4">
                 <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                   <div className="h-full w-3/4 bg-blue-500"></div>
                 </div>
                 <div className="flex justify-between text-sm text-gray-400">
                   <span>Processing</span>
                   <span>75%</span>
                 </div>
                 <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                        <div className="text-blue-400 mb-1">Transactions</div>
                        <div className="text-xl font-bold">8,542</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                        <div className="text-purple-400 mb-1">Fraud Blocked</div>
                        <div className="text-xl font-bold">142</div>
                    </div>
                 </div>
               </div>
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
        </div>
      </div>

      {/* TRUST INDICATORS */}
      <div className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Powering financial innovation for</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-bold text-gray-800">NeoBank</span>
            <span className="text-xl font-bold text-gray-800">SecurePay</span>
            <span className="text-xl font-bold text-gray-800">Alpha Capital</span>
            <span className="text-xl font-bold text-gray-800">Global Insure</span>
            <span className="text-xl font-bold text-gray-800">TradeFlow</span>
          </div>
        </div>
      </div>

      {/* VALUE PROPOSITION GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6">Enterprise-Grade Financial Technology</h2>
            <p className="text-lg text-gray-600">
              We provide the digital infrastructure that modern financial institutions need to compete, scale, and stay secure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Fraud Detection AI",
                desc: "Real-time transaction monitoring using machine learning to detect and prevent fraudulent activities instantly.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                ),
                color: "bg-red-600"
              },
              {
                title: "Regulatory Compliance",
                desc: "Automated compliance reporting for GDPR, PCI-DSS, and KYC/AML regulations built into the core architecture.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                ),
                color: "bg-blue-600"
              },
              {
                title: "Blockchain Integration",
                desc: "Secure, decentralized ledger solutions for transparent cross-border payments and smart contracts.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
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
                <a href="#" className="inline-flex items-center mt-4 text-blue-600 font-semibold hover:text-blue-800">
                  Learn more <span className="ml-2">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE SPOTLIGHT */}
      <section className="py-24 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Financial Dashboard" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-lg">Real-Time Trading Analytics</p>
                    <p className="text-sm text-gray-300">Millisecond latency for high-frequency trading platforms.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                Digital Transformation
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6">
                Modernize Legacy Banking Systems.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Move away from monolithic mainframes to agile microservices. We help financial institutions migrate to the cloud securely, enabling faster product launches and better customer experiences.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Cloud Migration Strategy",
                  "Open Banking API Integration",
                  "Secure Mobile Banking Apps"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                Explore Banking Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Secure. Scalable. Compliant.
          </h2>
          <p className="text-xl text-blue-200 mb-10">
            Partner with Aparaitech to build the next generation of financial technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-blue-500/50">
              Contact Sales
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

export default Finance;