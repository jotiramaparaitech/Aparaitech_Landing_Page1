import React from "react";
import cloudImg from "../assets/cloud.png";
import codeImg from "../assets/code.png";
import consultingImg from "../assets/consulting.png";

const Services = () => {
  const services = [
    {
      image: cloudImg,
      title: "Cloud Computing",
      description: "Scalable and secure cloud solutions."
    },
    {
      image: codeImg,
      title: "Software Development",
      description: "Custom applications for your business."
    },
    {
      image: consultingImg,
      title: "IT Consulting",
      description: "Expert advice for your IT strategy."
    }
  ];

  return (
    <section
      className="
        pt-0 pb-24
        bg-gradient-to-b
        from-[#f3eeff]
        to-[#fbfaff]
      "
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="relative mb-16 pt-16">
          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-[#d9d1f3]" />
          <div className="relative flex justify-center">
            <h2 className="text-3xl font-semibold text-[#2d1b69] px-6 bg-[#f3eeff]">
              Our Services
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-[#f1ecff]
                rounded-xl
                px-8 py-9
                text-center
                min-h-[270px]
                border border-[rgba(124,58,237,0.18)]
                shadow-[0_6px_18px_rgba(124,58,237,0.22)]
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_12px_30px_rgba(124,58,237,0.32)]
              "
            >
              <div className="w-36 h-36 mx-auto mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-[#2d1b69] mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
