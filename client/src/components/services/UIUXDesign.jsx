// src/components/services/UIUXDesign.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Palette, Layout, Users, CheckCircle, Zap, Eye, FileText, TrendingUp } from 'lucide-react';

const UIUXDesign = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    projects: 0,
    satisfaction: 0,
    conversion: 0,
    clients: 0
  });

  useEffect(() => {
    const animateCounter = (target, key, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setStats(prev => ({
          ...prev,
          [key]: start.toFixed(key === 'satisfaction' || key === 'conversion' ? 1 : 0)
        }));
      }, 16);
    };

    animateCounter(800, 'projects');
    animateCounter(98, 'satisfaction');
    animateCounter(45, 'conversion');
    animateCounter(350, 'clients');
  }, []);

  const capabilities = [
    {
      title: 'Wireframes & Prototypes',
      description: 'Create detailed wireframes and interactive prototypes to visualize user flows.',
      icon: <Layout className="w-8 h-8" />,
      features: ['User flows', 'Wireframing', 'Interactive prototypes', 'Low & high fidelity'],
      color: 'from-violet-500 to-purple-500',
      tools: ['Figma', 'Sketch', 'Adobe XD', 'InVision']
    },
    {
      title: 'Design Systems',
      description: 'Comprehensive design systems for consistent UI/UX across all platforms.',
      icon: <Palette className="w-8 h-8" />,
      features: ['Component libraries', 'Style guides', 'Design tokens', 'Pattern libraries'],
      color: 'from-pink-500 to-rose-500',
      tools: ['Figma', 'Storybook', 'Design Tokens', 'Zeroheight']
    },
    {
      title: 'User Research',
      description: 'User testing and research to optimize user experience and satisfaction.',
      icon: <Users className="w-8 h-8" />,
      features: ['User interviews', 'Usability testing', 'A/B testing', 'User personas'],
      color: 'from-blue-500 to-cyan-500',
      tools: ['UserTesting', 'Hotjar', 'Maze', 'Optimal Workshop']
    },
    {
      title: 'Visual Design',
      description: 'Beautiful and modern visual designs that engage and convert users.',
      icon: <Eye className="w-8 h-8" />,
      features: ['Brand identity', 'Visual hierarchy', 'Color systems', 'Typography'],
      color: 'from-purple-500 to-indigo-500',
      tools: ['Adobe Creative Suite', 'Figma', 'Illustrator', 'Photoshop']
    },
    {
      title: 'Interaction Design',
      description: 'Intuitive interactions and micro-animations that enhance user experience.',
      icon: <Zap className="w-8 h-8" />,
      features: ['Micro-interactions', 'Animations', 'Transitions', 'Feedback systems'],
      color: 'from-orange-500 to-yellow-500',
      tools: ['Principle', 'Framer', 'After Effects', 'Lottie']
    },
    {
      title: 'UX Strategy',
      description: 'Strategic UX planning and optimization for better business outcomes.',
      icon: <TrendingUp className="w-8 h-8" />,
      features: ['UX audits', 'Competitive analysis', 'Journey mapping', 'Strategy planning'],
      color: 'from-green-500 to-emerald-500',
      tools: ['Miro', 'Mural', 'Figma', 'Notion']
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Research & Discovery',
      description: 'Understand users, business goals, and market context'
    },
    {
      step: '2',
      title: 'Ideation & Design',
      description: 'Create wireframes, prototypes, and visual designs'
    },
    {
      step: '3',
      title: 'Testing & Iteration',
      description: 'Test with users and refine based on feedback'
    },
    {
      step: '4',
      title: 'Implementation',
      description: 'Collaborate with developers for pixel-perfect execution'
    }
  ];

  const deliverables = [
    { item: 'User Research Reports', icon: <FileText className="w-5 h-5" /> },
    { item: 'Wireframes & Prototypes', icon: <Layout className="w-5 h-5" /> },
    { item: 'Design Systems', icon: <Palette className="w-5 h-5" /> },
    { item: 'Usability Test Results', icon: <CheckCircle className="w-5 h-5" /> },
    { item: 'Style Guides', icon: <Eye className="w-5 h-5" /> },
    { item: 'Interactive Prototypes', icon: <Zap className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-16 md:pt-0 overflow-x-hidden">
      {/* Back Button */}
      <button
        onClick={() => navigate('/#services')}
        className="fixed top-24 right-6 md:right-8 z-40 flex items-center gap-2 text-violet-600 hover:text-violet-700 bg-white/80 backdrop-blur-sm hover:bg-gray-50/80 px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 hover:border-violet-500/50"
      >
        ← Back
      </button>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Palette className="w-4 h-4" />
              Design Excellence
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              UI/UX Design
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              Create intuitive and engaging user experiences. Wireframes, design systems, and user research 
              that transform ideas into beautiful, functional interfaces.
            </p>
           
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: stats.projects, suffix: '+', label: 'Design Projects', icon: <Palette className="w-6 h-6" /> },
              { value: stats.satisfaction, suffix: '%', label: 'Client Satisfaction', icon: <CheckCircle className="w-6 h-6" /> },
              { value: stats.conversion, suffix: '%', label: 'Conversion Increase', icon: <TrendingUp className="w-6 h-6" /> },
              { value: stats.clients, suffix: '+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl border border-violet-100 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-3 text-violet-600">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-violet-600 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Design Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive UI/UX design solutions for exceptional user experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${cap.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {cap.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-violet-600 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{cap.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Key Features:</p>
                  <ul className="space-y-2">
                    {cap.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <span className="text-violet-500 mr-2 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 mb-2">Tools:</p>
                  <div className="flex flex-wrap gap-2">
                    {cap.tools.map((tool, i) => (
                      <span key={i} className="text-xs bg-violet-100 text-violet-700 px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Design Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A user-centered approach to creating exceptional experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 h-full border-2 border-violet-200 hover:border-violet-400 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl font-bold text-violet-600 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 bg-violet-500 rounded-full border-4 border-white"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Design Deliverables</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to bring your design vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border-2 border-violet-100 hover:border-violet-300 hover:shadow-lg transition-all duration-300 flex items-center gap-4"
              >
                <div className="p-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg text-white">
                  {item.icon}
                </div>
                <div className="font-semibold text-gray-900">{item.item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Amazing Experiences?
          </h2>
          <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how great design can transform your product and delight your users.
          </p>
         
        </div>
      </section>
    </div>
  );
};

export default UIUXDesign;
