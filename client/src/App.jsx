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

// Pages
import About from "./components/About";
import Careers from "./components/Careers";
import Cloud from "./components/cloud";
import Solutions from "./components/Solutions";
import GenerativeAI from "./components/Generative_AI";

// Product Pages
import CustomSoftware from "./components/pages/products/CustomSoftware";
import MobileApps from "./components/pages/products/MobileApps";
import DevOps from "./components/pages/products/DevOps";
import UIUXDesign from "./components/pages/products/UIUXDesign";

// Industry Pages
import Healthcare from "./components/pages/industries/Healthcare";
import Finance from "./components/pages/industries/Finance";
import Ecommerce from "./components/pages/industries/Ecommerce";
import Education from "./components/pages/industries/Education";
import Manufacturing from "./components/pages/industries/Manufacturing";
import Startups from "./components/pages/industries/Startups";

// Customer Pages
import SuccessStories from "./components/pages/customers/SuccessStories";
import CaseStudies from "./components/pages/customers/CaseStudies";
import Testimonials from "./components/pages/customers/Testimonials";
import Portfolio from "./components/pages/customers/Portfolio";

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
        <Route path="/products/custom-software" element={<CustomSoftware />} />
        <Route path="/products/mobile-apps" element={<MobileApps />} />
        <Route path="/products/devops" element={<DevOps />} />
        <Route path="/products/ui-ux-design" element={<UIUXDesign />} />
        <Route path="/industries/healthcare" element={<Healthcare />} />
        <Route path="/industries/finance" element={<Finance />} />
        <Route path="/industries/ecommerce" element={<Ecommerce />} />
        <Route path="/industries/education" element={<Education />} />
        <Route path="/industries/manufacturing" element={<Manufacturing />} />
        <Route path="/industries/startups" element={<Startups />} />
        <Route path="/customers/success-stories" element={<SuccessStories />} />
        <Route path="/customers/case-studies" element={<CaseStudies />} />
        <Route path="/customers/testimonials" element={<Testimonials />} />
        <Route path="/customers/portfolio" element={<Portfolio />} />
      </Routes>

      {/* Footer only once */}
      <Footer />
    </div>
  );
}

export default App;
