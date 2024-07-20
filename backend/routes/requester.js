const express = require('express');
const router = express.Router();
const Requester = require('../models/Requester');

// Get all requesters
router.get('/', async (req, res) => {
  try {
    const requesters = await Requester.find();
    res.json(requesters);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single requester
router.get('/:id', async (req, res) => {
  try {
    const requester = await Requester.findById(req.params.id);
    if (!requester) return res.status(404).json({ message: 'Requester not found' });
    res.json(requester);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new requester
router.post('/', async (req, res) => {
  const { firstname, lastname, email, password, jobPosition, matricule } = req.body;
  try {
    const newRequester = new Requester({ firstname, lastname, email, password, role, jobPosition, matricule });
    const savedRequester = await newRequester.save();
    res.status(201).json(savedRequester);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a requester
router.put('/:id', async (req, res) => {
  try {
    const updatedRequester = await Requester.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRequester) return res.status(404).json({ message: 'Requester not found' });
    res.json(updatedRequester);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a requester
router.delete('/:id', async (req, res) => {
  try {
    const deletedRequester = await Requester.findByIdAndDelete(req.params.id);
    if (!deletedRequester) return res.status(404).json({ message: 'Requester not found' });
    res.json({ message: 'Requester deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
