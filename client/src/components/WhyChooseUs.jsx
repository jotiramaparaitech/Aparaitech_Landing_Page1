import React, { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "AI-Powered Analytics",
    description:
      "Get actionable insights with real-time data analysis powered by advanced machine learning algorithms.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Enterprise Security",
    description:
      "Military-grade encryption and compliance with global standards including GDPR, HIPAA, and SOC2.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    title: "Seamless Integration",
    description:
      "Connect with 1000+ tools via our comprehensive API suite and ready-to-use plugins.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Real-time Collaboration",
    description:
      "Work together with live editing, comments, and synchronized workflows across teams.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    gradient: "from-sky-500 to-blue-500",
  },
  {
    title: "Cloud Native",
    description:
      "Built for scale with auto-scaling, load balancing, and global CDN distribution.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
      </svg>
    ),
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock customer support with dedicated engineers and comprehensive documentation.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    title: "Auto Scaling",
    description:
      "Automatically scale resources based on demand with intelligent load balancing.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Real-time Monitoring",
    description:
      "Monitor performance metrics and get alerts for any issues in real-time.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    gradient: "from-amber-500 to-orange-500",
  },
];

const duplicatedFeatures = [...features, ...features];

const stats = [
  { value: "99.9%", label: "Uptime SLA Guarantee", color: "from-teal-500 to-cyan-500 dark:from-teal-400 dark:to-cyan-300" },
  { value: "Zero-Trust", label: "ISO 27001 Security", color: "from-cyan-600 to-blue-500 dark:from-cyan-400 dark:to-blue-400" },
  { value: "<50ms", label: "Edge Latency Target", color: "from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-400" },
  { value: "Dedicated", label: "Senior Engineering Pods", color: "from-teal-600 to-sky-500 dark:from-teal-300 dark:to-cyan-400" },
];

