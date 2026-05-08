import React, { useState } from 'react';

const Certifications = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: 'associate',
      level: 'Associate',
      title: 'Associate',
      description: 'For developers just starting with Aparaitech. Validates fundamental knowledge of our core APIs and tools.',
      features: ['Fundamental API knowledge', 'Core platform concepts', 'Basic implementation skills'],
      icon: '🥉',
      color: 'blue',
      badge: 'Level 1'
    },
    {
      id: 'professional',
      level: 'Professional',
      title: 'Professional',
      description: 'For experienced developers. Validates ability to design, build, and deploy scalable applications.',
      features: ['Advanced development skills', 'Scalable application design', 'Best practices implementation'],
      icon: '🥈',
      color: 'blue',
      badge: 'Most Popular',
      popular: true
    },
    {
      id: 'expert',
      level: 'Expert',
      title: 'Expert',
      description: 'For architects and leads. Validates mastery of complex system design, security, and optimization.',
      features: ['System architecture mastery', 'Security expertise', 'Performance optimization'],
      icon: '🥇',
      color: 'yellow',
      badge: 'Level 3'
    }
  ];

  const filteredCerts = selectedLevel === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.level.toLowerCase() === selectedLevel);

  const handleViewDetails = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  const handleFindCertification = () => {
    document.getElementById('certification-levels')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <div className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Validate Your Expertise</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Learn about industry-recognized certifications that showcase your skills in Aparaitech technologies and boost your career.
          </p>
          <button 
            onClick={handleFindCertification}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
          >
            Explore Certifications
          </button>
        </div>
      </div>

      {/* FILTER SECTION */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">Filter by Level:</span>
              <div className="flex gap-2">
                {['all', 'associate', 'professional', 'expert'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedLevel === level
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-600">
              {filteredCerts.length} certification{filteredCerts.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATION LEVELS */}
      <section id="certification-levels" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {filteredCerts.map((cert) => (
              <div 
                key={cert.id}
                className={`border rounded-2xl p-8 hover:border-blue-500 transition-all relative overflow-hidden ${
                  cert.popular ? 'border-2 border-blue-600 shadow-xl transform md:-translate-y-4 bg-white' : 'border-gray-200'
                }`}
              >
                {cert.popular && (
                  <div className="absolute top-0 right-0 bg-blue-600 px-4 py-1 rounded-bl-xl text-xs font-bold text-white">
                    {cert.badge}
                  </div>
                )}
                {!cert.popular && (
                  <div className="absolute top-0 right-0 bg-gray-100 px-4 py-1 rounded-bl-xl text-xs font-bold text-gray-600">
                    {cert.badge}
                  </div>
                )}
                
                <div className={`w-16 h-16 bg-${cert.color}-100 rounded-xl flex items-center justify-center text-3xl mb-6`}>
                  {cert.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{cert.title}</h3>
                <p className="text-gray-600 mb-6">{cert.description}</p>
                
                <ul className="space-y-3 mb-8 text-sm text-gray-600">
                  {cert.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => handleViewDetails(cert)}
                  className="w-full py-3 border border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Get Certified?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">💼</div>
              <h4 className="font-bold mb-2">Career Growth</h4>
              <p className="text-sm text-gray-600">Stand out to employers and clients with verified skills.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🧠</div>
              <h4 className="font-bold mb-2">Deep Knowledge</h4>
              <p className="text-sm text-gray-600">Master the platform inside out through comprehensive learning.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌐</div>
              <h4 className="font-bold mb-2">Community</h4>
              <p className="text-sm text-gray-600">Join an elite network of certified professionals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATION DETAILS MODAL */}
      {showModal && selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-${selectedCert.color}-100 rounded-xl flex items-center justify-center text-2xl`}>
                    {selectedCert.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedCert.title} Certification</h2>
                    <p className="text-gray-600">Professional Level</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3">About This Certification</h3>
                <p className="text-gray-600">{selectedCert.description}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium text-gray-900 mb-2">Skills You'll Gain</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {selectedCert.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-0.5">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Next Steps</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Contact our team to learn more about certification requirements and availability in your region.
                </p>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                    Contact Sales
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;