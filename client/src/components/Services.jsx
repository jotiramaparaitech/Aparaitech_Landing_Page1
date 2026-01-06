import { motion } from "framer-motion";
import { Code, Cloud, Cpu, Shield, BarChart, Users } from "lucide-react";

function ServicesPage() {
  const services = [
    {
      title: "Software Development",
      desc: "Scalable, secure, and high-performance software tailored to your business needs.",
      icon: Code,
    },
    {
      title: "Cloud & DevOps",
      desc: "Cloud migration, optimization, and DevOps automation for faster delivery.",
      icon: Cloud,
    },
    {
      title: "AI & Data Engineering",
      desc: "Data-driven solutions using AI, ML, and analytics to unlock insights.",
      icon: Cpu,
    },
    {
      title: "Cybersecurity",
      desc: "Enterprise-grade security, compliance, and risk management solutions.",
      icon: Shield,
    },
    {
      title: "IT Consulting",
      desc: "Strategic consulting to align technology with business objectives.",
      icon: Users,
    },
    {
      title: "Digital Transformation",
      desc: "Modernize legacy systems and accelerate digital innovation.",
      icon: BarChart,
    },
  ];

  return (
    <section className="relative w-full py-24 px-6 bg-gradient-to-br from-[#0a0f2c] via-[#1b1f4a] to-[#2b0f44] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl"></div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We deliver world-class software solutions and IT consulting services
            that help businesses scale, innovate, and lead globally.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 hover:shadow-2xl"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 mb-6">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Export at the end
export default ServicesPage;
