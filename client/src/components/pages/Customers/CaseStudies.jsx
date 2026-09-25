import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaCheck, FaChartLine, FaLightbulb, FaCogs } from 'react-icons/fa';

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedStudy, setSelectedStudy] = useState(null);

  const featuredStudy = {
    id: 'featured',
    title: "Global Cloud Migration for Enterprise Logistics",
    category: "Logistics",
    desc: "Moving a monolithic on-premise system to a microservices architecture on AWS, resulting in 99.99% uptime and 40% cost savings.",
    tags: ["AWS", "Kubernetes", "Terraform"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    challenge: "The client's legacy on-premise infrastructure was struggling to handle peak loads, resulting in frequent downtime and high operational costs.",
    solution: "We re-architected the entire system into microservices, containerized with Docker, and orchestrated via Kubernetes on AWS. We implemented Terraform for Infrastructure as Code.",
    results: ["99.99% System Uptime", "40% Reduction in OpEx", "Automated Scaling"],
    conclusion: "The migration not only solved immediate stability issues but also positioned the client for rapid global expansion."
  };

  const studies = [
    {
      id: 1,
      title: "IoT Smart Grid",
      category: "Energy",
      desc: "Real-time monitoring for city-wide energy consumption.",
      tags: ["IoT", "Big Data", "Python"],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
      challenge: "The city's aging power infrastructure struggled with load balancing during peak hours.",
      solution: "Implemented a network of 50,000 IoT sensors feeding data into a real-time analytics engine.",
      results: ["30% reduction in energy waste", "Predictive maintenance alerts"],
      conclusion: "The smart grid implementation has significantly reduced carbon footprint and operational costs."
    },
    {
      id: 2,
      title: "Neobank Mobile App",
      category: "FinTech",
      desc: "Secure, flutter-based mobile banking application.",
      tags: ["Flutter", "Node.js", "Security"],
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80",
      challenge: "Traditional banking apps were slow and lacked user-friendly features.",
      solution: "Developed a cross-platform Flutter app with biometric security and instant transfers.",
      results: ["1M+ downloads", "4.8/5 app store rating"],
      conclusion: "User engagement has doubled, and the app maintains a 99.9% crash-free rate."
    },
    {
      id: 3,
      title: "AI Content Generator",
      category: "SaaS",
      desc: "Generative AI tool for marketing teams.",
      tags: ["OpenAI", "React", "Python"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      challenge: "Marketing teams spent too much time drafting basic copy.",
      solution: "Integrated OpenAI's GPT-4 API into a custom React dashboard.",
      results: ["70% reduction in drafting time", "Consistent brand voice"],
      conclusion: "Content production velocity increased by 300%, allowing for more personalized marketing campaigns."
    },
    {
      id: 4,
      title: "Supply Chain Blockchain",
      category: "Logistics",
      desc: "Transparent tracking ledger for international shipping.",
      tags: ["Blockchain", "Solidity", "Web3"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      challenge: "International shipments lacked transparency and paperwork was often lost.",
      solution: "Built a private blockchain network to record every step of the shipping process.",
      results: ["Real-time tracking", "90% paperwork reduction"],
      conclusion: "Disputes over lost shipments have been virtually eliminated thanks to the immutable ledger."
    },
    {
      id: 5,
      title: "Telehealth Platform",
      category: "Healthcare",
      desc: "HIPAA-compliant video consultation web app.",
      tags: ["WebRTC", "React", "AWS"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      challenge: "Patients in remote areas had limited access to specialists.",
      solution: "Created a secure, HIPAA-compliant video consultation platform.",
      results: ["50,000+ consultations", "Expanded rural reach"],
      conclusion: "Patient satisfaction scores rose by 40% due to the convenience of remote consultations."
    },
    {
      id: 6,
      title: "E-Commerce Replatform",
      category: "Retail",
      desc: "Migrating to a headless commerce architecture.",
      tags: ["Next.js", "Shopify", "GraphQL"],
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80",
      challenge: "Legacy monolithic site was slow and crashed during peak sales.",
      solution: "Migrated to a headless architecture using Shopify Plus and Next.js.",
      results: ["2x faster page loads", "100% uptime"],
      conclusion: "Sales conversion rates have reached an all-time high post-launch, and the marketing team can now launch campaigns independently."
    }
  ];

  const categories = ['All', 'Energy', 'FinTech', 'SaaS', 'Logistics', 'Healthcare', 'Retail'];

  const filteredStudies = activeCategory === 'All' 
    ? studies 
    : studies.filter(study => study.category === activeCategory);

  return (
    <div className="pt-16 min-h-screen bg-white font-sans relative">
      
      {/* MODAL */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setSelectedStudy(null)}>
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
            <div className="relative h-64">
              <img src={selectedStudy.image} alt={selectedStudy.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <div>
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wide rounded mb-2">{selectedStudy.category}</span>
                  <h2 className="text-3xl font-bold text-white">{selectedStudy.title}</h2>
                </div>
              </div>
              <button 
                onClick={() => setSelectedStudy(null)}
                className="absolute top-4 right-4 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors backdrop-blur-sm"
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><FaLightbulb className="text-yellow-500"/> The Challenge</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{selectedStudy.challenge}</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><FaCogs className="text-blue-500"/> The Solution</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{selectedStudy.solution}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><FaChartLine className="text-green-500"/> Key Results</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {selectedStudy.results.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <FaCheck className="text-green-500 mt-1 flex-shrink-0" size={12} />
                      <span className="text-sm text-gray-700 font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedStudy.conclusion && (
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-gray-900 mb-2">Conclusion</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{selectedStudy.conclusion}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{featuredStudy.title}</h2>
              <p className="text-gray-600 text-lg mb-6">{featuredStudy.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredStudy.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600">{tag}</span>
                ))}
              </div>
              <button 
                onClick={() => setSelectedStudy(featuredStudy)}
                className="text-blue-600 font-bold hover:text-blue-800 flex items-center"
              >
                Read Full Case Study <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-all duration-500">
                <img src={featuredStudy.image} alt="Cloud Architecture" className="w-full h-64 object-cover"/>
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
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <h3 className="text-2xl font-bold text-gray-900">Recent Case Studies</h3>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <div 
                key={study.id} 
                onClick={() => setSelectedStudy(study)}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 cursor-pointer group"
              >
                <div className="text-xs font-bold text-blue-600 uppercase mb-2">{study.category}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{study.title}</h4>
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