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
      className="relative min-h-[85vh] pt-8 pb-16 bg-[#F3F6FA] dark:bg-[#0B1220] text-[#475569] dark:text-[#CBD5E1] overflow-hidden border-b border-[#E2E8F0] dark:border-[#29384D] transition-colors"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] text-[#0F9F8F] dark:text-[#2DD4BF] text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Icons.TrendingUp />
              <span className="ml-2 font-semibold">Enterprise Software & AI Engineering</span>
            </div>

            {/* Main heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-[#142B4A] dark:text-[#F1F5F9]">
              Architecting Enterprise Software &{' '}
              <span className="text-[#2563EB] dark:text-[#3B82F6]">
                Sovereign AI Platforms
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#475569] dark:text-[#CBD5E1] max-w-xl leading-relaxed">
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
                  <div className="flex-shrink-0 w-4 h-4 text-[#0F9F8F] dark:text-[#2DD4BF]">
                    <Icons.CheckCircle />
                  </div>
                  <span className="text-[#475569] dark:text-[#CBD5E1] text-xs sm:text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
              <button
                onClick={handleConnectClick}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 text-sm sm:text-base font-semibold rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] dark:bg-[#3B82F6] dark:hover:bg-[#2563EB] text-white transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <div className="mr-2">
                  <Icons.Rocket />
                </div>
                <span>Book Architecture Consultation</span>
              </button>

              <button
                onClick={() => navigate('/software-development')}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 text-sm sm:text-base font-semibold rounded-lg bg-white dark:bg-[#131F32] hover:bg-[#EBF0F7] dark:hover:bg-[#1A2840] border border-[#E2E8F0] dark:border-[#29384D] text-[#142B4A] dark:text-[#F1F5F9] transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <div className="mr-2 text-[#2563EB] dark:text-[#3B82F6]">
                  <Icons.PlayCircle />
                </div>
                <span>Explore Solutions</span>
              </button>
            </div>
          </div>

          {/* Right content - Visual cards */}
          <div className="lg:col-span-5 relative">
            {/* Main card container */}
            <div className="bg-white dark:bg-[#131F32] rounded-2xl p-5 sm:p-6 border border-[#E2E8F0] dark:border-[#29384D] shadow-lg space-y-4">
              {/* Header inside card */}
              <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0] dark:border-[#29384D]">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8]">
                  Core Capabilities
                </span>
                <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-blue-500/10 text-[#2563EB] dark:text-[#3B82F6]">
                  Pune CoE
                </span>
              </div>

              {/* Service cards */}
              {[
                {
                  icon: <Icons.ChartLine />,
                  title: 'Growth Analytics & BI',
                  description: 'Enterprise data pipelines and predictive intelligence',
                  path: "/services/growth-analytics"
                },
                {
                  icon: <Icons.Cloud />,
                  title: 'Cloud Infrastructure',
                  description: 'Resilient multi-cloud deployments & Kubernetes',
                  path: "/services/cloud-solutions"
                },
                {
                  icon: <Icons.Shield />,
                  title: 'Secure Enterprise Systems',
                  description: 'Zero-trust architecture with ISO & SOC2 standards',
                  path: "/services/secure-platform"
                },
              ].map((service, index) => (
                <div
                  key={index}
                  onClick={() => navigate(service.path)}
                  className="group bg-[#F3F6FA] dark:bg-[#0B1220] rounded-xl p-3.5 sm:p-4 border border-[#E2E8F0] dark:border-[#29384D] hover:border-[#2563EB] dark:hover:border-[#3B82F6] transition-all cursor-pointer shadow-sm hover:shadow"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-lg bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] flex items-center justify-center text-[#0F9F8F] dark:text-[#2DD4BF] shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#142B4A] dark:text-[#F1F5F9] group-hover:text-[#2563EB] dark:group-hover:text-[#3B82F6] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[#64748B] dark:text-[#94A3B8] text-xs mt-0.5">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Enterprise Engineering Pods Card */}
              <div
                onClick={() => navigate('/software-development')}
                className="cursor-pointer bg-[#F3F6FA] dark:bg-[#0B1220] rounded-xl p-4 border border-[#E2E8F0] dark:border-[#29384D] hover:border-[#2563EB] dark:hover:border-[#3B82F6] transition-all shadow-sm"
              >
                <div className="flex items-center space-x-3.5 mb-2">
                  <div className="w-10 h-10 bg-[#2563EB] dark:bg-[#3B82F6] text-white rounded-lg flex items-center justify-center font-bold text-xs tracking-wider shadow-sm shrink-0">
                    ES
                  </div>
                  <div>
                    <div className="font-bold text-[#142B4A] dark:text-[#F1F5F9] text-sm">Enterprise Software & AI Systems</div>
                    <div className="text-[11px] text-[#0F9F8F] dark:text-[#2DD4BF] font-medium">Architecture • Cloud Native • Autonomous Workflows</div>
                  </div>
                </div>
                <p className="text-[#475569] dark:text-[#CBD5E1] text-xs leading-relaxed">
                  Engineering mission-critical enterprise software, distributed cloud platforms, and intelligent automation built for resilient scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;