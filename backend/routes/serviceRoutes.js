const express = require('express');
const router = express.Router();
const Service = require('../models/Service');
const authMiddleware = require('../middleware/authMiddleware');

// Create a new service
router.post('/', async (req, res) => {
  try {
    const service = new Service(req.body);
    const savedService = await service.save();
    res.status(201).json(savedService);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a service by id
router.get('/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ error: 'Service not found' });
    res.json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a service by id
router.put('/:id', async (req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedService) return res.status(404).json({ error: 'Service not found' });
    res.json(updatedService);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a service by id
router.delete('/:id', async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) return res.status(404).json({ error: 'Service not found' });
    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.use(authMiddleware);

module.exports = router;
