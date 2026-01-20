// src/components/services/AIMachineLearning.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, TrendingUp, Eye, MessageSquare, Zap, Shield, BarChart3, Cpu } from 'lucide-react';

const AIMachineLearning = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    models: 0,
    accuracy: 0,
    projects: 0,
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
          [key]: start.toFixed(key === 'accuracy' ? 1 : 0)
        }));
      }, 16);
    };

    animateCounter(500, 'models');
    animateCounter(98.5, 'accuracy');
    animateCounter(200, 'projects');
    animateCounter(150, 'clients');
  }, []);

  const capabilities = [
    {
      title: 'Predictive Analytics',
      description: 'Forecast trends and identify opportunities using advanced machine learning algorithms.',
      icon: <TrendingUp className="w-8 h-8" />,
      features: ['Sales forecasting', 'Customer churn prediction', 'Market trend analysis', 'Demand forecasting'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Computer Vision',
      description: 'Image recognition, object detection, and visual analytics solutions powered by CNN models.',
      icon: <Eye className="w-8 h-8" />,
      features: ['Image classification', 'Object detection', 'Facial recognition', 'Medical imaging'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Natural Language Processing',
      description: 'Text analysis, sentiment analysis, and language understanding solutions.',
      icon: <MessageSquare className="w-8 h-8" />,
      features: ['Chatbots & Virtual Assistants', 'Sentiment analysis', 'Text summarization', 'Language translation'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Deep Learning',
      description: 'Neural networks and deep learning models for complex pattern recognition.',
      icon: <Brain className="w-8 h-8" />,
      features: ['CNN architectures', 'RNN & LSTM networks', 'GAN models', 'Transfer learning'],
      color: 'from-violet-500 to-purple-500'
    },
    {
      title: 'MLOps & Deployment',
      description: 'End-to-end ML pipeline automation and model deployment solutions.',
      icon: <Zap className="w-8 h-8" />,
      features: ['Model versioning', 'A/B testing', 'Auto-scaling', 'Real-time inference'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'AI Security',
      description: 'Secure AI systems with robust model protection and data privacy.',
      icon: <Shield className="w-8 h-8" />,
      features: ['Model encryption', 'Adversarial defense', 'Privacy-preserving ML', 'Compliance'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      title: 'Medical Image Analysis',
      description: 'CNN models for detecting diseases in medical scans with 95%+ accuracy',
      icon: '🏥',
      benefits: ['Early disease detection', 'Reduced diagnosis time', 'Improved patient outcomes']
    },
    {
      industry: 'Finance',
      title: 'Fraud Detection',
      description: 'Real-time ML models to detect fraudulent transactions',
      icon: '💳',
      benefits: ['99.8% accuracy', 'Real-time processing', 'Cost reduction']
    },
    {
      industry: 'Retail',
      title: 'Recommendation Systems',
      description: 'Personalized product recommendations using collaborative filtering',
      icon: '🛒',
      benefits: ['30% sales increase', 'Better customer experience', 'Inventory optimization']
    },
    {
      industry: 'Manufacturing',
      title: 'Predictive Maintenance',
      description: 'ML models to predict equipment failures before they occur',
      icon: '🏭',
      benefits: ['Reduced downtime', 'Cost savings', 'Extended equipment life']
    }
  ];

  const technologies = [
    { name: 'TensorFlow', category: 'Framework' },
    { name: 'PyTorch', category: 'Framework' },
    { name: 'Scikit-learn', category: 'Library' },
    { name: 'Keras', category: 'Framework' },
    { name: 'OpenCV', category: 'Computer Vision' },
    { name: 'NLTK', category: 'NLP' },
    { name: 'Hugging Face', category: 'Transformers' },
    { name: 'MLflow', category: 'MLOps' },
    { name: 'Kubeflow', category: 'MLOps' },
    { name: 'AWS SageMaker', category: 'Cloud Platform' },
    { name: 'Azure ML', category: 'Cloud Platform' },
    { name: 'Google Cloud AI', category: 'Cloud Platform' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-16 md:pt-0 overflow-x-hidden">
      {/* Back Button */}
      <button
        onClick={() => navigate('/#services')}
        className="fixed top-24 right-6 md:right-8 z-40 flex items-center gap-2 text-pink-600 hover:text-pink-700 bg-white/80 backdrop-blur-sm hover:bg-gray-50/80 px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 hover:border-pink-500/50"
      >
        ← Back
      </button>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Brain className="w-4 h-4" />
              Advanced AI Solutions
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              AI & Machine Learning
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with cutting-edge AI solutions. From predictive analytics to computer vision, 
              we deliver ML/CNN models that drive real results.
            </p>
          
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: stats.models, suffix: '+', label: 'ML Models Deployed', icon: <Brain className="w-6 h-6" /> },
              { value: stats.accuracy, suffix: '%', label: 'Average Accuracy', icon: <BarChart3 className="w-6 h-6" /> },
              { value: stats.projects, suffix: '+', label: 'Projects Completed', icon: <Cpu className="w-6 h-6" /> },
              { value: stats.clients, suffix: '+', label: 'Happy Clients', icon: <TrendingUp className="w-6 h-6" /> }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-3 text-purple-600">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our AI Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI and ML solutions tailored to your business needs
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
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{cap.description}</p>
                <ul className="space-y-3">
                  {cap.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-700">
                      <span className="text-purple-500 mr-2 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Real-World Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how AI transforms industries and drives business value
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{useCase.icon}</div>
                  <div>
                    <div className="text-sm font-semibold text-purple-600 mb-1">{useCase.industry}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with the latest AI/ML tools and frameworks
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-purple-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="font-semibold text-gray-900 mb-1">{tech.name}</div>
                <div className="text-xs text-purple-600">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our AI Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for successful AI implementations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery & Planning', desc: 'Understand your business needs and define AI objectives' },
              { step: '02', title: 'Data Preparation', desc: 'Collect, clean, and prepare datasets for model training' },
              { step: '03', title: 'Model Development', desc: 'Build and train ML models using best practices' },
              { step: '04', title: 'Deployment & Monitoring', desc: 'Deploy models to production and monitor performance' }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 h-full border-2 border-purple-200 hover:border-purple-400 transition-all duration-300">
                  <div className="text-4xl font-bold text-purple-600 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 bg-purple-500 rounded-full border-4 border-white"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI and machine learning can drive innovation and growth for your organization.
          </p>
        
        </div>
      </section>
    </div>
  );
};

export default AIMachineLearning;
