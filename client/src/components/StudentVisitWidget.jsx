// client/src/components/StudentVisitWidget.jsx
import React, { useState, useMemo } from "react";
import {
  GraduationCap,
  Calendar,
  Clock,
  MapPin,
  Building2,
  User,
  Mail,
  Phone,
  FileText,
  CheckCircle2,
  AlertCircle,
  X,
  Sparkles,
  ChevronRight,
  Briefcase
} from "lucide-react";
import { toast } from "react-hot-toast";
import { recordStudentVisitBooking } from "../utils/sheetService";

export default function StudentVisitWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    degree: "B.E. / B.Tech (Computer Science / IT)",
    passingYear: "2025",
    role: "Full Stack Software Engineer (React / Node / Python)",
    visitDate: "",
    slotTime: "10:00 AM – 11:30 AM (Morning Tech Assessment)",
    resumeUrl: "",
    notes: "",
  });

  const [dateError, setDateError] = useState("");

  // Interview Roles
  const roles = [
    "Full Stack Software Engineer (React / Node / Python)",
    "AI / Machine Learning & RAG Systems Intern",
    "Computer Vision & Edge AI Trainee",
    "Cloud Computing & DevOps Engineer",
    "Data Analytics & Enterprise Solutions Intern",
    "Campus Placement / In-Person Technical Assessment",
    "Academic Office Visit & Technology Tour",
  ];

  // Time Slots during working hours
  const timeSlots = [
    "10:00 AM – 11:30 AM (Morning Tech Assessment)",
    "11:30 AM – 01:00 PM (Coding & Logic Evaluation)",
    "02:00 PM – 03:30 PM (Systems & Project Review)",
    "03:30 PM – 05:00 PM (Executive / Founder Discussion)",
    "05:00 PM – 06:00 PM (Evening Trainee Evaluation)",
  ];

  // Degrees
  const degrees = [
    "B.E. / B.Tech (Computer Science / IT)",
    "B.E. / B.Tech (AI / Data Science / Electronics)",
    "MCA (Master of Computer Applications)",
    "BCA / BCS (Computer Applications)",
    "M.E. / M.Tech (Computer / Software)",
    "B.Sc / M.Sc (Computer Science / IT)",
    "Recent Graduate / Fresher",
    "Other Academic Degree",
  ];

  // Passing Years
  const passingYears = ["2024", "2025", "2026", "2027", "Earlier / Experienced"];

  // Helper: Compute minimum date string (tomorrow or today)
  const minDateString = useMemo(() => {
    const today = new Date();
    // Default min date is tomorrow
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  }, []);

  // Helper: Pre-generate upcoming 5 weekdays for quick-selection
  const upcomingWeekdays = useMemo(() => {
    const days = [];
    const curr = new Date();
    curr.setDate(curr.getDate() + 1); // Start tomorrow

    while (days.length < 5) {
      const dayOfWeek = curr.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        // Monday - Friday only
        const iso = curr.toISOString().split("T")[0];
        const label = curr.toLocaleDateString("en-IN", {
          weekday: "short",
          month: "short",
          day: "numeric",
        });
        const fullDay = curr.toLocaleDateString("en-IN", { weekday: "long" });
        days.push({ iso, label, fullDay });
      }
      curr.setDate(curr.getDate() + 1);
    }
    return days;
  }, []);

  // Validate Date Selection (Strict Saturday & Sunday Holiday rejection)
  const handleDateChange = (val) => {
    if (!val) {
      setFormData((prev) => ({ ...prev, visitDate: "" }));
      setDateError("");
      return;
    }

    const d = new Date(val + "T00:00:00");
    const day = d.getDay();

    // 0 = Sunday, 6 = Saturday
    if (day === 0 || day === 6) {
      const weekendDay = day === 0 ? "Sunday" : "Saturday";
      setDateError(`❌ ${weekendDay} is an office holiday. Aparaitech Pune CoE is closed on weekends. Please pick Monday to Friday.`);
      toast.error(`${weekendDay} is an office holiday. Please select Monday to Friday.`, {
        duration: 5000,
      });
      setFormData((prev) => ({ ...prev, visitDate: "" }));
      return;
    }

    setDateError("");
    setFormData((prev) => ({ ...prev, visitDate: val }));
  };

  // Get selected day name
  const selectedDayName = useMemo(() => {
    if (!formData.visitDate) return "";
    try {
      const d = new Date(formData.visitDate + "T00:00:00");
      return d.toLocaleDateString("en-IN", { weekday: "long" });
    } catch {
      return "";
    }
  }, [formData.visitDate]);

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast.error("Please provide your name, email, and phone number.");
      return;
    }

    if (!formData.visitDate) {
      setDateError("Please select a visit date (Monday to Friday). Saturday & Sunday are holidays.");
      toast.error("Please select a working weekday (Monday to Friday).");
      return;
    }

    // Secondary check on weekend
    const d = new Date(formData.visitDate + "T00:00:00");
    if (d.getDay() === 0 || d.getDay() === 6) {
      toast.error("Saturday & Sunday are office holidays. Please choose Monday to Friday.");
      return;
    }

    setIsSubmitting(true);
    try {
      const record = await recordStudentVisitBooking({
        ...formData,
        slotDay: selectedDayName,
      });

      setBookingSuccess(record);
      toast.success("Office Visit & Interview slot booked successfully!");
    } catch (err) {
      console.error("Booking error:", err);
      toast.error("Could not complete booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setBookingSuccess(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      college: "",
      degree: "B.E. / B.Tech (Computer Science / IT)",
      passingYear: "2025",
      role: "Full Stack Software Engineer (React / Node / Python)",
      visitDate: "",
      slotTime: "10:00 AM – 11:30 AM (Morning Tech Assessment)",
      resumeUrl: "",
      notes: "",
    });
    setDateError("");
  };

  return (
    <>
      {/* ================= FLOATING TRIGGER BUTTON (Bottom-Right) ================= */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 rounded-full bg-[#141518]/95 backdrop-blur-md border border-[#00E5C9]/40 hover:border-[#00E5C9] p-2 sm:p-2.5 pr-4 sm:pr-5 shadow-[0_10px_35px_rgba(0,229,201,0.3)] hover:shadow-[0_12px_45px_rgba(0,229,201,0.5)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            aria-label="Book Student Office Visit & Interview"
          >
            {/* Pulsing Avatar / Icon */}
            <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#00E5C9] to-[#009883] text-[#0C0D0F] shadow-lg">
              <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FD53] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#D4FD53]"></span>
              </span>
            </div>

            {/* Label */}
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#00E5C9] font-bold">
                  Students & Candidates
                </span>
                <span className="rounded bg-[#D4FD53]/20 px-1.5 py-0.2 text-[9px] font-mono text-[#D4FD53] font-bold">
                  Walk-In & Slots
                </span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-white group-hover:text-[#00E5C9] transition-colors flex items-center gap-1">
                <span>Book Office Visit / Interview</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#00E5C9] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </button>
        </div>
      )}

      {/* ================= EXPANDED POPUP WINDOW ================= */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-end justify-end sm:p-6 bg-black/60 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none pointer-events-none">
          <div className="pointer-events-auto w-full sm:w-[480px] max-h-[92vh] flex flex-col rounded-t-2xl sm:rounded-2xl bg-[#141518] border border-[#22242A] shadow-2xl overflow-hidden transition-all duration-300">
            {/* Popup Header */}
            <div className="p-4 sm:p-5 border-b border-[#22242A] bg-[#111215] flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00E5C9]/10 border border-[#00E5C9]/30 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-[#00E5C9]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#00E5C9] font-bold">
                      OFFICE VISIT & INTERVIEW
                    </span>
                    <span className="font-mono text-[9px] text-[#D4FD53] bg-[#D4FD53]/10 px-1.5 py-0.5 rounded border border-[#D4FD53]/20">
                      Pune CoE
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Book Office Visit / Interview
                  </h3>
                  <p className="text-[11px] font-mono text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#00E5C9]" />
                    Gera Imperium, Hinjawadi Phase 2, Pune
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Popup Scrollable Body */}
            <div className="overflow-y-auto p-4 sm:p-5 space-y-4 text-xs">
              {/* Mandatory Saturday & Sunday Holiday Notice */}
              <div className="rounded-xl bg-amber-500/10 border border-amber-500/30 p-3 text-amber-200">
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <div className="font-bold text-amber-300 text-xs">
                      Office Schedule: Monday to Friday Only
                    </div>
                    <p className="text-[11px] text-amber-200/90 leading-relaxed font-mono">
                      <strong>Saturday & Sunday are office holidays.</strong> In-person interviews, assessments, and office visits are scheduled on weekdays between 10:00 AM – 6:00 PM.
                    </p>
                  </div>
                </div>
              </div>

              {/* SUCCESS VIEW */}
              {bookingSuccess ? (
                <div className="py-4 space-y-5 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 flex items-center justify-center mx-auto text-[#10B981]">
                    <CheckCircle2 className="w-8 h-8 animate-pulse" />
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-[#00E5C9] uppercase tracking-wider font-bold">
                      APPOINTMENT CONFIRMED
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">
                      Office Visit Scheduled!
                    </h4>
                    <p className="text-slate-400 text-xs mt-1">
                      Your interview slot has been recorded directly to our recruitment management sheet.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="p-3.5 rounded-xl bg-[#0C0D0F] border border-white/10 text-left font-mono space-y-2 text-[11px]">
                    <div className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-slate-400">Booking Ref:</span>
                      <span className="text-[#00E5C9] font-bold">{bookingSuccess.id}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-slate-400">Candidate:</span>
                      <span className="text-white font-medium">{bookingSuccess.name}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-slate-400">Role / Track:</span>
                      <span className="text-[#D4FD53]">{formData.role}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-slate-400">Visit Date:</span>
                      <span className="text-white font-bold">
                        {formData.visitDate} ({selectedDayName})
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-slate-400">Time Slot:</span>
                      <span className="text-[#00E5C9]">{formData.slotTime}</span>
                    </div>
                    <div className="flex justify-between pt-0.5">
                      <span className="text-slate-400">Location:</span>
                      <span className="text-white text-right">Gera Imperium, Hinjawadi Ph 2, Pune</span>
                    </div>
                  </div>

                  {/* Candidate Instructions & Directions */}
                  <div className="rounded-xl bg-[#0C0D0F] border border-white/5 p-3.5 text-left font-mono space-y-2 text-[11px] text-slate-300">
                    <div className="text-[#D4FD53] font-bold text-xs flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      Candidate Visit Checklist:
                    </div>
                    <ul className="space-y-1.5 list-disc list-inside text-slate-400 text-[11px]">
                      <li>Carry 2 printed copies of your updated resume.</li>
                      <li>Bring your College ID card or valid Govt. Photo ID for entry.</li>
                      <li>Please arrive 10–15 minutes prior to your scheduled slot.</li>
                      <li>Report to Reception, Gera Imperium, Hinjawadi Phase 2, Pune.</li>
                    </ul>
                  </div>

                  {/* Candidate Action Buttons */}
                  <div className="space-y-2 pt-1">
                    <a
                      href="https://maps.app.goo.gl/zshFooG4n2aS8Dr3A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#00E5C9] hover:brightness-110 text-[#0C0D0F] font-bold py-2.5 px-4 text-xs transition-all shadow-md"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Get Directions to Pune Office ↗</span>
                    </a>

                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#22242A] hover:bg-[#2C2E36] text-white font-mono py-2.5 px-4 text-xs transition-all border border-white/10"
                    >
                      <span>Done & Close</span>
                    </button>

                    <button
                      onClick={handleReset}
                      className="text-slate-400 hover:text-white text-xs underline font-mono pt-1"
                    >
                      Book Another Office Visit Slot
                    </button>
                  </div>
                </div>
              ) : (
                /* FORM VIEW */
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Student Name */}
                  <div>
                    <label className="block text-[11px] font-mono text-slate-300 mb-1">
                      Student / Candidate Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-[#0C0D0F] border border-white/10 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#00E5C9] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Contact Info (Email & Phone) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rahul@college.edu"
                          className="w-full bg-[#0C0D0F] border border-white/10 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#00E5C9] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-300 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full bg-[#0C0D0F] border border-white/10 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#00E5C9] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* College / Institute & Degree */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-300 mb-1">
                        College / University *
                      </label>
                      <div className="relative">
                        <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={formData.college}
                          onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                          placeholder="e.g. COEP / Pune University"
                          className="w-full bg-[#0C0D0F] border border-white/10 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#00E5C9] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-300 mb-1">
                        Degree / Branch
                      </label>
                      <select
                        value={formData.degree}
                        onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                        className="w-full bg-[#0C0D0F] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-[#00E5C9] focus:outline-none"
                      >
                        {degrees.map((d) => (
                          <option key={d} value={d} className="bg-[#141518]">
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Passing Year & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-300 mb-1">
                        Passing Year
                      </label>
                      <select
                        value={formData.passingYear}
                        onChange={(e) => setFormData({ ...formData, passingYear: e.target.value })}
                        className="w-full bg-[#0C0D0F] border border-white/10 rounded-lg px-2.5 py-2 text-xs text-white focus:border-[#00E5C9] focus:outline-none"
                      >
                        {passingYears.map((y) => (
                          <option key={y} value={y} className="bg-[#141518]">
                            {y}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-mono text-slate-300 mb-1">
                        Interview Track / Purpose *
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full bg-[#0C0D0F] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-[#00E5C9] focus:outline-none"
                      >
                        {roles.map((r) => (
                          <option key={r} value={r} className="bg-[#141518]">
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Visit Date Selection (Monday - Friday Only) */}
                  <div className="pt-1">
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#00E5C9]" />
                        <span>Select Visit Date (Monday to Friday only) *</span>
                      </label>
                      <span className="font-mono text-[9px] text-[#D4FD53] bg-[#D4FD53]/10 px-1.5 py-0.2 rounded">
                        Sat/Sun Closed
                      </span>
                    </div>

                    {/* Quick Weekday Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {upcomingWeekdays.map((item) => {
                        const isSelected = formData.visitDate === item.iso;
                        return (
                          <button
                            type="button"
                            key={item.iso}
                            onClick={() => handleDateChange(item.iso)}
                            className={`px-2.5 py-1 rounded-md text-[10px] font-mono transition-all border ${
                              isSelected
                                ? "bg-[#00E5C9] text-[#0C0D0F] font-bold border-[#00E5C9]"
                                : "bg-[#0C0D0F] text-slate-300 border-white/10 hover:border-[#00E5C9]/50"
                            }`}
                          >
                            {item.label}
                          </button>
                        );
                      })}
                    </div>

                    {/* Exact Date Picker Input */}
                    <input
                      type="date"
                      required
                      min={minDateString}
                      value={formData.visitDate}
                      onChange={(e) => handleDateChange(e.target.value)}
                      className={`w-full bg-[#0C0D0F] border rounded-lg px-3 py-2 text-xs text-white focus:outline-none ${
                        dateError ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-[#00E5C9]"
                      }`}
                    />

                    {dateError ? (
                      <p className="text-[11px] text-red-400 font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {dateError}
                      </p>
                    ) : formData.visitDate ? (
                      <p className="text-[11px] text-[#00E5C9] font-mono mt-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 shrink-0" />
                        Selected: {selectedDayName}, {formData.visitDate} (Office Working Day)
                      </p>
                    ) : null}
                  </div>

                  {/* Slot Time Picker */}
                  <div>
                    <label className="block text-[11px] font-mono text-slate-300 mb-1 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#D4FD53]" />
                      <span>Select Available Time Slot *</span>
                    </label>
                    <select
                      value={formData.slotTime}
                      onChange={(e) => setFormData({ ...formData, slotTime: e.target.value })}
                      className="w-full bg-[#0C0D0F] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-[#00E5C9] focus:outline-none"
                    >
                      {timeSlots.map((s) => (
                        <option key={s} value={s} className="bg-[#141518]">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Resume / Portfolio Link (Optional) */}
                  <div>
                    <label className="block text-[11px] font-mono text-slate-300 mb-1">
                      Resume Link / GitHub / LinkedIn (Optional)
                    </label>
                    <input
                      type="url"
                      value={formData.resumeUrl}
                      onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                      placeholder="https://drive.google.com/... or https://github.com/..."
                      className="w-full bg-[#0C0D0F] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#00E5C9] focus:outline-none"
                    />
                  </div>

                  {/* Notes / Message (Optional) */}
                  <div>
                    <label className="block text-[11px] font-mono text-slate-300 mb-1">
                      Questions / Special Request (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Inquiring about final semester internship or full-time placement drive"
                      className="w-full bg-[#0C0D0F] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:border-[#00E5C9] focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-11 flex items-center justify-center gap-2 rounded-lg bg-[#00E5C9] hover:brightness-110 active:scale-[0.99] text-[#0C0D0F] font-bold text-xs tracking-wide transition-all shadow-lg shadow-[#00E5C9]/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2 font-mono">
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-[#0C0D0F] border-t-transparent"></span>
                        Recording Appointment to Sheet...
                      </span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Confirm Office Visit & Interview Slot</span>
                      </>
                    )}
                  </button>

                  {/* Form Footer info */}
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3 h-3 text-[#00E5C9]" />
                      <span>Hinjawadi Phase 2, Pune</span>
                    </span>
                    <span className="text-[#D4FD53]">Monday – Friday (10 AM – 6 PM)</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
