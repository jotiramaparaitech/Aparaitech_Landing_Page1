import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";  // Adjust this path if your ThemeContext is elsewhere.

const HeroSection = () => {
  const [clientsCount, setClientsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const navigate = useNavigate();

  const [isDark, setIsDark] = useState(() => {
    if (typeof document === "undefined") return true;

    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    const root = document.documentElement;

    const updateTheme = () => {
      setIsDark(root.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    const animateCounter = (setter, target, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setter(Math.floor(start));
      }, 16);
    };

    animateCounter(setClientsCount, 250);
    animateCounter(setSatisfactionCount, 99);
    animateCounter(setProjectsCount, 500);
  }, []);

  const handleConnectClick = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  const theme = {
    section: isDark
      ? "bg-[#020617] text-white border-slate-800/80"
      : "bg-gradient-to-br from-[#F4F8FF] via-white to-[#EAF2FF] text-slate-900 border-blue-100",
    glowBlue: isDark ? "bg-blue-500 opacity-10" : "bg-blue-300 opacity-25",
    glowPurple: isDark ? "bg-purple-500 opacity-10" : "bg-indigo-300 opacity-20",
    glowCyan: isDark ? "bg-cyan-500 opacity-10" : "bg-sky-300 opacity-25",
    badge: isDark
      ? "bg-cyan-950/60 border-cyan-500/30 text-cyan-300"
      : "bg-blue-50/90 border-blue-200 text-blue-700",
    heading: isDark ? "text-white" : "text-slate-900",
    accent: isDark
      ? "from-teal-400 via-cyan-300 to-teal-400"
      : "from-blue-500 via-sky-400 to-indigo-500",
    paragraph: isDark ? "text-slate-300" : "text-slate-600",
    featureIcon: isDark ? "text-cyan-300" : "text-blue-600",
    featureText: isDark ? "text-slate-300" : "text-slate-600",
    primaryButton: isDark
      ? "bg-[#0D9488] hover:bg-[#0f766e] text-white shadow-teal-500/20"
      : "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20",
    secondaryButton: isDark
      ? "bg-white/5 hover:bg-white/10 border-slate-700 hover:border-cyan-300/50 text-white"
      : "bg-white/80 hover:bg-blue-50 border-blue-200 hover:border-blue-400 text-slate-700 shadow-sm",
    secondaryIcon: isDark ? "text-cyan-300" : "text-blue-600",
    panel: isDark
      ? "bg-[#0B1220]/95 border-slate-800"
      : "bg-white/90 border-blue-100 shadow-blue-100/70",
    panelGlowOne: isDark ? "bg-teal-500/15" : "bg-blue-300/30",
    panelGlowTwo: isDark ? "bg-cyan-400/15" : "bg-sky-300/30",
    serviceCard: isDark
      ? "bg-[#020617]/80 border-slate-800/80 hover:border-cyan-300/50 hover:bg-[#020617]"
      : "bg-white/90 border-blue-100 hover:border-blue-300 hover:bg-blue-50/80 shadow-sm hover:shadow-md hover:shadow-blue-100/70",
    serviceTitle: isDark ? "text-white group-hover:text-cyan-300" : "text-slate-800 group-hover:text-blue-700",
    serviceDescription: isDark ? "text-slate-400" : "text-slate-500",
    enterpriseCard: isDark
      ? "from-teal-950/40 via-slate-900 to-cyan-950/40 border-teal-500/30 hover:border-cyan-400/50"
      : "from-blue-50 via-white to-sky-50 border-blue-200 hover:border-blue-300 shadow-sm",
    enterpriseTitle: isDark ? "text-white" : "text-slate-800",
    enterpriseSubtitle: isDark ? "text-cyan-300" : "text-blue-700",
    enterpriseDescription: isDark ? "text-slate-300" : "text-slate-600",
    scrollBorder: isDark ? "border-white/30" : "border-blue-300",
    scrollDot: isDark ? "bg-white/50" : "bg-blue-400/70",
  };
  // Icons as SVG components
  const Icons = {
    Rocket: () => (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),

    PlayCircle: () => (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),

    ChartLine: () => (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18M7 14l4-4 4 4 6-7" />
      </svg>
    ),

    TrendingUp: () => (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17l6-6 4 4 8-8M15 7h6v6" />
      </svg>
    ),

    CheckCircle: () => (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),

    Cloud: () => (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 16a4 4 0 010-8 5.5 5.5 0 0110.5-1.5A4.5 4.5 0 1117 16H5z" />
      </svg>
    ),

    Shield: () => (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
      </svg>
    ),
  };


  return (
    <div id="home"
      className={`relative min-h-[90vh] pt-6 pb-16 overflow-hidden border-b transition-colors duration-500 ${theme.section}`
      }
    >
      {/* Animated background elements */}
      < div className="absolute inset-0 overflow-hidden pointer-events-none" >
        <div className={`absolute top-0 left-0 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl animate-pulse ${theme.glowBlue}`} />
        <div className={`absolute top-1/3 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000 ${theme.glowPurple}`} />
        <div className={`absolute bottom-0 left-1/3 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000 ${theme.glowCyan}`} />
      </div >

      <div className="relative container mx-auto px-4 py-12 md:py-24 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className={`inline-flex items-center px-3.5 py-1.5 rounded-full border backdrop-blur-sm text-xs font-mono font-semibold uppercase tracking-wider transition-colors duration-500 ${theme.badge}`}>
              <Icons.TrendingUp />
              <span className="ml-2 font-bold">Enterprise Software & AI Engineering</span>
            </div>

            {/* Main heading */}
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight tracking-tight transition-colors duration-500 ${theme.heading}`}>
              Architecting Enterprise Software &{" "}
              <span className={`bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient`}>
                Sovereign AI Platforms
              </span>
            </h1>

            {/* Description */}
            <p className={`text-base sm:text-lg max-w-xl leading-relaxed transition-colors duration-500 ${theme.paragraph}`}>
              We engineer high-performance custom software, distributed cloud systems, and autonomous AI agents designed to accelerate enterprise velocity and scale operations with resilience.
            </p>

            {/* Features list */}
            <div className="grid sm:grid-cols-2 gap-3.5 pt-1">
              {[
                "Enterprise Cloud & SaaS Architecture",
                "Autonomous Multi-Agent Workflows",
                "DevSecOps & Microservices Pipelines",
                "Dedicated Full-Stack Engineering Pods",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2.5">
                  <div className={`flex-shrink-0 w-4 h-4 ${theme.featureIcon}`}>
                    <Icons.CheckCircle />
                  </div>
                  <span className={`text-xs sm:text-sm font-medium ${theme.featureText}`}>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-3">
              <button
                onClick={handleConnectClick}
                className={`group inline-flex items-center justify-center px-6 sm:px-7 py-3.5 text-sm sm:text-base font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg cursor-pointer ${theme.primaryButton}`}
              >
                <div className="mr-2.5 group-hover:rotate-12 transition-transform">
                  <Icons.Rocket />
                </div>
                <span>Book Architecture Consultation</span>
              </button>

              <button
                onClick={() => navigate("/software-development")}
                className={`group inline-flex items-center justify-center px-6 sm:px-7 py-3.5 text-sm sm:text-base font-semibold rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-[1.02] cursor-pointer ${theme.secondaryButton}`
                }
              >
                <div className={`mr-2.5 group-hover:scale-110 transition-transform ${theme.secondaryIcon}`}>
                  <Icons.PlayCircle />
                </div>
                <span>Explore Solutions</span>
              </button >
            </div >
          </div >

          {/* Right content - Visual cards */}
          < div className="relative" >
            {/* Main card container */}
            < div className={`relative backdrop-blur-xl rounded-2xl p-5 sm:p-6 border shadow-2xl overflow-hidden transition-colors duration-500 ${theme.panel}`}>
              {/* Subtle accent glows */}
              < div className={`absolute -top-10 -left-10 w-32 h-32 rounded-full blur-2xl pointer-events-none ${theme.panelGlowOne}`} />
              < div className={`absolute -bottom-10 -right-10 w-36 h-36 rounded-full blur-2xl pointer-events-none ${theme.panelGlowTwo}`} />

              < div className="relative space-y-4" >
                {/* Service cards */}
                {
                  [
                    {
                      icon: <Icons.ChartLine />,
                      title: "Growth Analytics & BI",
                      description: "Enterprise data pipelines and predictive intelligence",
                      color: "from-teal-500 to-cyan-400",
                      path: "/services/growth-analytics",
                    },
                    {
                      icon: <Icons.Cloud />,
                      title: "Cloud Infrastructure",
                      description: "Resilient multi-cloud deployments & Kubernetes",
                      color: "from-cyan-500 to-blue-500",
                      path: "/services/cloud-solutions",
                    },
                    {
                      icon: <Icons.Shield />,
                      title: "Secure Enterprise Systems",
                      description: "Zero-trust architecture with ISO & SOC2 standards",
                      color: "from-emerald-500 to-teal-400",
                      path: "/services/secure-platform",
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      onClick={() => navigate(service.path)}
                      className={`group rounded-xl p-4 border transition-all duration-300 hover:scale-[1.01] cursor-pointer ${theme.serviceCard}`}
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} text-slate-950 font-bold shrink-0`}>
                          {service.icon}
                        </div>
                        <div>
                          <h3 className={`text-sm sm:text-base font-bold transition-colors ${theme.serviceTitle}`}>
                            {service.title}
                          </h3>
                          <p className={`text-xs mt-0.5 ${theme.serviceDescription}`}>{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))
                }

                {/* Enterprise Engineering Pods Card */}
                <div
                  onClick={() => navigate("/software-development")}
                  className={`cursor-pointer bg-gradient-to-r rounded-xl p-4.5 border transition-all duration-300 ${theme.enterpriseCard}`}
                >
                  <div className="flex items-center space-x-3.5 mb-2.5">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-sky-400 text-slate-950 rounded-lg flex items-center justify-center font-bold text-xs tracking-wider shadow-md shrink-0">
                      ES
                    </div>
                    <div>
                      <div className={`font-bold text-sm ${theme.enterpriseTitle}`}>
                        Enterprise Software & AI Systems
                      </div>
                      <div className={`text-[11px] font-mono ${theme.enterpriseSubtitle}`}>
                        Architecture • Cloud Native • Autonomous Workflows
                      </div>
                    </div>
                  </div>
                  <p className={`text-xs leading-relaxed ${theme.enterpriseDescription}`}>
                    Engineering mission-critical enterprise software, distributed cloud platforms, and intelligent automation built for resilient scale.
                  </p>
                </div>
              </div >
            </div >

            {/* Decorative floating elements */}
            < div className={`absolute -top-4 -right-4 w-20 h-20 border-2 rounded-full animate-ping ${isDark ? "border-blue-400/30" : "border-blue-400/40"}`} />
            < div className={`absolute -bottom-4 -left-4 w-16 h-16 border-2 rounded-full animate-ping animation-delay-500 ${isDark ? "border-purple-400/30" : "border-indigo-300/50"}`} />
          </div >
        </div >

        {/* Scroll indicator */}
        < div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block" >
          <div className="animate-bounce">
            <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${theme.scrollBorder}`}>
              <div className={`w-1 h-3 rounded-full mt-2 ${theme.scrollDot}`} />
            </div>
          </div>
        </div >
      </div >

      {/* Inline styles for animations */}
      < style > {`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% auto;
        }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style >
    </div >
  );
};

export default HeroSection;
