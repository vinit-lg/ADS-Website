const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const AdminUser = require('../models/AdminUser');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await AdminUser.findOne({ email });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });
    
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
