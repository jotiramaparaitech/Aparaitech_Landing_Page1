// client/src/utils/sheetService.js

/**
 * Google Sheet Webhook Endpoint for Aparaitech Software Customer Appointments
 * Connected to live Google Sheet for real-time lead capture.
 */
const DEFAULT_SHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbyrAwjfw8P5zizxmoS5OXyxLdbdtro60KomQlmu9lfHYueZIZHh4f9Omi5T4ThAu2BK/exec";

export const getSheetEndpoint = () => {
  return DEFAULT_SHEET_ENDPOINT;
};

export const setSheetEndpoint = (url) => {
  localStorage.setItem("aparaitech_sheet_webhook", url);
};

// Google Sheet public view link for Aparaitech Software (Pune Office Visit & Customer Inquiries)
export const GOOGLE_SHEET_VIEW_URL =
  "https://docs.google.com/spreadsheets/d/1dJhDkmTINcFksdz76C6DWr4-0Qy-NfNxI7A8fF2xdPQ/edit?usp=sharing";

/**
 * Robust dispatcher to Google Apps Script Webhook.
 * 1. Sends text/plain JSON payload (safelisted for no-cors, delivered in e.postData.contents).
 * 2. Also sends URL-encoded form data (delivered in e.parameter).
 */
export const dispatchToGoogleSheet = async (record) => {
  const endpoint = getSheetEndpoint();
  if (!endpoint) return false;

  // 1. Send JSON with text/plain (CORS safelisted)
  try {
    await fetch(endpoint, {
      method: "POST",
      mode: "no-cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(record),
    });
  } catch (err) {
    console.warn("Google Sheet dispatch error (JSON):", err);
  }

  // 2. Also send as URL-encoded parameters so e.parameter is populated
  try {
    const params = new URLSearchParams();
    Object.keys(record).forEach((key) => {
      if (record[key] !== undefined && record[key] !== null) {
        params.append(key, String(record[key]));
      }
    });

    await fetch(endpoint, {
      method: "POST",
      mode: "no-cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });
  } catch (err) {
    // Non-blocking
  }

  return true;
};

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
    spreadsheetId: "1dJhDkmTINcFksdz76C6DWr4-0Qy-NfNxI7A8fF2xdPQ",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1dJhDkmTINcFksdz76C6DWr4-0Qy-NfNxI7A8fF2xdPQ/edit?usp=sharing",
    sheetTab: "Consultations",
    type: "Executive Consultation",
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
  await dispatchToGoogleSheet(record);

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

/**
 * Records a student / candidate office visit booking for interview / technical assessment:
 * 1. Dispatches data to Google Sheet Webhook
 * 2. Caches in localStorage ('aparaitech_student_visits' and 'aparaitech_appointments')
 * 3. Returns the saved record
 */
export const recordStudentVisitBooking = async (visitData) => {
  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const record = {
    id: "STU-" + Date.now().toString(36).toUpperCase(),
    timestamp,
    spreadsheetId: "1dJhDkmTINcFksdz76C6DWr4-0Qy-NfNxI7A8fF2xdPQ",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1dJhDkmTINcFksdz76C6DWr4-0Qy-NfNxI7A8fF2xdPQ/edit?usp=sharing",
    sheetTab: "Office Visited",
    type: "Office Visited",
    name: visitData.name || "",
    candidateName: visitData.name || "",
    email: visitData.email || "",
    phone: visitData.phone || "",
    college: visitData.college || "",
    degree: visitData.degree || "",
    passingYear: visitData.passingYear || "",
    role: visitData.role || "Software Engineer / AI Trainee Interview",
    company: `${visitData.college || 'Candidate'} [${visitData.degree || ''} ${visitData.passingYear || ''}]`.trim(),
    service: `Student Office Visit: ${visitData.role || 'In-Person Interview'}`,
    visitDate: visitData.visitDate || "",
    slotDay: visitData.slotDay || "",
    slotTime: visitData.slotTime || "",
    resumeUrl: visitData.resumeUrl || "",
    notes: visitData.notes || "",
    message: `[OFFICE VISIT & INTERVIEW] Slot: ${visitData.visitDate} (${visitData.slotDay || 'Weekday'}) at ${visitData.slotTime} | Role: ${visitData.role} | College: ${visitData.college} (${visitData.degree}, ${visitData.passingYear}) | Resume/Link: ${visitData.resumeUrl || 'N/A'} | Notes: ${visitData.notes || 'None'}`,
    nda: "Candidate Non-Disclosure",
    source: "Student Visit Popup (Right-Bottom)",
    status: "Confirmed Office Visit",
  };

  // 1. Cache to student visits & global appointments
  try {
    const studentVisits = JSON.parse(localStorage.getItem("aparaitech_student_visits") || "[]");
    studentVisits.unshift(record);
    localStorage.setItem("aparaitech_student_visits", JSON.stringify(studentVisits));

    const globalAppts = JSON.parse(localStorage.getItem("aparaitech_appointments") || "[]");
    globalAppts.unshift(record);
    localStorage.setItem("aparaitech_appointments", JSON.stringify(globalAppts));
  } catch (err) {
    console.warn("Could not cache student visit locally:", err);
  }

  // 2. Dispatch to Google Sheet Webhook
  await dispatchToGoogleSheet(record);

  // 3. Optional backend API forward
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
          message: record.message,
        }),
      });
    }
  } catch (e) {
    // Non-blocking
  }

  return record;
};

export const getStudentVisits = () => {
  try {
    return JSON.parse(localStorage.getItem("aparaitech_student_visits") || "[]");
  } catch (e) {
    return [];
  }
};

export const exportStudentVisitsToCSV = () => {
  const records = getStudentVisits();
  if (!records.length) {
    alert("No student visit bookings recorded yet. Once a student books, records will appear here.");
    return false;
  }

  const headers = [
    "Booking ID",
    "Booking Timestamp",
    "Student Name",
    "Email Address",
    "Phone / WhatsApp",
    "College / University",
    "Degree / Branch",
    "Passing Year",
    "Interview Role / Purpose",
    "Visit Date (Mon-Fri)",
    "Day of Week",
    "Time Slot",
    "Resume / Portfolio URL",
    "Detailed Summary",
    "Status",
  ];

  const rows = records.map((r) => [
    `"${r.id}"`,
    `"${r.timestamp}"`,
    `"${(r.name || '').replace(/"/g, '""')}"`,
    `"${(r.email || '').replace(/"/g, '""')}"`,
    `"${(r.phone || '').replace(/"/g, '""')}"`,
    `"${(r.college || '').replace(/"/g, '""')}"`,
    `"${(r.degree || '').replace(/"/g, '""')}"`,
    `"${(r.passingYear || '').replace(/"/g, '""')}"`,
    `"${(r.role || '').replace(/"/g, '""')}"`,
    `"${r.visitDate || ''}"`,
    `"${r.slotDay || ''}"`,
    `"${r.slotTime || ''}"`,
    `"${(r.resumeUrl || '').replace(/"/g, '""')}"`,
    `"${(r.message || '').replace(/"/g, '""')}"`,
    `"${r.status || 'Confirmed'}"`,
  ]);

  const csvContent =
    "data:text/csv;charset=utf-8," +
    [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute(
    "download",
    `Aparaitech_Student_Office_Visits_${new Date().toISOString().slice(0, 10)}.csv`
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  return true;
};

