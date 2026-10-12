// client/src/utils/api.js
import axios from "axios";

export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach Authorization token if available in localStorage
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("aparaitech_admin_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Partner API endpoints
export const partnerAPI = {
  apply: async (partnerData) => {
    try {
      const response = await api.post("/api/partner/apply", partnerData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: error.message };
    }
  },
};

// Contact & Support API endpoints
export const contactAPI = {
  submit: async (contactData) => {
    try {
      const response = await api.post("/api/contacts", contactData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: error.message };
    }
  },
  submitSupport: async (supportData) => {
    try {
      const response = await api.post("/api/support-tickets", supportData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: error.message };
    }
  },
  checkSupportStatus: async (ticketId, email) => {
    try {
      const response = await api.get(`/api/support-tickets/status/${encodeURIComponent(ticketId)}`, {
        params: { email },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: error.message };
    }
  },
};

// Career & Job Application API
export const careerAPI = {
  apply: async (formData) => {
    try {
      const response = await api.post("/api/careers/apply", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: error.message };
    }
  },
};

// Appointment & Consultation Booking API
export const appointmentAPI = {
  book: async (bookingData) => {
    try {
      const response = await api.post("/api/appointments", bookingData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: error.message };
    }
  },
};

// Subscribe API endpoints
export const subscribeAPI = {
  subscribe: async (email) => {
    try {
      const response = await api.post("/api/subscribe", { email });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: error.message };
    }
  },
};

// Admin Management APIs
export const adminAPI = {
  login: async (username, password) => {
    const response = await api.post("/api/auth/login", { username, password });
    if (response.data?.token) {
      localStorage.setItem("aparaitech_admin_token", response.data.token);
      localStorage.setItem("aparaitech_admin_user", JSON.stringify(response.data.user));
    }
    return response.data;
  },
  logout: () => {
    localStorage.removeItem("aparaitech_admin_token");
    localStorage.removeItem("aparaitech_admin_user");
  },
  getCurrentUser: async () => {
    const response = await api.get("/api/auth/me");
    return response.data;
  },
  getStats: async () => {
    const response = await api.get("/api/admin/stats");
    return response.data;
  },
  getContacts: async (params) => {
    const response = await api.get("/api/contacts", { params });
    return response.data;
  },
  updateContactStatus: async (id, status) => {
    const response = await api.patch(`/api/contacts/${id}/status`, { status });
    return response.data;
  },
  deleteContact: async (id) => {
    const response = await api.delete(`/api/contacts/${id}`);
    return response.data;
  },
  getJobApplications: async (params) => {
    const response = await api.get("/api/careers/applications", { params });
    return response.data;
  },
  updateApplicationStatus: async (id, status) => {
    const response = await api.patch(`/api/careers/applications/${id}/status`, { status });
    return response.data;
  },
  deleteApplication: async (id) => {
    const response = await api.delete(`/api/careers/applications/${id}`);
    return response.data;
  },
  getAppointments: async (params) => {
    const response = await api.get("/api/appointments", { params });
    return response.data;
  },
  updateAppointmentStatus: async (id, status) => {
    const response = await api.patch(`/api/appointments/${id}/status`, { status });
    return response.data;
  },
  deleteAppointment: async (id) => {
    const response = await api.delete(`/api/appointments/${id}`);
    return response.data;
  },
  getSupportTickets: async (params) => {
    const response = await api.get("/api/support-tickets", { params });
    return response.data;
  },
  updateTicketStatus: async (ticketId, data) => {
    const response = await api.patch(`/api/support-tickets/${ticketId}/status`, data);
    return response.data;
  },
  deleteTicket: async (ticketId) => {
    const response = await api.delete(`/api/support-tickets/${ticketId}`);
    return response.data;
  },
  getPartners: async (params) => {
    const response = await api.get("/api/partner", { params });
    return response.data;
  },
  updatePartnerStatus: async (id, status) => {
    const response = await api.patch(`/api/partner/${id}/status`, { status });
    return response.data;
  },
  deletePartner: async (id) => {
    const response = await api.delete(`/api/partner/${id}`);
    return response.data;
  },
  getSubscribers: async (params) => {
    const response = await api.get("/api/subscribe", { params });
    return response.data;
  },
  deleteSubscriber: async (id) => {
    const response = await api.delete(`/api/subscribe/${id}`);
    return response.data;
  },
  getExportUrl: (collection) => {
    return `${API_BASE_URL}/api/admin/export/${collection}`;
  },
};

export default api;
