import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Partners from "./components/Partners";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

import AboutUs from "./components/pages/AboutUs";
import GenerativeAI from "./components/pages/GenerativeAI";
import CloudSolutions from "./components/pages/CloudSolutions";
import Solutions from "./components/pages/YourSolutions";

// Home page layout (unchanged)
const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Partners />
      <ContactSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cloud" element={<CloudSolutions />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/generative-ai" element={< GenerativeAI/>} />

      </Routes>
    </div>
  );
}

export default App;
