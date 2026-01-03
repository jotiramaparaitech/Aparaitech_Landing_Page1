import React from "react";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center py-[120px] px-8 overflow-hidden
        bg-gradient-to-br from-[#F5F2FF] via-[#DED8F3] to-[#E9E4FA]
      "
    >
      {/* 🔥 SPLINE BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
  <div className="w-full h-full scale-[1] md:scale-[1] sm:scale-[0.9] xs:scale-[0.85] origin-center">
    <Spline
      scene="https://prod.spline.design/3fCZJAmDIJMBiCNb/scene.splinecode"
      className="w-full h-full"
    />
  </div>
</div>


      {/* 🎞️ Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
