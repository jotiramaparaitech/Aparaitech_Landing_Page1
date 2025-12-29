# APARAITECH Landing Page - MERN Stack

A modern, responsive landing page for APARAITECH built with the MERN stack (MongoDB, Express, React, Node.js) and styled with Tailwind CSS.

## Features

- 🎨 Modern, beautiful UI with purple/blue gradient theme using Tailwind CSS
- 📱 Fully responsive design
- 🤖 Animated robot hero section
- 📧 Contact form with backend integration
- 🚀 Fast and optimized performance
- 🎯 SEO-friendly structure
- ⚡ Tailwind CSS for styling (no external CSS files)

## Tech Stack

- **Frontend:** React 18, Tailwind CSS, React Icons
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Development:** Independent client and server setups

## Project Structure

```
aparaitech-landing-page/
├── client/                 # React frontend with Tailwind CSS
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components (all use Tailwind CSS)
│   │   ├── App.js
│   │   └── index.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
├── server/                # Express backend
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── index.js          # Server entry point
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
   npm start
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
   - Create a `.env` file in the `server` folder:
     ```env
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/aparaitech
     ```
     Or use MongoDB Atlas connection string:
     ```env
     MONGODB_URI=your_mongodb_atlas_connection_string
     ```

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
npm start
```

### Terminal 2 - Server
```bash
cd server
npm run dev
```

## API Endpoints

- `POST /api/contact/submit` - Submit contact form
- `GET /api/contact/all` - Get all contact submissions (for admin)
- `GET /api/health` - Health check endpoint

## Contact Form Submission

The contact form sends data to the backend API which stores it in MongoDB. Make sure MongoDB is running before submitting the form.

## Building for Production

### Client
```bash
cd client
npm run build
```

This will create an optimized production build in the `client/build` folder.

### Server
The server can be run in production mode using:
```bash
cd server
npm start
```

## Environment Variables

Create a `.env` file in the `server` directory:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/aparaitech
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Styling

This project uses **Tailwind CSS** for all styling. All components use Tailwind utility classes instead of separate CSS files. The design follows a purple/blue gradient theme with modern glassmorphism effects.

## License

ISC

## Contact

For any questions or support, please contact info@aparaitech.com
