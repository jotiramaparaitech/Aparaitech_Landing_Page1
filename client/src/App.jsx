import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Partners from './components/Partners';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
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
}

export default App;

