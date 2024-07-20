// models/RoleAssignment.js
const mongoose = require('mongoose');

const RoleAssignmentSchema = new mongoose.Schema({
  assignmentId: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  roleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    required: true,
  },
  assignedAt: {
    type: Date,
    default: Date.now,
  }
}, { timestamps: true });

module.exports = mongoose.model('RoleAssignment', RoleAssignmentSchema);
