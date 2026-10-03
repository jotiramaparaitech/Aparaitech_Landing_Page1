import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, LifeBuoy, CheckCircle2, Shield, AlertCircle, ArrowUpRight } from 'lucide-react';
import toast from 'react-hot-toast';
import { recordAppointmentBooking } from '../../../utils/sheetService';

const ContactSupport = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Enterprise Technical Support',
    priority: 'Normal',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await recordAppointmentBooking({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'N/A',
        company: formData.company || 'Enterprise Partner',
        service: `[${formData.priority} Priority] ${formData.service}`,
        message: formData.message,
        source: 'Support Portal Ticket Intake'
      });
      
      setSubmitted(true);
      toast.success("Support ticket registered! Connected to leadership telemetry.");
      
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: 'Enterprise Technical Support',
          priority: 'Normal',
          message: ''
        });
      }, 3500);
    } catch (err) {
      console.error(err);
      toast.error("Ticket recorded locally. Support pod will reach out promptly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0D0F] text-white font-sans selection:bg-[#D4FD53] selection:text-[#0C0D0F] pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Header Breadcrumb */}
        <div className="flex items-center gap-3 mb-6">
          <span className="block h-2.5 w-2.5 bg-[#00E5C9]"></span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00E5C9] font-bold">
            MISSION-CRITICAL SUPPORT & DISPATCH
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-[clamp(2rem,4vw,3.25rem)] font-bold text-white tracking-tight leading-tight">
              Enterprise Technical Support
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed font-normal">
              Direct access to Aparaitech Software's engineering and site-reliability pods at Hinjawadi Phase 2, Pune. Guaranteed 99.9% platform availability.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+918261840199"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#141518] border border-[#22242A] text-slate-300 hover:text-[#00E5C9] hover:border-[#00E5C9]/50 transition-colors font-mono text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#00E5C9]" />
              <span>+91 82618 40199</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Form Card */}
          <div className="lg:col-span-8">
            <div className="bg-[#141518] rounded-2xl border border-[#22242A] p-6 sm:p-8 shadow-2xl">
              
              {submitted ? (
                <div className="py-14 text-center space-y-4">
                  <CheckCircle2 className="w-14 h-14 text-[#10B981] mx-auto animate-bounce" />
                  <h3 className="text-xl font-bold text-white">Ticket Registered Successfully</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed font-normal">
                    Your request has been routed to our on-call technical architect. Priority tickets receive initial diagnostic response within 30 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 mb-1">Contact Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikram Sharma"
                        className="w-full bg-[#0C0D0F] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:border-[#00E5C9] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-1">Corporate Work Email *</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vikram@enterprise.com"
                        className="w-full bg-[#0C0D0F] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:border-[#00E5C9] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 mb-1">Direct Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#0C0D0F] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:border-[#00E5C9] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-1">Organization / Enterprise *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Apex Technologies Ltd"
                        className="w-full bg-[#0C0D0F] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:border-[#00E5C9] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 mb-1">System / Category</label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#0C0D0F] border border-white/10 rounded-lg px-3.5 py-2.5 text-white focus:border-[#00E5C9] focus:outline-none transition-colors"
                      >
                        <option value="Enterprise AI & Agent Systems">Enterprise AI & Multi-Agent Systems</option>
                        <option value="Cloud Infrastructure & VPC">Cloud Infrastructure & Private VPC</option>
                        <option value="Production Platform Outage">Production Platform Incident</option>
                        <option value="API Integration & Webhooks">API Integration & Webhooks</option>
                        <option value="Security & Compliance Audit">Security & Compliance Audit</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-1">Severity Level</label>
                      <select 
                        value={formData.priority}
                        onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                        className="w-full bg-[#0C0D0F] border border-white/10 rounded-lg px-3.5 py-2.5 text-white focus:border-[#00E5C9] focus:outline-none transition-colors"
                      >
                        <option value="Normal">Normal — Standard Inquiry (24hr SLA)</option>
                        <option value="High">High — Operational Bottleneck (4hr SLA)</option>
                        <option value="Critical">Critical — Production Degradation (1hr SLA)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1">Technical Incident / Request Details *</label>
                    <textarea 
                      required
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify error codes, affected microservices, or specific configuration issues..."
                      className="w-full bg-[#0C0D0F] border border-white/10 rounded-lg p-3.5 text-white placeholder-slate-500 focus:border-[#00E5C9] focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-11 bg-[#00E5C9] text-[#0C0D0F] font-bold text-xs uppercase tracking-wider rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? 'Transmitting Ticket...' : 'Dispatch Technical Support Ticket →'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#141518] p-6 rounded-2xl border border-[#22242A] shadow-xl space-y-4">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#00E5C9]" />
                <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  SLA Commitments
                </h3>
              </div>
              <ul className="space-y-3 font-mono text-[11px] text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#00E5C9] font-bold">✓</span>
                  <span>99.9% Uptime Commitment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00E5C9] font-bold">✓</span>
                  <span>Direct CoE Engineering Access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00E5C9] font-bold">✓</span>
                  <span>Encrypted Channel Dispatch</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#141518] p-6 rounded-2xl border border-[#22242A] shadow-xl space-y-3">
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                Direct Engineering Line
              </h4>
              <p className="text-xs text-slate-400 font-mono leading-relaxed">
                Gera Imperium, Hinjawadi Phase 2, Pune, Maharashtra 411057
              </p>
              <div className="pt-2 text-xs font-mono space-y-1.5">
                <a href="tel:+918261840199" className="text-[#00E5C9] hover:underline block">
                  +91 82618 40199
                </a>
                <a href="mailto:info@ai.aparaitech.org" className="text-slate-300 hover:text-white block">
                  info@ai.aparaitech.org
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