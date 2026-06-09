import React from 'react';
import { Link } from 'react-router-dom';

const HelpCenter = () => {
  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      
      {/* HERO SEARCH */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">How can we help you?</h1>
          <div className="relative max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Search for answers, articles, or topics..." 
              className="w-full py-4 px-6 pl-12 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
            />
            <svg className="w-6 h-6 text-gray-400 absolute left-4 top-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Getting Started", icon: "🚀", desc: "New to Aparaitech? Start here." },
              { title: "Account & Billing", icon: "💳", desc: "Manage your subscription and payments." },
              { title: "Technical Support", icon: "🛠️", desc: "Troubleshooting and technical guides." },
              { title: "API & Developers", icon: "⚡", desc: "Documentation for building with our tools." },
              { title: "Security & Privacy", icon: "🔒", desc: "Learn how we protect your data." },
              { title: "Community", icon: "👥", desc: "Connect with other users." },
            ].map((cat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all cursor-pointer hover:-translate-y-1">
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cat.title}</h3>
                <p className="text-gray-600">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "How do I reset my password?", a: "You can reset your password by clicking 'Forgot Password' on the login page." },
              { q: "Where can I find my API keys?", a: "API keys are located in your dashboard under Settings > Developer > API Keys." },
              { q: "Do you offer 24/7 support?", a: "Yes, our enterprise plans include 24/7 dedicated support." },
              { q: "Can I upgrade my plan later?", a: "Absolutely! You can upgrade or downgrade your plan at any time from the billing settings." },
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still need help?</h2>
          <p className="text-gray-600 mb-8">Our support team is just a click away.</p>
          <div className="flex justify-center gap-4">
            <Link to="/support/contact" className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
              Contact Support
            </Link>
            <Link to="/support/community" className="px-6 py-3 bg-white text-blue-600 border border-blue-200 font-bold rounded-lg hover:bg-blue-50 transition-colors">
              Visit Community
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HelpCenter;