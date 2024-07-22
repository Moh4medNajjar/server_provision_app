const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const RequesterSchema = new mongoose.Schema({
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
  position: {
    type: String,
    required: true,
  },
  matricule: {
    type: String,
    required: true,
    unique: true,
  },
  department: {
    required: true,
    type: String
  },
  phoneNumber: {
    type: String,
  },
  subscriptionId: {
    type: String,
    default: '', 
  },
  clientId: {
    type: String,
    default: '',
  },
  secretId: {
    type: String,
    default: '',
  },
  tenantId: {
    type: String,
    default: '',
  },
  role: {
    type: [String],
  },
  isSuperAdmin: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

RequesterSchema.pre('save', async function(next) {
  if (this.isModified('password')) { 
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      next();
    } catch (err) {
      next(err);
    }
  } else {
    next();
  }
});

module.exports = mongoose.model('Requester', RequesterSchema);
