const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  requester: {
    type: {
      requesterId: String,
      firstname: String,
      lastname: String,
      email: String,
      jobPosition: String,
      department: String,
    },
    required: true,
  },
  application_supplier: {
    type: {
      name: String,
      company: String,
    },
    required: true,
  },
  environment_type: {
    type: String,
    enum: ['Production', 'Pre-Production', 'Development', 'Test'],
    required: true,
  },
  machine_details: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    desired_start_date: {
      type: Date,
      required: true,
    },
    operating_system: {
      type: String,
      enum: ['Windows Server 2016', 'Windows Server 2019', 'Linux RHEL 7.X', 'Linux RHEL 8.X'],
      required: true,
    },
    disk_space: {
      type: String,
      default: '20GB',
    },
    ram: {
      type: String,
      default: '4GB',
    },
    cpu: {
      type: String,
      default: 'Intel® Core™ i3',
    },
    software_list: [
      {
        name: String,
        version: String,
      }
    ],
    config_files: [String],
    log_files: [String],
    temp_files: [String],
    services: [String],
    application_server_version: String,
    database_version: String,
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending',
  },
  admin_comments: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Request', RequestSchema);
