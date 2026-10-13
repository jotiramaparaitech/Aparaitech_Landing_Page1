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
    <section className="bg-[#F3F6FA] dark:bg-[#0B1220] py-20 border-b border-[#E2E8F0] dark:border-[#29384D] text-[#475569] dark:text-[#CBD5E1] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] text-[#0F9F8F] dark:text-[#2DD4BF] text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0F9F8F] dark:bg-[#2DD4BF]"></span>
            Enterprise Software & Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142B4A] dark:text-[#F1F5F9] tracking-tight mb-3">
            Specialized Engineering Domains
          </h2>
          <p className="text-sm sm:text-base text-[#475569] dark:text-[#CBD5E1] max-w-2xl mx-auto leading-relaxed">
            High-availability systems, cloud-native deployments, and autonomous intelligence engineered to scale.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F3F6FA] dark:from-[#0B1220] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F3F6FA] dark:from-[#0B1220] to-transparent z-10 pointer-events-none" />

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
                  group relative flex-shrink-0
                  w-[330px] sm:w-[350px] p-6 rounded-2xl
                  bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] shadow-sm
                  hover:border-[#2563EB] dark:hover:border-[#3B82F6] hover:shadow-md
                  transition-all duration-300 cursor-pointer
                "
              >
                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] flex items-center justify-center transition-all group-hover:border-[#2563EB] dark:group-hover:border-[#3B82F6]">
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
                    <span className="text-[10px] font-mono text-[#64748B] dark:text-[#94A3B8] uppercase tracking-widest px-2 py-0.5 rounded bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D]">
                      Tier 1
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#142B4A] dark:text-[#F1F5F9] mb-2 group-hover:text-[#2563EB] dark:group-hover:text-[#3B82F6] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="flex items-center text-xs font-semibold text-[#2563EB] dark:text-[#3B82F6] transition-colors gap-1">
                    <span>Explore Domain</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
    
  );
  
};

export default Services;
