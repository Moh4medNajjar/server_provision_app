// models/Admin.js
const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
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
  subscriptionId: {
    type: String,
    required: true,
  },
  clientId: {
    type: String,
    required: true,
  },
  secretId: {
    type: String,
    required: true,
  },
  tenantId: {
    type: String,
    required: true,
  },
  permissions: {
    type: [String],
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role', 
    required: true,
  },
  isSuperAdmin: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

module.exports = mongoose.model('Admin', AdminSchema);
