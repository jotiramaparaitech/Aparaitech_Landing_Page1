import React from 'react';
import { FaUsers, FaLaptopCode, FaCheckCircle } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUsers />,
      title: 'Experienced Team',
      description: 'Skilled professionals delivering results.'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Cutting-Edge Technology',
      description: 'Utilizing the latest tech innovations.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Client-Focused Approach',
      description: 'Your success is our priority.'
    }
  ];

  return (
    <section className="py-24 px-8 bg-gradient-to-b from-[#0a0a0f] to-[#1a0a2e] relative">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-white via-white to-[#a78bfa] bg-clip-text text-transparent">
          Why Choose Aparaitech
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[rgba(30,30,45,0.6)] backdrop-blur-[10px] border border-[rgba(124,58,237,0.2)] rounded-2xl p-12 text-center transition-all relative overflow-hidden group hover:-translate-y-2 hover:border-[rgba(124,58,237,0.5)] hover:shadow-[0_20px_60px_rgba(124,58,237,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(124,58,237,0.15)] to-[rgba(79,70,229,0.15)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-[2]">
                <div className="w-[90px] h-[90px] mx-auto mb-6 bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] rounded-2xl flex items-center justify-center text-4xl text-white transition-transform group-hover:scale-110 group-hover:-rotate-[5deg]">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-lg text-[#c4b5fd] leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
