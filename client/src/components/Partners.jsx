import React, { useEffect, useRef, useState } from "react";

const partners = [
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    color: "#00A4EF"
  },
  {
    name: "NVIDIA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    color: "#76B900"
  },
  {
    name: "AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    color: "#FF9900"
  },
  {
    name: "Google Cloud",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    color: "#4285F4"
  },
  {
    name: "Slack",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    color: "#4A154B"
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    color: "#006699"
  },
  {
    name: "GitHub",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    color: "#181717"
  },
  {
    name: "Shopify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
    color: "#7AB55C"
  },
  {
    name: "Zoom",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg",
    color: "#2D8CFF"
  },
  {
    name: "Notion",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
    color: "#000000"
  }
];

// Duplicate partners for seamless infinite scroll
const duplicatedPartners = [...partners, ...partners];

const Partners = () => {
  const sectionRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);
  const animationFrameRef = useRef(null);
  const scrollPositionRef = useRef(0);

  // Responsive scroll speed based on screen size
  const getScrollSpeed = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 0.3; // Slower on mobile
      if (window.innerWidth < 1024) return 0.4; // Medium on tablet
      return 0.5; // Normal on desktop
    }
    return 0.5;
  };

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const scrollLogos = () => {
      if (scrollRef.current && !isHovered) {
        const currentScrollSpeed = getScrollSpeed();
        scrollPositionRef.current -= currentScrollSpeed;

        // Reset position when scrolled halfway
        if (Math.abs(scrollPositionRef.current) >= scrollRef.current.scrollWidth / 2) {
          scrollPositionRef.current = 0;
        }

        scrollRef.current.style.transform = `translateX(${scrollPositionRef.current}px)`;
      }
      animationFrameRef.current = requestAnimationFrame(scrollLogos);
    };

    animationFrameRef.current = requestAnimationFrame(scrollLogos);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered, isMobile]); // Add isMobile to dependencies

  // Add custom animation classes to Tailwind
  const style = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.03); opacity: 0.9; }
    }
    @keyframes scanLine {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(400%); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animate-fadeInUp {
      animation: fadeInUp 0.6s ease-out forwards;
    }
    .animate-pulse-subtle {
      animation: pulse 4s ease-in-out infinite;
    }
    .animate-scan {
      animation: scanLine 8s linear infinite;
    }
  `;

  return (
    <>
      <style>{style}</style>
      <section
        id="partners"
        ref={sectionRef}
        className="relative py-16 lg:py-20 bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white overflow-hidden border-y border-slate-200 dark:border-slate-800 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center max-w-2xl sm:max-w-3xl mx-auto mb-12 sm:mb-14 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-100 dark:bg-teal-950/60 rounded-full mb-3.5 border border-teal-300 dark:border-teal-500/30 text-teal-800 dark:text-[#22D3EE] text-xs font-mono font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-teal-600 dark:bg-[#22D3EE] rounded-full animate-pulse"></span>
              <span>Global Technology Ecosystem</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
              Powering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                Enterprise Engineering
              </span>{" "}
              Worldwide
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We architect and integrate across world-class infrastructure, data engines, and cloud platforms.
            </p>
          </div>

          {/* Infinite Scrolling Logos Section - Responsive */}
          <div className="
  relative
  overflow-hidden
  py-4 sm:py-6 md:py-8
  min-h-[90px] sm:min-h-[110px] md:min-h-[130px]
  -mx-3 sm:-mx-4 md:-mx-6 lg:-mx-16 xl:-mx-24 2xl:-mx-32
">



            <div
              ref={scrollRef}
              className="flex min-w-max transition-transform duration-75 ease-linear"
              style={{ willChange: 'transform' }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`logo-${index}`}
                  className="
                    relative
                    group
                    flex
                    items-center
                    justify-center
                    mx-2
                    sm:mx-3
                    md:mx-4
                    px-3
                    sm:px-4
                    md:px-5
                    lg:px-6
                    xl:px-8
                    py-3
                    sm:py-4
                    md:py-5
                    lg:py-6
                    bg-white dark:bg-[#0B1220]
                    rounded-xl
                    sm:rounded-2xl
                    border border-slate-200 dark:border-slate-800
                    hover:border-[#0D9488]/60
                    shadow-md dark:shadow-lg
                    hover:bg-slate-50 dark:hover:bg-slate-900
                    transition-all
                    duration-300
                    hover:scale-[1.03]
                    sm:hover:scale-105
                    active:scale-95
                    w-[120px]
                    sm:w-[140px]
                    md:w-[160px]
                    lg:w-[170px]
                    xl:w-[180px]
                    h-[75px]
                    sm:h-[85px]
                    md:h-[100px]
                    lg:h-[110px]
                    xl:h-[120px]
                    flex-shrink-0
                    cursor-pointer
                  "
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onTouchStart={() => setIsHovered(true)}
                  onTouchEnd={() => setIsHovered(false)}
                >

                  {/* Logo Container */}
                  <div className="relative w-full h-full flex items-center justify-center p-2">
                    {/* Hover glow effect */}
                    <div
                      className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at center, ${partner.color}30, transparent 70%)`
                      }}
                    ></div>

                    {/* Logo */}
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="
                        w-auto
                        h-auto
                        max-w-full
                        max-h-8
                        sm:max-h-10
                        md:max-h-12
                        lg:max-h-13
                        object-contain
                        transition-all
                        duration-500
                        z-10
                        group-hover:scale-105
                      "
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${partner.name}&background=0D9488&color=fff&bold=true&size=128`;
                      }}
                    />
                  </div>

                </div>
              ))}
            </div>

            {/* Responsive gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#020617] via-[#020617]/80 to-transparent pointer-events-none z-10"></div>
          </div>

          {/* Tech stats with animated counters */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-slate-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { value: "500+", label: "Completed Engineering Sprints", delay: "0s" },
                { value: "99.9%", label: "Deployment Uptime SLA", delay: "0.1s" },
                { value: "15+", label: "Enterprise Technology Pods", delay: "0.2s" },
                { value: "24/7", label: "DevSecOps & SRE Monitoring", delay: "0.3s" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center group p-4 rounded-xl bg-[#0B1220] border border-slate-800/80 hover:border-[#0D9488]/40 transition-all"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 mb-1">
                    {stat.value}
                  </div>
                  <p className="text-slate-400 font-medium text-xs sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="
              relative 
              inline-flex 
              flex-col 
              sm:flex-row 
              items-center 
              justify-between
              gap-4 
              p-5 
              sm:p-6 
              bg-white dark:bg-[#0B1220]
              rounded-2xl 
              border 
              border-slate-200 dark:border-slate-800 
              shadow-xl 
              w-full
              max-w-3xl
              mx-auto
            ">
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-teal-500 dark:bg-[#22D3EE] animate-pulse"></div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Join the APARAITECH Partner Network</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-600 dark:text-slate-400 text-xs sm:text-sm">Co-develop, integrate, and scale enterprise software ecosystems.</p>
              </div>
              <a
                href="/company/partners"
                className="
                  px-5
                  py-2.5
                  bg-[#0D9488] hover:bg-[#0f766e]
                  text-white
                  font-bold
                  rounded-xl
                  shadow-lg shadow-teal-500/20
                  transition-all
                  duration-300
                  hover:scale-105
                  text-xs
                  sm:text-sm
                  whitespace-nowrap
                  cursor-pointer
                "
              >
                Become a Partner →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;