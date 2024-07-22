const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config();

connectDB();
app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/user');
const virtualMachineRoutes = require('./routes/virtualmachine');
const requestRoutes = require('./routes/request');
const notificationRoutes = require('./routes/notification');
const roleRoutes = require('./routes/role');
const permissionRoutes = require('./routes/permission');

app.use('/api/requesters', userRoutes);
app.use('/api/virtual-machines', virtualMachineRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/permissions', permissionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
