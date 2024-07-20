const express = require('express');
const app = express();
const connectDB = require('./config/db');
require('dotenv').config();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
const requesterRoutes = require('./routes/requester');
const adminRoutes = require('./routes/admin');
const virtualMachineRoutes = require('./routes/virtualmachine');
const requestRoutes = require('./routes/request');
const notificationRoutes = require('./routes/notification');
const roleRoutes = require('./routes/role');
const permissionRoutes = require('./routes/permission');
const roleAssignmentRoutes = require('./routes/roleassignment');

app.use('/api/requesters', requesterRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/virtual-machines', virtualMachineRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/permissions', permissionRoutes);
app.use('/api/role-assignments', roleAssignmentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
