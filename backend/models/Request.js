const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  requesterId: {
    type: String,
    required: true,
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
  },
  position: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  environment_type: {
    type: String,
    enum: ['Production', 'Pre-Production', 'Development', 'Test'],
    required: true,
  },
  machineName: {
    type: String,
    required: true,
  },
  machineDescription: {
    type: String,
    required: true,
  },
  desired_start_date: {
    type: String,
    required: true,
  },
  operating_system: {
    type: String,
    enum: ['Windows Server 2016', 'Windows Server 2019', 'Linux RHEL 7.X', 'Linux RHEL 8.X'],
    required: true,
  },
  disk_space: {
    type: String,
    required: true,
  },
  ram: {
    type: String,
  },
  vcpus: {
    type: String,
  },
  software_list: [
    {
      name: String,
      version: String,
    }
  ],
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending',
  },
  approvedBy: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Request', RequestSchema);
