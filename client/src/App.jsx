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

// Pages
import Cloud from "./Cloud";
import Solutions from "./components/Solutions";
import GenerativeAI from "./components/Generative_AI";

/* ================= SERVICES PAGES (IMPORTANT FIX) ================= */
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
import CareersPage from "./components/pages/Company/Careers";
import News from "./components/pages/Company/News";
import PartnersPage from "./components/pages/Company/Partners";
import InvestorRelations from "./components/pages/Company/InvestorRelations";

/* ================= JOB DETAIL ================= */
import JobDetail from "./components/pages/JobDetail";

// Service Detail Pages
import CloudSolutionsPage from "./components/pages/CloudSolutions";
import WebDevelopment from "./components/pages/WebDevelopment";
import ITConsulting from "./components/pages/ITConsulting";

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
      <Header />

      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Core Pages */}
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/generative-ai" element={<GenerativeAI />} />

        {/* Job Page */}
        <Route path="/job-detail" element={<JobDetail />} />

        {/* Services Detail Pages */}
        <Route path="/cloud-computing" element={<CloudSolutionsPage />} />
        <Route path="/software-development" element={<WebDevelopment />} />
        <Route path="/it-consulting" element={<ITConsulting />} />

        {/* Service Offerings */}
        <Route path="/services/growth-analytics" element={<GrowthAnalytics />} />
        <Route path="/services/cloud-solutions" element={<CloudSolutionsService />} />
        <Route path="/services/secure-platform" element={<SecurePlatformPage />} />
        <Route path="/services/salesforce" element={<SalesforceSolutionsPage />} />

        {/* Products */}
        <Route path="/products/custom-software" element={<CustomSoftware />} />
        <Route path="/products/mobile-apps" element={<MobileApps />} />
        <Route path="/products/devops" element={<DevOps />} />
        <Route path="/products/ui-ux-design" element={<UIUXDesign />} />

        {/* Industries */}
        <Route path="/industries/healthcare" element={<Healthcare />} />
        <Route path="/industries/finance" element={<Finance />} />
        <Route path="/industries/ecommerce" element={<Ecommerce />} />
        <Route path="/industries/education" element={<Education />} />
        <Route path="/industries/manufacturing" element={<Manufacturing />} />
        <Route path="/industries/startups" element={<Startups />} />

        {/* Customers */}
        <Route path="/customers/success-stories" element={<SuccessStories />} />
        <Route path="/customers/case-studies" element={<CaseStudies />} />
        <Route path="/customers/testimonials" element={<Testimonials />} />
        <Route path="/customers/portfolio" element={<Portfolio />} />

        {/* Learning */}
        <Route path="/learning/documentation" element={<Documentation />} />
        <Route path="/learning/tutorials" element={<Tutorials />} />
        <Route path="/learning/webinars" element={<Webinars />} />
        <Route path="/learning/certifications" element={<Certifications />} />

        {/* Support */}
        <Route path="/support/help-center" element={<HelpCenter />} />
        <Route path="/support/contact" element={<ContactSupport />} />
        <Route path="/support/community" element={<CommunityForum />} />
        <Route path="/support/status" element={<Status />} />

        {/* Company */}
        <Route path="/company/about-us" element={<AboutUs />} />
        <Route path="/company/values" element={<OurValues />} />
        <Route path="/company/careers" element={<CareersPage />} />
        <Route path="/company/news" element={<News />} />
        <Route path="/company/partners" element={<PartnersPage />} />
        <Route path="/company/investors" element={<InvestorRelations />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
