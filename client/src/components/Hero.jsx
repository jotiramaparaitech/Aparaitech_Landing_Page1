import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const HeroSection = () => {
  const [clientsCount, setClientsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const navigate = useNavigate();


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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    Cloud: () => (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
      </svg>
    ),
    Shield: () => (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    CheckCircle: () => (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    Users: () => (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 2.197a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    TrendingUp: () => (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  };

  return (
    <div
      id="home"
      className="relative min-h-[90vh] pt-6 pb-16 bg-[#020617] text-white overflow-hidden border-b border-slate-800/80"
    >

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12 md:py-24 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 backdrop-blur-sm text-[#22D3EE] text-xs font-mono font-semibold uppercase tracking-wider">
              <Icons.TrendingUp />
              <span className="ml-2 font-bold">Enterprise Software & AI Engineering</span>
            </div>

            {/* Main heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white">
              Architecting Enterprise Software &{' '}
              <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Sovereign AI Platforms
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              We engineer high-performance custom software, distributed cloud systems, and autonomous AI agents designed to accelerate enterprise velocity and scale operations with resilience.
            </p>

            {/* Features list */}
            <div className="grid sm:grid-cols-2 gap-3.5 pt-1">
              {[
                'Enterprise Cloud & SaaS Architecture',
                'Autonomous Multi-Agent Workflows',
                'DevSecOps & Microservices Pipelines',
                'Dedicated Full-Stack Engineering Pods',
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2.5">
                  <div className="flex-shrink-0 w-4 h-4 text-[#22D3EE]">
                    <Icons.CheckCircle />
                  </div>
                  <span className="text-slate-300 text-xs sm:text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-3">
              <button
                onClick={handleConnectClick}
                className="group inline-flex items-center justify-center px-6 sm:px-7 py-3.5 text-sm sm:text-base font-bold rounded-xl bg-[#0D9488] hover:bg-[#0f766e] text-white transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-teal-500/20 cursor-pointer"
              >
                <div className="mr-2.5 group-hover:rotate-12 transition-transform">
                  <Icons.Rocket />
                </div>
                <span>Book Architecture Consultation</span>
              </button>

              <button
                onClick={() => navigate('/software-development')}
                className="group inline-flex items-center justify-center px-6 sm:px-7 py-3.5 text-sm sm:text-base font-semibold rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-slate-700 hover:border-[#22D3EE]/50 transition-all duration-300 hover:scale-[1.02] text-white cursor-pointer"
              >
                <div className="mr-2.5 group-hover:scale-110 transition-transform text-[#22D3EE]">
                  <Icons.PlayCircle />
                </div>
                <span>Explore Solutions</span>
              </button>
            </div>
          </div>

          {/* Right content - Visual cards */}
          <div className="relative">
            {/* Main card container */}
            <div className="relative bg-[#0B1220]/95 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-2xl overflow-hidden">
              {/* Subtle accent glows */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#0D9488]/15 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-[#22D3EE]/15 rounded-full blur-2xl pointer-events-none"></div>

              <div className="relative space-y-4">
                {/* Service cards */}
                {[
                  {
                    icon: <Icons.ChartLine />,
                    title: 'Growth Analytics & BI',
                    description: 'Enterprise data pipelines and predictive intelligence',
                    color: 'from-teal-500 to-cyan-400',
                    path: "/services/growth-analytics"
                  },
                  {
                    icon: <Icons.Cloud />,
                    title: 'Cloud Infrastructure',
                    description: 'Resilient multi-cloud deployments & Kubernetes',
                    color: 'from-cyan-500 to-blue-500',
                    path: "/services/cloud-solutions"
                  },
                  {
                    icon: <Icons.Shield />,
                    title: 'Secure Enterprise Systems',
                    description: 'Zero-trust architecture with ISO & SOC2 standards',
                    color: 'from-emerald-500 to-teal-400',
                    path: "/services/secure-platform"
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    onClick={() => navigate(service.path)}
                    className="group bg-[#020617]/80 rounded-xl p-4 border border-slate-800/80 hover:border-[#22D3EE]/50 hover:bg-[#020617] transition-all duration-300 hover:scale-[1.01] cursor-pointer"
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} text-slate-950 font-bold shrink-0`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#22D3EE] transition-colors">{service.title}</h3>
                        <p className="text-slate-400 text-xs mt-0.5">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Enterprise Engineering Pods Card */}
                <div
                  onClick={() => navigate('/software-development')}
                  className="cursor-pointer bg-gradient-to-r from-teal-950/40 via-slate-900 to-cyan-950/40 rounded-xl p-4.5 border border-teal-500/30 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3.5 mb-2.5">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-400 text-slate-950 rounded-lg flex items-center justify-center font-bold text-xs tracking-wider shadow-md shrink-0">
                      ES
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">Enterprise Software & AI Systems</div>
                      <div className="text-[11px] font-mono text-[#22D3EE]">Architecture • Cloud Native • Autonomous Workflows</div>
                    </div>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Engineering mission-critical enterprise software, distributed cloud platforms, and intelligent automation built for resilient scale.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-blue-400/30 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-purple-400/30 rounded-full animate-ping animation-delay-500"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline styles for animations */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% auto;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;