import React from 'react';
import { Link } from 'react-router-dom';

const SuccessStories = () => {
  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <div className="relative bg-[#0f172a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#3b82f6]/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10 text-center">
          <div className="inline-block px-4 py-1 mb-6 border border-blue-400/30 rounded-full bg-blue-900/30 backdrop-blur-sm">
            <span className="text-blue-300 font-semibold tracking-wide text-sm uppercase">Customer Success</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Real Results for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#34d399]">Real Businesses.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Discover how we've helped organizations across the globe transform their operations, accelerate growth, and achieve their digital ambitions.
          </p>
        </div>
      </div>

      {/* STATS BANNER */}
      <div className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-500/50">
            <div>
              <div className="text-4xl font-bold text-white mb-1">500+</div>
              <div className="text-blue-100 text-sm uppercase tracking-wide">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-1">98%</div>
              <div className="text-blue-100 text-sm uppercase tracking-wide">Client Retention</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-1">40%</div>
              <div className="text-blue-100 text-sm uppercase tracking-wide">Avg. ROI Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-1">24/7</div>
              <div className="text-blue-100 text-sm uppercase tracking-wide">Support Coverage</div>
            </div>
          </div>
        </div>
      </div>

      {/* STORIES GRID */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                company: "FinTech Global",
                industry: "Finance",
                title: "Scaling to 1M+ Users",
                desc: "How we re-architected a legacy banking core to handle exponential growth in transaction volume.",
                result: "10x Faster Processing",
                color: "bg-blue-600"
              },
              {
                company: "MediCare Plus",
                industry: "Healthcare",
                title: "AI-Driven Diagnostics",
                desc: "Implementing computer vision to assist radiologists in detecting anomalies earlier.",
                result: "30% Improved Accuracy",
                color: "bg-teal-600"
              },
              {
                company: "ShopTrend",
                industry: "E-Commerce",
                title: "Omnichannel Experience",
                desc: "Unifying online and offline inventory for a seamless customer shopping journey.",
                result: "45% Sales Uplift",
                color: "bg-purple-600"
              },
              {
                company: "AutoWorks",
                industry: "Manufacturing",
                title: "Smart Factory IoT",
                desc: "Connecting 500+ machines to the cloud for real-time predictive maintenance.",
                result: "Zero Unplanned Downtime",
                color: "bg-orange-600"
              },
              {
                company: "EduLearn",
                industry: "Education",
                title: "Virtual Classroom",
                desc: "Building a low-latency video platform for remote learning across continents.",
                result: "50k Concurrent Users",
                color: "bg-indigo-600"
              },
              {
                company: "LogiChain",
                industry: "Logistics",
                title: "Route Optimization",
                desc: "Using machine learning to optimize delivery routes and reduce fuel consumption.",
                result: "20% Cost Reduction",
                color: "bg-red-600"
              }
            ].map((story, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div className={`h-2 w-full ${story.color}`}></div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{story.industry}</span>
                    <span className={`text-xs font-bold px-2 py-1 rounded bg-gray-100 text-gray-600`}>{story.company}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{story.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {story.desc}
                  </p>
                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">Key Result</p>
                    <p className={`text-lg font-bold ${story.color.replace('bg-', 'text-')}`}>{story.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to write your success story?</h2>
          <Link to="/#contact" className="inline-block px-8 py-4 bg-[#0f172a] text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
            Start Your Project
          </Link>
        </div>
      </section>

    </div>
  );
};

export default SuccessStories;