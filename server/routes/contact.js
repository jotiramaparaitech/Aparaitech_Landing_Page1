const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const authenticateAdmin = require('../middleware/auth');

// Submit contact form
router.post('/submit', async (req, res) => {
  try {
    const { fullName, email, message } = req.body;

    // Validation
    if (!fullName || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all fields' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please enter a valid email address' 
      });
    }

    // Create new contact
    const contact = new Contact({
      fullName,
      email,
      message
    });

    await contact.save();

    res.status(201).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      data: contact
    });

  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
});

// Get all contacts (for admin purposes only - requires authentication)
router.get('/all', authenticateAdmin, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).select('-__v');
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
});

module.exports = router;

