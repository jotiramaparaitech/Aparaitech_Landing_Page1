import React from 'react';
import { Link } from 'react-router-dom';

const Tutorials = () => {
  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <div className="bg-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Learn by Doing</h1>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto mb-10">
            Step-by-step tutorials to help you master our technologies, from basic concepts to advanced implementations.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {['All', 'Beginner', 'Intermediate', 'Advanced', 'Video'].map((filter, idx) => (
              <button key={idx} className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${idx === 0 ? 'bg-white text-indigo-900' : 'bg-indigo-800 text-indigo-100 hover:bg-indigo-700'}`}>
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* TUTORIALS GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Build a FinTech App",
                desc: "Create a secure banking application using our Finance API and React Native.",
                level: "Intermediate",
                time: "45 min",
                tags: ["Mobile", "API"],
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Intro to Generative AI",
                desc: "Learn the basics of LLMs and how to integrate them into your workflow.",
                level: "Beginner",
                time: "30 min",
                tags: ["AI", "Python"],
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Deploying to Cloud",
                desc: "A complete guide to setting up CI/CD pipelines and deploying to AWS.",
                level: "Advanced",
                time: "60 min",
                tags: ["DevOps", "Cloud"],
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Secure Authentication",
                desc: "Implement OAuth2 and JWT authentication in your web applications.",
                level: "Intermediate",
                time: "40 min",
                tags: ["Security", "Web"],
                image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Real-time Data Viz",
                desc: "Visualize complex datasets using D3.js and our Analytics API.",
                level: "Advanced",
                time: "55 min",
                tags: ["Frontend", "Data"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Smart Contract Basics",
                desc: "Write and deploy your first smart contract on the Ethereum blockchain.",
                level: "Beginner",
                time: "35 min",
                tags: ["Blockchain", "Web3"],
                image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80"
              }
            ].map((tutorial, idx) => (
              <div key={idx} className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img src={tutorial.image} alt={tutorial.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${tutorial.level === 'Beginner' ? 'bg-green-100 text-green-700' : tutorial.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>{tutorial.level}</span>
                    <span className="text-xs text-gray-500 flex items-center">⏱ {tutorial.time}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{tutorial.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tutorial.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tutorials;