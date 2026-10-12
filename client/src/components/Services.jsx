import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Cloud, Code, Cpu, Brain, GitBranch, Shield,
  Smartphone, BarChart3, RefreshCw, Palette,
  Database, GraduationCap
} from "lucide-react";


const services = [
  {
    title: "Cloud Computing",
    description:
      "Scalable, secure cloud solutions designed for enterprise performance and reliability.",
    image: null,
    path: "/cloud-computing",
    icon: <Cloud className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Software Development",
    description:
      "Modern web and mobile application development using robust, scalable architectures.",
    image: null,
    path: "/software-development",
    icon: <Code className="w-6 h-6 text-green-500" />,
  },
  {
    title: "IT Consulting",
    description:
      "Strategic consulting to optimize infrastructure, systems, and digital growth.",
    image: null,
    path: "/it-consulting",
    icon: <Cpu className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "AI & Machine Learning",
    description:
      "Predictive analytics, computer vision, NLP solutions powered by advanced ML/CNN models.",
    image: null,
    path: "/services/ai-machine-learning",
    icon: <Brain className="w-6 h-6 text-pink-500" />,
  },
  {
    title: "DevOps & CI/CD",
    description:
      "Automation, Docker, Kubernetes, cloud pipelines for seamless deployment and scaling.",
    image: null,
    path: "/services/devops-cicd",
    icon: <GitBranch className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "Security audits, penetration testing, compliance with industry standards and regulations.",
    image: null,
    path: "/services/cybersecurity",
    icon: <Shield className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Mobile App Development",
    description:
      "Android, iOS, Flutter, React Native applications with native performance and UX.",
    image: null,
    path: "/services/mobile-app-development",
    icon: <Smartphone className="w-6 h-6 text-indigo-500" />,
  },
  {
    title: "Data Analytics & Big Data",
    description:
      "Dashboards, ETL pipelines, business intelligence for data-driven decision making.",
    image: null,
    path: "/services/data-analytics",
    icon: <BarChart3 className="w-6 h-6 text-teal-500" />,
  },
  {
    title: "Digital Transformation",
    description:
      "Legacy system modernization, automation to accelerate business growth and efficiency.",
    image: null,
    path: "/services/digital-transformation",
    icon: <RefreshCw className="w-6 h-6 text-cyan-500" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Wireframes, design systems, user research to create intuitive and engaging experiences.",
    image: null,
    path: "/services/ui-ux-design",
    icon: <Palette className="w-6 h-6 text-violet-500" />,
  },
  {
    title: "ERP / CRM Solutions",
    description:
      "Custom ERP, CRM integrations to streamline operations and enhance customer relationships.",
    image: null,
    path: "/services/erp-crm",
    icon: <Database className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "E-Learning & College Portals",
    description:
      "CET portals, LMS, student management systems for educational institutions.",
    image: null,
    path: "/services/e-learning",
    icon: <GraduationCap className="w-6 h-6 text-amber-500" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Services = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);
  const scrollRef = useRef(null);
  const animationFrameRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const duplicatedServices = [...services, ...services];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const scroll = () => {
      if (!scrollRef.current || isHovered || hovered !== null) return;

      scrollPositionRef.current += 0.5;
      const maxScroll = scrollRef.current.scrollWidth / 2;

      if (scrollPositionRef.current >= maxScroll) {
        scrollPositionRef.current = 0;
      }

      scrollRef.current.style.transform = `translateX(-${scrollPositionRef.current}px)`;
    };

    animationFrameRef.current = requestAnimationFrame(function animate() {
      scroll();
      animationFrameRef.current = requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [isHovered, isMobile, hovered]);

  return (
    <section className="bg-[#0B1220] py-20 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-500/30 text-[#22D3EE] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse"></span>
            Enterprise Software & Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Specialized Engineering Domains
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            High-availability systems, cloud-native deployments, and autonomous intelligence engineered to scale.
          </p>
        </div>

        <section className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B1220] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B1220] to-transparent z-10 pointer-events-none" />

          <div ref={scrollRef} className="flex gap-6 pb-4">
            {duplicatedServices.map((service, index) => (
              <motion.div
                key={`${service.title}-${index}`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => service.path && navigate(service.path)}
                onMouseEnter={() => {
                  setHovered(index);
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  setHovered(null);
                  setIsHovered(false);
                }}
                className="
                  group relative overflow-hidden flex-shrink-0
                  w-[330px] sm:w-[350px] p-6 rounded-2xl
                  bg-[#020617] border border-slate-800
                  hover:border-[#0D9488] hover:shadow-2xl hover:shadow-[#0D9488]/15
                  transition-all duration-300 cursor-pointer
                "
              >
                {/* Subtle corner glow */}
                <div className="
                  absolute -bottom-12 -right-12
                  w-28 h-28 rounded-full
                  bg-teal-500/5 group-hover:bg-[#0D9488]/15
                  transition-all duration-300 blur-xl
                " />

                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-[#0D9488]/50 transition-all">
                      {service.image ? (
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-6 h-6 brightness-100"
                        />
                      ) : (
                        service.icon
                      )}
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                      Tier 1
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#22D3EE] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="flex items-center text-xs font-semibold text-[#0D9488] group-hover:text-[#22D3EE] transition-colors gap-1">
                    <span>Explore Domain</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
    
  );
  
};

export default Services;
