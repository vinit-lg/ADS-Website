// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Basic route to check server running
app.get('/', (req, res) => {
  res.send('API is running...');
});

const serviceRoutes = require('./routes/serviceRoutes');
app.use('/api/services', serviceRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);



// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
