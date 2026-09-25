import Partner from "../models/Partner.js";

export const createPartner = async (req, res) => {
  try {
    // req.body = form se aaya hua data
    const data = req.body;

    // MongoDB me data save ho raha hai
    await Partner.create(data);

    // client ko response bhej rahe hain
    res.json({
      success: true,
      message: "Partner application saved",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getPartners = async (req, res) => {
  try {
    const partners = await Partner.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: partners.length,
      data: partners,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
