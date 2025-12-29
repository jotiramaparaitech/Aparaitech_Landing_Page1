# Quick Setup Guide

## Important Notes

- **Always run `npm run dev` from the ROOT directory** (where the main `package.json` is), NOT from the `client` folder
- The `dev` script is defined in the root `package.json`, not in `client/package.json`

## Installation (if not already done)

```bash
# From the root directory
npm install
npm run install-all
```

## Running the Application

### Option 1: Run both Frontend and Backend together (Recommended)
```bash
# From the root directory
npm run dev
```

This will start:
- Backend server on `http://localhost:5000`
- Frontend React app on `http://localhost:3000`

### Option 2: Run separately

**Backend only:**
```bash
# From the root directory
npm run server
```

**Frontend only:**
```bash
# From the root directory
npm run client
```

### Option 3: Run from individual folders

**Backend:**
```bash
cd server
npm run dev
```

**Frontend:**
```bash
cd client
npm start
```

## MongoDB Setup

Before running, make sure MongoDB is running, or create a `.env` file in the `server` folder:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/aparaitech
```

Or use MongoDB Atlas connection string if using cloud database.

## Troubleshooting

- If `react-scripts` is not found, run: `cd client && npm install`
- If you see port conflicts, make sure nothing is running on ports 3000 or 5000
- Make sure you're in the correct directory when running commands

