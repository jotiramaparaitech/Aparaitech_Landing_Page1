import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center py-[120px] px-8 overflow-hidden bg-gradient-to-b from-[#0a0a0f] to-[#1a0a2e]">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <div className="absolute w-[400px] h-[400px] -top-[100px] -left-[100px] bg-gradient-to-br from-[#7c3aed] to-transparent rounded-full opacity-50 blur-[80px] animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute w-[500px] h-[500px] -bottom-[150px] -right-[150px] bg-gradient-to-br from-[#4f46e5] to-transparent rounded-full opacity-50 blur-[80px] animate-[float_8s_ease-in-out_infinite] animation-delay-2000"></div>
        <div className="absolute w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[#6366f1] to-transparent rounded-full opacity-50 blur-[80px] animate-[float_8s_ease-in-out_infinite] animation-delay-4000"></div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-[2]">
        <div className="animate-[fadeInUp_1s_ease]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white via-white to-[#a78bfa] bg-clip-text text-transparent">
            Building Intelligent AI Solutions for Tomorrow
          </h1>
          <p className="text-xl text-[#c4b5fd] mb-10 font-normal">
            AI • Machine Learning • Web Platforms • Digital Transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] text-white border-none px-10 py-4 text-lg font-semibold rounded-lg cursor-pointer transition-all hover:-translate-y-1 shadow-[0_10px_40px_rgba(124,58,237,0.4)] hover:shadow-[0_15px_50px_rgba(124,58,237,0.6)]">
              Get a Quote
            </button>
            <button className="bg-transparent text-white border-2 border-[#7c3aed] px-10 py-4 text-lg font-semibold rounded-lg cursor-pointer transition-all hover:bg-[rgba(124,58,237,0.1)] hover:border-[#a78bfa] hover:-translate-y-1">
              View Our Work
            </button>
          </div>
        </div>

        <div className="relative h-[600px] flex items-center justify-center animate-[fadeInRight_1s_ease]">
          {/* Floating Shapes */}
          <div className="absolute inset-0 z-[1]">
            <div className="absolute w-20 h-20 top-[10%] left-[10%] bg-gradient-to-br from-[rgba(124,58,237,0.3)] to-[rgba(79,70,229,0.3)] rounded-full animate-[float_4s_ease-in-out_infinite]"></div>
            <div className="absolute w-16 h-16 top-[60%] right-[15%] bg-gradient-to-br from-[rgba(124,58,237,0.3)] to-[rgba(79,70,229,0.3)] rounded-full animate-[float_4s_ease-in-out_infinite] animation-delay-1000"></div>
            <div className="absolute w-24 h-24 bottom-[20%] left-[20%] bg-gradient-to-br from-[rgba(124,58,237,0.3)] to-[rgba(79,70,229,0.3)] rounded-full animate-[float_4s_ease-in-out_infinite] animation-delay-2000"></div>
          </div>

          {/* Robot */}
          <div className="relative z-[3] w-[300px] h-[400px]">
            {/* Robot Head */}
            <div className="w-[150px] h-[120px] bg-white rounded-[50px_50px_30px_30px] mx-auto relative shadow-[0_10px_40px_rgba(124,58,237,0.3)]">
              <div className="absolute w-[25px] h-[25px] bg-[#4f46e5] rounded-full top-[40%] left-[35%] shadow-[0_0_20px_#4f46e5,0_0_40px_#6366f1] animate-[blink_3s_infinite]"></div>
              <div className="absolute w-[25px] h-[25px] bg-[#4f46e5] rounded-full top-[40%] right-[35%] shadow-[0_0_20px_#4f46e5,0_0_40px_#6366f1] animate-[blink_3s_infinite]"></div>
            </div>

            {/* Robot Body */}
            <div className="w-[180px] h-[220px] bg-white rounded-xl mx-auto mt-5 relative flex items-center justify-center shadow-[0_10px_40px_rgba(124,58,237,0.3)]">
              <div className="absolute w-10 h-10 bg-[#4f46e5] rounded-full top-8 shadow-[0_0_30px_#4f46e5] animate-[pulse_2s_infinite]"></div>
              
              {/* Sphere */}
              <div className="relative w-[120px] h-[120px] mt-10">
                <div className="absolute inset-0 rounded-full animate-[float_3s_ease-in-out_infinite] shadow-[0_0_60px_#6366f1,inset_0_0_30px_#818cf8]" style={{
                  background: 'radial-gradient(circle, #6366f1 0%, #4f46e5 70%, transparent 100%)'
                }}></div>
                <div className="absolute inset-0 rounded-full animate-[rotate_20s_linear_infinite]" style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 2px, transparent 2px), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.2) 1px, transparent 1px)',
                  backgroundSize: '20px 20px, 15px 15px'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes blink {
          0%, 90%, 100% { opacity: 1; }
          95% { opacity: 0.3; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  );
};

export default Hero;
