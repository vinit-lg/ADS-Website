const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  logoUrl: {
    type: String,
  },
  website: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Brand', BrandSchema);
