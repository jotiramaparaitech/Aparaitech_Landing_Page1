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
    icon: <Cloud className="w-6 h-6" style={{ color: '#3B82F6' }} />,
    iconColor: 'text-blue-500'
  },
  {
    title: "Software Development",
    description:
      "Modern web and mobile application development using robust, scalable architectures.",
    image: null,
    path: "/software-development",
    icon: <Code className="w-6 h-6" style={{ color: '#10B981' }} />,
    iconColor: 'text-green-500'
  },
  {
    title: "IT Consulting",
    description:
      "Strategic consulting to optimize infrastructure, systems, and digital growth.",
    image: null,
    path: "/it-consulting",
    icon: <Cpu className="w-6 h-6" style={{ color: '#8B5CF6' }} />,
    iconColor: 'text-purple-500'
  },
  {
    title: "AI & Machine Learning",
    description:
      "Predictive analytics, computer vision, NLP solutions powered by advanced ML/CNN models.",
    image: null,
    path: "/services/ai-machine-learning",
    icon: <Brain className="w-6 h-6" style={{ color: '#EC4899' }} />,
    iconColor: 'text-pink-500'
  },
  {
    title: "DevOps & CI/CD",
    description:
      "Automation, Docker, Kubernetes, cloud pipelines for seamless deployment and scaling.",
    image: null,
    path: "/services/devops-cicd",
    icon: <GitBranch className="w-6 h-6" style={{ color: '#F97316' }} />,
    iconColor: 'text-orange-500'
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "Security audits, penetration testing, compliance with industry standards and regulations.",
    image: null,
    path: "/services/cybersecurity",
    icon: <Shield className="w-6 h-6" style={{ color: '#EF4444' }} />,
    iconColor: 'text-red-500'
  },
  {
    title: "Mobile App Development",
    description:
      "Android, iOS, Flutter, React Native applications with native performance and UX.",
    image: null,
    path: "/services/mobile-app-development",
    icon: <Smartphone className="w-6 h-6" style={{ color: '#6366F1' }} />,
    iconColor: 'text-indigo-500'
  },
  {
    title: "Data Analytics & Big Data",
    description:
      "Dashboards, ETL pipelines, business intelligence for data-driven decision making.",
    image: null,
    path: "/services/data-analytics",
    icon: <BarChart3 className="w-6 h-6" style={{ color: '#14B8A6' }} />,
    iconColor: 'text-teal-500'
  },
  {
    title: "Digital Transformation",
    description:
      "Legacy system modernization, automation to accelerate business growth and efficiency.",
    image: null,
    path: "/services/digital-transformation",
    icon: <RefreshCw className="w-6 h-6" style={{ color: '#06B6D4' }} />,
    iconColor: 'text-cyan-500'
  },
  {
    title: "UI/UX Design",
    description:
      "Wireframes, design systems, user research to create intuitive and engaging experiences.",
    image: null,
    path: "/services/ui-ux-design",
    icon: <Palette className="w-6 h-6" style={{ color: '#8B5CF6' }} />,
    iconColor: 'text-violet-500'
  },
  {
    title: "ERP / CRM Solutions",
    description:
      "Custom ERP, CRM integrations to streamline operations and enhance customer relationships.",
    image: null,
    path: "/services/erp-crm",
    icon: <Database className="w-6 h-6" style={{ color: '#2563EB' }} />,
    iconColor: 'text-blue-600'
  },
  {
    title: "E-Learning & College Portals",
    description:
      "CET portals, LMS, student management systems for educational institutions.",
    image: null,
    path: "/services/e-learning",
    icon: <GraduationCap className="w-6 h-6" style={{ color: '#F59E0B' }} />,
    iconColor: 'text-amber-500'
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
  const containerRef = useRef(null);

  const duplicatedServices = [...services, ...services];

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Reset scroll position on mobile
      if (mobile && scrollRef.current) {
        scrollRef.current.style.transform = 'translateX(0)';
        scrollPositionRef.current = 0;
      }
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // Cancel any existing animation on mobile
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

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

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered, isMobile, hovered]);

  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Enterprise-grade solutions crafted to support your business growth.
          </p>
        </div>

        <section className="relative overflow-hidden">
          {/* Hide gradient overlays on mobile */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          {/* Mobile horizontal scroll container */}
          <div 
            ref={containerRef}
            className={`
              ${isMobile ? 
                "overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" : 
                "overflow-hidden"
              }
            `}
            style={isMobile ? {
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            } : {}}
          >
            <div 
              ref={scrollRef}
              className={`
                ${isMobile ? 
                  "flex gap-4 pb-4 px-4 md:px-0" : 
                  "flex gap-6 pb-4"
                }
              `}
              style={isMobile ? {
                width: 'max-content'
              } : {}}
            >
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
                  className={`
                    service-card group relative overflow-hidden 
                    ${isMobile ? 
                      "w-[280px] flex-shrink-0 snap-center" : 
                      "w-[280px] md:w-[360px] flex-shrink-0"
                    }
                    bg-white rounded-2xl border border-gray-200 shadow-lg
                    transition-all duration-300 ease-out
                    hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                    hover:scale-[1.02] active:scale-[0.99]
                    ${service.path ? 'cursor-pointer' : 'cursor-default'}
                  `}
                  style={{
                    minHeight: '320px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  {/* Removed violet decorative circle - replaced with neutral color */}
                  <div className="
                    absolute -bottom-14 -right-14
                    w-32 h-32
                    rounded-full
                    bg-gray-100
                    transition-all duration-300
                    group-hover:scale-110 group-hover:bg-gray-200
                  " />

                  <div className="relative z-10 p-6 h-full flex flex-col">
                    {/* Icon Container */}
                    <div className="mb-6">
                      <div className="
                        inline-flex p-4 rounded-xl bg-gray-50 
                        group-hover:bg-gray-100
                        transition-all duration-300
                        shadow-sm
                      ">
                        {service.image ? (
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-8 h-8 transition-all duration-300"
                            style={{ filter: 'none' }}
                          />
                        ) : (
                          React.cloneElement(service.icon, {
                            className: `
                              w-8 h-8 transition-all duration-300
                              ${service.iconColor}
                            `
                          })
                        )}
                      </div>
                    </div>

                    {/* Content with fixed positioning - FIXED THE TEXT MOVEMENT */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="
                        text-xl font-bold text-gray-900 mb-4
                        line-clamp-2
                      ">
                        {service.title}
                      </h3>

                      <p className="
                        text-gray-600 text-sm md:text-base mb-6 flex-1
                        line-clamp-3
                      ">
                        {service.description}
                      </p>

                      {service.path && (
                        <span className="
                          inline-flex items-center text-blue-600 font-medium text-sm
                          transition-colors duration-300 
                          group-hover:text-blue-700
                          mt-auto
                        ">
                          Explore More →
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Mobile scroll indicator */}
          {isMobile && (
            <div className="text-center mt-6">
              <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
                <span className="animate-bounce">←</span>
                <span>Swipe to see more</span>
                <span className="animate-bounce">→</span>
              </div>
            </div>
          )}
        </section>
      </div>
      
      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Services;