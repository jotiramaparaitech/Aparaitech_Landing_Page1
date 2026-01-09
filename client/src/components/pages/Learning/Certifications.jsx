import React from 'react';
import { Link } from 'react-router-dom';

const Certifications = () => {
  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <div className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Validate Your Expertise</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Earn industry-recognized certifications to showcase your skills in Aparaitech technologies and boost your career.
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors">
            Find Your Certification
          </button>
        </div>
      </div>

      {/* CERTIFICATION LEVELS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Associate */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:border-blue-500 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gray-100 px-4 py-1 rounded-bl-xl text-xs font-bold text-gray-600">Level 1</div>
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-3xl mb-6">🥉</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Associate</h3>
              <p className="text-gray-600 mb-6">
                For developers just starting with Aparaitech. Validates fundamental knowledge of our core APIs and tools.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex items-center">✓ 60-minute exam</li>
                <li className="flex items-center">✓ 40 multiple choice questions</li>
                <li className="flex items-center">✓ No prerequisites</li>
              </ul>
              <button className="w-full py-3 border border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                View Details
              </button>
            </div>

            {/* Professional */}
            <div className="border-2 border-blue-600 rounded-2xl p-8 shadow-xl relative overflow-hidden transform md:-translate-y-4 bg-white">
              <div className="absolute top-0 right-0 bg-blue-600 px-4 py-1 rounded-bl-xl text-xs font-bold text-white">Most Popular</div>
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-3xl mb-6 text-white">🥈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <p className="text-gray-600 mb-6">
                For experienced developers. Validates ability to design, build, and deploy scalable applications.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex items-center">✓ 120-minute exam</li>
                <li className="flex items-center">✓ 60 questions + 1 lab</li>
                <li className="flex items-center">✓ 1 year experience recommended</li>
              </ul>
              <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                View Details
              </button>
            </div>

            {/* Expert */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:border-blue-500 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gray-100 px-4 py-1 rounded-bl-xl text-xs font-bold text-gray-600">Level 3</div>
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center text-3xl mb-6">🥇</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert</h3>
              <p className="text-gray-600 mb-6">
                For architects and leads. Validates mastery of complex system design, security, and optimization.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex items-center">✓ 180-minute exam</li>
                <li className="flex items-center">✓ Case studies + Labs</li>
                <li className="flex items-center">✓ Professional cert required</li>
              </ul>
              <button className="w-full py-3 border border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Get Certified?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div><div className="text-4xl mb-2">💼</div><h4 className="font-bold">Career Growth</h4><p className="text-sm text-gray-600">Stand out to employers and clients.</p></div>
            <div><div className="text-4xl mb-2">🧠</div><h4 className="font-bold">Deep Knowledge</h4><p className="text-sm text-gray-600">Master the platform inside out.</p></div>
            <div><div className="text-4xl mb-2">🌐</div><h4 className="font-bold">Community</h4><p className="text-sm text-gray-600">Join an elite network of experts.</p></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;