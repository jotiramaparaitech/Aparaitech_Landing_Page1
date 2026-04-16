import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const projects = [
    {
      title: "Java Workshop Session",
      category: "Web Development",
      type: "video",
      video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7445717531413278720?compact=1",
      link: "https://www.linkedin.com/"
    },
    {
      title: "Full Stack Java Event",
      category: "Web Development",
      type: "video",
      video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7445739612481953792?compact=1",
      link: "https://www.linkedin.com/"
    },
    {
      title: "Aparaitech Activity",
      category: "Enterprise",
      type: "video",
      video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7445782477169795072?compact=1",
      link: "https://www.linkedin.com/posts/rohan-jagtap-b83881311_aparaitech-hiring-careers-ugcPost-7445782477169795072-Ws7s/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEQ5x2IBm41Hen-TDzd-DSFj4GyXYNo5Wkk"
    },
    {
      title: "Aparaitech Activity",
      category: "Enterprise",
      type: "video",
      video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7445739612481953792?compact=1",
      link: "https://www.linkedin.com/posts/harshad-dhaigude-40653a2b0_aparaitech-hiring-careers-ugcPost-7445739612481953792-9oqJ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQ5x2IBm41Hen-TDzd-DSFj4GyXYNo5Wkk"
    },
    {
      title: "Aparaitech Activity",
      category: "Enterprise",
      type: "video",
      video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7445742848412524544?compact=1",
      link: "https://www.linkedin.com/posts/pooja-chavan7270_aparaitech-hiring-careers-ugcPost-7445742848412524544-p6Zz/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQ5x2IBm41Hen-TDzd-DSFj4GyXYNo5Wkk"
    },
    {
      title: "Aparaitech Activity",
      category: "Enterprise",
      type: "video",
      video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7445738360092000256?compact=1",
      link: "https://www.linkedin.com/posts/aditya-raut-184232331_aparaitech-hiring-careers-ugcPost-7445738360092000256-gwc2/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQ5x2IBm41Hen-TDzd-DSFj4GyXYNo5Wkk"
    }
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Mouse drag scrolling handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <div className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Work Speaks for Itself
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of digital products, websites, and enterprise systems
            we've crafted with precision and passion.
          </p>
        </div>
      </div>

      {/* PORTFOLIO HORIZONTAL SCROLL SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="px-6">
          
          {/* Filter Tabs */}
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {['All', 'Web Development', 'Enterprise'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Horizontal Scroll Container */}
          <div className="relative group">
            {/* Left Gradient Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Right Gradient Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Scroll Buttons */}
            <button 
              onClick={() => {
                const container = document.getElementById('horizontal-scroll-container');
                container.scrollBy({ left: -400, behavior: 'smooth' });
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/80 hover:bg-black text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              onClick={() => {
                const container = document.getElementById('horizontal-scroll-container');
                container.scrollBy({ left: 400, behavior: 'smooth' });
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/80 hover:bg-black text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Horizontal Scrollable Grid */}
            <div 
              id="horizontal-scroll-container"
              className="flex gap-8 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pb-8"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {filteredProjects.map((project, idx) => (
                <a
                  key={idx}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/project flex-shrink-0 w-[350px] md:w-[400px] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white transform hover:-translate-y-2"
                >
                  {project.type === "video" ? (
                    <div className="relative overflow-hidden h-80">
                      <iframe
                        src={project.video}
                        className="w-full h-full"
                        title={project.title}
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover"
                    />
                  )}

                  <div className="p-5">
                    <span className="text-blue-500 text-sm font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-gray-900 text-xl font-bold mt-2 group-hover/project:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
            <span className="text-sm text-gray-500 ml-2">← Drag to scroll →</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Have a project in mind?
        </h2>
        <Link
          to="/contact"
          className="inline-block px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors shadow-lg"
        >
          Let's Talk
        </Link>
      </section>

      {/* Add custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;