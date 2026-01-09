import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <div className="bg-[#1e293b] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Engineering Excellence in Action</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Deep dives into how we solve complex technical challenges. From architecture to deployment, see how we build the future.
          </p>
        </div>
      </div>

      {/* FEATURED CASE STUDY */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center border border-blue-100">
            <div className="w-full md:w-1/2">
              <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wide rounded mb-4">Featured Study</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Global Cloud Migration for Enterprise Logistics</h2>
              <p className="text-gray-600 text-lg mb-6">
                Moving a monolithic on-premise system to a microservices architecture on AWS, resulting in 99.99% uptime and 40% cost savings.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600">AWS</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600">Kubernetes</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600">Terraform</span>
              </div>
              <button className="text-blue-600 font-bold hover:text-blue-800 flex items-center">
                Read Full Case Study <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-all duration-500">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cloud Architecture" className="w-full h-64 object-cover"/>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">6 Mo</div>
                      <div className="text-xs text-gray-500">Timeline</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">-40%</div>
                      <div className="text-xs text-gray-500">OpEx</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">0</div>
                      <div className="text-xs text-gray-500">Downtime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY LIST */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-10">Recent Case Studies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "IoT Smart Grid",
                category: "Energy",
                desc: "Real-time monitoring for city-wide energy consumption.",
                tags: ["IoT", "Big Data", "Python"]
              },
              {
                title: "Neobank Mobile App",
                category: "FinTech",
                desc: "Secure, flutter-based mobile banking application.",
                tags: ["Flutter", "Node.js", "Security"]
              },
              {
                title: "AI Content Generator",
                category: "SaaS",
                desc: "Generative AI tool for marketing teams.",
                tags: ["OpenAI", "React", "Python"]
              },
              {
                title: "Supply Chain Blockchain",
                category: "Logistics",
                desc: "Transparent tracking ledger for international shipping.",
                tags: ["Blockchain", "Solidity", "Web3"]
              },
              {
                title: "Telehealth Platform",
                category: "Healthcare",
                desc: "HIPAA-compliant video consultation web app.",
                tags: ["WebRTC", "React", "AWS"]
              },
              {
                title: "E-Commerce Replatform",
                category: "Retail",
                desc: "Migrating to a headless commerce architecture.",
                tags: ["Next.js", "Shopify", "GraphQL"]
              }
            ].map((study, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="text-xs font-bold text-blue-600 uppercase mb-2">{study.category}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{study.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default CaseStudies;