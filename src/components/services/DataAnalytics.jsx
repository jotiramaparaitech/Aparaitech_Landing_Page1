// src/components/services/DevOpsCICD.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  GitBranch,
  Container,
  Cloud,
  Zap,
  Shield,
  BarChart3, 
  Settings,
  Rocket,
} from "lucide-react";

const DevOpsCICD = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    deployments: "0",
    uptime: "0.0",
    efficiency: "0.0",
    clients: "0",
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
          [key]:
            key === "uptime" || key === "efficiency"
              ? start.toFixed(1)
              : Math.floor(start).toString(),
        }));
      }, 16);
    };

    animateCounter(10000, "deployments");
    animateCounter(99.9, "uptime");
    animateCounter(85, "efficiency");
    animateCounter(300, "clients");
  }, []);

  const capabilities = [
    {
      title: "CI/CD Pipelines",
      description:
        "Automated build, test, and deployment pipelines for faster releases.",
      icon: <GitBranch className="w-8 h-8" />,
      features: [
        "Automated testing",
        "Continuous deployment",
        "Version control integration",
        "Multi-stage pipelines",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Containerization",
      description:
        "Docker and Kubernetes solutions for scalable applications.",
      icon: <Container className="w-8 h-8" />,
      features: [
        "Docker containers",
        "Kubernetes orchestration",
        "Microservices",
        "Container registry",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Infrastructure as Code and automated cloud provisioning.",
      icon: <Cloud className="w-8 h-8" />,
      features: [
        "Infrastructure as Code",
        "Auto-scaling",
        "Multi-cloud support",
        "High availability",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Monitoring & Logging",
      description:
        "Proactive monitoring and centralized logging solutions.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: [
        "Real-time metrics",
        "Alerting",
        "Log aggregation",
        "Performance tracking",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Security & Compliance",
      description:
        "DevSecOps practices embedded throughout pipelines.",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Security scanning",
        "Secrets management",
        "Compliance automation",
        "Vulnerability detection",
      ],
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Automation & Orchestration",
      description:
        "End-to-end automation for reliable deployments.",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Workflow automation",
        "Self-healing systems",
        "Event-driven pipelines",
        "Task scheduling",
      ],
      color: "from-yellow-500 to-amber-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-16 overflow-x-hidden">
      {/* Back Button */}
      <button
        onClick={() => navigate("/#services")}
        className="fixed top-24 right-6 z-40 bg-white px-4 py-2 rounded-lg border hover:border-orange-500 transition"
      >
        ← Back
      </button>

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 via-red-50 to-amber-50 py-28 text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent">
          DevOps & CI/CD Solutions
        </h1>
        <p className="mt-6 text-xl text-gray-700 max-w-4xl mx-auto">
          Automate, deploy, and scale your applications with enterprise-grade
          DevOps pipelines.
        </p>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {[
            { label: "Deployments / Month", value: stats.deployments, icon: Rocket },
            { label: "System Uptime", value: stats.uptime + "%", icon: Shield },
            { label: "Efficiency Gain", value: stats.efficiency + "%", icon: BarChart3 },
            { label: "Enterprise Clients", value: stats.clients, icon: Cloud },
          ].map((item, i) => (
            <div key={i} className="bg-orange-50 p-6 rounded-xl text-center">
              <item.icon className="mx-auto w-6 h-6 text-orange-600 mb-3" />
              <div className="text-3xl font-bold text-orange-600">{item.value}</div>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
            >
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${cap.color} text-white mb-4`}
              >
                {cap.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{cap.title}</h3>
              <p className="text-gray-600 mb-4">{cap.description}</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {cap.features.map((f, j) => (
                  <li key={j}>✓ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Accelerate Your Delivery?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let’s build a DevOps pipeline that scales with your business.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-white text-orange-700 px-10 py-4 rounded-xl font-semibold hover:scale-105 transition"
        >
          Talk to DevOps Experts
        </button>
      </section>
    </div>
  );
};

export default DevOpsCICD;
