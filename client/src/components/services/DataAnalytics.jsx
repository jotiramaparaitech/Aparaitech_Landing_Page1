// src/components/services/DataAnalytics.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, Database, TrendingUp, Zap, Eye, Shield, PieChart, FileText } from 'lucide-react';

const DataAnalytics = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    datasets: 0,
    insights: 0,
    clients: 0,
    efficiency: 0
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

    animateCounter(5000, 'datasets');
    animateCounter(10000, 'insights');
    animateCounter(400, 'clients');
    animateCounter(75, 'efficiency');
  }, []);

  const capabilities = [
    {
      title: 'Business Intelligence',
      description: 'Interactive dashboards and reports for data-driven decisions with real-time insights.',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Custom dashboards', 'Real-time reporting', 'Data visualization', 'KPI tracking'],
      color: 'from-teal-500 to-cyan-500',
      tools: ['Tableau', 'Power BI', 'Looker', 'Qlik Sense']
    },
    {
      title: 'ETL Pipelines',
      description: 'Extract, transform, and load data from multiple sources with automated workflows.',
      icon: <Database className="w-8 h-8" />,
      features: ['Data integration', 'Data transformation', 'Data warehousing', 'Data quality'],
      color: 'from-blue-500 to-indigo-500',
      tools: ['Apache Airflow', 'Talend', 'Informatica', 'Fivetran']
    },
    {
      title: 'Big Data Solutions',
      description: 'Handle large-scale data processing and analytics with distributed systems.',
      icon: <TrendingUp className="w-8 h-8" />,
      features: ['Hadoop', 'Spark', 'Data lakes', 'Stream processing'],
      color: 'from-purple-500 to-pink-500',
      tools: ['Apache Spark', 'Hadoop', 'Kafka', 'Snowflake']
    },
    {
      title: 'Predictive Analytics',
      description: 'Advanced analytics and machine learning for forecasting and predictions.',
      icon: <Zap className="w-8 h-8" />,
      features: ['Forecasting models', 'Predictive modeling', 'Statistical analysis', 'ML integration'],
      color: 'from-orange-500 to-red-500',
      tools: ['Python', 'R', 'SAS', 'Azure ML']
    },
    {
      title: 'Data Visualization',
      description: 'Beautiful and interactive visualizations to communicate insights effectively.',
      icon: <Eye className="w-8 h-8" />,
      features: ['Interactive charts', 'Custom visualizations', 'Storytelling', 'Mobile dashboards'],
      color: 'from-green-500 to-emerald-500',
      tools: ['D3.js', 'Chart.js', 'Plotly', 'Observable']
    },
    {
      title: 'Data Governance',
      description: 'Ensure data quality, security, and compliance across your organization.',
      icon: <Shield className="w-8 h-8" />,
      features: ['Data quality', 'Data security', 'Compliance', 'Data catalog'],
      color: 'from-red-500 to-pink-500',
      tools: ['Collibra', 'Alation', 'Informatica', 'Talend']
    }
  ];

  const useCases = [
    {
      industry: 'Retail',
      title: 'Customer Analytics',
      description: 'Understand customer behavior and optimize marketing campaigns',
      icon: '🛒',
      metrics: ['30% increase in conversion', '25% reduction in churn', '40% better targeting']
    },
    {
      industry: 'Finance',
      title: 'Risk Analysis',
      description: 'Predict and mitigate financial risks with advanced analytics',
      icon: '💳',
      metrics: ['50% faster risk assessment', '35% reduction in losses', 'Real-time monitoring']
    },
    {
      industry: 'Healthcare',
      title: 'Patient Outcomes',
      description: 'Improve patient care with data-driven insights',
      icon: '🏥',
      metrics: ['20% better outcomes', '15% cost reduction', 'Predictive care']
    },
    {
      industry: 'Manufacturing',
      title: 'Supply Chain Optimization',
      description: 'Optimize inventory and reduce costs with analytics',
      icon: '🏭',
      metrics: ['30% inventory reduction', '25% cost savings', 'Better forecasting']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-16 md:pt-0 overflow-x-hidden">
      {/* Back Button */}
      <button
        onClick={() => navigate('/#services')}
        className="fixed top-24 right-6 md:right-8 z-40 flex items-center gap-2 text-teal-600 hover:text-teal-700 bg-white/80 backdrop-blur-sm hover:bg-gray-50/80 px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 hover:border-teal-500/50"
      >
        ← Back
      </button>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <BarChart3 className="w-4 h-4" />
              Data-Driven Solutions
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Data Analytics & Big Data
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform raw data into actionable insights. Dashboards, ETL pipelines, and business intelligence 
              solutions that drive smarter decisions and better outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate('/#contact-form')}
                className="px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Analytics Solution
              </button>
              <button
                onClick={() => navigate('/#services')}
                className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg border-2 border-teal-200 hover:border-teal-400 hover:shadow-lg transition-all duration-300"
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
              { value: stats.datasets, suffix: '+', label: 'Datasets Processed', icon: <Database className="w-6 h-6" /> },
              { value: stats.insights, suffix: '+', label: 'Insights Generated', icon: <TrendingUp className="w-6 h-6" /> },
              { value: stats.clients, suffix: '+', label: 'Enterprise Clients', icon: <BarChart3 className="w-6 h-6" /> },
              { value: stats.efficiency, suffix: '%', label: 'Efficiency Gain', icon: <Zap className="w-6 h-6" /> }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl border border-teal-100 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-3 text-teal-600">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Analytics Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive data analytics solutions for modern businesses
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
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-teal-600 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{cap.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Key Features:</p>
                  <ul className="space-y-2">
                    {cap.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <span className="text-teal-500 mr-2 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 mb-2">Tools:</p>
                  <div className="flex flex-wrap gap-2">
                    {cap.tools.map((tool, i) => (
                      <span key={i} className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded">
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

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Industry Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how data analytics transforms businesses across industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border-2 border-teal-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{useCase.icon}</div>
                  <div>
                    <div className="text-sm font-semibold text-teal-600 mb-1">{useCase.industry}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="text-gray-700 mb-4">{useCase.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how data analytics can drive better decisions and growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/#contact-form')}
              className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Get Started
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

export default DataAnalytics;
