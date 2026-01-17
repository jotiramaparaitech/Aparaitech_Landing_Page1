import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WebDevelopment = () => {
  const navigate = useNavigate();
  const [hoveredService, setHoveredService] = useState(null);
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
    experience: 0
  });

  // Animate counters
  useEffect(() => {
    const animateCounter = (target, key, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const updateStats = (value) => {
        setStats(prev => {
          const updated = { ...prev };
          updated[key] = value;
          return updated;
        });
      };

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        const formatted = start.toFixed(0);
        updateStats(formatted);
      }, 16);
    };

    animateCounter(500, 'projects');
    animateCounter(250, 'clients');
    animateCounter(98, 'satisfaction');
    animateCounter(8, 'experience');
  }, []);

  const webServices = [
    {
      id: 1,
      title: "Frontend Development",
      icon: "🎨",
      color: "from-purple-500 to-indigo-500",
      gradient: "bg-gradient-to-r from-blue-500/20 to-cyan-500/20",
      border: "border-purple-500/30",
      technologies: ["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
      features: ["Responsive Design", "Interactive UI", "Performance Optimization", "Accessibility"],
      timeToMarket: "2-4 Weeks"
    },
    {
      id: 2,
      title: "Backend Development",
      icon: "⚙️",
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-r from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
      technologies: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB"],
      features: ["RESTful APIs", "Microservices", "Database Design", "Security"],
      timeToMarket: "3-6 Weeks"
    },
    {
      id: 3,
      title: "Full Stack Solutions",
      icon: "🔄",
      color: "from-green-500 to-emerald-500",
      gradient: "bg-gradient-to-r from-green-500/20 to-emerald-500/20",
      border: "border-green-500/30",
      technologies: ["MERN Stack", "LAMP", "Django", "Laravel", "Cloud Platforms"],
      features: ["End-to-End Development", "Scalability", "Integration", "Maintenance"],
      timeToMarket: "6-10 Weeks"
    },
    {
      id: 4,
      title: "E-commerce Solutions",
      icon: "🛒",
      color: "from-orange-500 to-red-500",
      gradient: "bg-gradient-to-r from-orange-500/20 to-red-500/20",
      border: "border-orange-500/30",
      technologies: ["Shopify", "WooCommerce", "Custom Platforms", "Payment Integration"],
      features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Analytics"],
      timeToMarket: "4-8 Weeks"
    },
    {
      id: 5,
      title: "CMS Development",
      icon: "📝",
      color: "from-indigo-500 to-violet-500",
      gradient: "bg-gradient-to-r from-indigo-500/20 to-violet-500/20",
      border: "border-indigo-500/30",
      technologies: ["WordPress", "Drupal", "Contentful", "Strapi", "Custom CMS"],
      features: ["Content Management", "SEO Optimization", "User-friendly Interface", "Scalability"],
      timeToMarket: "2-5 Weeks"
    },
    {
      id: 6,
      title: "Progressive Web Apps",
      icon: "📱",
      color: "from-yellow-500 to-amber-500",
      gradient: "bg-gradient-to-r from-yellow-500/20 to-amber-500/20",
      border: "border-yellow-500/30",
      technologies: ["PWA", "Service Workers", "Web APIs", "React Native", "Flutter Web"],
      features: ["Offline Support", "Native Experience", "Fast Loading", "Push Notifications"],
      timeToMarket: "4-7 Weeks"
    }
  ];

  const developmentProcess = [
    { step: 1, title: "Discovery & Planning", description: "Understanding requirements and creating detailed project roadmap" },
    { step: 2, title: "Design & Prototyping", description: "Creating wireframes and interactive prototypes for approval" },
    { step: 3, title: "Development", description: "Building robust and scalable web applications." },
    { step: 4, title: "Testing & QA", description: "Comprehensive testing and quality assurance" },
    { step: 5, title: "Deployment", description: "Launching to production with minimal downtime" },
    { step: 6, title: "Support & Maintenance", description: "Ongoing support, updates, and optimization" }
  ];

  const technologies = [
    { category: "Frontend", tools: ["React", "Vue", "Angular", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", tools: ["Node.js", "Python", "Java", "Go", "Ruby", "PHP"] },
    { category: "Databases", tools: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "DynamoDB"] },
    { category: "DevOps", tools: ["Docker", "Kubernetes", "AWS", "Azure", "CI/CD", "GitHub Actions"] }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24">
      {/* Back Button - Fixed on Right Side */}
      <button
        onClick={() => navigate('/#services')}
        className="fixed top-24 right-6 md:right-8 z-40 flex items-center gap-2 text-purple-600 hover:text-purple-700 bg-white/80 backdrop-blur-sm hover:bg-gray-50/80 px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 hover:border-purple-500/50"
      >
        ← Back
      </button>

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-indigo-900/10 opacity-50" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Enterprise Web Application Development
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
            Build sophisticated web applications, and user-centric web applications that drive business growth. From concept to deployment, we deliver cutting-edge solutions.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: stats.projects, label: "Projects Completed", suffix: "+" },
              { value: stats.clients, label: "Happy Clients", suffix: "+" },
              { value: stats.satisfaction, label: "Client Satisfaction", suffix: "%" },
              { value: stats.experience, label: "Years Experience", suffix: "+" }
            ].map((stat, statIdx) => (
              <div key={`stat-${statIdx}`} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border border-gray-200 text-center hover:border-purple-500/50 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Services Section */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Web Development Services</h2>
            <p className="text-gray-600 text-lg">Comprehensive web solutions tailored to your business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service) => (
              <button
                key={service.id}
                type="button"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group text-left cursor-pointer rounded-xl border border-gray-200 p-8 transition-all duration-300 hover:border-purple-500/50 ${service.gradient}`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {hoveredService === service.id && (
                  <div className="space-y-4 animate-fadeIn">
                    <div>
                      <p className="text-sm text-gray-700 font-semibold mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techId) => (
                          <span key={`tech-${service.id}-${techId}`} className="text-xs bg-blue-500/20 text-purple-700 px-3 py-1 rounded-full border border-purple-500/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 font-semibold mb-2">Key Features:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.features.map((feature, featureId) => (
                          <li key={`feature-${service.id}-${featureId}`}>✓ {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-purple-600 font-semibold">{service.timeToMarket}</p>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="px-4 md:px-8 py-20 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-gray-600 text-lg">Proven methodology for successful web projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((item) => (
              <div key={`process-${item.step}`} className="group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-gray-900 font-bold text-lg mr-4 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">{item.title}</h3>
                </div>
                <p className="text-gray-600 ml-16">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack</h2>
            <p className="text-gray-600 text-lg">Modern tools and frameworks we use</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, techIdx) => (
              <div key={`${tech.category}-${techIdx}`} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border border-gray-200 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-purple-600 mb-6">{tech.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {tech.tools.map((tool, toolId) => (
                    <div key={`tool-${techIdx}-${toolId}`} className="flex items-center text-gray-700 hover:text-purple-600 transition-colors">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl border border-purple-500/30 p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Web Application?</h2>
            <p className="text-gray-700 mb-8 text-lg">Let's discuss your project and create something amazing together</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate('/#contact-form')} className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-gray-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;



