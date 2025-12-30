import React, { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "AI-Powered Analytics",
    description: "Get actionable insights with real-time data analysis powered by advanced machine learning algorithms.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Enterprise Security",
    description: "Military-grade encryption and compliance with global standards including GDPR, HIPAA, and SOC2.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    gradient: "from-indigo-500 to-blue-600"
  },
  {
    title: "Seamless Integration",
    description: "Connect with 1000+ tools via our comprehensive API suite and ready-to-use plugins.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    gradient: "from-violet-500 to-purple-600"
  },
  {
    title: "Real-time Collaboration",
    description: "Work together with live editing, comments, and synchronized workflows across teams.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    gradient: "from-sky-500 to-blue-500"
  },
  {
    title: "Cloud Native",
    description: "Built for scale with auto-scaling, load balancing, and global CDN distribution.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
      </svg>
    ),
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock customer support with dedicated engineers and comprehensive documentation.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    title: "Auto Scaling",
    description: "Automatically scale resources based on demand with intelligent load balancing.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    title: "Real-time Monitoring",
    description: "Monitor performance metrics and get alerts for any issues in real-time.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    gradient: "from-amber-500 to-orange-500"
  }
];

// Duplicate features for seamless scroll
const duplicatedFeatures = [...features, ...features];

const Features = () => {
  const scrollRef = useRef(null);
  const animationFrameRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollSpeed = 0.4; // pixels per frame

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

    document.querySelectorAll('.feature-card').forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let isRunning = true;

    // ✅ Initialize ONCE
    if (scrollRef.current && scrollPositionRef.current === 0) {
      scrollPositionRef.current = -scrollRef.current.scrollWidth / 2;
    }

    const scrollFeatures = () => {
      if (!scrollRef.current || !isRunning) return;

      if (!isHovered) {
        const halfWidth = scrollRef.current.scrollWidth / 2;

        scrollPositionRef.current += scrollSpeed;

        // ✅ Invisible infinite loop
        if (scrollPositionRef.current >= 0) {
          scrollPositionRef.current -= halfWidth;
        }

        scrollRef.current.style.transform = `translateX(${scrollPositionRef.current}px)`;
      }

      animationFrameRef.current = requestAnimationFrame(scrollFeatures);
    };

    animationFrameRef.current = requestAnimationFrame(scrollFeatures);

    return () => {
      isRunning = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered]); // ✅ ADD isHovered to dependencies

  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-b from-blue-50/30 to-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/5 via-transparent to-cyan-100/5"></div>
      
      {/* Very subtle grid pattern - much less visible */}
      <div className="absolute inset-0 opacity-1">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #bfdbfe 0.5px, transparent 0.5px),
                           linear-gradient(to bottom, #bfdbfe 0.5px, transparent 0.5px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - More compact */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 backdrop-blur-sm rounded-full mb-4 border border-blue-100/30">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse"></div>
            <span className="text-xs font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              ENTERPRISE FEATURES
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Everything you need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              build and scale
            </span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Powerful features designed for modern software teams
          </p>
        </div>

        {/* Horizontal Scrolling Features - Single Row */}
        <div className="relative overflow-hidden py-4 mb-10">
          <div 
            ref={scrollRef}
            className="flex min-w-max transition-transform duration-75 ease-linear"
            style={{ willChange: 'transform' }}
          >
            {duplicatedFeatures.map((feature, index) => (
              <div
                key={`feature-${index}`}
                className="
                  relative
                  group
                  flex-shrink-0
                  mx-3
                  px-5
                  py-4
                  bg-white/95
                  backdrop-blur-sm
                  rounded-xl
                  border border-gray-200/40
                  shadow-sm
                  shadow-blue-100/10
                  hover:shadow-md
                  hover:shadow-blue-200/20
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  cursor-pointer
                  w-[280px]
                "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Icon */}
                <div className={`
                  w-10
                  h-10
                  rounded-lg
                  bg-gradient-to-br
                  ${feature.gradient}
                  flex
                  items-center
                  justify-center
                  mb-3
                  shadow-sm
                  group-hover:shadow
                  transition-all
                  duration-300
                `}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Subtle hover border effect */}
                <div className={`
                  absolute
                  inset-0
                  rounded-xl
                  bg-gradient-to-br
                  ${feature.gradient}
                  opacity-0
                  group-hover:opacity-5
                  transition-opacity
                  duration-300
                  -z-10
                `}></div>
              </div>
            ))}
          </div>
          
          {/* Lighter gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white/80 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/80 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Lighter Stats Cards */}
        <div className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "99.9%", label: "Uptime", color: "from-blue-400 to-cyan-400" },
              { value: "<100ms", label: "Latency", color: "from-blue-400 to-indigo-400" },
              { value: "10M+", label: "API Calls", color: "from-indigo-400 to-purple-400" },
              { value: "24/7", label: "Support", color: "from-cyan-400 to-teal-400" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-gray-200/30 hover:border-blue-200/50 transition-colors duration-300">
                <div className={`text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <p className="text-gray-500 text-xs font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lighter CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/30 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse"></div>
                <h3 className="text-base font-bold text-gray-800">Ready to get started?</h3>
              </div>
              <p className="text-gray-500 text-xs">Start your 14-day free trial</p>
            </div>
            <div className="flex gap-2">
              <button className="
                px-4
                py-2
                bg-gradient-to-r from-blue-500 to-cyan-500
                text-white
                font-semibold
                rounded-lg
                hover:shadow-md
                hover:shadow-blue-500/30
                transition-all
                duration-300
                hover:-translate-y-0.5
                text-sm
                hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600
              ">
                Start Free Trial
              </button>
              <button className="
                px-4
                py-2
                bg-white
                text-gray-600
                font-semibold
                rounded-lg
                border border-gray-300/50
                hover:bg-gray-50
                hover:border-gray-400/50
                transition-all
                duration-300
                hover:-translate-y-0.5
                text-sm
              ">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;