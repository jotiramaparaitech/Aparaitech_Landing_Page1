// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Home sections
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Partners from "./components/Partners";
import ContactSection from "./components/ContactSection";

// Pages
import About from "./components/About";
import Careers from "./components/Careers";
import Cloud from "./components/Cloud";                   // filename: Cloud.jsx
import Solutions from "./components/Solutions";           // filename: Solutions.jsx
import GenerativeAI from "./components/Generative_AI";   // filename: Generative_AI.jsx
import JobDetail from "./components/pages/JobDetail";    // filename: JobDetail.jsx

// Service Detail Pages
import CloudSolutions from "./components/pages/CloudSolutions"; // CloudSolutions.jsx
import WebDevelopment from "./components/pages/WebDevelopment"; // WebDevelopment.jsx
import ITConsulting from "./components/pages/ITConsulting";     // ITConsulting.jsx

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
      {/* Auto scroll to top on route change */}
      <ScrollToTop />

      {/* Header only once */}
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/generative-ai" element={<GenerativeAI />} />

        {/* Job Page */}
        <Route path="/job-detail" element={<JobDetail />} />

        {/* Services Detail Pages */}
        <Route path="/cloud-computing" element={<CloudSolutions />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/it-consulting" element={<ITConsulting />} />
      </Routes>

      {/* Footer only once */}
      <Footer />
    </div>
  );
}

export default App;
