// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

/* ================= HOME SECTIONS ================= */
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Partners from "./components/Partners";
import ContactSection from "./components/ContactSection";

/* ================= CORE PAGES ================= */
import About from "./components/About";
import Careers from "./components/Careers"; // General Careers
import Cloud from "./components/Cloud";
import Solutions from "./components/Solutions";
import GenerativeAI from "./components/Generative_AI";

/* ================= SERVICES PAGES ================= */
import GrowthAnalytics from "./components/services/GrowthAnalytics";
import CloudSolutionsService from "./components/services/CloudSolutions";
import SecurePlatformPage from "./components/services/SecurePlatformPage";
import SalesforceSolutionsPage from "./components/services/SalesforceSolutionsPage";

/* ================= PRODUCT PAGES ================= */
import CustomSoftware from "./components/pages/products/CustomSoftware";
import MobileApps from "./components/pages/products/MobileApps";
import DevOps from "./components/pages/products/DevOps";
import UIUXDesign from "./components/pages/products/UIUXDesign";

/* ================= INDUSTRY PAGES ================= */
import Healthcare from "./components/pages/industries/Healthcare";
import Finance from "./components/pages/industries/Finance";
import Ecommerce from "./components/pages/industries/Ecommerce";
import Education from "./components/pages/industries/Education";
import Manufacturing from "./components/pages/industries/Manufacturing";
import Startups from "./components/pages/industries/Startups";

/* ================= CUSTOMER PAGES ================= */
import SuccessStories from "./components/pages/Customers/SuccessStories";
import CaseStudies from "./components/pages/Customers/CaseStudies";
import Testimonials from "./components/pages/Customers/Testimonials";
import Portfolio from "./components/pages/Customers/Portfolio";

/* ================= LEARNING PAGES ================= */
import Documentation from "./components/pages/Learning/Documentation";
import Tutorials from "./components/pages/Learning/Tutorials";
import Webinars from "./components/pages/Learning/Webinars";
import Certifications from "./components/pages/Learning/Certifications";

/* ================= SUPPORT PAGES ================= */
import HelpCenter from "./components/pages/Support/HelpCenter";
import ContactSupport from "./components/pages/Support/ContactSupport";
import CommunityForum from "./components/pages/Support/CommunityForum";
import Status from "./components/pages/Support/Status";

/* ================= COMPANY PAGES ================= */
import AboutUs from "./components/pages/Company/AboutUs";
import OurValues from "./components/pages/Company/OurValues";
import CompanyCareers from "./components/pages/Company/Careers"; // RENAMED
import News from "./components/pages/Company/News";
import PartnersPage from "./components/pages/Company/Partners";
import InvestorRelations from "./components/pages/Company/InvestorRelations";

/* ================= JOB DETAIL ================= */
import JobDetail from "./components/pages/JobDetail";
import ApplicationForm from "./components/pages/ApplicationForm";

/* ================= SERVICE DETAIL PAGES ================= */
import CloudSolutionsPage from "./components/pages/CloudSolutions"; // RENAMED
import WebDevelopment from "./components/pages/WebDevelopment";
import ITConsulting from "./components/pages/ITConsulting";

/* ================= HOME PAGE ================= */
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
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Core */}
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/generative-ai" element={<GenerativeAI />} />

        {/* Company */}
        <Route path="/company/about" element={<AboutUs />} />
        <Route path="/company/values" element={<OurValues />} />
        <Route path="/company/careers" element={<CompanyCareers />} />
        <Route path="/company/news" element={<News />} />
        <Route path="/company/partners" element={<PartnersPage />} />
        <Route path="/company/investors" element={<InvestorRelations />} />

        {/* Services */}
        <Route path="/growth-analytics" element={<GrowthAnalytics />} />
        <Route path="/cloud-services" element={<CloudSolutionsService />} />
        <Route path="/secure-platform" element={<SecurePlatformPage />} />
        <Route path="/salesforce" element={<SalesforceSolutionsPage />} />

        {/* Service Detail */}
        <Route path="/cloud-computing" element={<CloudSolutionsPage />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/it-consulting" element={<ITConsulting />} />

        {/* Job */}
        <Route path="/job-detail" element={<JobDetail />} />
        <Route path="/apply" element={<ApplicationForm />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
