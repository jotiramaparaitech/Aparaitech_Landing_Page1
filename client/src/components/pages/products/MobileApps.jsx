// src/pages/products/MobileApps.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MobileApps = () => {
  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      
      {/* Hero Section */}
      <div className="relative bg-[#0f172a] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
           <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
           <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold mb-6">
            Mobile First Solutions
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Mobile App Development
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We engineer powerful, scalable, and intuitive mobile applications that drive user engagement and business growth.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* iOS Card */}
          <div className="group bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80" 
                alt="iOS Development" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="px-3 py-1 bg-white/90 backdrop-blur text-gray-900 text-xs font-bold rounded-full uppercase tracking-wider">
                  Apple Ecosystem
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">iOS Development</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Leverage the full potential of the Apple ecosystem with native iOS applications built using Swift and SwiftUI. We ensure pixel-perfect design and seamless performance across all Apple devices.
              </p>
              <ul className="space-y-3">
                {[
                  "Native Swift & SwiftUI Development",
                  "Advanced ARKit & CoreML Integration",
                  "App Store Optimization & Compliance",
                  "Secure Data & Cloud Sync"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Android Card */}
          <div className="group bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80" 
                alt="Android Development" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="px-3 py-1 bg-white/90 backdrop-blur text-gray-900 text-xs font-bold rounded-full uppercase tracking-wider">
                  Android Platform
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Android Development</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Reach the widest global audience with robust Android applications. Our experts utilize Kotlin and Jetpack Compose to build responsive, adaptable apps for the diverse Android ecosystem.
              </p>
              <ul className="space-y-3">
                {[
                  "Modern Kotlin & Jetpack Compose",
                  "Material Design 3 Implementation",
                  "Google Play Store Deployment",
                  "Multi-device Compatibility Testing"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Cross Platform Section */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-90"></div>
          <div className="relative z-10 p-12 md:p-16 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Cross-Platform Excellence</h3>
            <p className="text-blue-100 max-w-2xl mx-auto mb-12 text-lg">
              Maximize your reach and minimize development time with our high-performance cross-platform solutions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { title: "React Native", desc: "Native performance with a single codebase using Meta's framework.", icon: "⚛️" },
                { title: "Flutter", desc: "Beautiful, natively compiled applications from a single codebase.", icon: "🐦" },
                { title: "Ionic", desc: "Web-based mobile app development for rapid deployment.", icon: "⚡" }
              ].map((tech, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h4 className="text-xl font-bold mb-3">{tech.title}</h4>
                  <p className="text-blue-200 text-sm leading-relaxed">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Our Development Lifecycle</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Strategy", desc: "Market research and technical feasibility analysis." },
              { step: "02", title: "Design", desc: "UI/UX prototyping and user journey mapping." },
              { step: "03", title: "Development", desc: "Agile coding sprints with regular updates." },
              { step: "04", title: "Launch", desc: "App store submission and post-launch support." }
            ].map((phase, idx) => (
              <div key={idx} className="relative p-6 hover:bg-blue-50 transition-colors rounded-lg">
                <span className="text-5xl font-bold text-gray-100 absolute -top-4 -left-4 -z-10">{phase.step}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-50 rounded-3xl p-12 border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to transform your idea?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Let's build a mobile application that stands out in the app store and delivers real value to your users.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
          >
            Start Your Project
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default MobileApps;