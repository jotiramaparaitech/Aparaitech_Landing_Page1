import React from 'react';
import { Link } from 'react-router-dom';

const Webinars = () => {
  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <div className="bg-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-block px-3 py-1 bg-purple-800 rounded text-purple-200 text-xs font-bold uppercase tracking-wide mb-4">
                Upcoming Live Event
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">The Future of Generative AI in Enterprise</h1>
              <p className="text-lg text-purple-200 mb-8">
                Join our expert panel as we discuss how Large Language Models are reshaping business operations and decision-making.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div>
                  <div className="text-sm text-purple-300 uppercase">Date</div>
                  <div className="font-bold">Oct 24, 2023</div>
                </div>
                <div>
                  <div className="text-sm text-purple-300 uppercase">Time</div>
                  <div className="font-bold">10:00 AM PST</div>
                </div>
              </div>
              <button className="px-8 py-3 bg-white text-purple-900 font-bold rounded-lg hover:bg-purple-50 transition-colors">
                Register Now
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="bg-purple-800/50 rounded-2xl p-2 border border-purple-700">
                <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=80" alt="Webinar" className="rounded-xl w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ON DEMAND SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">On-Demand Webinars</h2>
              <p className="text-gray-600 mt-2">Watch past sessions at your convenience.</p>
            </div>
            <a href="#" className="text-purple-600 font-bold hover:text-purple-800">View All →</a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud Migration Strategies",
                speaker: "Sarah Johnson, Cloud Architect",
                date: "Sep 15, 2023",
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Securing Your API Infrastructure",
                speaker: "David Chen, Security Lead",
                date: "Aug 28, 2023",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Building Scalable Microservices",
                speaker: "Alex Rivera, DevOps Engineer",
                date: "Aug 10, 2023",
                image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
              }
            ].map((webinar, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="relative">
                  <img src={webinar.image} alt={webinar.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center pl-1">
                      <svg className="w-6 h-6 text-purple-900" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-purple-600 font-bold mb-2">{webinar.date}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{webinar.title}</h3>
                  <p className="text-sm text-gray-500">{webinar.speaker}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Webinars;