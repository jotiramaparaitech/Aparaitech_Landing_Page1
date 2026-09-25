// src/pages/products/UIUXDesign.jsx
import React from 'react';

const UIUXDesign = () => {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#2d1b69] mb-6">
            UI/UX Design Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create beautiful, intuitive user interfaces and seamless user experiences that engage and convert.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#2d1b69] mb-4">User Research</h3>
            <p className="text-gray-700">
              Understand your users through interviews, surveys, and usability testing.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#2d1b69] mb-4">Wireframing & Prototyping</h3>
            <p className="text-gray-700">
              Create interactive prototypes to test and validate design concepts.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#2d1b69] mb-4">Visual Design</h3>
            <p className="text-gray-700">
              Craft pixel-perfect interfaces with attention to typography, color, and spacing.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UIUXDesign;