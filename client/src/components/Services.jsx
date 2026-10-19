import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Cloud,
  Code,
  Cpu,
  Brain,
  GitBranch,
  Shield,
  Smartphone,
  BarChart3,
  RefreshCw,
  Palette,
  Database,
  GraduationCap,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const services = [
  {
    title: "Cloud Computing",
    description:
      "Scalable, secure cloud solutions designed for enterprise performance and reliability.",
    path: "/cloud-computing",
    icon: Cloud,
    color: "text-blue-500",
  },
  {
    title: "Software Development",
    description:
      "Modern web and mobile application development using robust, scalable architectures.",
    path: "/software-development",
    icon: Code,
    color: "text-emerald-500",
  },
  {
    title: "IT Consulting",
    description:
      "Strategic consulting to optimize infrastructure, systems, and digital growth.",
    path: "/it-consulting",
    icon: Cpu,
    color: "text-violet-500",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Predictive analytics, computer vision, and NLP solutions powered by advanced ML models.",
    path: "/services/ai-machine-learning",
    icon: Brain,
    color: "text-pink-500",
  },
  {
    title: "DevOps & CI/CD",
    description:
      "Automation, Docker, Kubernetes, and cloud pipelines for seamless deployment and scaling.",
    path: "/services/devops-cicd",
    icon: GitBranch,
    color: "text-orange-500",
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "Security audits, penetration testing, and compliance with industry standards and regulations.",
    path: "/services/cybersecurity",
    icon: Shield,
    color: "text-red-500",
  },
  {
    title: "Mobile App Development",
    description:
      "Android, iOS, Flutter, and React Native applications with responsive user experiences.",
    path: "/services/mobile-app-development",
    icon: Smartphone,
    color: "text-indigo-500",
  },
  {
    title: "Data Analytics & Big Data",
    description:
      "Dashboards, ETL pipelines, and business intelligence for data-driven decision-making.",
    path: "/services/data-analytics",
    icon: BarChart3,
    color: "text-teal-500",
  },
  {
    title: "Digital Transformation",
    description:
      "Legacy system modernization and automation to accelerate business growth and efficiency.",
    path: "/services/digital-transformation",
    icon: RefreshCw,
    color: "text-cyan-500",
  },
  {
    title: "UI/UX Design",
    description:
      "Wireframes, design systems, and user research to create intuitive, engaging experiences.",
    path: "/services/ui-ux-design",
    icon: Palette,
    color: "text-violet-500",
  },
  {
    title: "ERP / CRM Solutions",
    description:
      "Custom ERP and CRM integrations to streamline operations and enhance customer relationships.",
    path: "/services/erp-crm",
    icon: Database,
    color: "text-blue-600",
  },
  {
    title: "E-Learning & College Portals",
    description:
      "CET portals, learning management systems, and student management solutions for educational institutions.",
    path: "/services/e-learning",
    icon: GraduationCap,
    color: "text-amber-500",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Services = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const scrollRef = useRef(null);
  const animationFrameRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const hoveredRef = useRef(false);

  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const duplicatedServices = [...services, ...services];

  const theme = {
    section: isDark
      ? "bg-[#0B1220] border-slate-800 text-white"
      : "bg-gradient-to-b from-[#F4F8FF] via-white to-[#EDF4FF] border-blue-100 text-slate-900",

    badge: isDark
      ? "bg-teal-950/60 border-teal-500/30 text-cyan-300"
      : "bg-blue-50/90 border-blue-200 text-blue-700",

    heading: isDark ? "text-white" : "text-slate-900",

    description: isDark ? "text-slate-400" : "text-slate-600",

    fade: isDark ? "from-[#0B1220]" : "from-[#F4F8FF]",

    card: isDark
      ? "bg-[#020617]/90 border-slate-800 hover:border-cyan-400/60 hover:shadow-cyan-500/10"
      : "bg-white/90 border-blue-100 hover:border-blue-300 hover:shadow-blue-200/60",

    iconBox: isDark
      ? "bg-slate-900 border-slate-800 group-hover:border-cyan-400/40"
      : "bg-blue-50/80 border-blue-100 group-hover:border-blue-300",

    tier: isDark
      ? "text-slate-400 bg-slate-900 border-slate-800"
      : "text-blue-600 bg-blue-50 border-blue-100",

    cardTitle: isDark
      ? "text-white group-hover:text-cyan-300"
      : "text-slate-800 group-hover:text-blue-700",

    cardDescription: isDark ? "text-slate-400" : "text-slate-600",

    link: isDark
      ? "text-teal-400 group-hover:text-cyan-300"
      : "text-blue-600 group-hover:text-sky-600",

    glow: isDark
      ? "bg-teal-500/5 group-hover:bg-teal-500/15"
      : "bg-blue-200/20 group-hover:bg-sky-200/50",

    dot: isDark ? "bg-cyan-300" : "bg-blue-500",
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    hoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container || isMobile) {
      if (container) {
        container.style.transform = "";
      }

      return;
    }

    let lastTime = 0;
    const speed = 30; // Pixels per second

    const animate = (timestamp) => {
      if (!lastTime) {
        lastTime = timestamp;
      }

      const delta = Math.min((timestamp - lastTime) / 1000, 0.05);
      lastTime = timestamp;

      if (!hoveredRef.current && container) {
        const halfWidth = container.scrollWidth / 2;

        if (halfWidth > 0) {
          scrollPositionRef.current += speed * delta;

          if (scrollPositionRef.current >= halfWidth) {
            scrollPositionRef.current -= halfWidth;
          }

          container.style.transform = `translate3d(-${scrollPositionRef.current}px, 0, 0)`;
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isMobile]);

  const renderServiceCard = (service, index) => {
    const Icon = service.icon;

    return (
      <motion.div
        key={`${service.title}-${index}`}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        onClick={() => navigate(service.path)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        role="link"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            navigate(service.path);
          }
        }}
        className={`group relative overflow-hidden flex-shrink-0 w-[290px] sm:w-[330px] lg:w-[350px] p-6 rounded-2xl border transition-all duration-300 cursor-pointer hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 ${
          isMobile ? "snap-start" : ""
        } ${
          isDark
            ? "focus-visible:ring-cyan-400"
            : "focus-visible:ring-blue-400"
        } ${theme.card}`}
      >
        {/* Soft corner glow */}
        <div
          className={`absolute -bottom-12 -right-12 w-32 h-32 rounded-full transition-all duration-300 blur-2xl ${theme.glow}`}
        />

        <div className="relative z-10">
          {/* Icon and service tier */}
          <div className="mb-5 flex items-center justify-between">
            <div
              className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${theme.iconBox}`}
            >
              <Icon className={`w-6 h-6 ${service.color}`} />
            </div>

            <span
              className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-md border ${theme.tier}`}
            >
              Tier 1
            </span>
          </div>

          {/* Service title */}
          <h3
            className={`text-base sm:text-lg font-bold mb-2 transition-colors ${theme.cardTitle}`}
          >
            {service.title}
          </h3>

          {/* Service description */}
          <p
            className={`text-xs sm:text-sm leading-relaxed mb-5 min-h-[60px] ${theme.cardDescription}`}
          >
            {service.description}
          </p>

          {/* Explore link */}
          <div
            className={`flex items-center text-xs font-semibold transition-colors gap-1 ${theme.link}`}
          >
            <span>Explore Domain</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="services"
      className={`relative py-20 border-b overflow-hidden transition-colors duration-500 ${theme.section}`}
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute -top-28 left-1/4 w-72 h-72 rounded-full blur-3xl ${
            isDark ? "bg-teal-500/5" : "bg-blue-200/30"
          }`}
        />

        <div
          className={`absolute -bottom-32 right-1/4 w-80 h-80 rounded-full blur-3xl ${
            isDark ? "bg-cyan-500/5" : "bg-sky-200/30"
          }`}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-14">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-semibold uppercase tracking-wider mb-4 ${theme.badge}`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full animate-pulse ${theme.dot}`}
            />
            Enterprise Software & Services
          </div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${theme.heading}`}
          >
            Specialized Engineering{" "}
            <span
              className={
                isDark
                  ? "text-cyan-300"
                  : "bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500 bg-clip-text text-transparent"
              }
            >
              Domains
            </span>
          </h2>

          <p
            className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${theme.description}`}
          >
            High-availability systems, cloud-native deployments, and autonomous
            intelligence engineered to scale.
          </p>
        </div>

        {/* Service carousel */}
        <section
          className="relative"
          aria-label="Our engineering services"
        >
          {/* Side fades */}
          <div
            className={`hidden md:block absolute left-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-r ${theme.fade} to-transparent z-10 pointer-events-none`}
          />

          <div
            className={`hidden md:block absolute right-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-l ${
              isDark ? "from-[#0B1220]" : "from-[#EDF4FF]"
            } to-transparent z-10 pointer-events-none`}
          />

          <div
            ref={scrollRef}
            className={`flex gap-5 sm:gap-6 pb-5 ${
              isMobile
                ? "overflow-x-auto snap-x snap-mandatory scroll-smooth"
                : "w-max"
            }`}
            style={
              isMobile
                ? { scrollbarWidth: "thin" }
                : { willChange: "transform" }
            }
          >
            {(isMobile ? services : duplicatedServices).map(
              renderServiceCard
            )}
          </div>
        </section>

        {/* Bottom note */}
        <div className="mt-7 text-center">
          <p className={`text-xs ${theme.description}`}>
            {isMobile
              ? "Swipe to explore our engineering services →"
              : "Explore our specialized engineering capabilities"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;