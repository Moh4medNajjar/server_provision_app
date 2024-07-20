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
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  requests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Request',
    },
  ],
}, { timestamps: true });

// Pre-save hook to hash the password
RequesterSchema.pre('save', async function(next) {
  if (this.isModified('password')) { // Hash password only if it's modified
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
