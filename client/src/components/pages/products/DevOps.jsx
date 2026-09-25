// src/pages/products/DevOps.jsx
import React from 'react';

const DevOps = () => {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#2d1b69] mb-6">
            DevOps & Cloud Infrastructure
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamline your development workflow with automated CI/CD pipelines, cloud infrastructure, and monitoring solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#2d1b69] mb-4">CI/CD Pipelines</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Jenkins, GitLab CI, GitHub Actions
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Automated Testing & Deployment
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Infrastructure as Code (Terraform)
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#2d1b69] mb-4">Containerization</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Docker & Docker Compose
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Kubernetes Orchestration
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Helm Charts & Kustomize
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button className="px-8 py-3 bg-[#7c3aed] text-white rounded-full font-semibold hover:bg-[#6d28d9] transition">
            Get DevOps Consultation
          </button>
        </div>

      </div>
    </div>
  );
};

export default DevOps;