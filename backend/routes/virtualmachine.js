const express = require('express');
const router = express.Router();
const VirtualMachine = require('../models/VirtualMachine');

// Get all virtual machines
router.get('/', async (req, res) => {
  try {
    const virtualMachines = await VirtualMachine.find();
    res.json(virtualMachines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single virtual machine
router.get('/:id', async (req, res) => {
  try {
    const virtualMachine = await VirtualMachine.findById(req.params.id);
    if (!virtualMachine) return res.status(404).json({ message: 'Virtual Machine not found' });
    res.json(virtualMachine);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new virtual machine
router.post('/', async (req, res) => {
  const { name, description, dateOfService, os, pca, backup, diskSpace, ram, cpu, softwareList, configFiles, logFiles, tempFiles, netServices, appServerVersion, dbVersion } = req.body;
  try {
    const newVirtualMachine = new VirtualMachine({ name, description, dateOfService, os, pca, backup, diskSpace, ram, cpu, softwareList, configFiles, logFiles, tempFiles, netServices, appServerVersion, dbVersion });
    const savedVirtualMachine = await newVirtualMachine.save();
    res.status(201).json(savedVirtualMachine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a virtual machine
router.put('/:id', async (req, res) => {
  try {
    const updatedVirtualMachine = await VirtualMachine.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedVirtualMachine) return res.status(404).json({ message: 'Virtual Machine not found' });
    res.json(updatedVirtualMachine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a virtual machine
router.delete('/:id', async (req, res) => {
  try {
    const deletedVirtualMachine = await VirtualMachine.findByIdAndDelete(req.params.id);
    if (!deletedVirtualMachine) return res.status(404).json({ message: 'Virtual Machine not found' });
    res.json({ message: 'Virtual Machine deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
