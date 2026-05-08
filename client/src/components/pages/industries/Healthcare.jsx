import React from 'react';
import { Link } from 'react-router-dom';

const Healthcare = () => {
  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <div className="relative bg-[#0d2b28] text-white overflow-hidden"> {/* Dark teal background for healthcare feel */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#2dd4bf]/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <div className="inline-block px-4 py-1 mb-6 border border-teal-400/30 rounded-full bg-teal-900/30 backdrop-blur-sm">
              <span className="text-teal-300 font-semibold tracking-wide text-sm uppercase">Healthcare & Life Sciences</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Connected Care. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4bf] to-[#0f766e]">Better Outcomes.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              Empower providers and patients with secure, interoperable, and AI-driven digital health solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-[#0f766e] hover:bg-[#115e59] text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-teal-500/50 text-center"
              >
                Start Your Transformation
              </Link>
              <button className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-bold rounded-lg transition-all text-center" onClick={(e) => e.preventDefault()}>
                View Demo
              </button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            {/* Abstract UI for Healthcare */}
            <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-500">
               <div className="flex items-center gap-4 mb-6">
                 <div className="h-12 w-12 bg-teal-500 rounded-full flex items-center justify-center text-2xl">🩺</div>
                 <div>
                   <div className="h-4 w-32 bg-white/20 rounded mb-2"></div>
                   <div className="h-3 w-20 bg-white/10 rounded"></div>
                 </div>
               </div>
               <div className="space-y-4">
                 <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-teal-200">Patient Engagement</span>
                    <span className="text-white font-bold">98%</span>
                 </div>
                 <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-teal-200">Data Security</span>
                    <span className="text-white font-bold">HIPAA Compliant</span>
                 </div>
                 <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-teal-200">Telehealth Visits</span>
                    <span className="text-white font-bold">+250%</span>
                 </div>
               </div>
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
        </div>
      </div>

      {/* TRUST INDICATORS */}
      <div className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Trusted by healthcare innovators</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-bold text-gray-800">MediCare Plus</span>
            <span className="text-xl font-bold text-gray-800">HealthFirst</span>
            <span className="text-xl font-bold text-gray-800">Global Pharma</span>
            <span className="text-xl font-bold text-gray-800">BioTech Labs</span>
            <span className="text-xl font-bold text-gray-800">CareConnect</span>
          </div>
        </div>
      </div>

      {/* VALUE PROPOSITION GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b28] mb-6">Modernizing the Patient Journey</h2>
            <p className="text-lg text-gray-600">
              From intake to follow-up, our solutions streamline operations and enhance the quality of care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Telemedicine Platforms",
                desc: "Secure, high-quality video consultations integrated directly into your practice management software.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                ),
                color: "bg-teal-600"
              },
              {
                title: "Interoperable EHR",
                desc: "Seamless data exchange between systems using FHIR standards to ensure a complete patient view.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                ),
                color: "bg-blue-600"
              },
              {
                title: "HIPAA Compliant Cloud",
                desc: "Enterprise-grade security and compliance infrastructure protecting sensitive PHI data.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                ),
                color: "bg-indigo-600"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
                <div className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0d2b28] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                <a href="#" className="inline-flex items-center mt-4 text-teal-600 font-semibold hover:text-teal-800">
                  Learn more <span className="ml-2">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE SPOTLIGHT */}
      <section className="py-24 bg-[#f0fdfa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                AI Diagnostics
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b28] mb-6">
                Intelligent insights for faster diagnosis.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Leverage machine learning algorithms to analyze medical imaging, predict patient risks, and personalize treatment plans. Our AI solutions assist clinicians in making data-driven decisions with higher accuracy.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Predictive Risk Modeling",
                  "Automated Image Analysis",
                  "Personalized Treatment Plans"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                Explore AI Features
              </button>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Medical Technology" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b28]/80 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-lg">Precision Medicine</p>
                    <p className="text-sm text-gray-200">Tailored healthcare solutions powered by data.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-[#0d2b28] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to transform patient care?
          </h2>
          <p className="text-xl text-teal-100 mb-10">
            Partner with us to build secure, scalable, and innovative healthcare solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-[#2dd4bf] hover:bg-[#14b8a6] text-[#0d2b28] font-bold rounded-lg transition-all shadow-lg hover:shadow-teal-500/50">
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

export default Healthcare;