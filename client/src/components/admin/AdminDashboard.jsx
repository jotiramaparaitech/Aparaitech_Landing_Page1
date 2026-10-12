// client/src/components/admin/AdminDashboard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Users,
  Briefcase,
  Calendar,
  LifeBuoy,
  Handshake,
  Mail,
  Download,
  LogOut,
  Search,
  RefreshCw,
  FileText,
  CheckCircle2,
  Clock,
  Trash2,
  AlertCircle,
  TrendingUp,
} from "lucide-react";
import toast from "react-hot-toast";
import { adminAPI, API_BASE_URL } from "../../utils/api";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  // Data states for modules
  const [contacts, setContacts] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [partners, setPartners] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

  // Search & Filter
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const adminUser = JSON.parse(localStorage.getItem("aparaitech_admin_user") || "{}");

  useEffect(() => {
    const token = localStorage.getItem("aparaitech_admin_token");
    if (!token) {
      navigate("/admin/login");
      return;
    }
    fetchStats();
  }, [navigate]);

  useEffect(() => {
    if (activeTab === "contacts") fetchContacts();
    else if (activeTab === "jobs") fetchJobs();
    else if (activeTab === "appointments") fetchAppointments();
    else if (activeTab === "tickets") fetchTickets();
    else if (activeTab === "partners") fetchPartners();
    else if (activeTab === "subscribers") fetchSubscribers();
  }, [activeTab, statusFilter]);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const res = await adminAPI.getStats();
      if (res.success) {
        setStats(res.stats);
      }
    } catch (err) {
      console.error(err);
      if (err.status === 401 || err.response?.status === 401) {
        adminAPI.logout();
        navigate("/admin/login");
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const res = await adminAPI.getContacts({ search: searchTerm, status: statusFilter });
      setContacts(res.data || []);
    } catch (err) {
      toast.error("Failed to load contacts.");
    } finally {
      setLoading(false);
    }
  };

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await adminAPI.getJobApplications({ search: searchTerm, status: statusFilter });
      setJobs(res.data || []);
    } catch (err) {
      toast.error("Failed to load job applications.");
    } finally {
      setLoading(false);
    }
  };

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const res = await adminAPI.getAppointments({ search: searchTerm, status: statusFilter });
      setAppointments(res.data || []);
    } catch (err) {
      toast.error("Failed to load appointments.");
    } finally {
      setLoading(false);
    }
  };

  const fetchTickets = async () => {
    setLoading(true);
    try {
      const res = await adminAPI.getSupportTickets({ search: searchTerm, status: statusFilter });
      setTickets(res.data || []);
    } catch (err) {
      toast.error("Failed to load support tickets.");
    } finally {
      setLoading(false);
    }
  };

  const fetchPartners = async () => {
    setLoading(true);
    try {
      const res = await adminAPI.getPartners({ search: searchTerm, status: statusFilter });
      setPartners(res.data || []);
    } catch (err) {
      toast.error("Failed to load partners.");
    } finally {
      setLoading(false);
    }
  };

  const fetchSubscribers = async () => {
    setLoading(true);
    try {
      const res = await adminAPI.getSubscribers({ search: searchTerm });
      setSubscribers(res.data || []);
    } catch (err) {
      toast.error("Failed to load subscribers.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    adminAPI.logout();
    toast.success("Logged out successfully.");
    navigate("/admin/login");
  };

  const downloadCSV = (collection) => {
    const url = adminAPI.getExportUrl(collection);
    window.open(url, "_blank");
  };

  // Status Handlers
  const handleUpdateContactStatus = async (id, status) => {
    try {
      await adminAPI.updateContactStatus(id, status);
      toast.success("Contact status updated.");
      fetchContacts();
      fetchStats();
    } catch (e) {
      toast.error("Status update failed.");
    }
  };

  const handleUpdateJobStatus = async (id, status) => {
    try {
      await adminAPI.updateApplicationStatus(id, status);
      toast.success("Application status updated.");
      fetchJobs();
      fetchStats();
    } catch (e) {
      toast.error("Status update failed.");
    }
  };

  const handleUpdateApptStatus = async (id, status) => {
    try {
      await adminAPI.updateAppointmentStatus(id, status);
      toast.success("Appointment status updated.");
      fetchAppointments();
      fetchStats();
    } catch (e) {
      toast.error("Status update failed.");
    }
  };

  const handleUpdateTicketStatus = async (ticketId, status) => {
    try {
      await adminAPI.updateTicketStatus(ticketId, { status });
      toast.success("Support ticket updated.");
      fetchTickets();
      fetchStats();
    } catch (e) {
      toast.error("Status update failed.");
    }
  };

  const handleUpdatePartnerStatus = async (id, status) => {
    try {
      await adminAPI.updatePartnerStatus(id, status);
      toast.success("Partner status updated.");
      fetchPartners();
      fetchStats();
    } catch (e) {
      toast.error("Status update failed.");
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="bg-[#0B1220] border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#0D9488]/10 border border-[#0D9488]/30 flex items-center justify-center text-[#22D3EE]">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <span className="text-sm font-bold tracking-tight text-white block">
              APARAITECH SOFTWARE
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              Enterprise Control Plane • {adminUser.name || "Administrator"} ({adminUser.role || "superadmin"})
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              fetchStats();
              if (activeTab !== "overview") {
                if (activeTab === "contacts") fetchContacts();
                if (activeTab === "jobs") fetchJobs();
                if (activeTab === "appointments") fetchAppointments();
                if (activeTab === "tickets") fetchTickets();
                if (activeTab === "partners") fetchPartners();
                if (activeTab === "subscribers") fetchSubscribers();
              }
              toast.success("Refreshed data.");
            }}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
            title="Refresh Data"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 hover:bg-rose-500/20 text-xs font-semibold transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Navigation Sidebar */}
        <aside className="w-full md:w-64 bg-[#0B1220]/70 border-r border-slate-800 p-4 space-y-1">
          {[
            { id: "overview", label: "Overview & Analytics", icon: TrendingUp },
            { id: "contacts", label: "Contact Inquiries", icon: Users, count: stats?.contacts?.total },
            { id: "jobs", label: "Career Applications", icon: Briefcase, count: stats?.jobs?.total },
            { id: "appointments", label: "Appointments & Visits", icon: Calendar, count: stats?.appointments?.total },
            { id: "tickets", label: "Support Tickets", icon: LifeBuoy, count: stats?.tickets?.total },
            { id: "partners", label: "Partner Applications", icon: Handshake, count: stats?.partners?.total },
            { id: "subscribers", label: "Newsletter Subscribers", icon: Mail, count: stats?.subscribers?.total },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSearchTerm("");
                  setStatusFilter("All");
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                  active
                    ? "bg-[#0D9488] text-white shadow-lg shadow-[#0D9488]/20"
                    : "text-slate-400 hover:text-white hover:bg-slate-900"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{tab.label}</span>
                </div>
                {tab.count !== undefined && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      active ? "bg-white/20 text-white" : "bg-slate-800 text-slate-300"
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </aside>

        {/* Content Pane */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          {/* OVERVIEW MODULE */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">Database Operations Overview</h2>
                <p className="text-xs text-slate-400 mt-1">Real-time statistics across all connected MongoDB collections.</p>
              </div>

              {/* Metric Counter Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Total Contact Inquiries", val: stats?.contacts?.total || 0, pending: stats?.contacts?.pending || 0, icon: Users, color: "text-[#22D3EE]", tab: "contacts" },
                  { title: "Job Applications", val: stats?.jobs?.total || 0, pending: stats?.jobs?.pending || 0, icon: Briefcase, color: "text-[#0D9488]", tab: "jobs" },
                  { title: "Appointments & Visits", val: stats?.appointments?.total || 0, pending: stats?.appointments?.pending || 0, icon: Calendar, color: "text-amber-400", tab: "appointments" },
                  { title: "Support Tickets", val: stats?.tickets?.total || 0, pending: stats?.tickets?.pending || 0, icon: LifeBuoy, color: "text-rose-400", tab: "tickets" },
                  { title: "Partner Network Applications", val: stats?.partners?.total || 0, icon: Handshake, color: "text-indigo-400", tab: "partners" },
                  { title: "Newsletter Subscribers", val: stats?.subscribers?.total || 0, icon: Mail, color: "text-emerald-400", tab: "subscribers" },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveTab(item.tab)}
                      className="bg-[#0B1220] border border-slate-800 hover:border-slate-700 rounded-2xl p-5 shadow-lg cursor-pointer transition-all hover:scale-[1.01]"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-slate-400 font-medium">{item.title}</span>
                        <Icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div className="flex items-baseline justify-between">
                        <span className="text-3xl font-extrabold text-white tracking-tight">{item.val}</span>
                        {item.pending !== undefined && (
                          <span className="text-[11px] text-amber-400 font-mono">
                            {item.pending} pending
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick CSV Export Bar */}
              <div className="bg-[#0B1220] border border-slate-800 rounded-2xl p-5">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                  Export Operational Datasets to CSV
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["contacts", "jobs", "appointments", "tickets", "partners", "subscribers"].map((coll) => (
                    <button
                      key={coll}
                      onClick={() => downloadCSV(coll)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-[#0D9488] text-slate-300 hover:text-white text-xs transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-[#22D3EE]" />
                      <span className="capitalize">{coll}.csv</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CONTACTS MODULE */}
          {activeTab === "contacts" && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white">Contact Inquiries ({contacts.length})</h2>
                  <p className="text-xs text-slate-400">Leads and contact form requests captured in MongoDB.</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => downloadCSV("contacts")}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0D9488] hover:bg-[#0f766e] text-white text-xs font-semibold transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export CSV</span>
                  </button>
                </div>
              </div>

              {/* Filter & Search */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search by name, email, company..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && fetchContacts()}
                    className="w-full bg-[#0B1220] border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0D9488]"
                  />
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-[#0B1220] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#0D9488]"
                >
                  <option value="All">All Statuses</option>
                  <option value="New">New</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>

              {/* Table */}
              <div className="bg-[#0B1220] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-slate-900/60 text-slate-400 uppercase font-mono text-[10px] border-b border-slate-800">
                      <tr>
                        <th className="px-4 py-3">Timestamp</th>
                        <th className="px-4 py-3">Name & Company</th>
                        <th className="px-4 py-3">Email & Phone</th>
                        <th className="px-4 py-3">Subject & Message</th>
                        <th className="px-4 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {contacts.length === 0 ? (
                        <tr>
                          <td colSpan="5" className="px-4 py-8 text-center text-slate-500">
                            No contact inquiries found matching criteria.
                          </td>
                        </tr>
                      ) : (
                        contacts.map((c) => (
                          <tr key={c._id} className="hover:bg-slate-900/40">
                            <td className="px-4 py-3 font-mono text-[11px] text-slate-400 whitespace-nowrap">
                              {new Date(c.createdAt).toLocaleDateString("en-IN", {
                                month: "short",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </td>
                            <td className="px-4 py-3">
                              <div className="font-semibold text-white">{c.name}</div>
                              {c.company && <div className="text-[11px] text-slate-400">{c.company}</div>}
                            </td>
                            <td className="px-4 py-3 font-mono">
                              <div>{c.email}</div>
                              {c.phone && <div className="text-slate-400">{c.phone}</div>}
                            </td>
                            <td className="px-4 py-3 max-w-xs">
                              <div className="font-medium text-slate-200">{c.subject}</div>
                              <p className="text-slate-400 text-[11px] truncate">{c.message}</p>
                            </td>
                            <td className="px-4 py-3">
                              <select
                                value={c.status}
                                onChange={(e) => handleUpdateContactStatus(c._id, e.target.value)}
                                className={`text-[11px] rounded px-2 py-1 border font-medium bg-[#020617] ${
                                  c.status === "New"
                                    ? "text-amber-400 border-amber-500/30"
                                    : c.status === "Contacted"
                                    ? "text-emerald-400 border-emerald-500/30"
                                    : "text-slate-300 border-slate-700"
                                }`}
                              >
                                <option value="New">New</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Contacted">Contacted</option>
                                <option value="Closed">Closed</option>
                              </select>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* CAREER APPLICATIONS MODULE */}
          {activeTab === "jobs" && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white">Career Applications ({jobs.length})</h2>
                  <p className="text-xs text-slate-400">Candidate resumes and profile submissions saved permanently in database.</p>
                </div>
                <button
                  onClick={() => downloadCSV("jobs")}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0D9488] hover:bg-[#0f766e] text-white text-xs font-semibold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>

              {/* Table */}
              <div className="bg-[#0B1220] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-slate-900/60 text-slate-400 uppercase font-mono text-[10px] border-b border-slate-800">
                      <tr>
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3">Candidate</th>
                        <th className="px-4 py-3">Applied Role</th>
                        <th className="px-4 py-3">Resume</th>
                        <th className="px-4 py-3">Links & Details</th>
                        <th className="px-4 py-3">Application Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {jobs.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="px-4 py-8 text-center text-slate-500">
                            No job applications recorded yet.
                          </td>
                        </tr>
                      ) : (
                        jobs.map((j) => (
                          <tr key={j._id} className="hover:bg-slate-900/40">
                            <td className="px-4 py-3 font-mono text-[11px] text-slate-400 whitespace-nowrap">
                              {new Date(j.createdAt).toLocaleDateString("en-IN")}
                            </td>
                            <td className="px-4 py-3">
                              <div className="font-semibold text-white">{j.fullName}</div>
                              <div className="font-mono text-slate-400 text-[11px]">{j.email}</div>
                              <div className="font-mono text-slate-400 text-[11px]">{j.phone}</div>
                            </td>
                            <td className="px-4 py-3 font-medium text-[#22D3EE]">{j.appliedPosition}</td>
                            <td className="px-4 py-3">
                              {j.resumeUrl ? (
                                <a
                                  href={`${API_BASE_URL}${j.resumeUrl}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0D9488]/10 border border-[#0D9488]/30 text-[#22D3EE] hover:bg-[#0D9488]/20 font-medium text-[11px]"
                                >
                                  <FileText className="w-3.5 h-3.5" />
                                  <span>View Resume</span>
                                </a>
                              ) : (
                                <span className="text-slate-500 text-[11px]">No file</span>
                              )}
                            </td>
                            <td className="px-4 py-3 text-[11px] space-x-2">
                              {j.linkedin && (
                                <a href={j.linkedin} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">
                                  LinkedIn
                                </a>
                              )}
                              {j.github && (
                                <a href={j.github} target="_blank" rel="noreferrer" className="text-slate-300 hover:underline">
                                  GitHub
                                </a>
                              )}
                              {j.portfolio && (
                                <a href={j.portfolio} target="_blank" rel="noreferrer" className="text-[#22D3EE] hover:underline">
                                  Portfolio
                                </a>
                              )}
                            </td>
                            <td className="px-4 py-3">
                              <select
                                value={j.status}
                                onChange={(e) => handleUpdateJobStatus(j._id, e.target.value)}
                                className="text-[11px] rounded px-2 py-1 border font-medium bg-[#020617] text-white border-slate-700"
                              >
                                <option value="Submitted">Submitted</option>
                                <option value="Under Review">Under Review</option>
                                <option value="Shortlisted">Shortlisted</option>
                                <option value="Interview Scheduled">Interview Scheduled</option>
                                <option value="Rejected">Rejected</option>
                                <option value="Hired">Hired</option>
                              </select>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* APPOINTMENTS MODULE */}
          {activeTab === "appointments" && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white">Appointments & Office Visits ({appointments.length})</h2>
                  <p className="text-xs text-slate-400">Consultation sessions and student interview bookings.</p>
                </div>
                <button
                  onClick={() => downloadCSV("appointments")}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0D9488] hover:bg-[#0f766e] text-white text-xs font-semibold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>

              <div className="bg-[#0B1220] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-slate-900/60 text-slate-400 uppercase font-mono text-[10px] border-b border-slate-800">
                      <tr>
                        <th className="px-4 py-3">Booking ID</th>
                        <th className="px-4 py-3">Type</th>
                        <th className="px-4 py-3">Name & Contact</th>
                        <th className="px-4 py-3">Service / Role</th>
                        <th className="px-4 py-3">Slot / Date</th>
                        <th className="px-4 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {appointments.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="px-4 py-8 text-center text-slate-500">
                            No appointments recorded yet.
                          </td>
                        </tr>
                      ) : (
                        appointments.map((a) => (
                          <tr key={a._id} className="hover:bg-slate-900/40">
                            <td className="px-4 py-3 font-mono font-bold text-[#22D3EE]">{a.bookingId}</td>
                            <td className="px-4 py-3 font-medium text-slate-200">{a.type}</td>
                            <td className="px-4 py-3">
                              <div className="font-semibold text-white">{a.name}</div>
                              <div className="font-mono text-slate-400 text-[11px]">{a.email}</div>
                              <div className="font-mono text-slate-400 text-[11px]">{a.phone}</div>
                            </td>
                            <td className="px-4 py-3 text-slate-200">{a.service}</td>
                            <td className="px-4 py-3 font-mono text-[11px] text-slate-300">
                              {a.visitDate ? `${a.visitDate} (${a.slotTime || ""})` : "On Request"}
                            </td>
                            <td className="px-4 py-3">
                              <select
                                value={a.status}
                                onChange={(e) => handleUpdateApptStatus(a._id, e.target.value)}
                                className="text-[11px] rounded px-2 py-1 border font-medium bg-[#020617] text-white border-slate-700"
                              >
                                <option value="New Inquiry">New Inquiry</option>
                                <option value="Confirmed">Confirmed</option>
                                <option value="Completed">Completed</option>
                                <option value="Cancelled">Cancelled</option>
                              </select>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* SUPPORT TICKETS MODULE */}
          {activeTab === "tickets" && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white">Support Tickets ({tickets.length})</h2>
                  <p className="text-xs text-slate-400">Engineering incidents and client service requests.</p>
                </div>
                <button
                  onClick={() => downloadCSV("tickets")}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0D9488] hover:bg-[#0f766e] text-white text-xs font-semibold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>

              <div className="bg-[#0B1220] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-slate-900/60 text-slate-400 uppercase font-mono text-[10px] border-b border-slate-800">
                      <tr>
                        <th className="px-4 py-3">Ticket ID</th>
                        <th className="px-4 py-3">Reported By</th>
                        <th className="px-4 py-3">Subject & Description</th>
                        <th className="px-4 py-3">Priority</th>
                        <th className="px-4 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {tickets.length === 0 ? (
                        <tr>
                          <td colSpan="5" className="px-4 py-8 text-center text-slate-500">
                            No tickets currently recorded.
                          </td>
                        </tr>
                      ) : (
                        tickets.map((t) => (
                          <tr key={t._id} className="hover:bg-slate-900/40">
                            <td className="px-4 py-3 font-mono font-bold text-[#22D3EE]">{t.ticketId}</td>
                            <td className="px-4 py-3">
                              <div className="font-semibold text-white">{t.name}</div>
                              <div className="font-mono text-slate-400 text-[11px]">{t.email}</div>
                            </td>
                            <td className="px-4 py-3 max-w-sm">
                              <div className="font-semibold text-white">{t.subject}</div>
                              <p className="text-slate-400 text-[11px] truncate">{t.message}</p>
                            </td>
                            <td className="px-4 py-3">
                              <span
                                className={`font-mono text-[10px] px-2 py-0.5 rounded font-bold ${
                                  t.priority === "Critical"
                                    ? "bg-rose-500/10 text-rose-400 border border-rose-500/30"
                                    : t.priority === "High"
                                    ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                                    : "bg-slate-800 text-slate-300"
                                }`}
                              >
                                {t.priority}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <select
                                value={t.status}
                                onChange={(e) => handleUpdateTicketStatus(t.ticketId, e.target.value)}
                                className="text-[11px] rounded px-2 py-1 border font-medium bg-[#020617] text-white border-slate-700"
                              >
                                <option value="Open">Open</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Resolved">Resolved</option>
                                <option value="Closed">Closed</option>
                              </select>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* PARTNERS MODULE */}
          {activeTab === "partners" && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white">Partner Applications ({partners.length})</h2>
                  <p className="text-xs text-slate-400">ISV, SI, and strategic alliance partnership submissions.</p>
                </div>
                <button
                  onClick={() => downloadCSV("partners")}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0D9488] hover:bg-[#0f766e] text-white text-xs font-semibold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>

              <div className="bg-[#0B1220] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-slate-900/60 text-slate-400 uppercase font-mono text-[10px] border-b border-slate-800">
                      <tr>
                        <th className="px-4 py-3">Company</th>
                        <th className="px-4 py-3">Contact Person</th>
                        <th className="px-4 py-3">Type</th>
                        <th className="px-4 py-3">Message</th>
                        <th className="px-4 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {partners.length === 0 ? (
                        <tr>
                          <td colSpan="5" className="px-4 py-8 text-center text-slate-500">
                            No partner applications recorded yet.
                          </td>
                        </tr>
                      ) : (
                        partners.map((p) => (
                          <tr key={p._id} className="hover:bg-slate-900/40">
                            <td className="px-4 py-3 font-semibold text-white">{p.companyName}</td>
                            <td className="px-4 py-3">
                              <div>{p.name}</div>
                              <div className="font-mono text-slate-400 text-[11px]">{p.email}</div>
                              {p.phone && <div className="font-mono text-slate-400 text-[11px]">{p.phone}</div>}
                            </td>
                            <td className="px-4 py-3 text-[#22D3EE]">{p.partnershipType}</td>
                            <td className="px-4 py-3 text-slate-400 text-[11px] max-w-xs truncate">{p.message}</td>
                            <td className="px-4 py-3">
                              <select
                                value={p.status}
                                onChange={(e) => handleUpdatePartnerStatus(p._id, e.target.value)}
                                className="text-[11px] rounded px-2 py-1 border font-medium bg-[#020617] text-white border-slate-700"
                              >
                                <option value="Pending">Pending</option>
                                <option value="Reviewed">Reviewed</option>
                                <option value="Approved">Approved</option>
                                <option value="Declined">Declined</option>
                              </select>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* SUBSCRIBERS MODULE */}
          {activeTab === "subscribers" && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white">Newsletter Subscribers ({subscribers.length})</h2>
                  <p className="text-xs text-slate-400">Verified emails subscribed to engineering updates.</p>
                </div>
                <button
                  onClick={() => downloadCSV("subscribers")}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0D9488] hover:bg-[#0f766e] text-white text-xs font-semibold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>

              <div className="bg-[#0B1220] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-slate-900/60 text-slate-400 uppercase font-mono text-[10px] border-b border-slate-800">
                      <tr>
                        <th className="px-4 py-3">Subscribed Date</th>
                        <th className="px-4 py-3">Email Address</th>
                        <th className="px-4 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {subscribers.length === 0 ? (
                        <tr>
                          <td colSpan="3" className="px-4 py-8 text-center text-slate-500">
                            No subscribers recorded yet.
                          </td>
                        </tr>
                      ) : (
                        subscribers.map((s) => (
                          <tr key={s._id} className="hover:bg-slate-900/40">
                            <td className="px-4 py-3 font-mono text-slate-400 text-[11px]">
                              {new Date(s.createdAt).toLocaleDateString("en-IN")}
                            </td>
                            <td className="px-4 py-3 font-medium text-white font-mono">{s.email}</td>
                            <td className="px-4 py-3">
                              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                                {s.status}
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
