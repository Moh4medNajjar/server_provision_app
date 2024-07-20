const RoleAssignment = require('../models/RoleAssignment');
const Role = require('../models/Role');

// Middleware to check if the user has the required permission
const authorize = (requiredPermission) => async (req, res, next) => {
  try {
    // Assuming req.user is set by authentication middleware
    const userId = req.user._id;

    // Find the user's roles
    const roleAssignments = await RoleAssignment.find({ user: userId }).populate('role');
    const roles = roleAssignments.map(assignment => assignment.role);

    // Check if any of the roles have the required permission
    const hasPermission = roles.some(role =>
      role.permissions.some(permission => permission.name === requiredPermission)
    );

    if (hasPermission) {
      return next();
    } else {
      return res.status(403).json({ message: 'Access denied' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { authorize };
