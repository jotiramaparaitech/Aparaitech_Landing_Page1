import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Building Intelligent AI Solutions for Tomorrow
          </h1>
          <p className="hero-subtitle">
            AI • Machine Learning • Web Platforms • Digital Transformation
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get a Quote</button>
            <button className="btn-secondary">View Our Work</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="robot-container">
            <div className="robot">
              <div className="robot-head">
                <div className="robot-eye left-eye"></div>
                <div className="robot-eye right-eye"></div>
              </div>
              <div className="robot-body">
                <div className="robot-chest-light"></div>
                <div className="robot-sphere">
                  <div className="sphere-glow"></div>
                  <div className="sphere-pattern"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
          </div>
        </div>
      </div>
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  );
};

export default Hero;

