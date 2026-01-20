import React, { useState } from 'react';
import { X, CheckCircle, Building, User, Mail, MessageSquare } from 'lucide-react';

const Partners = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applicationSent, setApplicationSent] = useState(false);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setApplicationSent(true);
  };

  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      {/* HERO */}
      <div className="bg-gradient-to-br from-indigo-900 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Partner with Aparaitech</h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto mb-10">
            Join our ecosystem of technology leaders, system integrators, and consultants delivering world-class solutions.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-lg hover:bg-indigo-50 transition-colors"
          >
            Become a Partner
          </button>
        </div>
      </div>

      {/* PARTNER TYPES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Technology Partners",
                desc: "Integrate your technology with our platform to build comprehensive solutions for mutual customers.",
                icon: "🛠️"
              },
              {
                title: "Solution Partners",
                desc: "Consultancies and agencies that implement, customize, and manage Aparaitech solutions.",
                icon: "💼"
              },
              {
                title: "Resellers",
                desc: "Distribute Aparaitech products to new markets and regions with full sales support.",
                icon: "🌍"
              }
            ].map((type, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-6">{type.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.desc}</p>
                <a href="#" className="text-blue-600 font-bold hover:underline">Learn more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Why Partner With Us?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "Co-Marketing Opportunities", desc: "Access to joint marketing funds, events, and lead generation campaigns." },
              { title: "Technical Enablement", desc: "Dedicated sandbox environments, early access to APIs, and priority support." },
              { title: "Sales Incentives", desc: "Competitive margins, deal registration protection, and performance bonuses." },
              { title: "Training & Certification", desc: "Comprehensive training programs to ensure your team is expert-level." }
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Ready to grow your business?</h2>
          <p className="text-blue-100 mb-8 text-lg">Apply to the Aparaitech Partner Program today.</p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* PARTNER APPLICATION MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button 
              onClick={() => { setIsModalOpen(false); setApplicationSent(false); }}
              className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {!applicationSent ? (
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Become a Partner</h2>
                <p className="text-gray-600 mb-6">Fill out the form below to start the partnership process.</p>
                
                <form onSubmit={handleApplySubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <div className="relative">
                      <Building className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input required type="text" className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900" placeholder="Your Company Inc." />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <div className="relative">
                      <User className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input required type="text" className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900" placeholder="Your Name" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                    <div className="relative">
                      <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input required type="email" className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900" placeholder="jane@yourcompany.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your company</label>
                    <div className="relative">
                      <MessageSquare className="w-5 h-5 text-gray-400 absolute left-4 top-5" />
                      <textarea rows="4" className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none text-gray-900" placeholder="What does your company do and why do you want to partner with Aparaitech?"></textarea>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Received!</h2>
                <p className="text-gray-600 mb-8">
                  Thank you for your interest in partnering with Aparaitech. Our team will review your application and be in touch shortly.
                </p>
                <button 
                  onClick={() => { setIsModalOpen(false); setApplicationSent(false); }}
                  className="px-8 py-3 bg-gray-100 text-gray-800 font-bold rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Partners;