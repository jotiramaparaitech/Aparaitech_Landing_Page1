// server/config/db.js
import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const isDbConnected = () => {
  return mongoose.connection.readyState === 1;
};

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || process.env.MONGO_URL;

  if (!uri) {
    const errorMsg = "MongoDB URI not configured. Please set MONGODB_URI or MONGO_URL in server/.env";
    console.error(`[Database Error] ${errorMsg}`);
    throw new Error(errorMsg);
  }

  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 10000,
      maxPoolSize: 10,
    };

    console.log(`[Database] Attempting connection to MongoDB...`);
    cached.promise = mongoose.connect(uri, opts)
      .then((mongooseInstance) => {
        console.log(`[Database] Successfully connected to MongoDB: ${mongooseInstance.connection.host || 'Remote Cluster'}/${mongooseInstance.connection.name}`);
        return mongooseInstance;
      })
      .catch((err) => {
        cached.promise = null;
        console.error(`[Database Connection Error]: ${err.message}`);
        throw err;
      });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (err) {
    cached.promise = null;
    throw err;
  }
};

export default connectDB;
