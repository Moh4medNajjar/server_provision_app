const mongoose = require('mongoose');

const VirtualMachineSchema = new mongoose.Schema({
  vmId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  environment_type: {
    type: String,
    enum: ['Production', 'Pre-Production', 'Development', 'Test'],
    required: true,
  },
  operating_system: {
    type: String,
    enum: ['Windows Server 2016', 'Windows Server 2019', 'Linux RHEL 7.X', 'Linux RHEL 8.X', 'Other'],
    required: true,
  },
  cpu: {
    type: String, 
    required: true,
  },
  ram: {
    type: String, 
    required: true,
  },
  disk_space: {
    type: String, 
    required: true,
  },
  ip_address: {
    type: String,
  },
  network_id: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Running', 'Stopped', 'Suspended', 'Terminated'],
    default: 'Stopped',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  requestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Request',
  },
}, { timestamps: true });

module.exports = mongoose.model('VirtualMachine', VirtualMachineSchema);
