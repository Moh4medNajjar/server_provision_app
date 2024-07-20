// models/Requester.js
const mongoose = require('mongoose');

const RequesterSchema = new mongoose.Schema({
  requesterId: {
    type: String,
    required: true,
    unique: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  jobPosition: {
    type: String,
    required: true,
  },
  matricule: {
    type: String,
    required: true,
    unique: true,
  },
  department: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  requests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Request',
  }],
}, { timestamps: true });

module.exports = mongoose.model('Requester', RequesterSchema);
