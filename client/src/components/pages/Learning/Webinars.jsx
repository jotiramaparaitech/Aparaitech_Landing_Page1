import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaCheckCircle, FaArrowRight, FaVideo, FaPlay, FaUserTie } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { upcomingWebinarData, pastWebinarsData } from "./webinarsData";

const Webinars = () => {
  const [registered, setRegistered] = useState(false);

  // 🔥 TODAY 16:21 IST
  const webinar = upcomingWebinarData;

  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      <Toaster position="top-center" toastOptions={{ duration: 4000 }} />

      {/* HERO SECTION */}
      <div className="bg-[#0f172a] text-white py-20 relative overflow-hidden">
        {/* Tech Background Pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700/50 text-blue-300 text-xs font-bold uppercase tracking-wide mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Webinars & Events
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Knowledge Hub</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Join industry experts as we explore the future of technology, from Generative AI to Cloud Computing.
            </p>
          </div>

          {/* FEATURED WEBINAR CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-12 border border-slate-200"
          >
            {/* Image Section */}
            <div className="md:col-span-5 relative h-64 md:h-auto">
              <img 
                src={webinar.image} 
                alt="Webinar" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent md:bg-gradient-to-r md:from-transparent md:to-slate-900/10"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center border-2 border-white">
                    <FaUserTie />
                  </div>
                  <div>
                    <p className="text-sm font-bold">{webinar.speaker}</p>
                    <p className="text-xs text-slate-300">{webinar.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:col-span-7 p-8 md:p-10 bg-white text-slate-900 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full uppercase tracking-wider">
                  Live Event
                </span>
                <span className="text-sm text-slate-500 font-medium flex items-center gap-1">
                  <FaCalendarAlt className="text-blue-500" /> {webinar.date}
                </span>
                <span className="text-sm text-slate-500 font-medium flex items-center gap-1">
                  <FaClock className="text-blue-500" /> {webinar.time}
                </span>
              </div>

              <h2 className="text-3xl font-bold mb-4 text-slate-900 leading-tight">
                {webinar.title}
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {webinar.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {['LLM Foundations', 'Enterprise Use Cases', 'Live Q&A', 'Implementation'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <FaCheckCircle className="text-green-500" /> {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                {/* Timer */}
                <div className="px-4 py-2 bg-slate-100 rounded-lg border border-slate-200 text-center min-w-[140px]">
                  <div className="text-xs text-slate-500 uppercase font-bold">Status</div>
                  <div className="text-lg font-mono font-bold text-red-600 animate-pulse">Starts Soon</div>
                </div>

                {/* Action Button */}
                {!registered ? (
                  <button
                    onClick={() => {
                      setRegistered(true);
                      toast.success("Registration Confirmed! Check your email.");
                    }}
                    className="flex-1 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
                  >
                    Reserve Your Spot <FaArrowRight />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      window.open(webinar.meetingLink, "_blank");
                    }}
                    className="flex-1 w-full py-3 font-bold rounded-lg flex items-center justify-center gap-2 transition-all bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-500/30 cursor-pointer"
                  >
                    Join Meeting Now <FaVideo />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* PAST WEBINARS SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">On-Demand Library</h2>
            <p className="text-slate-600 mt-2">Watch past sessions at your convenience.</p>
          </div>
          <button className="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-2">
            View All Archives <FaArrowRight />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pastWebinarsData.map((item) => (
            <div key={item.id} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50">
                    <FaPlay className="text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                  {item.duration}
                </div>
              </div>
            
              <div className="p-6">
                <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide">
                  {item.category}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-bold border border-slate-200">
                    {item.speaker.charAt(0)}
                  </div>
                  <div className="text-sm text-slate-600">
                    <p className="font-medium">{item.speaker}</p>
                    <p className="text-xs text-slate-400">{item.date}</p>
                  </div>
                </div>

                <button className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-lg text-sm transition-colors border border-slate-200">
                  Watch Recording
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Webinars;
