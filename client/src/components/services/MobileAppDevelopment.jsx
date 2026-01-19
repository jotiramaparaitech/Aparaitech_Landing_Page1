// src/components/services/MobileAppDevelopment.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Smartphone,
  Code,
  Zap,
  Shield,
  BarChart3,
  Users,
} from 'lucide-react';

// ✅ Correct icon sources
import { FaApple, FaAndroid } from 'react-icons/fa';

const MobileAppDevelopment = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    apps: 0,
    downloads: 0,
    rating: 0,
    clients: 0,
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
        setStats((prev) => ({
          ...prev,
          [key]: key === 'rating' ? start.toFixed(1) : Math.round(start),
        }));
      }, 16);
    };

    animateCounter(500, 'apps');
    animateCounter(10, 'downloads');
    animateCounter(4.8, 'rating');
    animateCounter(300, 'clients');
  }, []);

  const capabilities = [
    {
      title: 'Native iOS',
      description: 'Swift and Objective-C development for iPhone and iPad.',
      icon: <FaApple className="w-8 h-8" />,
      features: ['Swift', 'iOS Optimization', 'App Store Deployment', 'Apple Watch'],
      color: 'from-gray-700 to-gray-900',
      technologies: ['Swift', 'SwiftUI', 'UIKit'],
    },
    {
      title: 'Native Android',
      description: 'Kotlin-based Android apps with Material Design.',
      icon: <FaAndroid className="w-8 h-8" />,
      features: ['Kotlin', 'Material Design', 'Play Store', 'Wear OS'],
      color: 'from-green-500 to-emerald-500',
      technologies: ['Kotlin', 'Jetpack Compose'],
    },
    {
      title: 'Cross-Platform',
      description: 'Single codebase apps for iOS & Android.',
      icon: <Code className="w-8 h-8" />,
      features: ['Flutter', 'React Native', 'Fast Delivery'],
      color: 'from-blue-500 to-cyan-500',
      technologies: ['Flutter', 'React Native'],
    },
    {
      title: 'Progressive Web Apps',
      description: 'Installable web apps with offline support.',
      icon: <Zap className="w-8 h-8" />,
      features: ['Offline', 'Push Notifications', 'No App Store'],
      color: 'from-purple-500 to-pink-500',
      technologies: ['PWA', 'Service Workers'],
    },
    {
      title: 'App Security',
      description: 'Enterprise-grade mobile security.',
      icon: <Shield className="w-8 h-8" />,
      features: ['Encryption', 'Secure Auth', 'API Security'],
      color: 'from-red-500 to-orange-500',
      technologies: ['OAuth2', 'SSL/TLS'],
    },
    {
      title: 'App Analytics',
      description: 'Performance & usage tracking.',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Analytics', 'Crash Reports', 'A/B Testing'],
      color: 'from-indigo-500 to-blue-500',
      technologies: ['Firebase', 'Mixpanel'],
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Back Button */}
      <button
        onClick={() => navigate('/#services')}
        className="fixed top-24 right-6 z-40 bg-white px-4 py-2 rounded-lg border hover:border-indigo-500 transition"
      >
        ← Back
      </button>

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-24 text-center">
        <Smartphone className="mx-auto w-10 h-10 text-indigo-600 mb-4" />
        <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Mobile App Development
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mt-6">
          High-performance iOS, Android & cross-platform applications.
        </p>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
          {[
            { label: 'Apps', value: stats.apps, icon: <Smartphone /> },
            { label: 'Downloads (M)', value: stats.downloads, icon: <Users /> },
            { label: 'Rating', value: stats.rating, icon: <BarChart3 /> },
            { label: 'Clients', value: stats.clients, icon: <Zap /> },
          ].map((s, i) => (
            <div key={i} className="text-center p-6 bg-indigo-50 rounded-xl">
              <div className="text-indigo-600 mb-2">{s.icon}</div>
              <div className="text-3xl font-bold text-indigo-600">{s.value}</div>
              <p className="text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
          {capabilities.map((cap, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${cap.color} text-white mb-4`}
              >
                {cap.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{cap.title}</h3>
              <p className="text-gray-600 mb-4">{cap.description}</p>
              <div className="flex flex-wrap gap-2">
                {cap.technologies.map((t, j) => (
                  <span
                    key={j}
                    className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;
