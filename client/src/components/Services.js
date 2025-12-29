import React from 'react';
import './Services.css';
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
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#contact" className="service-link">
                Learn More <span>&gt;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

