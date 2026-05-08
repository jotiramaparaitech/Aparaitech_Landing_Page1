import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Partner API endpoints
export const partnerAPI = {
  apply: async (partnerData) => {
    try {
      const response = await api.post('/api/partner/apply', partnerData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

// Contact API endpoints
export const contactAPI = {
  submit: async (contactData) => {
    try {
      const response = await api.post('/api/contacts', contactData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  submitSupport: async (supportData) => {
    try {
      const response = await api.post('/api/support-tickets', supportData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getSupportTickets: async (filters = {}) => {
    try {
      const params = new URLSearchParams(filters).toString();
      const url = params ? `/api/support-tickets?${params}` : '/api/support-tickets';
      const response = await api.get(url);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  updateTicketStatus: async (ticketId, status) => {
    try {
      const response = await api.put(`/api/support-tickets/${ticketId}/status`, { status });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

// Subscribe API endpoints
export const subscribeAPI = {
  subscribe: async (email) => {
    try {
      const response = await api.post('/api/subscribe', { email });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default api;
