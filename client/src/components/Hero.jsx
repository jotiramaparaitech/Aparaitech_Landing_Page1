import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [clientsCount, setClientsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);

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
      className="
    min-h-screen
    pt-[25px]          // ✅ ADD THIS
    bg-gradient-to-br
    from-gray-900
    via-gray-800
    to-blue-900
    text-white
    overflow-hidden
  "
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
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm">
              <Icons.TrendingUp />
              <span className="ml-2 text-sm font-medium">Trusted by industry leaders</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Business With{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Innovative Solutions
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 max-w-2xl">
              We help companies and businesses of all sizes leverage cutting-edge technology to drive growth,
              increase efficiency, and stay ahead of the competition.
            </p>

            {/* Features list */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Custom software solutions',
                '24/7 dedicated support team',
                'Proven track record of success',
                'Scalable and secure infrastructure',
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-5 h-5">
                    <Icons.CheckCircle />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => window.open('https://lms-full-stack-mcq7.vercel.app/', '_blank')}
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-blue-500/30"
              >
                <div className="mr-3 group-hover:rotate-12 transition-transform">
                  <Icons.Rocket />
                </div>
                Explore Programs
              </button>

              <button onClick={handleConnectClick} className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105">
                <div className="mr-3 group-hover:scale-110 transition-transform">
                  <Icons.PlayCircle />
                </div>
                Connect Us
              </button>
            </div>
          </div>

          {/* Right content - Visual cards */}
          <div className="relative">
            {/* Main card container */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl overflow-hidden">
              {/* Animated background elements inside card */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-2xl rotate-12 animate-bounce"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-400/20 rounded-2xl -rotate-12 animate-bounce animation-delay-1000"></div>

              <div className="relative space-y-6">
                {/* Service cards */}
                {[
                  { icon: <Icons.ChartLine />, title: 'Growth Analytics', description: 'Data-driven insights for business growth', color: 'from-blue-500 to-cyan-400' },
                  { icon: <Icons.Cloud />, title: 'Cloud Solutions', description: 'Scalable infrastructure for your needs', color: 'from-purple-500 to-pink-400' },
                  { icon: <Icons.Shield />, title: 'Secure Platform', description: 'Enterprise-grade security protocols', color: 'from-green-500 to-emerald-400' },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${service.color}`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        <p className="text-gray-400 text-sm">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Testimonial card */}
                {/* Testimonial card (hidden on mobile) */}
                <div className="hidden md:block bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-2xl p-6 border border-blue-500/30">

                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full flex items-center justify-center font-bold">
                      SS
                    </div>
                    <div>
                      <div className="font-semibold">Salesforce Solutions</div>
                      <div className="text-sm text-gray-300">Implementation • Customization • Integration</div>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    Helping businesses unlock the full potential of Salesforce for smarter processes and stronger customer relationships.
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