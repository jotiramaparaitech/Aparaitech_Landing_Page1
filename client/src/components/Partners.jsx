import React, { useEffect, useRef, useState } from "react";

const partners = [
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    color: "#00A4EF"
  },
  {
    name: "Salesforce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    color: "#00A1E0"
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
        id="partners" // ✅ ADD THIS ID for scrolling
        ref={sectionRef}
        className="relative py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-[#f5f1ff] to-[#ede7ff] overflow-hidden"
      >
        {/* Subtle glowing particles - reduced on mobile */}
        {[...Array(isMobile ? 8 : 15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-purple-300/20 to-pink-300/20 blur-sm"
            style={{
              width: `${Math.random() * (isMobile ? 4 : 6) + 2}px`,
              height: `${Math.random() * (isMobile ? 4 : 6) + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}

        {/* Animated scan line effect - thinner on mobile */}
        <div className="absolute top-0 left-0 right-0 h-px sm:h-0.5 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent opacity-30 animate-scan"></div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          {/* Header Section with Animation - Responsive */}
          <div className="text-center max-w-2xl sm:max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16 animate-fadeInUp px-2 sm:px-0">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-4 sm:mb-6 animate-float">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></span>
              <span className="text-xs sm:text-sm font-medium tracking-wide text-white">
                TRUSTED BY INDUSTRY LEADERS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Powering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Innovation
              </span>{" "}
              Worldwide
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 px-2 sm:px-0">
              We collaborate with industry-leading companies to deliver cutting-edge software solutions
              that transform businesses and drive growth.
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
                    bg-white/90
                    backdrop-blur-sm
                    rounded-xl
                    sm:rounded-2xl
                    border border-white/40
                    shadow-lg
                    shadow-purple-100/20
                    sm:shadow-purple-100/30
                    hover:shadow-xl
                    sm:hover:shadow-2xl
                    hover:shadow-purple-200/30
                    sm:hover:shadow-purple-200/50
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
                    animate-pulse-subtle
                  "
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onTouchStart={() => setIsHovered(true)}
                  onTouchEnd={() => setIsHovered(false)}
                >

                  {/* Logo Container */}
                  <div className="relative w-full h-full flex items-center justify-center p-1 sm:p-2">
                    {/* Hover glow effect - reduced on mobile */}
                    <div
                      className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-20 sm:group-hover:opacity-40 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at center, ${partner.color}20, transparent 70%)`
                      }}
                    ></div>

                    {/* Logo - Responsive */}
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
                        xl:max-h-14
                        object-contain
                        transition-all
                        duration-500
                        drop-shadow-lg
                        z-10
                        filter
                        brightness-100
                        group-hover:brightness-105
                        sm:group-hover:brightness-110
                        group-hover:drop-shadow-lg
                        sm:group-hover:drop-shadow-xl
                        group-hover:scale-105
                        sm:group-hover:scale-110
                      "
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${partner.name}&background=8b5cf6&color=fff&bold=true&size=128`;
                      }}
                    />
                  </div>

                </div>
              ))}
            </div>

            {/* Responsive gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-3 md:w-4 bg-gradient-to-r from-[#f5f1ff]/70 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-2 sm:w-3 md:w-4 bg-gradient-to-l from-[#f5f1ff]/70 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Tech stats with animated counters - Responsive */}
          <div className="mt-12 sm:mt-14 md:mt-16 lg:mt-20 pt-8 sm:pt-10 md:pt-12 lg:pt-16 border-t border-purple-200/30">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              {[
                { value: "200+", label: "Projects Delivered", delay: "0s" },
                { value: "80+", label: "Happy Clients", delay: "0.1s" },
                { value: "15+", label: "Industries Served", delay: "0.2s" },
                { value: "24/7", label: "Support & Maintenance", delay: "0.3s" }
              ]
                .map((stat, index) => (
                  <div
                    key={index}
                    className="text-center group opacity-0 animate-fadeInUp"
                    style={{ animationDelay: stat.delay }}
                  >
                    <div className="relative inline-block">
                      <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-1 sm:mb-2">
                        {stat.value}
                        <span className="absolute -right-2 sm:-right-3 -top-1 sm:-top-1.5 text-sm sm:text-base md:text-lg lg:text-xl">{stat.suffix}</span>
                      </div>
                      <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-lg sm:rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <p className="text-gray-700 font-medium mt-1 sm:mt-2 text-xs sm:text-sm">{stat.label}</p>
                  </div>
                ))}
            </div>
          </div>

          {/* Animated CTA with code-like elements - Responsive */}
          <div className="mt-12 sm:mt-14 md:mt-16 lg:mt-20 text-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="
              relative 
              inline-flex 
              flex-col 
              sm:flex-row 
              items-center 
              justify-center
              sm:justify-between
              gap-4 
              sm:gap-5 
              md:gap-6 
              p-4 
              sm:p-5 
              md:p-6 
              lg:p-8 
              bg-white/90 
              backdrop-blur-sm 
              rounded-xl 
              sm:rounded-2xl 
              lg:rounded-3xl 
              border 
              border-white/40 
              shadow-lg 
              sm:shadow-xl 
              shadow-purple-100/30 
              sm:shadow-purple-100/50 
              hover:shadow-xl 
              sm:hover:shadow-2xl 
              hover:shadow-purple-200/40 
              sm:hover:shadow-purple-200/70 
              transition-all 
              duration-500 
              group/cta
              w-full
              max-w-2xl
              lg:max-w-3xl
              mx-auto
            ">
              {/* Terminal-like corners - responsive */}
              <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-purple-400/50 rounded-tl-lg"></div>
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-pink-400/50 rounded-tr-lg"></div>
              <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-purple-400/50 rounded-bl-lg"></div>
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-pink-400/50 rounded-br-lg"></div>

              <div className="text-left">
                <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Become Our Partner</h3>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base">Integrate with our cutting-edge APIs.</p>
              </div>
              <button className="
                relative
                overflow-hidden
                px-4
                sm:px-5
                md:px-6
                lg:px-8
                py-2
                sm:py-2.5
                md:py-3
                bg-gradient-to-r from-purple-500 to-pink-500
                text-white
                font-semibold
                rounded-lg
                sm:rounded-xl
                hover:shadow-lg
                sm:hover:shadow-xl
                hover:shadow-purple-500/20
                sm:hover:shadow-purple-500/25
                transition-all
                duration-300
                hover:-translate-y-0.5
                active:translate-y-0
                whitespace-nowrap
                group/btn
                before:absolute
                before:inset-0
                before:bg-gradient-to-r
                before:from-pink-500
                before:to-purple-500
                before:translate-x-[-100%]
                before:transition-transform
                before:duration-500
                hover:before:translate-x-0
                border-2
                border-transparent
                hover:border-white/20
                text-xs
                sm:text-sm
                md:text-base
                w-full
                sm:w-auto
              " onClick={() => {
                  const section = document.getElementById("contact");
                  if (section) {
                    const yOffset = -5; // adjust based on your navbar height
                    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}>

                <span className="relative z-10 flex items-center gap-1.5 sm:gap-2 justify-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Partner With Us
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;