import React from 'react';
import { Link } from 'react-router-dom';

const Documentation = () => {
  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      
      {/* HERO SEARCH SECTION */}
      <div className="bg-[#0f172a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-3 py-1 bg-blue-900/50 border border-blue-700/50 rounded-full text-blue-300 text-xs font-bold uppercase tracking-wide mb-6">
            Developer Hub
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How can we help you build?</h1>
          <div className="relative max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Search guides, API references, and resources..." 
              className="w-full py-4 px-6 pl-12 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
            />
            <svg className="w-6 h-6 text-gray-400 absolute left-4 top-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
        </div>
      </div>

      {/* MAIN CATEGORIES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Getting Started",
                desc: "Everything you need to know to get up and running with Aparaitech platforms.",
                icon: "🚀",
                links: ["Quickstart Guide", "Installation", "Authentication", "First API Call"]
              },
              {
                title: "API References",
                desc: "Detailed documentation for all our REST and GraphQL APIs.",
                icon: "⚡",
                links: ["Core API", "Payments API", "Identity API", "Webhooks"]
              },
              {
                title: "SDKs & Libraries",
                desc: "Official libraries for your favorite languages and frameworks.",
                icon: "📦",
                links: ["Node.js", "Python", "React", "Java"]
              }
            ].map((cat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{cat.title}</h3>
                <p className="text-gray-600 mb-6 text-sm">{cat.desc}</p>
                <ul className="space-y-2">
                  {cat.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                        {link} <span className="ml-1">→</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR TOPICS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Managing API Keys",
              "Handling Errors",
              "Rate Limits",
              "Pagination",
              "Webhooks Integration",
              "Security Best Practices",
              "Versioning",
              "Testing Sandbox"
            ].map((topic, idx) => (
              <a key={idx} href="#" className="flex items-center p-4 rounded-lg border border-gray-100 hover:border-blue-300 hover:bg-blue-50 transition-colors group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                <span className="text-gray-700 group-hover:text-blue-700 font-medium">{topic}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#f8fafc] border-t border-gray-200 text-center">
        <p className="text-gray-600">Can't find what you're looking for? <Link to="/support/help-center" className="text-blue-600 font-bold hover:underline">Visit our Help Center</Link></p>
      </section>

    </div>
  );
};

export default Documentation;