import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const scrollRef = useRef(null);
  const isHoveringRef = useRef(false);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

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
      video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7445742848412524544?compact=1",
      link: "https://www.linkedin.com/posts/pooja-chavan7270_aparaitech-hiring-careers-ugcPost-7445742848412524544-p6Zz/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQ5x2IBm41Hen-TDzd-DSFj4GyXYNo5Wkk"
    }
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Expands small filtered arrays so they constantly fill the ultra-wide desktop monitors
  const getExtendedProjects = (projs) => {
    if (projs.length === 0) return [];
    let extended = [...projs];
    while (extended.length < 8) {
      extended = [...extended, ...projs];
    }
    return extended;
  };

  const displayProjects = getExtendedProjects(filteredProjects);

  // 1. Core JS Game Loop for perfectly fluid horizontal auto-scrolling
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollLeft = 0; // Reset starting line on tab switch
    let animationFrameId;
    let exactScroll = 0;
    let lastTime = performance.now();

    const scroll = (time) => {
      const delta = time - lastTime;
      
      // Stop moving the carousel natively if a user is dragging/hovering or just clicked navigation buttons
      if (!isHoveringRef.current && !isScrollingRef.current && el) {
        // Speed Calculation (px per ms). 0.05px/ms = ~50px per second. Constant regardless of refresh rate monitor.
        exactScroll += delta * 0.05; 
        
        const halfWidth = el.scrollWidth / 2;
        if (exactScroll >= halfWidth) exactScroll -= halfWidth; // The loop magic marker
        
        el.scrollLeft = exactScroll;
      } else {
        // Resync exactScroll seamlessly if the scroll position was externally nudged via drag or button
        exactScroll = el.scrollLeft;
      }
      
      lastTime = time;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [activeFilter, displayProjects.length]);

  // 2. Button Intercepter to smoothly glide by exactly 1 card without crashing into infinite loop walls
  const slide = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    
    isScrollingRef.current = true; // Lock auto trigger
    
    // Calculate accurate card widths + visual gap widths
    const set1 = el.firstElementChild;
    const card = set1 ? set1.firstElementChild : null;
    const gap = window.innerWidth >= 640 ? 32 : 24; 
    const offset = direction * (card ? card.offsetWidth + gap : 350);

    const halfWidth = el.scrollWidth / 2;
    
    // Infinite bounding box check before smooth jump triggers
    if (direction === -1 && el.scrollLeft <= Math.abs(offset)) {
       el.scrollLeft += halfWidth;
    } else if (direction === 1 && el.scrollLeft > halfWidth) {
       el.scrollLeft -= halfWidth;
    }

    // Trigger Native Smooth Step
    el.scrollBy({ left: offset, behavior: 'smooth' });

    // Wipe prior active limits to support aggressive rapid clicks safely
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    
    // Release the manual scroll lock to continue auto-scroll after the animation jump finishes
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 600);
  };

  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      <style>
        {`
          /* Completely hide browsers brutal grey scrollbar tracking track */
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>
      
      {/* HERO SECTION */}
      <div className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Work Speaks for Itself
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of digital products, websites, and enterprise systems
            we've crafted with precision and passion.
          </p>
        </div>
      </div>

      {/* PORTFOLIO CAROUSEL */}
      <section className="py-24 bg-white">
        <div className="max-w-[100vw] mx-auto overflow-hidden">
          
          {/* Filter Tabs */}
          <div className="flex justify-center gap-4 mb-16 flex-wrap px-6 text-center">
            {['All', 'Web Development', 'Enterprise'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-black text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Scrolling Portfolio Track */}
          {displayProjects.length > 0 ? (
            <div className="relative w-full pb-8">
              {/* Premium Ghost Edge Fades */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

              {/* Prev / Left Navigation Button */}
              <button 
                onClick={() => slide(-1)}
                className="absolute left-4 lg:left-8 top-[40%] sm:top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white/95 backdrop-blur shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 rounded-full text-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110 group focus:outline-none"
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 sm:ml-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
              </button>

              {/* Next / Right Navigation Button */}
              <button 
                onClick={() => slide(1)}
                className="absolute right-4 lg:right-8 top-[40%] sm:top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white/95 backdrop-blur shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 rounded-full text-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110 group focus:outline-none"
                aria-label="Scroll right"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 sm:mr-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              </button>

              <div 
                ref={scrollRef}
                onMouseEnter={() => (isHoveringRef.current = true)}
                onMouseLeave={() => (isHoveringRef.current = false)}
                onTouchStart={() => (isHoveringRef.current = true)}
                onTouchEnd={() => (isHoveringRef.current = false)}
                className="flex overflow-x-auto no-scrollbar"
              >
                {/* SET 1 */}
                <div className="flex w-max gap-6 sm:gap-8 pr-6 sm:pr-8 py-4 px-4 sm:px-0">
                  {displayProjects.map((project, idx) => (
                    <ProjectCard key={`orig-${idx}`} project={project} />
                  ))}
                </div>
                {/* SET 2 (Identical mirror set mimicking the infinite back half loop) */}
                <div className="flex w-max gap-6 sm:gap-8 pr-6 sm:pr-8 py-4 px-4 sm:px-0">
                  {displayProjects.map((project, idx) => (
                    <ProjectCard key={`dup-${idx}`} project={project} />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-400 py-10 font-medium">No projects found.</div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 text-center border-t border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Have a project in mind?
        </h2>
        <Link
          to="/contact"
          className="inline-block px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg"
        >
          Let's Talk
        </Link>
      </section>
    </div>
  );
};

const ProjectCard = ({ project }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block w-[85vw] sm:w-[300px] md:w-[350px] flex-shrink-0 group overflow-hidden rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_45px_rgba(0,0,0,0.12)] transition-all duration-500 bg-white hover:scale-[1.02] transform cursor-pointer"
    style={{ willChange: "transform" }}
  >
    <div className="relative w-full h-72 sm:h-80 bg-gray-50">
      {/* Invisible overlay captures mouse signals and lets 'Hover' cleanly pause the engine avoiding buggy iframe pointer intercepts */}
      <div className="absolute inset-0 z-10 transition-colors duration-300 group-hover:bg-black/5" />
      
      {project.type === "video" ? (
        <iframe
          src={project.video}
          className="w-full h-full border-0 absolute top-0 left-0"
          title={project.title}
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover absolute top-0 left-0"
          loading="lazy"
        />
      )}
    </div>

    <div className="p-6 relative z-20 bg-white">
      <span className="text-blue-600 text-xs font-black uppercase tracking-wider block mb-2">
        {project.category}
      </span>
      <h3 className="text-gray-900 text-[1.1rem] sm:text-xl font-bold leading-snug line-clamp-2">
        {project.title}
      </h3>
    </div>
  </a>
);

export default Portfolio;
