import React from "react";
import RobotImage from "../assets/robot.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center py-[120px] px-8 overflow-hidden 
      bg-gradient-to-br from-[#F5F2FF] via-[#DED8F3] to-[#E9E4FA]"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <div className="absolute w-[400px] h-[400px] -top-[100px] -left-[100px] bg-gradient-to-br from-[#7c3aed] to-transparent rounded-full opacity-30 blur-[100px] animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute w-[500px] h-[500px] -bottom-[150px] -right-[150px] bg-gradient-to-br from-[#6366f1] to-transparent rounded-full opacity-30 blur-[100px] animate-[float_8s_ease-in-out_infinite] animation-delay-2000"></div>
        <div className="absolute w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[#818cf8] to-transparent rounded-full opacity-30 blur-[100px] animate-[float_8s_ease-in-out_infinite] animation-delay-4000"></div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-[2]">
        {/* Left Content */}
        <div className="animate-[fadeInUp_1s_ease]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-[#3f3c8f]">
            Building Intelligent AI Solutions for Tomorrow
          </h1>
          <p className="text-xl text-[#5b5aa6] mb-10 font-normal">
            AI • Machine Learning • Web Platforms • Digital Transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-[#6d63ff] text-white px-10 py-4 text-lg font-semibold rounded-lg transition-all hover:-translate-y-1 shadow-[0_10px_40px_rgba(109,99,255,0.4)] hover:shadow-[0_15px_50px_rgba(109,99,255,0.6)]">
              Get a Quote
            </button>
            <button className="bg-white/60 backdrop-blur-md text-[#4b4a7a] border border-[#c7c2f5] px-10 py-4 text-lg font-semibold rounded-lg transition-all hover:bg-white hover:-translate-y-1">
              View Our Work
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[600px] flex items-center justify-center animate-[fadeInRight_1s_ease]">
          {/* Glow under robot */}
          <div className="absolute w-[420px] h-[420px] bg-[#818cf8] opacity-30 blur-[120px] rounded-full"></div>

          {/* Robot Image */}
          <img
            src={RobotImage}
            alt="AI Robot"
            className="relative z-[2] w-[420px] max-w-full object-contain animate-[float_6s_ease-in-out_infinite]"
          />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
};

export default Hero;
