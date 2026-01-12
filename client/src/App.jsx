// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

// Home sections
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Partners from "./components/Partners.jsx";
import ContactSection from "./components/ContactSection.jsx";

// Pages
import About from "./components/About.jsx";
import Careers from "./components/Careers.jsx";
import Cloud from "./components/Cloud.jsx";
import Solutions from "./components/Solutions.jsx";

// ⚠️ FIXED: use the file that actually exists
import GenerativeAI from "./components/pages/Generative_AI.jsx";
import JobDetail from "./components/pages/JobDetail.jsx";

// Service Detail Pages (explicit .jsx)
import CloudSolutions from "./components/pages/CloudSolutions.jsx";
import WebDevelopment from "./components/pages/WebDevelopment.jsx";
import ITConsulting from "./components/pages/ITConsulting.jsx";

// Home page (NO Header/Footer here)
const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Partners />
      <ContactSection />
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/generative-ai" element={<GenerativeAI />} />

        <Route path="/job-detail" element={<JobDetail />} />

        <Route path="/cloud-computing" element={<CloudSolutions />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/it-consulting" element={<ITConsulting />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
