// client/src/utils/sheetService.js

/**
 * Google Sheet Webhook Endpoint for Aparaitech Software Customer Appointments
 * Connected to live Google Sheet for real-time lead capture.
 */
const DEFAULT_SHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbyusSnV3NCIZtRvNdlGHM6fqwPI3UymNoufnHX2p9_OD9DX3DxTNLiU24j2cZfZbwzUtw/exec";

export const getSheetEndpoint = () => {
  return DEFAULT_SHEET_ENDPOINT;
};

export const setSheetEndpoint = (url) => {
  localStorage.setItem("aparaitech_sheet_webhook", url);
};

// Google Sheet public view link for Aparaitech Software Website Inquiries
export const GOOGLE_SHEET_VIEW_URL =
  "https://docs.google.com/spreadsheets/d/1tMYCOrRboqy8aXjQ1MT9zqkTlJO2h8DRj17CfGwd-f4/edit?usp=sharing";

/**
 * Records an appointment booking:
 * 1. Dispatches data to the Google Sheet Webhook
 * 2. Caches the appointment in localStorage as an immutable backup
 * 3. Also forwards to backend API for database retention
 */
export const recordAppointmentBooking = async (bookingData) => {
  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const record = {
    id: "INQ-" + Date.now().toString(36).toUpperCase(),
    timestamp,
    name: bookingData.name || "",
    email: bookingData.email || "",
    phone: bookingData.phone || "",
    company: bookingData.company || "",
    service: bookingData.service || "Enterprise AI Diagnostic",
    message: bookingData.message || bookingData.notes || "",
    nda: bookingData.nda ? "Yes (Required)" : "No",
    source: bookingData.source || "Website Consultation Modal",
    status: "New Inquiry",
  };

  // 1. Save to local storage cache immediately
  try {
    const existing = JSON.parse(localStorage.getItem("aparaitech_appointments") || "[]");
    existing.unshift(record);
    localStorage.setItem("aparaitech_appointments", JSON.stringify(existing));
  } catch (err) {
    console.warn("Could not cache appointment locally:", err);
  }

  // 2. Dispatch to Google Sheet Webhook via fetch
  const endpoint = getSheetEndpoint();
  try {
    await fetch(endpoint, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(record),
    });
  } catch (error) {
    console.warn("Google Sheet webhook notice (lead safely cached locally):", error);
  }

  // 3. Forward to backend API for database backup
  try {
    const apiBase = import.meta.env.VITE_API_URL || "";
    if (apiBase) {
      await fetch(`${apiBase}/api/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: record.name,
          email: record.email,
          phone: record.phone,
          company: record.company,
          message: `[${record.service}] ${record.message} (Source: ${record.source}, NDA: ${record.nda})`,
        }),
      });
    }
  } catch (backendErr) {
    // Non-blocking
  }

  return record;
};

// Compatibility alias for subpages
export const saveAppointmentToSheet = recordAppointmentBooking;

/**
 * Get all cached appointment records
 */
export const getCachedAppointments = () => {
  try {
    return JSON.parse(localStorage.getItem("aparaitech_appointments") || "[]");
  } catch (e) {
    return [];
  }
};

/**
 * Export cached appointments directly to Excel-compatible CSV file
 */
export const exportAppointmentsToCSV = () => {
  const records = getCachedAppointments();
  if (!records.length) {
    alert("No appointment bookings recorded yet. Once a customer books on the website, records will appear here.");
    return false;
  }

  const headers = [
    "Appointment ID",
    "Date & Time",
    "Customer Name",
    "Work Email",
    "Phone Number",
    "Company / Organization",
    "Service Requested",
    "Message / Operational Challenge",
    "NDA Required",
    "Lead Source",
    "Status",
  ];

  const rows = records.map((r) => [
    `"${r.id}"`,
    `"${r.timestamp}"`,
    `"${(r.name || '').replace(/"/g, '""')}"`,
    `"${(r.email || '').replace(/"/g, '""')}"`,
    `"${(r.phone || '').replace(/"/g, '""')}"`,
    `"${(r.company || '').replace(/"/g, '""')}"`,
    `"${(r.service || '').replace(/"/g, '""')}"`,
    `"${(r.message || '').replace(/"/g, '""')}"`,
    `"${r.nda}"`,
    `"${r.source}"`,
    `"${r.status}"`,
  ]);

  const csvContent =
    "data:text/csv;charset=utf-8," +
    [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute(
    "download",
    `Aparaitech_Customer_Appointments_${new Date().toISOString().slice(0, 10)}.csv`
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  return true;
};
