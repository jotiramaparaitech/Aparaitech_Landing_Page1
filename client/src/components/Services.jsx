import React from 'react';
import { FaCloud, FaCode, FaBrain, FaLightbulb } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCloud />,
      title: 'Cloud Computing',
      description: 'Scalable and secure cloud solutions.'
    },
    {
      icon: <FaCode />,
      title: 'Software Development',
      description: 'Custom applications for your business needs.'
    },
    {
      icon: <FaBrain />,
      title: 'AI & Machine Learning',
      description: 'Harnessing AI for insightful decisions.'
    },
    {
      icon: <FaLightbulb />,
      title: 'IT Consulting',
      description: 'Expert advice for your IT strategy.'
    }
  ];

  return (
    <section id="services" className="py-24 px-8 bg-gradient-to-b from-[#1a0a2e] to-[#0a0a0f] relative">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-white via-white to-[#a78bfa] bg-clip-text text-transparent">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[rgba(30,30,45,0.6)] backdrop-blur-[10px] border border-[rgba(124,58,237,0.2)] rounded-2xl p-10 text-center transition-all cursor-pointer relative overflow-hidden group hover:-translate-y-2 hover:border-[rgba(124,58,237,0.5)] hover:shadow-[0_20px_60px_rgba(124,58,237,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(124,58,237,0.1)] to-[rgba(79,70,229,0.1)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-[2]">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] rounded-2xl flex items-center justify-center text-3xl text-white transition-transform group-hover:scale-110 group-hover:rotate-[5deg]">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-base text-[#c4b5fd] mb-6 leading-relaxed">{service.description}</p>
                <a 
                  href="#contact" 
                  className="text-[#a78bfa] no-underline font-semibold inline-flex items-center gap-2 transition-all hover:text-[#c4b5fd] hover:gap-3"
                >
                  Learn More <span className="transition-transform group-hover:translate-x-1">&gt;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