const Features = () => {
  const scrollRef = useRef(null);
  const animationFrameRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const getScrollSpeed = () => {
    if (isMobile) return 0;
    if (isTablet) return 0.3;
    return 0.4;
  };

  useEffect(() => {
    if (isMobile) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      return;
    }

    let isRunning = true;

    if (scrollRef.current && scrollPositionRef.current === 0) {
      scrollPositionRef.current = -scrollRef.current.scrollWidth / 2;
    }

    const scrollFeatures = () => {
      if (!scrollRef.current || !isRunning || isMobile) return;

      if (!isHovered) {
        const halfWidth = scrollRef.current.scrollWidth / 2;
        const currentScrollSpeed = getScrollSpeed();

        scrollPositionRef.current += currentScrollSpeed;

        if (halfWidth > 0 && scrollPositionRef.current >= 0) {
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
        animationFrameRef.current = null;
      }
    };
  }, [isHovered, isMobile, isTablet]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToPartners = () => {
    document.getElementById("partners")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const mobileFeatures = features.slice(0, 4);

  const cardClass =
    "rounded-xl border border-sky-100 bg-white p-5 shadow-sm shadow-sky-100/60 transition-all duration-300 hover:border-sky-300 hover:shadow-md dark:border-slate-800 dark:bg-[#0B1220] dark:shadow-none dark:hover:border-[#0D9488]/60";

  return (
    <section className="relative overflow-hidden border-b border-sky-100 bg-slate-50 py-16 text-slate-900 transition-colors duration-300 dark:border-slate-800 dark:bg-[#020617] dark:text-white lg:py-20">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-100/70 via-transparent to-blue-100/60 dark:from-teal-950/10 dark:to-cyan-950/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl animate-fadeInUp text-center sm:mb-14">
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-sky-700 dark:border-teal-500/30 dark:bg-teal-950/60 dark:text-[#22D3EE]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-500 dark:bg-[#22D3EE]" />
            <span>Enterprise Architecture Principles</span>
          </div>

          <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
            Engineered for{" "}
            <span className="bg-gradient-to-r from-sky-600 to-blue-500 bg-clip-text text-transparent dark:from-teal-400 dark:to-cyan-300">
              High-Reliability Scale
            </span>
          </h2>

          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
            Resilient microservices, zero-trust security pipelines, and
            sovereign data intelligence built for modern enterprises.
          </p>
        </div>

        {/* Mobile feature grid */}
        {isMobile ? (
          <div className="mb-8 sm:mb-10">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {mobileFeatures.map((feature, index) => (
                <div
                  key={`mobile-${index}`}
                  className={`${cardClass} active:scale-[0.98]`}
                >
                  <div
                    className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${feature.gradient} shadow-sm transition-all duration-300`}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>

                  <h3 className="mb-2 line-clamp-1 text-base font-bold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>

                  <p className="line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Desktop and tablet auto-scrolling cards */
          <div
            className="-mx-3 mb-8 overflow-hidden py-3 sm:-mx-4 sm:mb-10 sm:py-4 md:-mx-6 lg:-mx-12"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Left fade */}
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-12 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent dark:from-[#020617] dark:via-[#020617]/90 sm:w-16 md:w-20 lg:w-24" />

            {/* Right fade */}
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-12 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent dark:from-[#020617] dark:via-[#020617]/90 sm:w-16 md:w-20 lg:w-24" />

            <div
              ref={scrollRef}
              className="flex min-w-max"
              style={{ willChange: "transform" }}
            >
              {duplicatedFeatures.map((feature, index) => (
                <div
                  key={`feature-${index}`}
                  className={`${cardClass} group relative mx-2 w-[260px] flex-shrink-0 transition-transform duration-300 hover:scale-[1.02] sm:mx-3 sm:w-[280px] sm:p-6 md:w-[300px] lg:w-[320px]`}
                >
                  <div
                    className={`mb-2 flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br ${feature.gradient} shadow-sm transition-all duration-300 group-hover:shadow sm:mb-3 sm:h-9 sm:w-9 sm:rounded-lg md:h-10 md:w-10`}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>

                  <h3 className="mb-1.5 line-clamp-1 text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-sky-700 dark:text-white dark:group-hover:text-[#22D3EE] sm:text-lg">
                    {feature.title}
                  </h3>

                  <p className="line-clamp-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:line-clamp-3 sm:text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Statistics */}
        <div className="mb-8 px-2 sm:px-0">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex min-h-[75px] flex-col justify-center rounded-xl border border-sky-100 bg-white p-3.5 text-center shadow-sm shadow-sky-100/50 transition-colors duration-300 hover:border-sky-300 dark:border-slate-800 dark:bg-[#0B1220] dark:shadow-none dark:hover:border-[#0D9488]/50 sm:min-h-[85px] sm:p-4"
              >
                <div
                  className={`mb-1 bg-gradient-to-r ${stat.color} bg-clip-text font-mono text-xl font-bold text-transparent sm:text-2xl`}
                >
                  {stat.value}
                </div>

                <p className="text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="px-2 text-center sm:px-0">
          <div className="mx-auto inline-flex w-full max-w-3xl flex-col items-center justify-between gap-4 rounded-2xl border border-sky-100 bg-white p-5 shadow-xl shadow-sky-100/50 dark:border-slate-800 dark:bg-[#0B1220] dark:shadow-black/20 sm:flex-row sm:p-6">
            <div className="text-left">
              <div className="mb-1 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-sky-500 dark:bg-[#22D3EE]" />

                <h3 className="text-base font-bold text-slate-900 dark:text-white sm:text-lg">
                  Ready to architect your platform?
                </h3>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 sm:text-sm">
                Connect with our Hinjawadi technical architects for an
                end-to-end evaluation.
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-2.5 sm:w-auto sm:flex-row">
              <button
                type="button"
                onClick={scrollToContact}
                className="cursor-pointer rounded-xl bg-sky-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:scale-[1.02] hover:bg-sky-700 dark:bg-[#0D9488] dark:shadow-teal-500/20 dark:hover:bg-[#0f766e] sm:text-sm"
              >
                Schedule Consultation
              </button>

              <button
                type="button"
                onClick={scrollToPartners}
                className="cursor-pointer rounded-xl border border-sky-200 bg-sky-50 px-4 py-2.5 text-xs font-semibold text-slate-700 transition-all duration-300 hover:border-sky-300 hover:bg-sky-100 hover:text-sky-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-[#22D3EE]/50 dark:hover:bg-slate-800 dark:hover:text-white sm:text-sm"
              >
                Our Partners
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;