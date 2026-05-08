// src/pages/products/CustomSoftware.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CustomSoftware = () => {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#2d1b69] mb-6">
            Custom Software Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailor-made software solutions designed to solve your unique business challenges and drive growth.
          </p>
        </div>

        {/* What We Offer */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-3xl mb-4">💼</div>
            <h3 className="text-2xl font-bold text-[#2d1b69] mb-4">Enterprise Solutions</h3>
            <p className="text-gray-700">
              Scalable software for large organizations with complex workflows and integration needs.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-[#2d1b69] mb-4">SaaS Products</h3>
            <p className="text-gray-700">
              Cloud-based software products with subscription models and multi-tenant architecture.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-3xl mb-4">🔧</div>
            <h3 className="text-2xl font-bold text-[#2d1b69] mb-4">Business Automation</h3>
            <p className="text-gray-700">
              Automate repetitive tasks and streamline operations with custom workflow solutions.
            </p>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#2d1b69] mb-12">
            Our Development Process
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {['Discovery', 'Design', 'Development', 'Testing', 'Deployment', 'Support'].map((step, idx) => (
              <div key={step} className="flex flex-col items-center mb-8 md:mb-0">
                <div className="w-12 h-12 bg-[#7c3aed] rounded-full flex items-center justify-center text-white font-bold mb-3">
                  {idx + 1}
                </div>
                <span className="font-semibold text-gray-800">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/#contact"
            className="inline-block px-8 py-3 bg-[#7c3aed] text-white rounded-full font-semibold hover:bg-[#6d28d9] transition"
          >
            Discuss Your Project
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CustomSoftware;