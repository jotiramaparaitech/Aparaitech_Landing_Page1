# APARAITECH SOFTWARE — Enterprise Full-Stack Platform (MERN)

Production-ready, high-performance website and enterprise platform for **APARAITECH SOFTWARE**, built on the modern MERN stack (MongoDB, Express.js, React 18, Node.js) with Vite, Tailwind CSS, Framer Motion, and secure JWT-authenticated administration.

---

## 🏢 Official Company Information

- **Company:** APARAITECH SOFTWARE
- **Registered Office:** Office 122, Gera Imperial, Opposite Wipro Circle, Hinjawadi Phase 2, Pune, Maharashtra – 411057, India
- **Official HR Email:** [hr@info.aparaitech.org](mailto:hr@info.aparaitech.org)
- **General & AI Inquiries:** [info@ai.aparaitech.org](mailto:info@ai.aparaitech.org)
- **WhatsApp & Phone:** [+91 9158852129](https://wa.me/919158852129) / +91 82618 40199
- **Google Maps Location:** [View on Google Maps](https://maps.google.com/?q=Office+122+Gera+Imperial+Opposite+Wipro+Circle+Hinjawadi+Phase+2+Pune+Maharashtra+411057)

---

## 🚀 Key Architectural Improvements & Features

1. **Persistent MongoDB Database Storage (Primary Source of Truth)**
   - All forms (`contacts`, `jobApplications`, `appointments`, `supportTickets`, `partners`, `subscribers`) persist directly and permanently to MongoDB.
   - Robust Mongoose connection pooling with fallback reconnects and timeout protections (`bufferCommands: false`, `serverSelectionTimeoutMS: 5000`).
   - Seamless dual support for `MONGODB_URI` and `MONGO_URL` across local and serverless deployments.

2. **Full Form Data Flow & Real Confirmation**
   - **Contact Inquiries:** Validates inputs, saves to MongoDB `contacts`, triggers non-blocking auto-reply notification email.
   - **Career Applications:** Supports multipart `FormData` uploads for PDF/DOC/DOCX resumes (up to 5MB), saves file references to server storage (`uploads/resumes/`), and stores application metadata into `jobApplications`.
   - **Consultation & Student Office Visits:** Generates unique tracking IDs (`INQ-...` or `STU-...`), verifies weekdays, records to MongoDB `appointments`, and optionally dispatches to secondary Google Sheet webhooks asynchronously.
   - **Support Tickets:** Generates unique ticket references (`TKT-xxxxx`), stores in `supportTickets`, and provides a public real-time tracking lookup widget.
   - **Partnership Intake:** Stores technology and strategic alliance proposals into `partners`.
   - **Newsletter Subscription:** Normalizes and stores subscriptions in `subscribers` with duplicate-prevention idempotence.

3. **Secure Administrative Control Plane (`/admin`)**
   - **Protected Authentication:** Bcrypt password hashing and JWT token verification.
   - **Overview Dashboard:** Aggregated database counts, pending action badges, and recent activity feeds.
   - **Record Management:** Search, status filtering, and live status updating for all 6 modules.
   - **Candidate Resume Access:** Secure authenticated resume streaming.
   - **One-Click CSV Export:** Generates standardized CSV exports for any dataset (`contacts`, `jobs`, `appointments`, `tickets`, `partners`, `subscribers`).

4. **Enterprise UI/UX Redesign**
   - Styled with a modern tech color palette: **Deep Navy (`#0B1220`)**, **Dark Background (`#020617`)**, **Corporate Teal (`#0D9488`)**, and **Electric Cyan (`#22D3EE`)**.
   - Typography powered by **Inter** and **JetBrains Mono**.
   - Clean, lightweight animations with Framer Motion and Lucide icons.
   - Fully responsive design across mobile phones, tablets, laptops, and ultra-wide screens.

---

## 🛠️ Technology Stack

- **Frontend:** React 18, Vite 7, Tailwind CSS, React Router 7, Framer Motion, Axios, React Hot Toast, Lucide Icons.
- **Backend:** Node.js, Express.js 5, MongoDB / Mongoose, Multer (file uploads), JWT, BcryptJS, Helmet (security headers), Express Rate Limit, Nodemailer.
- **Integrations:** Google Apps Script / Google Sheets (Secondary webhook sync).

---

## 📂 Project Structure

```
Aparaitech_Landing_Page1/
├── client/                     # React Frontend (Vite + Tailwind CSS)
│   ├── public/
│   │   ├── robots.txt          # Production crawler directives
│   │   ├── sitemap.xml         # Production SEO sitemap
│   │   └── aparaitech_logo.jpg
│   ├── src/
│   │   ├── components/
│   │   │   ├── admin/          # Enterprise Admin Portal
│   │   │   │   ├── AdminLogin.jsx
│   │   │   │   └── AdminDashboard.jsx
│   │   │   ├── pages/          # Full page components (Services, Careers, Support, etc.)
│   │   │   ├── Header.jsx      # Navigation header & consultation modal
│   │   │   ├── Footer.jsx      # Verified company address, newsletter & admin link
│   │   │   ├── ContactSection.jsx
│   │   │   └── StudentVisitWidget.jsx
│   │   ├── utils/
│   │   │   ├── api.js          # Centralized API client & admin methods
│   │   │   └── sheetService.js # DB-first booking handler with secondary sheet sync
│   │   ├── App.jsx             # Router definitions & conditional layouts
│   │   ├── index.css           # Inter typography & custom brand scrollbar
│   │   └── main.jsx
│   ├── .env                    # Frontend environment variables
│   ├── .env.example
│   └── package.json
├── server/                     # Express Backend API
│   ├── config/
│   │   └── db.js               # Robust MongoDB connection pooling
│   ├── controllers/            # Validated business logic controllers
│   │   ├── adminController.js
│   │   ├── appointmentController.js
│   │   ├── authController.js
│   │   ├── careerController.js
│   │   ├── contactController.js
│   │   ├── contactSupportController.js
│   │   ├── partnerController.js
│   │   └── subscribeController.js
│   ├── middleware/
│   │   ├── auth.js             # JWT verification & role authorization
│   │   └── upload.js           # Multer resume storage with MIME validation
│   ├── models/                 # Mongoose schemas with indexes
│   │   ├── AdminUser.js
│   │   ├── Appointment.js
│   │   ├── Contact.js
│   │   ├── ContactSupport.js
│   │   ├── JobApplication.js
│   │   ├── Partner.js
│   │   └── Subscriber.js
│   ├── routes/                 # Express API routes
│   ├── uploads/resumes/        # Safe file storage for applicant resumes
│   ├── server.js               # Entry point with Helmet, CORS & Rate Limiting
│   ├── .env                    # Backend environment variables
│   ├── .env.example
│   └── package.json
├── vercel.json                 # Vercel deployment with API route protection
├── package.json                # Root convenience scripts
└── README.md
```

---

## ⚡ Quickstart: Local Development

### 1. Prerequisites
- **Node.js**: v18+ (v20+ recommended)
- **MongoDB**: Local MongoDB instance or free [MongoDB Atlas Cluster](https://www.mongodb.com/atlas)

### 2. Environment Variables Configuration

#### Backend (`server/.env`):
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/aparaitech
JWT_SECRET=aparaitech_secure_secret_key_2026

# Optional SMTP Configuration (For email auto-replies)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=
SMTP_PASS=
FROM_NAME=APARAITECH
FROM_EMAIL=
```

#### Frontend (`client/.env`):
```env
VITE_API_URL=http://localhost:5000
```

---

### 3. Running Step by Step

#### **Terminal 1 — Backend Server:**
```powershell
cd server
npm install
npm start
```
*Backend runs on: `http://localhost:5000`*

#### **Terminal 2 — Frontend Client:**
```powershell
cd client
npm install
npm run dev
```
*Frontend runs on: `http://localhost:3000`*

#### **Convenience Scripts from Root Directory:**
From `Aparaitech_Landing_Page1/`:
- `npm run client` — Starts client Vite server
- `npm run server` — Starts Express backend
- `npm run build` — Builds frontend for production

---

## 🔐 Admin Console Access

1. Open your browser to: [**http://localhost:3000/admin/login**](http://localhost:3000/admin/login)
2. **Default Superadmin Credentials:**
   - **Username:** `admin`
   - **Password:** `Admin@Aparaitech2026`
3. *(If initializing for the first time)*: Click the **"First time setup? Initialize Superadmin"** button on the login screen to generate the account in MongoDB.
4. Access the full dashboard at [**http://localhost:3000/admin**](http://localhost:3000/admin) to view real-time statistics, review candidates, inspect resumes, and download CSV reports.

---

## 🌐 API Endpoints Reference

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/health` | Public | System status and MongoDB connection check |
| `POST` | `/api/contacts` | Public | Submit contact / consultation inquiry |
| `POST` | `/api/careers/apply` | Public | Submit job application (multipart resume upload) |
| `POST` | `/api/appointments` | Public | Book consultation or student office visit |
| `POST` | `/api/support-tickets` | Public | Submit new support ticket |
| `GET` | `/api/support-tickets/status/:ticketId` | Public | Track ticket status by Ticket ID |
| `POST` | `/api/partner/apply` | Public | Submit partnership application |
| `POST` | `/api/subscribe` | Public | Subscribe to newsletter |
| `POST` | `/api/auth/login` | Public | Admin login (returns JWT token) |
| `POST` | `/api/auth/setup` | Public | One-time initial admin setup |
| `GET` | `/api/admin/stats` | Protected | Aggregated database metrics |
| `GET` | `/api/admin/export/:collection` | Protected | Stream CSV export for specified collection |
| `GET` | `/api/contacts` | Protected | List and search contacts |
| `PATCH`| `/api/contacts/:id/status` | Protected | Update inquiry status |
| `GET` | `/api/careers/applications` | Protected | List and search career applications |
| `GET` | `/api/careers/resume/:filename` | Protected | Stream candidate resume |
| `PATCH`| `/api/careers/applications/:id/status`| Protected | Update application status |
| `GET` | `/api/appointments` | Protected | List appointments and office visits |
| `PATCH`| `/api/appointments/:id/status` | Protected | Update appointment status |
| `GET` | `/api/support-tickets` | Protected | List support tickets |
| `PATCH`| `/api/support-tickets/:ticketId/status`| Protected | Update support ticket status |
| `GET` | `/api/partner` | Protected | List partner applications |
| `PATCH`| `/api/partner/:id/status` | Protected | Update partner status |
| `GET` | `/api/subscribe` | Protected | List newsletter subscribers |

---

## 🚢 Deployment Guide

### Deploying on Vercel:
1. Connect the repository to Vercel.
2. In Project Settings, set Root Directory to `Aparaitech_Landing_Page1`.
3. Set the Environment Variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection URI
   - `JWT_SECRET`: A secure random secret string
4. The provided `vercel.json` ensures frontend client routes serve `index.html` while all `/api/*` routes are handled by the serverless Node function in `server/server.js`.

### Deploying Backend on Render / Railway / Docker:
1. Deploy `server/` as a Node.js web service.
2. Set build command: `npm install`
3. Set start command: `node server.js`
4. Set environment variable `VITE_API_URL` on the frontend to point to your live backend domain.
