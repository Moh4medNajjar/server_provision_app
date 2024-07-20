// models/Notification.js
const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  notificationId: {
    type: String,
    required: true,
    unique: true,
  },
  recipientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming the recipient is a user
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Info', 'Warning', 'Error'], // Example types
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['Sent', 'Delivered', 'Read'],
    default: 'Sent',
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  relatedResourceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Request', 
  },
  priority: {
    type: String,
    enum: ['High', 'Medium', 'Low'],
  },
}, { timestamps: true });

module.exports = mongoose.model('Notification', NotificationSchema);
