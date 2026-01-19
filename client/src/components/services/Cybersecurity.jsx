// src/components/services/Cybersecurity.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Search, Lock, CheckCircle, AlertTriangle, Eye, FileCheck, Users } from 'lucide-react';

const Cybersecurity = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    threats: 0,
    compliance: 0,
    audits: 0,
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
          [key]: start.toFixed(0)
        }));
      }, 16);
    };

    animateCounter(50000, 'threats');
    animateCounter(100, 'compliance');
    animateCounter(2000, 'audits');
    animateCounter(500, 'clients');
  }, []);

  const capabilities = [
    {
      title: 'Security Audits',
      description: 'Comprehensive security assessments and vulnerability analysis to identify and mitigate risks.',
      icon: <Search className="w-8 h-8" />,
      features: ['Vulnerability scanning', 'Risk assessment', 'Compliance checks', 'Security gap analysis'],
      color: 'from-red-500 to-pink-500',
      deliverables: ['Security audit report', 'Risk matrix', 'Remediation plan']
    },
    {
      title: 'Penetration Testing',
      description: 'Ethical hacking and security testing to identify weaknesses before attackers do.',
      icon: <Shield className="w-8 h-8" />,
      features: ['Network penetration', 'Web application testing', 'Social engineering tests', 'Wireless security'],
      color: 'from-orange-500 to-red-500',
      deliverables: ['Penetration test report', 'Exploit documentation', 'Security recommendations']
    },
    {
      title: 'Compliance & Standards',
      description: 'GDPR, HIPAA, SOC2, and other regulatory compliance solutions for your industry.',
      icon: <CheckCircle className="w-8 h-8" />,
      features: ['GDPR compliance', 'HIPAA compliance', 'SOC2 certification', 'ISO 27001'],
      color: 'from-green-500 to-emerald-500',
      deliverables: ['Compliance report', 'Certification support', 'Policy documentation']
    },
    {
      title: 'Security Monitoring',
      description: '24/7 security monitoring and threat detection to protect your infrastructure.',
      icon: <Eye className="w-8 h-8" />,
      features: ['SIEM implementation', 'Threat detection', 'Incident response', 'Security analytics'],
      color: 'from-blue-500 to-cyan-500',
      deliverables: ['Monitoring dashboard', 'Alert configuration', 'Incident reports']
    },
    {
      title: 'Security Training',
      description: 'Comprehensive security awareness training for your team.',
      icon: <Users className="w-8 h-8" />,
      features: ['Phishing simulation', 'Security workshops', 'Best practices training', 'Certification programs'],
      color: 'from-purple-500 to-indigo-500',
      deliverables: ['Training materials', 'Assessment reports', 'Certificates']
    },
    {
      title: 'Incident Response',
      description: 'Rapid response and recovery services for security incidents.',
      icon: <AlertTriangle className="w-8 h-8" />,
      features: ['Incident investigation', 'Forensic analysis', 'Recovery planning', 'Post-incident review'],
      color: 'from-yellow-500 to-orange-500',
      deliverables: ['Incident report', 'Forensic findings', 'Recovery plan']
    }
  ];

  const standards = [
    { name: 'GDPR', description: 'General Data Protection Regulation compliance' },
    { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' },
    { name: 'SOC 2', description: 'Service Organization Control 2 certification' },
    { name: 'ISO 27001', description: 'Information Security Management System' },
    { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard' },
    { name: 'NIST', description: 'National Institute of Standards and Technology framework' }
  ];

  const threats = [
    {
      type: 'Malware & Ransomware',
      description: 'Protection against malicious software and ransomware attacks',
      protection: '99.9%'
    },
    {
      type: 'Phishing Attacks',
      description: 'Email and social engineering attack prevention',
      protection: '95%'
    },
    {
      type: 'DDoS Attacks',
      description: 'Distributed Denial of Service attack mitigation',
      protection: '100%'
    },
    {
      type: 'Data Breaches',
      description: 'Comprehensive data protection and breach prevention',
      protection: '98%'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-16 md:pt-0 overflow-x-hidden">
      {/* Back Button */}
      <button
        onClick={() => navigate('/#services')}
        className="fixed top-24 right-6 md:right-8 z-40 flex items-center gap-2 text-red-600 hover:text-red-700 bg-white/80 backdrop-blur-sm hover:bg-gray-50/80 px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 hover:border-red-500/50"
      >
        ← Back
      </button>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Enterprise Security
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-red-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              Protect your business with comprehensive security audits, penetration testing, and compliance solutions. 
              Stay ahead of threats with industry-leading security practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate('/#contact-form')}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Security Assessment
              </button>
              <button
                onClick={() => navigate('/#services')}
                className="px-8 py-4 bg-white text-red-600 font-semibold rounded-lg border-2 border-red-200 hover:border-red-400 hover:shadow-lg transition-all duration-300"
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
              { value: stats.threats, suffix: '+', label: 'Threats Detected', icon: <AlertTriangle className="w-6 h-6" /> },
              { value: stats.compliance, suffix: '%', label: 'Compliance Rate', icon: <CheckCircle className="w-6 h-6" /> },
              { value: stats.audits, suffix: '+', label: 'Security Audits', icon: <FileCheck className="w-6 h-6" /> },
              { value: stats.clients, suffix: '+', label: 'Protected Clients', icon: <Shield className="w-6 h-6" /> }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border border-red-100 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-3 text-red-600">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Security Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions to protect your business
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
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{cap.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Key Features:</p>
                  <ul className="space-y-2">
                    {cap.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <span className="text-red-500 mr-2 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 mb-2">Deliverables:</p>
                  <div className="flex flex-wrap gap-2">
                    {cap.deliverables.map((item, i) => (
                      <span key={i} className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Compliance Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help you achieve and maintain industry compliance certifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standards.map((standard, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border-2 border-red-100 hover:border-red-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-bold text-gray-900">{standard.name}</h3>
                </div>
                <p className="text-gray-600 text-sm">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Protection */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Threat Protection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive protection against modern cyber threats
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {threats.map((threat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border-2 border-red-100 hover:border-red-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{threat.type}</h3>
                    <p className="text-gray-600 text-sm">{threat.description}</p>
                  </div>
                  <div className="text-2xl font-bold text-red-600">{threat.protection}</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-red-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: threat.protection }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-pink-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Secure Your Business Today
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Don't wait for a security breach. Let's assess your security posture and protect your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/#contact-form')}
              className="px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Request Security Audit
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

export default Cybersecurity;
