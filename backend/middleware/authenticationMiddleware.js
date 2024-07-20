const jwt = require('jsonwebtoken');
const User = require('../models/Requester'); // Adjust to the actual user model

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Assuming token is sent in 'Bearer <token>' format

  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Add user data to request object
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = { authenticate };
