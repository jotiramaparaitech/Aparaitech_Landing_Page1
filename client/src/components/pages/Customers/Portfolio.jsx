import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "FinTech Dashboard",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "HealthTrack Mobile",
      category: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "EcoCommerce",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Smart Home IoT",
      category: "Enterprise",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "EduLearn Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Corporate Identity",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <div className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Work Speaks for Itself</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of digital products, websites, and enterprise systems we've crafted with precision and passion.
          </p>
        </div>
      </div>

      {/* PORTFOLIO GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Filter Tabs (Visual Only) */}
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {['All', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'Enterprise'].map((filter) => (
              <button 
                key={filter} 
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeFilter === filter ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl cursor-pointer">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/800x600?text=Project+Image";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-1">{project.category}</span>
                  <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Have a project in mind?</h2>
        <Link to="/#contact" className="inline-block px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors shadow-lg">Let's Talk</Link>
      </section>

    </div>
  );
};

export default Portfolio;