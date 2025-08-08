const express = require('express');
const auth = require('../middleware/auth');
const Job = require('../models/Job');

const router = express.Router();

// All routes below require auth
router.use(auth);

// GET /api/jobs - list user's jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});

// POST /api/jobs - create job
router.post('/', async (req, res) => {
  try {
    const { title, company, status, appliedDate } = req.body || {};
    if (!title || !company) return res.status(400).json({ error: 'Title and company are required' });

    const job = await Job.create({
      userId: req.user.id,
      title,
      company,
      status: status || 'Applied',
      appliedDate: appliedDate ? new Date(appliedDate) : undefined
    });

    res.status(201).json(job);
  } catch (err) {
    console.error(err);
    const message = err.name === 'ValidationError' ? 'Invalid data' : 'Failed to create job';
    res.status(400).json({ error: message });
  }
});

// PUT /api/jobs/:id - update job
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, company, status, appliedDate } = req.body || {};
    const job = await Job.findOne({ _id: id, userId: req.user.id });
    if (!job) return res.status(404).json({ error: 'Job not found' });

    if (title !== undefined) job.title = title;
    if (company !== undefined) job.company = company;
    if (status !== undefined) job.status = status;
    if (appliedDate !== undefined) job.appliedDate = new Date(appliedDate);

    await job.save();
    res.json(job);
  } catch (err) {
    console.error(err);
    const statusCode = err.name === 'CastError' ? 400 : 500;
    res.status(statusCode).json({ error: 'Failed to update job' });
  }
});

// DELETE /api/jobs/:id - delete job
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findOneAndDelete({ _id: id, userId: req.user.id });
    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    const statusCode = err.name === 'CastError' ? 400 : 500;
    res.status(statusCode).json({ error: 'Failed to delete job' });
  }
});

module.exports = router;
