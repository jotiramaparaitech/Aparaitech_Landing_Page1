// src/pages/products/MobileApps.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MobileApps = () => {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#2d1b69] mb-6">
            Mobile App Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build powerful, scalable mobile applications for iOS and Android that deliver exceptional user experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-2xl font-bold text-[#2d1b69] mb-4">iOS Development</h3>
            <p className="text-gray-700 mb-4">
              Native iOS apps using Swift and SwiftUI, optimized for all iPhone and iPad devices.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Swift & SwiftUI Development</li>
              <li>• ARKit Integration</li>
              <li>• App Store Optimization</li>
              <li>• iPadOS Compatibility</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-[#2d1b69] mb-4">Android Development</h3>
            <p className="text-gray-700 mb-4">
              Native Android apps using Kotlin and Jetpack Compose, compatible with all Android devices.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Kotlin & Jetpack Compose</li>
              <li>• Material Design 3</li>
              <li>• Google Play Store Deployment</li>
              <li>• Multi-device Testing</li>
            </ul>
          </div>
        </div>

        {/* Cross Platform */}
        <div className="bg-gradient-to-r from-[#7c3aed] to-[#6366f1] rounded-2xl p-8 text-white mb-16">
          <h3 className="text-3xl font-bold mb-6">Cross-Platform Solutions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3">React Native</h4>
              <p>Build once, deploy everywhere with Facebook's React Native framework.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3">Flutter</h4>
              <p>Google's UI toolkit for beautiful natively compiled applications.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3">Ionic</h4>
              <p>Cross-platform apps with web technologies (HTML, CSS, JavaScript).</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#2d1b69] mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            From concept to deployment, we handle every aspect of mobile app development.
          </p>
          <Link
            to="/#contact"
            className="inline-block px-8 py-3 bg-[#7c3aed] text-white rounded-full font-semibold hover:bg-[#6d28d9] transition"
          >
            Start Your Project
          </Link>
        </div>

      </div>
    </div>
  );
};

export default MobileApps;