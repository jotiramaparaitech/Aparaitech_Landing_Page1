// src/components/services/MobileAppDevelopment.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Smartphone,
  Code,
  Zap,
  Shield,
  BarChart3,
  Users,
  Layers,
  Rocket,
  CheckCircle,
  Palette,
  Cloud,
  Settings,
  HelpCircle,
} from 'lucide-react';
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
    const animate = (target, key) => {
      let current = 0;
      const timer = setInterval(() => {
        current += target / 70;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setStats((p) => ({
          ...p,
          [key]: key === 'rating' ? current.toFixed(1) : Math.floor(current),
        }));
      }, 20);
    };

    animate(220, 'apps');
    animate(15, 'downloads');
    animate(4.9, 'rating');
    animate(120, 'clients');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate('/#services')}
        className="fixed top-24 right-6 z-50 bg-white shadow-md px-5 py-2 rounded-full border hover:border-indigo-500 transition"
      >
        ← Back
      </button>

      {/* ================= HERO ================= */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 opacity-60" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium mb-8">
            <Smartphone className="w-5 h-5" />
            Mobile App Development Services
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Mobile Applications Built
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              For Growth & Performance
            </span>
          </h1>

          <p className="mt-8 text-xl text-slate-600 max-w-4xl mx-auto">
            We are a full-cycle mobile app development company delivering
            scalable, secure and high-performance applications tailored for
            startups, enterprises and digital-first businesses.
          </p>
        </div>
      </section>

      {/* ================= TRUST STATS ================= */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Apps Delivered', value: stats.apps, icon: Smartphone },
            { label: 'Downloads (Millions)', value: stats.downloads, icon: Users },
            { label: 'Client Rating', value: stats.rating, icon: BarChart3 },
            { label: 'Satisfied Clients', value: stats.clients, icon: Zap },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center"
            >
              <item.icon className="mx-auto w-8 h-8 text-indigo-600 mb-4" />
              <div className="text-4xl font-bold">{item.value}+</div>
              <p className="text-slate-500 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-28 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Comprehensive Mobile App Solutions
          </h2>
          <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-16">
            From ideation to launch and ongoing support, we offer end-to-end
            mobile app development services designed to deliver measurable
            business value.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'iOS App Development',
                desc: 'Custom iOS applications using Swift & SwiftUI with a strong focus on performance, security and Apple design guidelines.',
                icon: <FaApple className="w-8 h-8" />,
                color: 'bg-slate-800',
              },
              {
                title: 'Android App Development',
                desc: 'Feature-rich Android apps built with Kotlin and Material Design ensuring reliability across all devices.',
                icon: <FaAndroid className="w-8 h-8" />,
                color: 'bg-green-600',
              },
              {
                title: 'Cross-Platform Development',
                desc: 'Cost-effective Flutter and React Native apps with shared codebase and native-like performance.',
                icon: <Code className="w-8 h-8" />,
                color: 'bg-indigo-600',
              },
              {
                title: 'Progressive Web Apps',
                desc: 'Installable, offline-ready web applications that work seamlessly across browsers and devices.',
                icon: <Layers className="w-8 h-8" />,
                color: 'bg-purple-600',
              },
              {
                title: 'UI / UX Design',
                desc: 'User-centric designs backed by research, usability testing and modern design systems.',
                icon: <Palette className="w-8 h-8" />,
                color: 'bg-pink-600',
              },
              {
                title: 'Backend & Cloud',
                desc: 'Secure cloud infrastructure, APIs and databases built for scalability and reliability.',
                icon: <Cloud className="w-8 h-8" />,
                color: 'bg-blue-600',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition"
              >
                <div className={`inline-flex p-4 rounded-2xl text-white ${item.color} mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Why Choose Our Mobile Development Team
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              We combine technical expertise, strategic thinking and
              user-experience design to deliver mobile applications that help
              businesses scale and stay competitive.
            </p>

            <div className="space-y-5">
              {[
                'Enterprise-grade security and compliance standards',
                'Scalable architecture built for future growth',
                'Agile development with transparent communication',
                'Performance-optimized and well-documented code',
                'Long-term support, maintenance and upgrades',
              ].map((text, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-indigo-600 mt-1" />
                  <span className="text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-10 rounded-3xl">
            <Rocket className="w-12 h-12 text-indigo-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">End-to-End Delivery</h3>
            <p className="text-slate-700">
              From product strategy and design to development, testing and
              deployment — we handle the complete mobile app lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="py-28 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technology Stack We Use
          </h2>
          <p className="text-lg text-slate-600 mb-12">
            We leverage modern, reliable and proven technologies to build
            high-performance mobile applications.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Swift',
              'Kotlin',
              'Flutter',
              'React Native',
              'Firebase',
              'Node.js',
              'AWS',
              'REST APIs',
              'GraphQL',
            ].map((tech, i) => (
              <span
                key={i}
                className="px-6 py-3 rounded-full bg-white shadow text-slate-700 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'How long does it take to build a mobile app?',
                a: 'The timeline depends on complexity and features. Typically, a mobile app takes 8–16 weeks from design to launch.',
              },
              {
                q: 'Do you provide post-launch support?',
                a: 'Yes, we offer ongoing maintenance, performance monitoring and feature enhancements after launch.',
              },
              {
                q: 'Can you work with existing apps?',
                a: 'Absolutely. We can upgrade, refactor or scale existing mobile applications.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <HelpCircle className="w-6 h-6 text-indigo-600" />
                  <h4 className="font-semibold">{faq.q}</h4>
                </div>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-16 rounded-3xl shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Mobile App Project?
          </h2>
          <p className="text-lg mb-10 opacity-90">
            Let’s discuss your idea and build a mobile application that drives
            real business results.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-12 py-4 rounded-xl bg-white text-indigo-700 font-semibold hover:scale-105 transition"
          >
            Talk to Our Experts
          </button>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;
