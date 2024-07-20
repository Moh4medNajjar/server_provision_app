const express = require('express');
const router = express.Router();
const RoleAssignment = require('../models/RoleAssignment.js');

// Get all role assignments
router.get('/', async (req, res) => {
  try {
    const roleAssignments = await RoleAssignment.find().populate('role').populate('user');
    res.json(roleAssignments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single role assignment
router.get('/:id', async (req, res) => {
  try {
    const roleAssignment = await RoleAssignment.findById(req.params.id).populate('role').populate('user');
    if (!roleAssignment) return res.status(404).json({ message: 'Role Assignment not found' });
    res.json(roleAssignment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new role assignment
router.post('/', async (req, res) => {
  const { user, role } = req.body;
  try {
    const newRoleAssignment = new RoleAssignment({ user, role });
    const savedRoleAssignment = await newRoleAssignment.save();
    res.status(201).json(savedRoleAssignment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a role assignment
router.put('/:id', async (req, res) => {
  try {
    const updatedRoleAssignment = await RoleAssignment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRoleAssignment) return res.status(404).json({ message: 'Role Assignment not found' });
    res.json(updatedRoleAssignment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a role assignment
router.delete('/:id', async (req, res) => {
  try {
    const deletedRoleAssignment = await RoleAssignment.findByIdAndDelete(req.params.id);
    if (!deletedRoleAssignment) return res.status(404).json({ message: 'Role Assignment not found' });
    res.json({ message: 'Role Assignment deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
