import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimationFrame, useMotionValue, useTransform, animate } from 'framer-motion';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [windowWidth, setWindowWidth] = useState(0);
  const [containerCenter, setContainerCenter] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  const containerRef = useRef(null);
  const isHoveringRef = useRef(false);
  // Purely controls the infinite carousel track
  const globalOffset = useMotionValue(0);

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

  // Measure environment rigorously to prevent SSR hydration jumps
  useEffect(() => {
    const updateMeasurements = () => {
      setWindowWidth(window.innerWidth);
      if (containerRef.current) {
        setContainerCenter(containerRef.current.getBoundingClientRect().width / 2);
      }
    };
    
    setMounted(true);
    updateMeasurements();
    window.addEventListener("resize", updateMeasurements);
    return () => window.removeEventListener("resize", updateMeasurements);
  }, []);

  // Ensures enough duplicated array geometry to maintain seamless loops visually 
  const getExtendedProjects = (projs, winWidth) => {
    if (projs.length === 0) return [];
    let extended = [...projs];
    const cWidth = winWidth < 640 ? winWidth * 0.75 : 350;
    const requiredLen = Math.ceil((winWidth + cWidth * 4) / cWidth);
    
    // Safety loop: must be at least 10 cards for math overflow safety 
    while (extended.length < Math.max(10, requiredLen)) {
      extended = [...extended, ...projs];
    }
    return extended;
  };

  const displayProjects = mounted ? getExtendedProjects(filteredProjects, windowWidth) : [];

  // Reset scroll smoothly when filter changes
  useEffect(() => {
    if (mounted) globalOffset.set(0);
  }, [activeFilter, mounted, globalOffset]);

  // Framer native physics game loop - pushes the global offset consistently 
  useAnimationFrame((t, delta) => {
    if (isHoveringRef.current || !mounted) return;
    const speed = 0.05; // Base pace setup config (px per ms)
    globalOffset.set(globalOffset.get() - (speed * delta));
  });

  // Responsive Metrics
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const cardWidth = isMobile ? windowWidth * 0.75 : (isTablet ? 300 : 350); 
  const gap = isMobile ? 16 : 32;
  const totalWidth = displayProjects.length * (cardWidth + gap);

  // Physical Forward / Back Jumps 
  const slide = (direction) => {
    isHoveringRef.current = true;
    const targetOffset = globalOffset.get() + (direction * (cardWidth + gap));
    animate(globalOffset, targetOffset, {
      type: "spring",
      stiffness: 400,
      damping: 40,
      onComplete: () => {
        isHoveringRef.current = false;
      }
    });
  };

  if (!mounted) return null; // Safe guard vs SSR hydration styling cracks 

  return (
    <div className="pt-16 min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* HERO SECTION */}
      <div className="relative bg-black text-white py-32 sm:py-40 flex items-center justify-center overflow-hidden">
        {/* Supplied Image Layer */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{ 
            backgroundImage: "url('https://images.openai.com/static-rsc-4/CRizB3SS_krGI6E6ugBI2N1dDBON68ncG7lx1WqE_wPzFxhvZY_UWqeRNfcQsmDXe_XkwBoTEW9E4LpP3yF-jsIy9DLDF_YjNSZnMTDen-KJTe8_u5clYqQzAjL83MDjzCQzBkuB2z_q3NBzfEjwIJj_96a2ePz8sGFW-ceqqt5BzXax-lmoQq5jQsmwlSET?purpose=fullsize')" 
          }}
        />
        {/* High contrast legibility gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            Our Work Speaks for Itself
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-medium">
            A showcase of digital products, websites, and enterprise systems
            we've crafted with precision and passion.
          </p>
        </div>
      </div>

      {/* PORTFOLIO CAROUSEL */}
      <section className="py-24 overflow-hidden relative">
        <div className="max-w-[100vw] mx-auto">
          
          {/* Filters */}
          <div className="flex justify-center gap-4 mb-20 flex-wrap px-6 text-center relative z-20">
            {['All', 'Web Development', 'Enterprise'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-black text-white shadow-lg scale-105'
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="relative w-full pb-4" ref={containerRef}>
            
            {/* Prev Navigation Button */}
            <button 
              onClick={() => slide(1)}
              className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center bg-white/95 backdrop-blur border border-gray-100 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] text-black hover:bg-black hover:text-white transition-all transform hover:scale-110"
            >
              <svg className="w-6 h-6 ml-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>

            {/* Next Navigation Button */}
            <button 
              onClick={() => slide(-1)}
              className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center bg-white/95 backdrop-blur border border-gray-100 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] text-black hover:bg-black hover:text-white transition-all transform hover:scale-110"
            >
              <svg className="w-6 h-6 mr-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Carousel Canvas Layer */}
            {displayProjects.length > 0 ? (
              <motion.div 
                className="relative w-full h-[480px] sm:h-[550px]"
                onHoverStart={() => isHoveringRef.current = true}
                onHoverEnd={() => isHoveringRef.current = false}
                onPanSessionStart={() => isHoveringRef.current = true}
                onPan={(e, info) => {
                  globalOffset.set(globalOffset.get() + info.delta.x);
                }}
                onPanEnd={() => isHoveringRef.current = false}
                style={{ cursor: "grab" }}
                whileTap={{ cursor: "grabbing" }}
              >
                {displayProjects.map((project, idx) => (
                  <CardItem
                    key={`${activeFilter}-${idx}`} // Force clean reset instances on filters
                    project={project}
                    index={idx}
                    cardWidth={cardWidth}
                    gap={gap}
                    totalWidth={totalWidth}
                    globalOffset={globalOffset}
                    viewportCenter={containerCenter || windowWidth / 2}
                  />
                ))}
              </motion.div>
            ) : (
              <div className="text-center text-gray-500 py-10 text-lg relative z-20">No matching projects found.</div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-auto py-20 bg-white text-center border-t border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Have a project in mind?
        </h2>
        <Link
          to="/contact"
          className="inline-block px-10 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg"
        >
          Let's Talk
        </Link>
      </section>
    </div>
  );
};

// -------------------------------------------------------------------------------------------------
// Internal Micro Component: Governs strictly its own localized calculations & bounds
// -------------------------------------------------------------------------------------------------
const CardItem = ({ project, index, cardWidth, gap, totalWidth, globalOffset, viewportCenter }) => {
  const basePosition = index * (cardWidth + gap);

  // Mathematical Modulo bounds to permit perfectly infinite circling bounds logic
  const x = useTransform(globalOffset, (offset) => {
    const virtualX = basePosition + offset;
    const wrappedX = ((virtualX % totalWidth) + totalWidth) % totalWidth;
    return wrappedX - cardWidth; // -cardWidth shifts the zero point deliberately so teleport snaps happen out of camera
  });

  // Scale computation utilizing exact dynamic distance from the viewport center 
  const scale = useTransform(x, (currentX) => {
    const cardCenter = currentX + cardWidth / 2;
    const dist = Math.abs(cardCenter - viewportCenter);
    const maxDist = cardWidth + gap; // Peak decay 

    if (dist > maxDist) return 0.85;

    const ratio = 1 - (dist / maxDist);
    return 0.85 + (ratio * 0.3); // High peak 1.15 scaling mapping exactly to 0 range 
  });

  // Derived properties tied sequentially off the master scale 
  const y = useTransform(scale, [0.85, 1.15], [30, 0]); // Provides the physical drop-back shelf geometry
  const zIndex = useTransform(scale, (s) => Math.round(s * 100)); // Natural physical layering 
  const opacity = useTransform(scale, [0.85, 1.15], [0.4, 1]); // Desaturated background depth

  // Centercast shadow illumination mapping 
  const shadowAlpha = useTransform(scale, [0.85, 1.15], [0.03, 0.4]); 
  const boxShadow = useTransform(shadowAlpha, a => `0 25px 50px -12px rgba(0,0,0,${a})`);
  const dimOpacity = useTransform(scale, [0.85, 1.1], [0.45, 0]); // Film overlay

  return (
    <motion.div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: cardWidth,
        x,
        y,
        scale,
        zIndex,
        opacity,
        boxShadow
      }}
      className="group overflow-hidden rounded-3xl border border-gray-100 bg-white"
    >
      <a
         href={project.link}
         target="_blank"
         rel="noopener noreferrer"
         className="block relative w-full h-full cursor-pointer"
         draggable="false"
      >
        <div className="relative w-full h-[220px] sm:h-[280px] bg-gray-100 border-b border-gray-100">
          
          {/* Dimmer atmospheric haze for side cards */}
          <motion.div 
            style={{ opacity: dimOpacity }} 
            className="absolute inset-0 bg-black z-20 pointer-events-none" 
          />

          {project.type === "video" ? (
             <iframe
               src={project.video}
               className="w-full h-full border-0 relative z-10"
               title={project.title}
               allowFullScreen
               loading="lazy"
             />
          ) : (
             <img src={project.image} alt={project.title} className="w-full h-full object-cover relative z-10" draggable="false" />
          )}

          {/* Imperative click guard - avoids iframe swallowing global UX inputs & drags  */}
          <div className="absolute inset-0 z-30 pointer-events-auto opacity-0" />
        </div>

        <div className="p-6 sm:p-7 relative z-10 bg-white flex flex-col justify-center min-h-[140px]">
          <span className="text-blue-600 text-[10px] sm:text-xs font-black uppercase tracking-widest block mb-2">
            {project.category}
          </span>
          <h3 className="text-gray-900 text-lg sm:text-xl font-bold leading-tight line-clamp-2">
            {project.title}
          </h3>
        </div>
      </a>
    </motion.div>
  );
};

export default Portfolio;
