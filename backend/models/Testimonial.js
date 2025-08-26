const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true,
  },
  clientOrganization: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  clientImageUrl: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Testimonial', TestimonialSchema);
