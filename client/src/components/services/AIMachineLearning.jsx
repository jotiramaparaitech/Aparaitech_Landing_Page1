// src/components/services/AIMachineLearning.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Brain,
  TrendingUp,
  Eye,
  MessageSquare,
  Zap,
  Shield,
  BarChart3,
  Cpu,
} from "lucide-react";

const AIMachineLearning = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    models: "0",
    accuracy: "0.0",
    projects: "0",
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
          [key]: key === "accuracy" ? start.toFixed(1) : Math.floor(start).toString(),
        }));
      }, 16);
    };

    animateCounter(500, "models");
    animateCounter(98.5, "accuracy");
    animateCounter(200, "projects");
    animateCounter(150, "clients");
  }, []);

  const capabilities = [
    {
      title: "Predictive Analytics",
      description:
        "Forecast trends and identify opportunities using advanced machine learning algorithms.",
      icon: <TrendingUp className="w-8 h-8" />,
      features: [
        "Sales forecasting",
        "Customer churn prediction",
        "Market trend analysis",
        "Demand forecasting",
      ],
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Computer Vision",
      description:
        "Image recognition, object detection, and visual analytics powered by CNN models.",
      icon: <Eye className="w-8 h-8" />,
      features: [
        "Image classification",
        "Object detection",
        "Facial recognition",
        "Medical imaging",
      ],
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Natural Language Processing",
      description:
        "Text analysis, sentiment detection, and language understanding solutions.",
      icon: <MessageSquare className="w-8 h-8" />,
      features: [
        "Chatbots & assistants",
        "Sentiment analysis",
        "Text summarization",
        "Language translation",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Deep Learning",
      description:
        "Advanced neural networks for complex pattern recognition problems.",
      icon: <Brain className="w-8 h-8" />,
      features: [
        "CNN architectures",
        "RNN & LSTM",
        "GAN models",
        "Transfer learning",
      ],
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "MLOps & Deployment",
      description:
        "Automated pipelines for training, testing, and deploying ML models.",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Model versioning",
        "A/B testing",
        "Auto-scaling",
        "Real-time inference",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "AI Security",
      description:
        "Protect AI models and data with enterprise-grade security practices.",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Model encryption",
        "Adversarial defense",
        "Privacy-preserving ML",
        "Compliance-ready",
      ],
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-16 overflow-x-hidden">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/#services")}
        className="fixed top-24 right-6 z-40 bg-white px-4 py-2 rounded-lg border hover:border-pink-500 transition"
      >
        ← Back
      </button>

      {/* HERO */}
      <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-28 text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          AI & Machine Learning
        </h1>
        <p className="mt-6 text-xl text-gray-700 max-w-4xl mx-auto">
          Transform your business with predictive analytics, computer vision,
          NLP, and production-ready AI systems.
        </p>
      </section>

      {/* STATS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {[
            { label: "Models Deployed", value: stats.models, icon: Brain },
            { label: "Avg Accuracy", value: stats.accuracy + "%", icon: BarChart3 },
            { label: "Projects", value: stats.projects, icon: Cpu },
            { label: "Clients", value: stats.clients, icon: TrendingUp },
          ].map((s, i) => (
            <div key={i} className="bg-purple-50 p-6 rounded-xl text-center">
              <s.icon className="mx-auto w-6 h-6 text-purple-600 mb-3" />
              <div className="text-3xl font-bold text-purple-600">{s.value}</div>
              <p className="text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {capabilities.map((cap, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${cap.color} text-white mb-4`}>
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
      <section className="py-24 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Build AI-Powered Solutions?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let’s discuss how AI and machine learning can accelerate your business growth.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-white text-purple-700 px-10 py-4 rounded-xl font-semibold hover:scale-105 transition"
        >
          Talk to Our AI Experts
        </button>
      </section>
    </div>
  );
};

export default AIMachineLearning;
