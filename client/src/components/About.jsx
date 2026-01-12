import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
// import Footer from "./Footer";

const About = () => {
  return (
    <div
      className="
        flex flex-col min-h-screen text-center
        pt-24
        bg-gradient-to-b
        from-[#f1ecff]
        via-[#faf8ff]
        to-[#ffffff]
        relative overflow-hidden
      "
    >
      {/* Soft glass background blobs */}
      <div className="absolute -top-48 -left-48 w-[520px] h-[520px] bg-[#a78bfa]/30 rounded-full blur-[180px]" />
      <div className="absolute -bottom-48 -right-48 w-[520px] h-[520px] bg-[#c4b5fd]/30 rounded-full blur-[180px]" />

      {/* Main Content */}
      <div className="relative flex-1 flex flex-col items-center px-6 py-16">
        {/* Logo */}
        <motion.img
          src={logo}
          alt="Aparaitech Logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-28 md:w-36 mb-6"
        />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-semibold text-[#3f2f8f] mb-4"
        >
          About Aparaitech
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl text-gray-600 leading-relaxed text-lg"
        >
          Aparaitech is a technology-driven software company focused on building
scalable and reliable digital solutions. Our mission is to deliver
efficient, user-friendly, and high-performance software through modern
technology and thoughtful engineering.

        </motion.p>

        {/* Glass Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-12"
        >
          {/* Mission */}
          <div
            className="
              bg-white/60 backdrop-blur-2xl
              border border-white/50
              shadow-[0_25px_70px_rgba(124,58,237,0.28)]
              rounded-3xl p-8 w-72 sm:w-80
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-white/70
              hover:shadow-[0_35px_90px_rgba(124,58,237,0.38)]
            "
          >
            <h3 className="text-xl font-semibold text-[#3f2f8f] mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
             To build reliable and scalable software solutions that empower businesses
with the right tools to operate efficiently and grow with confidence.

            </p>
          </div>

          {/* Vision */}
          <div
            className="
              bg-white/60 backdrop-blur-2xl
              border border-white/50
              shadow-[0_25px_70px_rgba(124,58,237,0.28)]
              rounded-3xl p-8 w-72 sm:w-80
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-white/70
              hover:shadow-[0_35px_90px_rgba(124,58,237,0.38)]
            "
          >
            <h3 className="text-xl font-semibold text-[#3f2f8f] mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
             To shape the future of software by combining innovation and technology
into impactful digital products.

            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer
      <footer className="relative w-full">
        <Footer />
      </footer> */}
    </div>
  );
};

export default About
