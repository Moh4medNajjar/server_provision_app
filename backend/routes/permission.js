const express = require('express');
const router = express.Router();
const Permission = require('../models/Permission');

// Get all permissions
router.get('/', async (req, res) => {
  try {
    const permissions = await Permission.find();
    res.json(permissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single permission
router.get('/:id', async (req, res) => {
  try {
    const permission = await Permission.findById(req.params.id);
    if (!permission) return res.status(404).json({ message: 'Permission not found' });
    res.json(permission);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new permission
router.post('/', async (req, res) => {
  const { name, description } = req.body;
  try {
    const newPermission = new Permission({ name, description });
    const savedPermission = await newPermission.save();
    res.status(201).json(savedPermission);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a permission
router.put('/:id', async (req, res) => {
  try {
    const updatedPermission = await Permission.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPermission) return res.status(404).json({ message: 'Permission not found' });
    res.json(updatedPermission);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a permission
router.delete('/:id', async (req, res) => {
  try {
    const deletedPermission = await Permission.findByIdAndDelete(req.params.id);
    if (!deletedPermission) return res.status(404).json({ message: 'Permission not found' });
    res.json({ message: 'Permission deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
