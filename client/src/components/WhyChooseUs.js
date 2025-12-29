import React from 'react';
import './WhyChooseUs.css';
import { FaUsers, FaLaptopCode, FaUserFriends } from 'react-icons/fa';

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
      icon: <FaUserFriends />,
      title: 'Client-Focused Approach',
      description: 'Your success is our priority.'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="why-choose-us-container">
        <h2 className="section-title">Why Choose Aparaitech</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

