import React, { useState } from 'react';
import axios from 'axios';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post('/api/contact/submit', formData);
      setSubmitStatus({ type: 'success', message: response.data.message });
      setFormData({ fullName: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.response?.data?.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-8 overflow-hidden bg-gradient-to-br from-[#1a0a2e] via-[#2d1b4e] to-[#1a0a2e]">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(124,58,237,0.2)_0%,transparent_50%),radial-gradient(circle_at_80%_50%,rgba(79,70,229,0.2)_0%,transparent_50%)] z-[1]"></div>

      <div className="max-w-[1400px] mx-auto relative z-[2]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* CTA Section */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white via-white to-[#a78bfa] bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-[#c4b5fd] mb-10 leading-relaxed">
              Contact us today to discuss your IT needs.
            </p>
            <button className="bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] text-white border-none px-10 py-4 text-lg font-semibold rounded-lg cursor-pointer transition-all hover:-translate-y-1 shadow-[0_10px_40px_rgba(124,58,237,0.4)] hover:shadow-[0_15px_50px_rgba(124,58,237,0.6)]">
              Get in Touch
            </button>
          </div>

          {/* Contact Form */}
          <div className="bg-[rgba(30,30,45,0.8)] backdrop-blur-[10px] border border-[rgba(124,58,237,0.3)] rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Contact Us</h3>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-[rgba(255,255,255,0.1)] border border-[rgba(124,58,237,0.3)] rounded-lg text-white text-base font-sans transition-all focus:outline-none focus:border-[#7c3aed] focus:bg-[rgba(255,255,255,0.15)] focus:shadow-[0_0_20px_rgba(124,58,237,0.3)] placeholder:text-[rgba(255,255,255,0.5)]"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-[rgba(255,255,255,0.1)] border border-[rgba(124,58,237,0.3)] rounded-lg text-white text-base font-sans transition-all focus:outline-none focus:border-[#7c3aed] focus:bg-[rgba(255,255,255,0.15)] focus:shadow-[0_0_20px_rgba(124,58,237,0.3)] placeholder:text-[rgba(255,255,255,0.5)]"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-6 py-4 bg-[rgba(255,255,255,0.1)] border border-[rgba(124,58,237,0.3)] rounded-lg text-white text-base font-sans transition-all resize-y min-h-[120px] focus:outline-none focus:border-[#7c3aed] focus:bg-[rgba(255,255,255,0.15)] focus:shadow-[0_0_20px_rgba(124,58,237,0.3)] placeholder:text-[rgba(255,255,255,0.5)]"
                ></textarea>
              </div>
              {submitStatus && (
                <div className={`p-4 rounded-lg text-center font-medium ${
                  submitStatus.type === 'success' 
                    ? 'bg-[rgba(34,197,94,0.2)] border border-[rgba(34,197,94,0.5)] text-[#86efac]' 
                    : 'bg-[rgba(239,68,68,0.2)] border border-[rgba(239,68,68,0.5)] text-[#fca5a5]'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              <button 
                type="submit" 
                className="bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] text-white border-none px-8 py-4 text-lg font-semibold rounded-lg cursor-pointer transition-all mt-4 shadow-[0_10px_40px_rgba(124,58,237,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(124,58,237,0.6)] disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
