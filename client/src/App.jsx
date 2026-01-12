// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // ✅ NEW

// Home sections
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Partners from "./components/Partners";
import ContactSection from "./components/ContactSection";

// Service pages
import GrowthAnalytics from "./components/services/GrowthAnalytics";
import CloudSolutions from "./components/services/CloudSolutions";
import SecurePlatformPage from "./components/services/SecurePlatformPage";
import SalesforceSolutionsPage from "./components/services/SalesforceSolutionsPage";


// Pages
import About from "./components/About";
import Careers from "./components/Careers";
import Cloud from "./components/cloud";
import Solutions from "./components/Solutions";
import GenerativeAI from "./components/Generative_AI";
import JobDetail from "./components/pages/JobDetail";

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
      {/* ✅ Auto scroll to top on route change */}
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
        <Route path="/job-detail" element={<JobDetail />} />
        <Route path="/growth-analytics" element={<GrowthAnalytics />} />
        <Route path="/cloud-solutions" element={<CloudSolutions />} />
        <Route path="/secure-platform" element={<SecurePlatformPage />} />
        <Route path="/salesforce-solutions" element={<SalesforceSolutionsPage />} />

      </Routes>

      {/* Footer only once */}
      <Footer />
    </div>
  );
}

export default App;
