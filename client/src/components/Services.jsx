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
    path: null,
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
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enterprise-grade solutions crafted to support your business growth.
          </p>
        </div>

        <section className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          <div ref={scrollRef} className="flex gap-6 pb-4">
            {duplicatedServices.map((service, index) => (
              <motion.div
                key={`${service.title}-${index}`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => navigate(service.path)}
                onMouseEnter={() => {
                  setHovered(index);
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  setHovered(null);
                  setIsHovered(false);
                }}
                className="
                  service-card group relative overflow-hidden flex-shrink-0
                  w-[360px]
                  transition-all duration-300
                  hover:bg-violet-700 hover:border-violet-900
                  hover:shadow-[0_15px_40px_rgba(109,40,217,0.45)]
                "
              >
                {/* 🔥 FIXED SMALLER CORNER CIRCLE */}
                <div className="
                  absolute -bottom-14 -right-14
                  w-32 h-32
                  rounded-full
                  bg-violet-900/20
                  transition-all duration-300
                  group-hover:bg-violet-900/30
                " />

                <div className="relative z-10">
                  <div className="mb-6 flex justify-center transition-colors duration-300 group-hover:text-white">
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-7 h-7 brightness-100 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                      />
                    ) : (
                      service.icon
                    )}
                  </div>

                  <h3 className="service-title transition-colors duration-300 group-hover:text-white">
                    {service.title}
                  </h3>

                  <p className="service-desc transition-colors duration-300 group-hover:text-white/90">
                    {service.description}
                  </p>

                  <span className="service-cta transition-colors duration-300 group-hover:text-white">
                    Explore More →
                  </span>
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
