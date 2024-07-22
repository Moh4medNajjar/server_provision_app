const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
  roleName: {
    type: String,
    required: true,
    unique: true, // Ensure role names are unique
  },
  permissions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Permission', // Reference to Permission model
  }],
}, { timestamps: true });

module.exports = mongoose.model('Role', RoleSchema);
