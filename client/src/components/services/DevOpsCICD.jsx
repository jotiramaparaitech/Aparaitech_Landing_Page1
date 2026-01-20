// src/components/services/DevOpsCICD.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GitBranch, Container, Cloud, Zap, Shield, BarChart3, Settings, Rocket } from 'lucide-react';

const DevOpsCICD = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    deployments: 0,
    uptime: 0,
    efficiency: 0,
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
          [key]: start.toFixed(key === 'uptime' || key === 'efficiency' ? 1 : 0)
        }));
      }, 16);
    };

    animateCounter(10000, 'deployments');
    animateCounter(99.9, 'uptime');
    animateCounter(85, 'efficiency');
    animateCounter(300, 'clients');
  }, []);

  const capabilities = [
    {
      title: 'CI/CD Pipelines',
      description: 'Automated build, test, and deployment pipelines for faster releases and reduced errors.',
      icon: <GitBranch className="w-8 h-8" />,
      features: ['Automated testing', 'Continuous deployment', 'Version control integration', 'Multi-stage pipelines'],
      color: 'from-orange-500 to-red-500',
      tools: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'CircleCI']
    },
    {
      title: 'Containerization',
      description: 'Docker and Kubernetes solutions for scalable, portable applications.',
      icon: <Container className="w-8 h-8" />,
      features: ['Docker containers', 'Kubernetes orchestration', 'Container registry', 'Microservices'],
      color: 'from-blue-500 to-cyan-500',
      tools: ['Docker', 'Kubernetes', 'Docker Swarm', 'Podman']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Automated cloud provisioning and infrastructure as code for scalable solutions.',
      icon: <Cloud className="w-8 h-8" />,
      features: ['Infrastructure as Code', 'Auto-scaling', 'Cloud pipelines', 'Multi-cloud'],
      color: 'from-purple-500 to-pink-500',
      tools: ['Terraform', 'Ansible', 'AWS CloudFormation', 'Azure ARM']
    },
    {
      title: 'Monitoring & Logging',
      description: 'Comprehensive monitoring and logging solutions for proactive issue detection.',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Real-time monitoring', 'Log aggregation', 'Performance metrics', 'Alerting'],
      color: 'from-green-500 to-emerald-500',
      tools: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog']
    },
    {
      title: 'Security & Compliance',
      description: 'DevSecOps practices to integrate security throughout the development lifecycle.',
      icon: <Shield className="w-8 h-8" />,
      features: ['Security scanning', 'Secrets management', 'Compliance automation', 'Vulnerability management'],
      color: 'from-red-500 to-orange-500',
      tools: ['Vault', 'SonarQube', 'Snyk', 'OWASP']
    },
    {
      title: 'Automation & Orchestration',
      description: 'End-to-end automation for development, testing, and deployment workflows.',
      icon: <Zap className="w-8 h-8" />,
      features: ['Workflow automation', 'Task scheduling', 'Event-driven automation', 'Self-healing systems'],
      color: 'from-yellow-500 to-amber-500',
      tools: ['Ansible', 'Chef', 'Puppet', 'SaltStack']
    }
  ];

  const benefits = [
    {
      title: 'Faster Time to Market',
      description: 'Reduce deployment time from weeks to minutes',
      improvement: '90%',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: 'Improved Reliability',
      description: 'Automated testing and deployment reduce human errors',
      improvement: '99.9%',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Cost Reduction',
      description: 'Optimize infrastructure costs with auto-scaling',
      improvement: '40%',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: 'Better Collaboration',
      description: 'Unified workflows for development and operations teams',
      improvement: '60%',
      icon: <Settings className="w-6 h-6" />
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Assessment',
      description: 'Evaluate current infrastructure and identify automation opportunities'
    },
    {
      step: '2',
      title: 'Strategy',
      description: 'Design CI/CD pipelines and infrastructure architecture'
    },
    {
      step: '3',
      title: 'Implementation',
      description: 'Set up tools, configure pipelines, and automate workflows'
    },
    {
      step: '4',
      title: 'Optimization',
      description: 'Monitor performance and continuously improve processes'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-16 md:pt-0 overflow-x-hidden">
      {/* Back Button */}
      <button
        onClick={() => navigate('/#services')}
        className="fixed top-24 right-6 md:right-8 z-40 flex items-center gap-2 text-orange-600 hover:text-orange-700 bg-white/80 backdrop-blur-sm hover:bg-gray-50/80 px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 hover:border-orange-500/50"
      >
        ← Back
      </button>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-50 via-red-50 to-amber-50 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <GitBranch className="w-4 h-4" />
              DevOps Excellence
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent">
              DevOps & CI/CD Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              Accelerate your software delivery with automated pipelines, containerization, and cloud infrastructure. 
              Deploy faster, scale effortlessly, and maintain reliability.
            </p>
           
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: stats.deployments, suffix: '+', label: 'Deployments/Month', icon: <Rocket className="w-6 h-6" /> },
              { value: stats.uptime, suffix: '%', label: 'System Uptime', icon: <Shield className="w-6 h-6" /> },
              { value: stats.efficiency, suffix: '%', label: 'Efficiency Gain', icon: <BarChart3 className="w-6 h-6" /> },
              { value: stats.clients, suffix: '+', label: 'Enterprise Clients', icon: <Cloud className="w-6 h-6" /> }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-100 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-3 text-orange-600">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our DevOps Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive DevOps solutions to streamline your development and deployment processes
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
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{cap.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Key Features:</p>
                  <ul className="space-y-2">
                    {cap.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <span className="text-orange-500 mr-2 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 mb-2">Tools:</p>
                  <div className="flex flex-wrap gap-2">
                    {cap.tools.map((tool, i) => (
                      <span key={i} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Key Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your development workflow with DevOps best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg text-white">
                    {benefit.icon}
                  </div>
                  <div className="text-3xl font-bold text-orange-600">{benefit.improvement}</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our DevOps Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to implementing DevOps practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-2xl p-6 h-full border-2 border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl font-bold text-orange-600 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 bg-orange-500 rounded-full border-4 border-white"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Accelerate Your Deployment?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how DevOps and CI/CD can transform your software delivery process.
          </p>
          
        </div>
      </section>
    </div>
  );
};

export default DevOpsCICD;
