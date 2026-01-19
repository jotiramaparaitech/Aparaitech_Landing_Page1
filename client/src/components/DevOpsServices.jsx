import React from 'react';
import {
  Box,
  GitBranch,
  Cloud,
  Server,
  Activity,
  Settings,
  ShieldCheck
} from 'lucide-react';

const DevOpsServices = () => {
  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-sm mb-6">
                <Settings className="w-4 h-4 mr-2" />
                DevOps & Automation
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Accelerate Delivery with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  CI/CD & DevOps
                </span>
              </h1>

              <p className="text-lg text-gray-400 mb-8 max-w-xl">
                Streamline your software development lifecycle with automated pipelines,
                containerization, and cloud-native infrastructure.
              </p>

              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all"
              >
                Optimize Your Workflow
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

              <div className="relative bg-slate-800/50 border border-slate-700 p-8 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">
                    pipeline.yml
                  </span>
                </div>

                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-center text-green-400">
                    <CheckCircleIcon className="w-4 h-4 mr-2" />
                    Build Successful
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircleIcon className="w-4 h-4 mr-2" />
                    Tests Passed (142/142)
                  </div>
                  <div className="flex items-center text-blue-400">
                    <Activity className="w-4 h-4 mr-2 animate-pulse" />
                    Deploying to Production...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            DevOps Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We implement industry-standard practices to bridge the gap between
            development and operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <GitBranch className="w-8 h-8 text-orange-500" />,
              title: 'CI/CD Pipelines',
              desc: 'Automated build, test, and deployment workflows using Jenkins, GitLab CI, or GitHub Actions.',
            },
            {
              icon: <Box className="w-8 h-8 text-blue-500" />,
              title: 'Containerization',
              desc: 'Docker and Kubernetes implementation for scalable orchestration.',
            },
            {
              icon: <Cloud className="w-8 h-8 text-cyan-500" />,
              title: 'Infrastructure as Code',
              desc: 'Terraform or Ansible for reproducible, version-controlled environments.',
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-purple-500" />,
              title: 'DevSecOps',
              desc: 'Security and compliance integrated directly into pipelines.',
            },
            {
              icon: <Activity className="w-8 h-8 text-green-500" />,
              title: 'Monitoring & Logging',
              desc: 'Observability with Prometheus, Grafana, and ELK.',
            },
            {
              icon: <Server className="w-8 h-8 text-red-500" />,
              title: 'Cloud Management',
              desc: 'AWS, Azure, or GCP optimization for cost and performance.',
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all group"
            >
              <div className="mb-6 p-3 bg-gray-50 rounded-xl w-fit group-hover:bg-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Tools We Master
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible', 'AWS', 'Azure'].map(
              (tech) => (
                <span
                  key={tech}
                  className="text-xl md:text-2xl font-bold text-gray-800"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div id="contact" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Automate?
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Reduce deployment time from days to minutes with our expert DevOps consulting.
        </p>
        <button className="px-8 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors">
          Get a DevOps Assessment
        </button>
      </div>
    </div>
  );
};

const CheckCircleIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export default DevOpsServices;
