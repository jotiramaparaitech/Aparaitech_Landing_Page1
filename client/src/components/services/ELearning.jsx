// src/components/services/ELearning.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, Award, Video, FileText, BarChart3, Zap } from 'lucide-react';

const ELearning = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    students: 0,
    courses: 0,
    institutions: 0,
    satisfaction: 0
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
          [key]: start.toFixed(0)
        }));
      }, 16);
    };

    animateCounter(100, 'students');
    animateCounter(5000, 'courses');
    animateCounter(200, 'institutions');
    animateCounter(95, 'satisfaction');
  }, []);

  const capabilities = [
    {
      title: 'CET Portals',
      description: 'Common Entrance Test portals for educational institutions with comprehensive exam management.',
      icon: <FileText className="w-8 h-8" />,
      features: ['Online registration', 'Exam management', 'Result processing', 'Ranking system'],
      color: 'from-amber-500 to-yellow-500',
      featuresList: ['Application forms', 'Payment gateway', 'Admit cards', 'Scorecards']
    },
    {
      title: 'Learning Management Systems',
      description: 'Comprehensive LMS for course delivery, tracking, and management.',
      icon: <BookOpen className="w-8 h-8" />,
      features: ['Course creation', 'Student tracking', 'Assessment tools', 'Progress monitoring'],
      color: 'from-orange-500 to-red-500',
      featuresList: ['Video lectures', 'Quizzes', 'Assignments', 'Certificates']
    },
    {
      title: 'Student Management',
      description: 'Complete student information and management systems for educational institutions.',
      icon: <Users className="w-8 h-8" />,
      features: ['Student records', 'Attendance tracking', 'Grade management', 'Fee management'],
      color: 'from-blue-500 to-indigo-500',
      featuresList: ['Profile management', 'Academic records', 'Parent portal', 'Notifications']
    },
    {
      title: 'Online Assessment',
      description: 'Advanced online testing and assessment platforms with AI-powered proctoring.',
      icon: <Award className="w-8 h-8" />,
      features: ['Online exams', 'Auto-grading', 'Question banks', 'Performance analytics'],
      color: 'from-green-500 to-emerald-500',
      featuresList: ['Multiple choice', 'Essay questions', 'Coding tests', 'Video responses']
    },
    {
      title: 'Virtual Classrooms',
      description: 'Interactive virtual classrooms with live streaming and collaboration tools.',
      icon: <Video className="w-8 h-8" />,
      features: ['Live streaming', 'Screen sharing', 'Chat & Q&A', 'Recording'],
      color: 'from-purple-500 to-pink-500',
      featuresList: ['HD video', 'Whiteboard', 'Breakout rooms', 'Polls']
    },
    {
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics to track student progress and institutional performance.',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Student analytics', 'Course analytics', 'Performance reports', 'Custom dashboards'],
      color: 'from-cyan-500 to-blue-500',
      featuresList: ['Engagement metrics', 'Completion rates', 'Grade distribution', 'Trend analysis']
    }
  ];

  const features = [
    {
      category: 'For Students',
      items: [
        'Easy course access',
        'Mobile learning',
        'Interactive content',
        'Progress tracking',
        'Certificates & badges',
        'Discussion forums'
      ]
    },
    {
      category: 'For Educators',
      items: [
        'Course authoring tools',
        'Grade management',
        'Student analytics',
        'Communication tools',
        'Resource library',
        'Assessment builder'
      ]
    },
    {
      category: 'For Administrators',
      items: [
        'User management',
        'System configuration',
        'Reports & analytics',
        'Fee management',
        'Notification system',
        'Multi-campus support'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-16 md:pt-0 overflow-x-hidden">
      {/* Back Button */}
      <button
        onClick={() => navigate('/#services')}
        className="fixed top-24 right-6 md:right-8 z-40 flex items-center gap-2 text-amber-600 hover:text-amber-700 bg-white/80 backdrop-blur-sm hover:bg-gray-50/80 px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 hover:border-amber-500/50"
      >
        ← Back
      </button>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <GraduationCap className="w-4 h-4" />
              Educational Technology
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
              E-Learning & College Portals
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              Comprehensive educational technology solutions. CET portals, LMS, and student management systems 
              designed for modern educational institutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate('/#contact-form')}
                className="px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Started
              </button>
              <button
                onClick={() => navigate('/#services')}
                className="px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
              >
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: stats.students, suffix: 'K+', label: 'Active Students', icon: <Users className="w-6 h-6" /> },
              { value: stats.courses, suffix: '+', label: 'Courses Delivered', icon: <BookOpen className="w-6 h-6" /> },
              { value: stats.institutions, suffix: '+', label: 'Institutions', icon: <GraduationCap className="w-6 h-6" /> },
              { value: stats.satisfaction, suffix: '%', label: 'Satisfaction Rate', icon: <Award className="w-6 h-6" /> }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border border-amber-100 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-3 text-amber-600">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our E-Learning Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational technology platforms for modern learning
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
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-amber-600 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{cap.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Key Features:</p>
                  <ul className="space-y-2">
                    {cap.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <span className="text-amber-500 mr-2 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {cap.featuresList && (
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-500 mb-2">Additional Features:</p>
                    <div className="flex flex-wrap gap-2">
                      {cap.featuresList.map((item, i) => (
                        <span key={i} className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features by Role */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Features by Role</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored features for students, educators, and administrators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border-2 border-amber-100 hover:border-amber-300 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{feature.category}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Education?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our e-learning solutions can enhance your educational institution's digital capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/#contact-form')}
              className="px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Schedule a Demo
            </button>
            <button
              onClick={() => navigate('/#services')}
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-all duration-300"
            >
              Explore More Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ELearning;
