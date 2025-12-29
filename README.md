# APARAITECH Landing Page - MERN Stack

A modern, responsive landing page for APARAITECH built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- 🎨 Modern, beautiful UI with purple/blue gradient theme
- 📱 Fully responsive design
- 🤖 Animated robot hero section
- 📧 Contact form with backend integration
- 🚀 Fast and optimized performance
- 🎯 SEO-friendly structure

## Tech Stack

- **Frontend:** React 18, CSS3, React Icons
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Development:** Concurrently (for running both servers)

## Project Structure

```
aparaitech-landing-page/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
├── server/                # Express backend
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── index.js          # Server entry point
│   └── package.json
├── package.json          # Root package.json
└── README.md
```

## Installation

1. **Clone the repository**
   ```bash
   cd Aparaitech_Landing_Page
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```
   
   Or install separately:
   ```bash
   # Install root dependencies
   npm install
   
   # Install server dependencies
   cd server
   npm install
   
   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Set up MongoDB**
   - Make sure MongoDB is installed and running on your system
   - Or use MongoDB Atlas (cloud database)
   - Create a `.env` file in the `server` folder:
     ```
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/aparaitech
     ```
     Or for MongoDB Atlas:
     ```
     MONGODB_URI=your_mongodb_atlas_connection_string
     ```

## Running the Application

### Development Mode (Both Frontend & Backend)

From the root directory:
```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:5000`
- Frontend development server on `http://localhost:3000`

### Run Separately

**Backend only:**
```bash
npm run server
# or
cd server
npm run dev
```

**Frontend only:**
```bash
npm run client
# or
cd client
npm start
```

## API Endpoints

- `POST /api/contact/submit` - Submit contact form
- `GET /api/contact/all` - Get all contact submissions (for admin)
- `GET /api/health` - Health check endpoint

## Contact Form Submission

The contact form sends data to the backend API which stores it in MongoDB. Make sure MongoDB is running before submitting the form.

## Building for Production

```bash
npm run build
```

This will create an optimized production build in the `client/build` folder.

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

## License

ISC

## Contact

For any questions or support, please contact info@aparaitech.com

