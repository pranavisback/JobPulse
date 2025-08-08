const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    title: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ['Applied', 'Interview', 'Offer', 'Rejected'],
      default: 'Applied',
      index: true
    },
    appliedDate: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Job', jobSchema);
