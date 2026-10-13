// client/src/components/pages/Support/ContactSupport.jsx
import React, { useState } from 'react';
import { Mail, Phone, MapPin, LifeBuoy, CheckCircle2, Shield, AlertCircle, Search, RefreshCw } from 'lucide-react';
import toast from 'react-hot-toast';
import { contactAPI } from '../../../utils/api';

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'Enterprise Technical Support',
    priority: 'Normal',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdTicket, setCreatedTicket] = useState(null);

  // Status check state
  const [lookupTicketId, setLookupTicketId] = useState('');
  const [lookupEmail, setLookupEmail] = useState('');
  const [ticketStatusData, setTicketStatusData] = useState(null);
  const [checkingStatus, setCheckingStatus] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in your name, email, and issue description.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const res = await contactAPI.submitSupport({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject || 'Enterprise Technical Support',
        priority: formData.priority,
        message: `[Company: ${formData.company || 'N/A'}] [Phone: ${formData.phone || 'N/A'}] ${formData.message}`
      });
      
      setCreatedTicket(res.data);
      toast.success(res.message || 'Support ticket registered successfully!');
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: 'Enterprise Technical Support',
        priority: 'Normal',
        message: ''
      });
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Ticket creation failed. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCheckStatus = async (e) => {
    e.preventDefault();
    if (!lookupTicketId.trim()) {
      toast.error('Please enter a valid Ticket ID (e.g., TKT-00101).');
      return;
    }

    setCheckingStatus(true);
    setTicketStatusData(null);

    try {
      const res = await contactAPI.checkSupportStatus(lookupTicketId.trim(), lookupEmail.trim());
      setTicketStatusData(res.data);
      toast.success('Ticket found!');
    } catch (err) {
      toast.error(err.message || 'Ticket not found or credentials mismatched.');
    } finally {
      setCheckingStatus(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#020617] text-[#142B4A] dark:text-[#F1F5F9] font-sans selection:bg-teal-500/20 selection:text-teal-900 dark:selection:text-[#142B4A] dark:text-[#F1F5F9] pt-24 pb-24 transition-colors">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* Header Breadcrumb */}
        <div className="flex items-center gap-3 mb-6">
          <span className="block h-2.5 w-2.5 bg-[#0D9488]"></span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-teal-700 dark:text-[#22D3EE] font-bold">
            MISSION-CRITICAL SUPPORT & DISPATCH
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Ticket Submission & Status Columns */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#142B4A] dark:text-[#F1F5F9] mb-4">
                Enterprise Support Desk
              </h1>
              <p className="text-sm sm:text-base text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
                Direct access to APARAITECH SOFTWARE engineering and site-reliability pods at Hinjawadi Phase 2, Pune. Guaranteed 99.9% platform availability.
              </p>
            </div>

            {/* Form Box */}
            <div className="bg-white dark:bg-[#0B1220] p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] dark:border-[#29384D] dark:border-slate-800 shadow-xl dark:shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D9488]/10 rounded-full blur-3xl pointer-events-none"></div>

              {createdTicket ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#0F9F8F]/10 border border-[#0F9F8F]/30 flex items-center justify-center mx-auto text-[#0F9F8F] dark:text-[#2DD4BF] dark:text-[#0F9F8F] dark:text-[#2DD4BF]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#142B4A] dark:text-[#F1F5F9]">Support Ticket Created Successfully!</h3>
                  <div className="p-4 bg-slate-100 dark:bg-[#0B1220]/80 rounded-xl border border-[#E2E8F0] dark:border-[#29384D] max-w-sm mx-auto font-mono text-xs space-y-2 text-left">
                    <div className="flex justify-between">
                      <span className="text-[#475569] dark:text-[#94A3B8]">Ticket ID:</span>
                      <span className="text-teal-700 dark:text-[#22D3EE] font-bold">{createdTicket.ticketId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#475569] dark:text-[#94A3B8]">Status:</span>
                      <span className="text-emerald-600 dark:text-[#0F9F8F] dark:text-[#2DD4BF] font-semibold">{createdTicket.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#475569] dark:text-[#94A3B8]">Priority:</span>
                      <span className="text-amber-600 dark:text-amber-400 font-semibold">{createdTicket.priority}</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#475569] dark:text-[#94A3B8] max-w-md mx-auto">
                    Save your Ticket ID for tracking. Our on-call Site Reliability Engineer will respond shortly.
                  </p>
                  <button
                    onClick={() => setCreatedTicket(null)}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#0D9488] hover:bg-[#0f766e] text-[#142B4A] dark:text-[#F1F5F9] text-xs font-semibold transition-colors mt-2"
                  >
                    Open Another Ticket
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#475569] dark:text-[#CBD5E1] mb-1 font-medium">Contact Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikram Sharma"
                        className="w-full bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#020617] border border-slate-300 dark:border-[#29384D] rounded-lg px-3.5 py-2.5 text-[#142B4A] dark:text-[#F1F5F9] placeholder-slate-400 dark:placeholder-[#94A3B8] focus:border-[#0D9488] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[#475569] dark:text-[#CBD5E1] mb-1 font-medium">Corporate Work Email *</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vikram@enterprise.com"
                        className="w-full bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#020617] border border-slate-300 dark:border-[#29384D] rounded-lg px-3.5 py-2.5 text-[#142B4A] dark:text-[#F1F5F9] placeholder-slate-400 dark:placeholder-[#94A3B8] focus:border-[#0D9488] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#475569] dark:text-[#CBD5E1] mb-1 font-medium">Direct Phone Number</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#020617] border border-slate-300 dark:border-[#29384D] rounded-lg px-3.5 py-2.5 text-[#142B4A] dark:text-[#F1F5F9] placeholder-slate-400 dark:placeholder-[#94A3B8] focus:border-[#0D9488] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[#475569] dark:text-[#CBD5E1] mb-1 font-medium">Organization / Enterprise</label>
                      <input 
                        type="text" 
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Apex Technologies Ltd"
                        className="w-full bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#020617] border border-slate-300 dark:border-[#29384D] rounded-lg px-3.5 py-2.5 text-[#142B4A] dark:text-[#F1F5F9] placeholder-slate-400 dark:placeholder-[#94A3B8] focus:border-[#0D9488] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#475569] dark:text-[#CBD5E1] mb-1 font-medium">Affected Platform / Service *</label>
                      <select 
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#020617] border border-slate-300 dark:border-[#29384D] rounded-lg px-3.5 py-2.5 text-[#142B4A] dark:text-[#F1F5F9] focus:border-[#0D9488] focus:outline-none transition-colors"
                      >
                        <option value="Enterprise AI Platform">Enterprise AI Platform</option>
                        <option value="Cloud Kitchen AI Dispatch">Cloud Kitchen AI Dispatch</option>
                        <option value="Attendance SaaS Biometrics">Attendance SaaS Biometrics</option>
                        <option value="APNA Store E-Commerce Core">APNA Store E-Commerce Core</option>
                        <option value="Service Hub Infrastructure">Service Hub Infrastructure</option>
                        <option value="VPC Network & API Gateway">VPC Network & API Gateway</option>
                        <option value="General Technical Inquiry">General Technical Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#475569] dark:text-[#CBD5E1] mb-1 font-medium">Severity / Impact Level</label>
                      <select 
                        value={formData.priority}
                        onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                        className="w-full bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#020617] border border-slate-300 dark:border-[#29384D] rounded-lg px-3.5 py-2.5 text-[#142B4A] dark:text-[#F1F5F9] focus:border-[#0D9488] focus:outline-none transition-colors"
                      >
                        <option value="Low">P4 - Low (Informational / Question)</option>
                        <option value="Normal">P3 - Normal (Minor Issue / Workaround exists)</option>
                        <option value="High">P2 - High (Significant degradation)</option>
                        <option value="Critical">P1 - Critical (Production Down / Security alert)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#475569] dark:text-[#CBD5E1] mb-1 font-medium">Incident Description & Reproduction Details *</label>
                    <textarea 
                      required
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify error codes, request IDs, timestamps, or steps to reproduce..."
                      className="w-full bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#020617] border border-slate-300 dark:border-[#29384D] rounded-lg p-3 text-[#142B4A] dark:text-[#F1F5F9] placeholder-slate-400 dark:placeholder-[#94A3B8] focus:border-[#0D9488] focus:outline-none resize-none transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-11 rounded-lg bg-[#0D9488] hover:bg-[#0f766e] text-[#142B4A] dark:text-[#F1F5F9] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#0D9488]/20 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? 'Transmitting to Engineering...' : 'Dispatch Support Ticket →'}
                  </button>
                </form>
              )}
            </div>

            {/* Check Existing Ticket Status Box */}
            <div className="bg-white dark:bg-[#0B1220] p-6 rounded-2xl border border-[#E2E8F0] dark:border-[#29384D] dark:border-slate-800 shadow-md dark:shadow-none">
              <div className="flex items-center gap-2 mb-3">
                <Search className="w-4 h-4 text-teal-600 dark:text-[#22D3EE]" />
                <h3 className="text-sm font-bold text-[#142B4A] dark:text-[#F1F5F9] uppercase tracking-wider font-mono">
                  Track Existing Ticket Status
                </h3>
              </div>
              <form onSubmit={handleCheckStatus} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="Ticket ID (e.g. TKT-00101)"
                  value={lookupTicketId}
                  onChange={(e) => setLookupTicketId(e.target.value)}
                  className="bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#020617] border border-slate-300 dark:border-[#29384D] rounded-lg px-3 py-2 text-xs text-[#142B4A] dark:text-[#F1F5F9] placeholder-slate-400 dark:placeholder-[#94A3B8] focus:outline-none focus:border-[#0D9488]"
                />
                <input
                  type="email"
                  placeholder="Email (Optional verification)"
                  value={lookupEmail}
                  onChange={(e) => setLookupEmail(e.target.value)}
                  className="bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#020617] border border-slate-300 dark:border-[#29384D] rounded-lg px-3 py-2 text-xs text-[#142B4A] dark:text-[#F1F5F9] placeholder-slate-400 dark:placeholder-[#94A3B8] focus:outline-none focus:border-[#0D9488]"
                />
                <button
                  type="submit"
                  disabled={checkingStatus}
                  className="bg-slate-100 hover:bg-slate-200 dark:bg-[#131F32] dark:hover:bg-slate-700 border border-slate-300 dark:border-[#29384D] text-[#142B4A] dark:text-[#F1F5F9] rounded-lg px-4 py-2 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {checkingStatus ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : 'Check Status'}
                </button>
              </form>

              {ticketStatusData && (
                <div className="mt-4 p-4 rounded-xl bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#020617] border border-[#E2E8F0] dark:border-[#29384D] font-mono text-xs space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-[#475569] dark:text-[#94A3B8]">Ticket ID:</span>
                    <span className="text-teal-700 dark:text-[#22D3EE] font-bold">{ticketStatusData.ticketId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#475569] dark:text-[#94A3B8]">Current Status:</span>
                    <span className="font-bold text-emerald-600 dark:text-[#0F9F8F] dark:text-[#2DD4BF]">{ticketStatusData.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#475569] dark:text-[#94A3B8]">Priority:</span>
                    <span className="text-amber-600 dark:text-amber-400">{ticketStatusData.priority}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#475569] dark:text-[#94A3B8]">Created:</span>
                    <span className="text-[#475569] dark:text-[#CBD5E1]">{new Date(ticketStatusData.createdAt).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar - SLAs and Direct Contact */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-[#0B1220] p-6 rounded-2xl border border-[#E2E8F0] dark:border-[#29384D] dark:border-slate-800 shadow-md dark:shadow-none space-y-4">
              <h4 className="font-mono text-xs font-bold text-[#142B4A] dark:text-[#F1F5F9] uppercase tracking-wider flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#0D9488]" />
                SLA Response Commitments
              </h4>
              <ul className="space-y-3 text-xs text-[#475569] dark:text-[#CBD5E1] font-sans">
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[#ef4444] font-bold shrink-0">P1 Critical:</span>
                  <span>15 minutes target response; 24/7 dedicated incident commander dispatch.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-amber-600 dark:text-amber-400 font-bold shrink-0">P2 High:</span>
                  <span>1 hour response; prioritized engineering pod assignment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[#64748B] dark:text-[#94A3B8] dark:text-[#94A3B8] font-bold shrink-0">P3 Normal:</span>
                  <span>4 hours response during Pune CoE working hours.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#0B1220] p-6 rounded-2xl border border-[#E2E8F0] dark:border-[#29384D] dark:border-slate-800 shadow-md dark:shadow-none space-y-3">
              <h4 className="font-mono text-xs font-bold text-[#142B4A] dark:text-[#F1F5F9] uppercase tracking-wider">
                Direct Engineering Line
              </h4>
              <a
                href="https://maps.google.com/?q=Office+122+Gera+Imperial+Opposite+Wipro+Circle+Hinjawadi+Phase+2+Pune+Maharashtra+411057"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#475569] dark:text-[#94A3B8] hover:text-teal-600 dark:hover:text-[#22D3EE] leading-relaxed block"
              >
                <MapPin className="w-3.5 h-3.5 inline mr-1 text-[#0D9488]" />
                Office 122, Gera Imperial, Opposite Wipro Circle, Hinjawadi Phase 2, Pune, Maharashtra – 411057
              </a>
              <div className="pt-2 text-xs space-y-1.5 font-sans">
                <a href="https://wa.me/919158852129" target="_blank" rel="noopener noreferrer" className="text-teal-700 dark:text-[#22D3EE] hover:underline block">
                  <Phone className="w-3.5 h-3.5 inline mr-1" /> WhatsApp / Call: +91 9158852129
                </a>
                <a href="mailto:hr@info.aparaitech.org" className="text-[#475569] dark:text-[#CBD5E1] hover:text-slate-900 dark:hover:text-[#142B4A] dark:text-[#F1F5F9] block">
                  <Mail className="w-3.5 h-3.5 inline mr-1 text-[#0D9488]" /> HR: hr@info.aparaitech.org
                </a>
                <a href="mailto:info@ai.aparaitech.org" className="text-[#475569] dark:text-[#CBD5E1] hover:text-slate-900 dark:hover:text-[#142B4A] dark:text-[#F1F5F9] block">
                  <Mail className="w-3.5 h-3.5 inline mr-1 text-[#0D9488]" /> Support: info@ai.aparaitech.org
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
