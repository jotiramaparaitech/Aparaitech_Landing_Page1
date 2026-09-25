# APARAITECH Landing Page - MERN Stack

A modern, responsive landing page for APARAITECH built with the MERN stack (MongoDB, Express, React, Node.js) and styled with Tailwind CSS. The project uses Vite for fast development and optimized builds.

## Features

- 🎨 Modern, beautiful UI with purple/blue gradient theme using Tailwind CSS
- 📱 Fully responsive design
- 🤖 Animated robot hero section
- 📧 Contact form with backend integration
- 🚀 Fast development with Vite (no webpack warnings)
- 🎯 SEO-friendly structure
- ⚡ Tailwind CSS for styling (no external CSS files)
- 🔒 Secure API endpoints with authentication
- 🎭 Zero warnings - clean development experience

## Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS, React Icons
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Development:** Independent client and server setups

## Project Structure

```
aparaitech-landing-page/
├── client/                 # React frontend with Vite & Tailwind CSS
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components (all use Tailwind CSS)
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── WhyChooseUs.jsx
│   │   │   ├── Partners.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.cjs
│   └── package.json
├── server/                # Express backend
│   ├── models/           # MongoDB models
│   │   └── Contact.js
│   ├── routes/           # API routes
│   │   └── contact.js
│   ├── middleware/       # Authentication middleware
│   │   └── auth.js
│   ├── index.js          # Server entry point
│   ├── env.example
│   └── package.json
└── README.md
```

## Installation

### Client Setup

1. **Navigate to client directory**
   ```bash
   cd client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The client will run on `http://localhost:3000`

### Server Setup

1. **Navigate to server directory**
   ```bash
   cd server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the `server` folder (copy from `env.example`):
     ```env
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/aparaitech
     ADMIN_API_KEY=your-secure-admin-key-change-in-production
     ```
     Or use MongoDB Atlas connection string:
     ```env
     PORT=5000
     MONGODB_URI=your_mongodb_atlas_connection_string
     ADMIN_API_KEY=your-secure-admin-key-change-in-production
     ```
     
   **Note:** `ADMIN_API_KEY` is required for accessing the `/api/contact/all` endpoint. Change it to a secure random string in production.

4. **Start the server**
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:5000`

## Running the Application

**Important:** Client and server run independently. You need to start both in separate terminal windows:

### Terminal 1 - Client
```bash
cd client
npm run dev
```
The client will run on `http://localhost:3000` with Vite's fast HMR (Hot Module Replacement)

### Terminal 2 - Server
```bash
cd server
npm run dev
```
The server will run on `http://localhost:5000` with nodemon (auto-restarts on file changes)

## API Endpoints

### Public Endpoints

- `POST /api/contact/submit` - Submit contact form (public)
  ```bash
  curl -X POST http://localhost:5000/api/contact/submit \
    -H "Content-Type: application/json" \
    -d '{"fullName":"John Doe","email":"john@example.com","message":"Hello"}'
  ```

- `GET /api/health` - Health check endpoint (public)
  ```bash
  curl http://localhost:5000/api/health
  ```

### Admin Endpoints (Requires Authentication)

- `GET /api/contact/all` - Get all contact submissions (admin only - requires API key)

#### Admin Endpoint Authentication

The `/api/contact/all` endpoint requires authentication using an API key. Include the API key in the request headers:

```bash
# Using X-API-Key header
curl -H "X-API-Key: your-admin-api-key" http://localhost:5000/api/contact/all

# Or using Authorization header
curl -H "Authorization: Bearer your-admin-api-key" http://localhost:5000/api/contact/all
```

**Security Note:** The admin endpoint is protected and will return:
- `401 Unauthorized` if no API key is provided
- `403 Forbidden` if an invalid API key is provided

## Building for Production

### Client
```bash
cd client
npm run build
```

This will create an optimized production build in the `client/dist` folder using Vite's build process.

### Server
The server can be run in production mode using:
```bash
cd server
npm start
```

## Environment Variables

Create a `.env` file in the `server` directory (see `server/env.example`):

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/aparaitech
ADMIN_API_KEY=your-secure-admin-key-change-in-production
```

## Styling

This project uses **Tailwind CSS** for all styling. All components use Tailwind utility classes instead of separate CSS files. The design follows a purple/blue gradient theme with modern glassmorphism effects.

- All components are in `.jsx` format
- Tailwind configuration is in `tailwind.config.js`
- PostCSS configuration is in `postcss.config.cjs`

## Development Features

- ⚡ **Vite** - Lightning-fast development server and optimized builds
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔥 **Hot Module Replacement** - Instant updates during development
- 📦 **Zero Warnings** - Clean development experience
- 🔒 **Secure API** - Protected admin endpoints with authentication
- 🚀 **Optimized Builds** - Fast production builds with Vite

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Scripts

### Client Scripts
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm start` - Alias for `npm run dev`

### Server Scripts
- `npm run dev` - Start server with nodemon (auto-restart)
- `npm start` - Start server with Node.js

## License

ISC

## Contact

For any questions or support, please contact info@aparaitech.com
