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
            className="group relative flex items-center gap-3 rounded-full bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] hover:border-[#2563EB] p-2 sm:p-2.5 pr-4 sm:pr-5 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            aria-label="Book Student Office Visit & Interview"
          >
            {/* Avatar / Icon */}
            <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-sm">
              <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0F9F8F]"></span>
              </span>
            </div>

            {/* Label */}
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] uppercase tracking-wider text-[#2563EB] dark:text-[#3B82F6] font-semibold">
                  Students & Candidates
                </span>
                <span className="rounded bg-teal-50 dark:bg-[#0F9F8F]/15 border border-[#0F9F8F]/20 px-1.5 py-0.2 text-[9px] text-[#0F9F8F] dark:text-[#2DD4BF] font-medium">
                  Walk-In & Slots
                </span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#142B4A] dark:text-[#F1F5F9] group-hover:text-[#2563EB] dark:group-hover:text-[#3B82F6] transition-colors flex items-center gap-1">
                <span>Book Office Visit / Interview</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#3B82F6] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </button>
        </div>
      )}

      {/* ================= EXPANDED POPUP WINDOW ================= */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-end justify-end sm:p-6 bg-black/50 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none pointer-events-none">
          <div className="pointer-events-auto w-full sm:w-[480px] max-h-[92vh] flex flex-col rounded-t-2xl sm:rounded-2xl bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] shadow-2xl overflow-hidden transition-all duration-200 text-[#475569] dark:text-[#CBD5E1]">
            {/* Popup Header */}
            <div className="p-4 sm:p-5 border-b border-[#E2E8F0] dark:border-[#29384D] bg-[#F3F6FA] dark:bg-[#0B1220] flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-[#2563EB] dark:text-[#3B82F6]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#2563EB] dark:text-[#3B82F6] font-semibold">
                      OFFICE VISIT & INTERVIEW
                    </span>
                    <span className="text-[9px] text-[#0F9F8F] dark:text-[#2DD4BF] bg-teal-50 dark:bg-[#0F9F8F]/15 px-1.5 py-0.5 rounded border border-[#0F9F8F]/20 font-medium">
                      Pune CoE
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#142B4A] dark:text-[#F1F5F9] tracking-tight">
                    Book Office Visit / Interview
                  </h3>
                  <p className="text-[11px] font-mono text-[#64748B] dark:text-[#94A3B8] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#0F9F8F]" />
                    Office 122, Gera Imperial, Opp. Wipro Circle, Hinjawadi Phase 2, Pune
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-[#64748B] hover:text-[#142B4A] dark:text-[#94A3B8] dark:hover:text-white hover:bg-[#E2E8F0] dark:hover:bg-[#29384D] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Popup Scrollable Body */}
            <div className="overflow-y-auto p-4 sm:p-5 space-y-4 text-xs">
              {/* Mandatory Saturday & Sunday Holiday Notice */}
              <div className="rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-3 text-amber-800 dark:text-amber-200">
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <div className="font-bold text-amber-800 dark:text-amber-300 text-xs">
                      Office Schedule: Monday to Friday Only
                    </div>
                    <p className="text-[11px] text-amber-700 dark:text-amber-200/90 leading-relaxed font-mono">
                      <strong>Saturday & Sunday are office holidays.</strong> In-person interviews, assessments, and office visits are scheduled on weekdays between 10:00 AM – 6:00 PM.
                    </p>
                  </div>
                </div>
              </div>

              {/* SUCCESS VIEW */}
              {bookingSuccess ? (
                <div className="py-4 space-y-5 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#0F9F8F]/15 border border-[#0F9F8F]/30 flex items-center justify-center mx-auto text-[#0F9F8F] dark:text-[#2DD4BF]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-[#0F9F8F] dark:text-[#2DD4BF] uppercase tracking-wider font-bold">
                      APPOINTMENT CONFIRMED
                    </span>
                    <h4 className="text-lg font-bold text-[#142B4A] dark:text-[#F1F5F9] mt-1">
                      Office Visit Scheduled!
                    </h4>
                    <p className="text-[#64748B] dark:text-[#94A3B8] text-xs mt-1">
                      Your interview slot has been recorded directly to our recruitment management sheet.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="p-3.5 rounded-xl bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] text-left font-mono space-y-2 text-[11px]">
                    <div className="flex justify-between border-b border-[#E2E8F0] dark:border-[#29384D] pb-1.5">
                      <span className="text-[#64748B] dark:text-[#94A3B8]">Booking Ref:</span>
                      <span className="text-[#2563EB] dark:text-[#3B82F6] font-bold">{bookingSuccess.id}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E2E8F0] dark:border-[#29384D] pb-1.5">
                      <span className="text-[#64748B] dark:text-[#94A3B8]">Candidate:</span>
                      <span className="text-[#142B4A] dark:text-[#F1F5F9] font-medium">{bookingSuccess.name}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E2E8F0] dark:border-[#29384D] pb-1.5">
                      <span className="text-[#64748B] dark:text-[#94A3B8]">Role / Track:</span>
                      <span className="text-[#0F9F8F] dark:text-[#2DD4BF] font-medium">{formData.role}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E2E8F0] dark:border-[#29384D] pb-1.5">
                      <span className="text-[#64748B] dark:text-[#94A3B8]">Visit Date:</span>
                      <span className="text-[#142B4A] dark:text-[#F1F5F9] font-bold">
                        {formData.visitDate} ({selectedDayName})
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-[#E2E8F0] dark:border-[#29384D] pb-1.5">
                      <span className="text-[#64748B] dark:text-[#94A3B8]">Time Slot:</span>
                      <span className="text-[#2563EB] dark:text-[#3B82F6]">{formData.slotTime}</span>
                    </div>
                    <div className="flex justify-between pt-0.5">
                      <span className="text-[#64748B] dark:text-[#94A3B8]">Location:</span>
                      <span className="text-[#142B4A] dark:text-[#F1F5F9] text-right">Office 122, Gera Imperial, Hinjawadi Ph 2, Pune</span>
                    </div>
                  </div>

                  {/* Candidate Instructions & Directions */}
                  <div className="rounded-xl bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] p-3.5 text-left font-mono space-y-2 text-[11px] text-[#475569] dark:text-[#CBD5E1]">
                    <div className="text-[#0F9F8F] dark:text-[#2DD4BF] font-bold text-xs flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      Candidate Visit Checklist:
                    </div>
                    <ul className="space-y-1.5 list-disc list-inside text-[#64748B] dark:text-[#94A3B8] text-[11px]">
                      <li>Carry 2 printed copies of your updated resume.</li>
                      <li>Bring your College ID card or valid Govt. Photo ID for entry.</li>
                      <li>Please arrive 10–15 minutes prior to your scheduled slot.</li>
                      <li>Report to Reception, Office 122, Gera Imperial, Opp. Wipro Circle, Hinjawadi Phase 2, Pune.</li>
                    </ul>
                  </div>

                  {/* Candidate Action Buttons */}
                  <div className="space-y-2 pt-1">
                    <a
                      href="https://maps.google.com/?q=Office+122+Gera+Imperial+Opposite+Wipro+Circle+Hinjawadi+Phase+2+Pune+Maharashtra+411057"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#2563EB] hover:bg-blue-700 dark:bg-[#3B82F6] dark:hover:bg-blue-600 text-white font-semibold py-2.5 px-4 text-xs transition-all shadow-sm"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Get Directions to Pune Office ↗</span>
                    </a>

                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#F3F6FA] hover:bg-slate-200 dark:bg-[#0B1220] dark:hover:bg-slate-800 text-[#142B4A] dark:text-[#F1F5F9] font-mono py-2.5 px-4 text-xs transition-all border border-[#E2E8F0] dark:border-[#29384D]"
                    >
                      <span>Done & Close</span>
                    </button>

                    <button
                      onClick={handleReset}
                      className="text-[#64748B] hover:text-[#2563EB] dark:text-[#94A3B8] dark:hover:text-[#3B82F6] text-xs underline font-mono pt-1"
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
                    <label className="block text-[11px] font-mono text-[#475569] dark:text-[#CBD5E1] mb-1">
                      Student / Candidate Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-[#94A3B8] absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] rounded-lg pl-9 pr-3 py-2 text-xs text-[#142B4A] dark:text-[#F1F5F9] placeholder-[#94A3B8] focus:border-[#2563EB] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Contact Info (Email & Phone) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-mono text-[#475569] dark:text-[#CBD5E1] mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-[#94A3B8] absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rahul@college.edu"
                          className="w-full bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] rounded-lg pl-9 pr-3 py-2 text-xs text-[#142B4A] dark:text-[#F1F5F9] placeholder-[#94A3B8] focus:border-[#2563EB] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-[#475569] dark:text-[#CBD5E1] mb-1">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-[#94A3B8] absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] rounded-lg pl-9 pr-3 py-2 text-xs text-[#142B4A] dark:text-[#F1F5F9] placeholder-[#94A3B8] focus:border-[#2563EB] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* College / Institute & Degree */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-mono text-[#475569] dark:text-[#CBD5E1] mb-1">
                        College / University *
                      </label>
                      <div className="relative">
                        <Building2 className="w-3.5 h-3.5 text-[#94A3B8] absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={formData.college}
                          onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                          placeholder="e.g. COEP / Pune University"
                          className="w-full bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] rounded-lg pl-9 pr-3 py-2 text-xs text-[#142B4A] dark:text-[#F1F5F9] placeholder-[#94A3B8] focus:border-[#2563EB] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-[#475569] dark:text-[#CBD5E1] mb-1">
                        Degree / Branch
                      </label>
                      <select
                        value={formData.degree}
                        onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                        className="w-full bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] rounded-lg px-3 py-2 text-xs text-[#142B4A] dark:text-[#F1F5F9] focus:border-[#2563EB] focus:outline-none"
                      >
                        {degrees.map((d) => (
                          <option key={d} value={d} className="bg-white dark:bg-[#131F32]">
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Passing Year & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-mono text-[#475569] dark:text-[#CBD5E1] mb-1">
                        Passing Year
                      </label>
                      <select
                        value={formData.passingYear}
                        onChange={(e) => setFormData({ ...formData, passingYear: e.target.value })}
                        className="w-full bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] rounded-lg px-2.5 py-2 text-xs text-[#142B4A] dark:text-[#F1F5F9] focus:border-[#2563EB] focus:outline-none"
                      >
                        {passingYears.map((y) => (
                          <option key={y} value={y} className="bg-white dark:bg-[#131F32]">
                            {y}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-mono text-[#475569] dark:text-[#CBD5E1] mb-1">
                        Interview Track / Purpose *
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] rounded-lg px-3 py-2 text-xs text-[#142B4A] dark:text-[#F1F5F9] focus:border-[#2563EB] focus:outline-none"
                      >
                        {roles.map((r) => (
                          <option key={r} value={r} className="bg-white dark:bg-[#131F32]">
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Visit Date Selection (Monday - Friday Only) */}
                  <div className="pt-1">
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-[11px] font-mono text-[#475569] dark:text-[#CBD5E1] flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#0F9F8F]" />
                        <span>Select Visit Date (Monday to Friday only) *</span>
                      </label>
                      <span className="font-mono text-[9px] text-[#0F9F8F] bg-teal-50 dark:bg-[#0F9F8F]/15 border border-[#0F9F8F]/20 px-1.5 py-0.5 rounded">
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
                            className={`px-2.5 py-1 rounded-md text-[10px] font-medium transition-all border cursor-pointer ${
                              isSelected
                                ? "bg-[#2563EB] text-white font-semibold border-[#2563EB] shadow-sm"
                                : "bg-[#F3F6FA] dark:bg-[#0B1220] text-[#475569] dark:text-[#CBD5E1] border-[#E2E8F0] dark:border-[#29384D] hover:border-[#2563EB]"
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
                      className={`w-full bg-[#F3F6FA] dark:bg-[#0B1220] border rounded-lg px-3 py-2 text-xs text-[#142B4A] dark:text-[#F1F5F9] focus:outline-none transition-all ${
                        dateError ? "border-red-500 focus:border-red-500" : "border-[#E2E8F0] dark:border-[#29384D] focus:border-[#2563EB]"
                      }`}
                    />

                    {dateError ? (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {dateError}
                      </p>
                    ) : formData.visitDate ? (
                      <p className="text-[11px] text-[#0F9F8F] dark:text-[#2DD4BF] mt-1 flex items-center gap-1 font-medium">
                        <CheckCircle2 className="w-3 h-3 shrink-0" />
                        Selected: {selectedDayName}, {formData.visitDate} (Office Working Day)
                      </p>
                    ) : null}
                  </div>

                  {/* Slot Time Picker */}
                  <div>
                    <label className="block text-[11px] font-medium text-[#475569] dark:text-[#CBD5E1] mb-1 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>Select Available Time Slot *</span>
                    </label>
                    <select
                      value={formData.slotTime}
                      onChange={(e) => setFormData({ ...formData, slotTime: e.target.value })}
                      className="w-full bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] rounded-lg px-3 py-2 text-xs text-[#142B4A] dark:text-[#F1F5F9] focus:border-[#2563EB] focus:outline-none"
                    >
                      {timeSlots.map((s) => (
                        <option key={s} value={s} className="bg-white dark:bg-[#131F32]">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Resume / Portfolio Link (Optional) */}
                  <div>
                    <label className="block text-[11px] font-medium text-[#475569] dark:text-[#CBD5E1] mb-1">
                      Resume Link / GitHub / LinkedIn (Optional)
                    </label>
                    <input
                      type="url"
                      value={formData.resumeUrl}
                      onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                      placeholder="https://drive.google.com/... or https://github.com/..."
                      className="w-full bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] rounded-lg px-3 py-2 text-xs text-[#142B4A] dark:text-[#F1F5F9] placeholder-[#94A3B8] focus:border-[#2563EB] focus:outline-none"
                    />
                  </div>

                  {/* Notes / Message (Optional) */}
                  <div>
                    <label className="block text-[11px] font-medium text-[#475569] dark:text-[#CBD5E1] mb-1">
                      Questions / Special Request (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Inquiring about final semester internship or full-time placement drive"
                      className="w-full bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] rounded-lg px-3 py-1.5 text-xs text-[#142B4A] dark:text-[#F1F5F9] placeholder-[#94A3B8] focus:border-[#2563EB] focus:outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-11 flex items-center justify-center gap-2 rounded-lg bg-[#2563EB] hover:bg-blue-700 dark:bg-[#3B82F6] dark:hover:bg-blue-600 active:scale-[0.99] text-white font-semibold text-xs tracking-wide transition-all shadow-sm hover:shadow-md disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
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
                  <div className="pt-2 border-t border-[#E2E8F0] dark:border-[#29384D] flex items-center justify-between text-[10px] text-[#64748B] dark:text-[#94A3B8]">
                    <span className="flex items-center gap-1 text-[#64748B] dark:text-[#94A3B8]">
                      <MapPin className="w-3 h-3 text-[#2563EB] dark:text-[#3B82F6]" />
                      <span>Hinjawadi Phase 2, Pune</span>
                    </span>
                    <span className="text-[#0F9F8F] dark:text-[#2DD4BF] font-medium">Monday – Friday (10 AM – 6 PM)</span>
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
