import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Cloud, Code, Cpu } from "lucide-react"; // lucide-react icons
import cloudImg from "../assets/cloud.png";
import codeImg from "../assets/code.png";
import consultingImg from "../assets/consulting.png";

const services = [
  {
    title: "Cloud Computing",
    description:
      "Scalable, secure cloud solutions designed for enterprise performance and reliability.",
    image: cloudImg,
    path: "/cloud-computing",
    icon: <Cloud className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Software Development",
    description:
      "Modern web and mobile application development using robust, scalable architectures.",
    image: codeImg,
    path: "/software-development",
    icon: <Code className="w-6 h-6 text-green-500" />,
  },
  {
    title: "IT Consulting",
    description:
      "Strategic consulting to optimize infrastructure, systems, and digital growth.",
    image: consultingImg,
    path: "/it-consulting",
    icon: <Cpu className="w-6 h-6 text-purple-500" />,
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

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enterprise-grade solutions crafted to support your business growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              tabIndex={0}
              onClick={() => navigate(service.path)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="service-card relative overflow-hidden"
            >
              {/* Corner accent */}
              <div className="corner-accent" />

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="icon-wrapper flex items-center space-x-2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                </div>

                <h3 className="service-title">{service.title}</h3>

                <p className="service-desc">{service.description}</p>

                <span className="service-cta">Explore More →</span>
              </div>

              {/* Hover Icon at bottom-right */}
              {hovered === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-4 right-4"
                >
                  {service.icon}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
