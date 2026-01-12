import React from 'react';

const Partners = () => {
  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      
      {/* HERO */}
      <div className="bg-gradient-to-br from-indigo-900 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Partner with Aparaitech</h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto mb-10">
            Join our ecosystem of technology leaders, system integrators, and consultants delivering world-class solutions.
          </p>
          <button className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-lg hover:bg-indigo-50 transition-colors">
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
          <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Partners;