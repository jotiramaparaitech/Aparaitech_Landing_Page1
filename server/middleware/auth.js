/**
 * Simple authentication middleware for admin endpoints
 * In production, replace this with proper JWT authentication
 */

const ADMIN_API_KEY = process.env.ADMIN_API_KEY || 'your-secure-admin-key-change-in-production';

const authenticateAdmin = (req, res, next) => {
  // Get API key from header
  const apiKey = req.headers['x-api-key'] || req.headers['authorization']?.replace('Bearer ', '');

  if (!apiKey) {
    return res.status(401).json({
      success: false,
      message: 'Authentication required. Please provide an API key.'
    });
  }

  if (apiKey !== ADMIN_API_KEY) {
    return res.status(403).json({
      success: false,
      message: 'Invalid API key. Access denied.'
    });
  }

  // Authentication successful
  next();
};

module.exports = authenticateAdmin;

