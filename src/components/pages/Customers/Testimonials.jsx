import React from 'react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Trusted by Visionaries</h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the founders, CTOs, and product leaders who build with Aparaitech.
          </p>
        </div>
      </div>

      {/* TESTIMONIALS GRID */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {[
              {
                quote: "Aparaitech transformed our legacy system into a modern, scalable platform. Their team is not just a vendor, but a true partner.",
                author: "Sarah Jenkins",
                role: "CTO, FinTech Global",
                bg: "bg-white"
              },
              {
                quote: "The speed of delivery was incredible. We went from concept to MVP in just 8 weeks, allowing us to secure our Series A funding.",
                author: "Michael Chen",
                role: "Founder, StartUp Inc.",
                bg: "bg-blue-600 text-white"
              },
              {
                quote: "Their expertise in AI and Machine Learning helped us automate 60% of our customer support queries. Highly recommended.",
                author: "David Ross",
                role: "VP of Product, RetailGiant",
                bg: "bg-white"
              },
              {
                quote: "Security was our top priority, and Aparaitech delivered. We passed our compliance audits with flying colors thanks to their robust architecture.",
                author: "Elena Rodriguez",
                role: "CISO, HealthSecure",
                bg: "bg-white"
              },
              {
                quote: "The UI/UX design team is world-class. Our user engagement metrics doubled after the redesign.",
                author: "James Wilson",
                role: "Marketing Director, EduTech",
                bg: "bg-purple-600 text-white"
              },
              {
                quote: "Reliable, transparent, and technically brilliant. Aparaitech is the best development team we've worked with.",
                author: "Anita Patel",
                role: "CEO, LogiTech",
                bg: "bg-white"
              }
            ].map((item, idx) => (
              <div key={idx} className={`break-inside-avoid rounded-2xl p-8 shadow-lg ${item.bg} ${item.bg === 'bg-white' ? 'text-gray-800' : 'text-white'}`}>
                <div className="mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className={`text-lg mb-6 leading-relaxed ${item.bg === 'bg-white' ? 'text-gray-600' : 'text-blue-100'}`}>
                  "{item.quote}"
                </p>
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 ${item.bg === 'bg-white' ? 'bg-gray-200 text-gray-600' : 'bg-white/20 text-white'}`}>
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{item.author}</div>
                    <div className={`text-xs ${item.bg === 'bg-white' ? 'text-gray-500' : 'text-blue-200'}`}>{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join our happy clients</h2>
          <Link to="/contact" className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg">
            Start Your Project
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Testimonials;