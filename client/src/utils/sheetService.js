// client/src/utils/sheetService.js
import { appointmentAPI } from "./api";

/**
 * Google Sheet Webhook Endpoint for Aparaitech Software Customer Appointments (Secondary Sync)
 */
const DEFAULT_SHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbyrAwjfw8P5zizxmoS5OXyxLdbdtro60KomQlmu9lfHYueZIZHh4f9Omi5T4ThAu2BK/exec";

export const getSheetEndpoint = () => {
  return localStorage.getItem("aparaitech_sheet_webhook") || DEFAULT_SHEET_ENDPOINT;
};

export const setSheetEndpoint = (url) => {
  localStorage.setItem("aparaitech_sheet_webhook", url);
};

export const GOOGLE_SHEET_VIEW_URL =
  "https://docs.google.com/spreadsheets/d/1dJhDkmTINcFksdz76C6DWr4-0Qy-NfNxI7A8fF2xdPQ/edit?usp=sharing";

/**
 * Dispatcher to Google Apps Script Webhook (Secondary channel)
 */
export const dispatchToGoogleSheet = async (record) => {
  const endpoint = getSheetEndpoint();
  if (!endpoint) return false;

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
    console.warn("[Google Sheet Secondary Sync]", err);
  }

  return true;
};

/**
 * Records an appointment booking:
 * 1. PERSISTS TO MONGODB (Primary source of truth via appointmentAPI)
 * 2. Syncs to Google Sheet secondary webhook
 * 3. Caches locally for offline persistence
 */
export const recordAppointmentBooking = async (bookingData) => {
  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const payload = {
    type: "Executive Consultation",
    name: bookingData.name || "",
    email: bookingData.email || "",
    phone: bookingData.phone || "",
    company: bookingData.company || "",
    service: bookingData.service || "Enterprise AI Diagnostic",
    message: bookingData.message || bookingData.notes || "",
    nda: bookingData.nda ? "Yes" : "No",
    source: bookingData.source || "Website Consultation Modal",
  };

  // 1. PRIMARY: Store into MongoDB Database
  const apiResponse = await appointmentAPI.book(payload);

  const savedRecord = {
    id: apiResponse.data?.bookingId || "INQ-" + Date.now().toString(36).toUpperCase(),
    timestamp,
    ...payload,
    status: "New Inquiry",
  };

  // 2. SECONDARY: Dispatch to Google Sheet Webhook (non-blocking)
  dispatchToGoogleSheet({
    ...savedRecord,
    spreadsheetId: "1dJhDkmTINcFksdz76C6DWr4-0Qy-NfNxI7A8fF2xdPQ",
    sheetTab: "Consultations",
  }).catch(() => {});

  // 3. Cache locally as fallback snapshot
  try {
    const existing = JSON.parse(localStorage.getItem("aparaitech_appointments") || "[]");
    existing.unshift(savedRecord);
    localStorage.setItem("aparaitech_appointments", JSON.stringify(existing));
  } catch (err) {
    console.warn("Could not cache appointment locally:", err);
  }

  return savedRecord;
};

export const saveAppointmentToSheet = recordAppointmentBooking;

export const getCachedAppointments = () => {
  try {
    return JSON.parse(localStorage.getItem("aparaitech_appointments") || "[]");
  } catch (e) {
    return [];
  }
};

export const exportAppointmentsToCSV = () => {
  const records = getCachedAppointments();
  if (!records.length) {
    alert("No appointment bookings recorded yet.");
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
    `"${(r.name || "").replace(/"/g, '""')}"`,
    `"${(r.email || "").replace(/"/g, '""')}"`,
    `"${(r.phone || "").replace(/"/g, '""')}"`,
    `"${(r.company || "").replace(/"/g, '""')}"`,
    `"${(r.service || "").replace(/"/g, '""')}"`,
    `"${(r.message || "").replace(/"/g, '""')}"`,
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
 * 1. PERSISTS TO MONGODB (Primary source of truth)
 * 2. Syncs to Google Sheet secondary webhook
 * 3. Caches locally
 */
export const recordStudentVisitBooking = async (visitData) => {
  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const payload = {
    type: "Office Visited",
    name: visitData.name || "",
    candidateName: visitData.name || "",
    email: visitData.email || "",
    phone: visitData.phone || "",
    college: visitData.college || "",
    degree: visitData.degree || "",
    passingYear: visitData.passingYear || "",
    service: `Student Office Visit: ${visitData.role || "In-Person Interview"}`,
    visitDate: visitData.visitDate || "",
    slotDay: visitData.slotDay || "",
    slotTime: visitData.slotTime || "",
    resumeUrl: visitData.resumeUrl || "",
    notes: visitData.notes || "",
    message: `[OFFICE VISIT] Slot: ${visitData.visitDate} (${visitData.slotDay || "Weekday"}) at ${visitData.slotTime} | Role: ${visitData.role} | College: ${visitData.college} (${visitData.degree}, ${visitData.passingYear})`,
    nda: "Yes",
    source: "Student Visit Popup",
  };

  // 1. PRIMARY: Store into MongoDB Database
  const apiResponse = await appointmentAPI.book(payload);

  const savedRecord = {
    id: apiResponse.data?.bookingId || "STU-" + Date.now().toString(36).toUpperCase(),
    timestamp,
    ...payload,
    status: "Confirmed Office Visit",
  };

  // 2. SECONDARY: Dispatch to Google Sheet Webhook (non-blocking)
  dispatchToGoogleSheet({
    ...savedRecord,
    spreadsheetId: "1dJhDkmTINcFksdz76C6DWr4-0Qy-NfNxI7A8fF2xdPQ",
    sheetTab: "Office Visited",
  }).catch(() => {});

  // 3. Cache locally
  try {
    const studentVisits = JSON.parse(localStorage.getItem("aparaitech_student_visits") || "[]");
    studentVisits.unshift(savedRecord);
    localStorage.setItem("aparaitech_student_visits", JSON.stringify(studentVisits));
  } catch (err) {
    console.warn("Could not cache student visit locally:", err);
  }

  return savedRecord;
};

export const getStudentVisits = () => {
  try {
    return JSON.parse(localStorage.getItem("aparaitech_student_visits") || "[]");
  } catch (e) {
    return [];
  }
};
