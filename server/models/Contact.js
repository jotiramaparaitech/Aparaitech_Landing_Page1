// models/Contact.js
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    subject: {
        type: String,
        required: false,
        trim: true
    },
    priority: {
        type: String,
        enum: ['Low', 'Normal', 'High', 'Critical'],
        default: 'Normal'
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// ✅ SERVERLESS SAFE EXPORT (THIS FIXES 500 ERROR)
export default mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema);
