import mongoose from "mongoose";

const partnerSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
});

// MongoDB me "partners" collection banega
const Partner = mongoose.model("Partner", partnerSchema);

export default Partner;
