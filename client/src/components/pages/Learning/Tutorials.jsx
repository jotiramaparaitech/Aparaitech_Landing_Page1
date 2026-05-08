import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaPlay, FaClock, FaBookOpen, FaCheck } from 'react-icons/fa';

const Tutorials = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedTutorial, setSelectedTutorial] = useState(null);

  const tutorials = [
    {
      id: 1,
      title: "Build a FinTech App",
      desc: "Create a secure banking application using our Finance API and React Native. Covers authentication, transaction handling, and security best practices.",
      level: "Intermediate",
      time: "45 min",
      tags: ["Mobile", "API"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      modules: ["Project Setup", "Authentication Flow", "API Integration", "Security Audit"]
    },
    {
      id: 2,
      title: "Intro to Generative AI",
      desc: "Learn the basics of LLMs and how to integrate them into your workflow. We will explore prompt engineering and API usage.",
      level: "Beginner",
      time: "30 min",
      tags: ["AI", "Python"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      modules: ["LLM Concepts", "Prompt Engineering", "API Setup", "First Generation"]
    },
    {
      id: 3,
      title: "Deploying to Cloud",
      desc: "A complete guide to setting up CI/CD pipelines and deploying to AWS. Learn about Docker, Kubernetes, and automated workflows.",
      level: "Advanced",
      time: "60 min",
      tags: ["DevOps", "Cloud"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      modules: ["Docker Basics", "CI/CD Pipeline", "AWS Configuration", "Production Deployment"]
    },
    {
      id: 4,
      title: "Secure Authentication",
      desc: "Implement OAuth2 and JWT authentication in your web applications. Understand the flow of tokens and how to secure endpoints.",
      level: "Intermediate",
      time: "40 min",
      tags: ["Security", "Web"],
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
      modules: ["Auth Concepts", "OAuth2 Setup", "JWT Implementation", "Route Protection"]
    },
    {
      id: 5,
      title: "Real-time Data Viz",
      desc: "Visualize complex datasets using D3.js and our Analytics API. Create interactive charts and dashboards.",
      level: "Advanced",
      time: "55 min",
      tags: ["Frontend", "Data"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      modules: ["D3.js Basics", "Data Fetching", "Chart Creation", "Interactivity"]
    },
    {
      id: 6,
      title: "Smart Contract Basics",
      desc: "Write and deploy your first smart contract on the Ethereum blockchain using Solidity and Hardhat.",
      level: "Beginner",
      time: "35 min",
      tags: ["Blockchain", "Web3"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
      modules: ["Blockchain Intro", "Solidity Basics", "Smart Contract Logic", "Deployment"]
    }
  ];

  const filteredTutorials = tutorials.filter(tutorial => {
    if (activeFilter === 'All') return true;
    return tutorial.level === activeFilter;
  });

  return (
    <div className="pt-16 min-h-screen bg-white font-sans relative">
      
      {/* MODAL */}
      {selectedTutorial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setSelectedTutorial(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
            <div className="relative h-48 md:h-64">
              <img src={selectedTutorial.image} alt={selectedTutorial.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <div className="flex gap-2 mb-2">
                    <span className={`text-xs font-bold px-2 py-1 rounded text-white ${selectedTutorial.level === 'Beginner' ? 'bg-green-500' : selectedTutorial.level === 'Intermediate' ? 'bg-yellow-500' : 'bg-red-500'}`}>
                      {selectedTutorial.level}
                    </span>
                    <span className="text-xs font-bold px-2 py-1 rounded bg-white/20 text-white backdrop-blur-md flex items-center gap-1">
                      <FaClock size={10} /> {selectedTutorial.time}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">{selectedTutorial.title}</h2>
                </div>
              </div>
              <button 
                onClick={() => setSelectedTutorial(null)}
                className="absolute top-4 right-4 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors backdrop-blur-sm"
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="p-8">
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">{selectedTutorial.desc}</p>
              
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FaBookOpen className="text-indigo-600" /> What you'll learn
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedTutorial.modules.map((mod, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <FaCheck className="text-green-500 flex-shrink-0" size={12} />
                      <span className="text-sm font-medium">{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-indigo-200 flex items-center justify-center gap-2">
                  <FaPlay size={12} /> Start Tutorial
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors">
                  Save for Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* HERO SECTION */}
      <div className="bg-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Learn by Doing</h1>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto mb-10">
            Step-by-step tutorials to help you master our technologies, from basic concepts to advanced implementations.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {['All', 'Beginner', 'Intermediate', 'Advanced'].map((filter) => (
              <button 
                key={filter} 
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === filter 
                    ? 'bg-white text-indigo-900 shadow-lg scale-105' 
                    : 'bg-indigo-800/50 text-indigo-100 hover:bg-indigo-700 border border-indigo-700'
                }`}
              >
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
            {filteredTutorials.map((tutorial) => (
              <div 
                key={tutorial.id} 
                onClick={() => setSelectedTutorial(tutorial)}
                className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={tutorial.image} 
                    alt={tutorial.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 shadow-lg">
                      <FaPlay className="text-indigo-600 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${
                      tutorial.level === 'Beginner' ? 'bg-green-100 text-green-700' : 
                      tutorial.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' : 
                      'bg-red-100 text-red-700'
                    }`}>
                      {tutorial.level}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <FaClock size={12} /> {tutorial.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{tutorial.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tutorial.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {tutorial.tags.map((tag, i) => (
                      <span key={i} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded border border-gray-200">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredTutorials.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900">No tutorials found</h3>
              <p className="text-gray-500">Try adjusting your filters.</p>
              <button 
                onClick={() => setActiveFilter('All')}
                className="mt-4 text-indigo-600 font-bold hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Tutorials;