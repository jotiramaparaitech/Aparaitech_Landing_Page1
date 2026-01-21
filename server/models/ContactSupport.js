import mongoose from "mongoose";

const contactSupportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    subject: {
        type: String,
        required: true,
        trim: true
    },
    priority: {
        type: String,
        enum: ['Low', 'Normal', 'High', 'Critical'],
        default: 'Normal'
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Open', 'In Progress', 'Resolved', 'Closed'],
        default: 'Open'
    },
    ticketId: {
        type: String,
        unique: true
    }
}, { timestamps: true });

const ContactSupport = mongoose.model("ContactSupport", contactSupportSchema);

export default ContactSupport;
