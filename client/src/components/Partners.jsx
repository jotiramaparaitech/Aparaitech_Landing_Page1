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
  const scrollRef = useRef(null);
  const animationFrameRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const scrollSpeed = 0.5; // pixels per frame

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
        scrollPositionRef.current -= scrollSpeed;
        
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
  }, [isHovered]);

  // Add custom animation classes to Tailwind
  const style = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    @keyframes pulseGlow {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.5; }
    }
    @keyframes scanLine {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(400%); }
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.05); opacity: 0.8; }
    }
    @keyframes codeGlow {
      0%, 100% { box-shadow: 0 0 5px rgba(139, 92, 246, 0.3); }
      50% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.6); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animate-fadeInUp {
      animation: fadeInUp 0.6s ease-out forwards;
    }
    .animate-shimmer {
      animation: shimmer 2s infinite;
    }
    .animate-pulse-glow {
      animation: pulseGlow 3s ease-in-out infinite;
    }
    .animate-scan {
      animation: scanLine 8s linear infinite;
    }
    .animate-pulse-subtle {
      animation: pulse 4s ease-in-out infinite;
    }
    .animate-code-glow {
      animation: codeGlow 2s ease-in-out infinite;
    }
  `;

  return (
    <>
      <style>{style}</style>
      <section 
        ref={sectionRef}
        className="relative py-16 md:py-24 bg-gradient-to-b from-[#f5f1ff] to-[#ede7ff] overflow-hidden"
      >
        {/* Subtle glowing particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-purple-300/30 to-pink-300/30 blur-sm"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
        
        {/* Animated scan line effect */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30 animate-scan"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section with Animation */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-6 animate-float">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              <span className="text-white text-sm font-medium tracking-wide">
                TRUSTED BY INDUSTRY LEADERS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Powering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Innovation
              </span>{" "}
              Worldwide
            </h2>
            <p className="text-lg text-gray-700">
              We collaborate with industry-leading companies to deliver cutting-edge software solutions
              that transform businesses and drive growth.
            </p>
          </div>

          {/* Infinite Scrolling Logos Section */}
          <div className="relative overflow-hidden py-8">
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
                    mx-4
                    px-6
                    py-4
                    md:px-8
                    md:py-6
                    bg-white/90
                    backdrop-blur-sm
                    rounded-2xl
                    border border-white/40
                    shadow-lg
                    shadow-purple-100/30
                    hover:shadow-2xl
                    hover:shadow-purple-200/50
                    transition-all
                    duration-300
                    hover:scale-105
                    w-[160px]
                    h-[100px]
                    md:w-[180px]
                    md:h-[120px]
                    flex-shrink-0
                    cursor-pointer
                    animate-pulse-subtle
                  "
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >

                  {/* Logo Container */}
                  <div className="relative w-full h-full flex items-center justify-center p-2">
                    {/* Hover glow effect */}
                    <div 
                      className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
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
                        max-h-12
                        md:max-h-14
                        object-contain
                        transition-all
                        duration-500
                        drop-shadow-lg
                        z-10
                        filter
                        brightness-100
                        group-hover:brightness-110
                        group-hover:drop-shadow-xl
                        group-hover:scale-110
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
            
          </div>

          {/* Tech stats with animated counters */}
          <div className="mt-20 pt-16 border-t border-purple-200/30">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: "99.9%", label: "Uptime SLA", delay: "0s", suffix: "%" },
                { value: "10M+", label: "API Requests/Day", delay: "0.1s", suffix: "+" },
                { value: "50+", label: "Enterprise Partners", delay: "0.2s", suffix: "+" },
                { value: "<50ms", label: "Avg Response Time", delay: "0.3s", suffix: "ms" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center group opacity-0 animate-fadeInUp"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="relative inline-block">
                    <div className="relative text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                      {stat.value}
                      <span className="absolute -right-4 -top-2 text-xl">{stat.suffix}</span>
                    </div>
                    <div className="absolute -inset-3 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <p className="text-gray-700 font-medium mt-2 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Animated CTA with code-like elements */}
          <div className="mt-20 text-center animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <div className="relative inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-white/90 backdrop-blur-sm rounded-3xl border border-white/40 shadow-xl shadow-purple-100/50 hover:shadow-2xl hover:shadow-purple-200/70 transition-all duration-500 group/cta">
              {/* Terminal-like corners */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-purple-400/50 rounded-tl-lg"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-pink-400/50 rounded-tr-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-purple-400/50 rounded-bl-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-pink-400/50 rounded-br-lg"></div>
              
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
                  <h3 className="text-xl font-bold text-gray-900">Become Our Partner</h3>
                </div>
                <p className="text-gray-700">Integrate with our cutting-edge APIs.</p>
              </div>
              <button className="
                relative
                overflow-hidden
                px-8
                py-3
                bg-gradient-to-r from-purple-500 to-pink-500
                text-white
                font-semibold
                rounded-xl
                hover:shadow-xl
                hover:shadow-purple-500/25
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
              ">
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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