const { pollService } = require('../services/pollService');

// Create poll
const createPoll = async (req, res) => {
  const { title, type, questions, settings } = req.body;
  try {
    const poll = await pollService.createPoll(req.userId, title, type, questions, settings);
    res.status(201).json(poll);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get poll by ID
const getPoll = async (req, res) => {
  const { pollId } = req.params;
  try {
    const poll = await pollService.getPollById(pollId);
    res.status(200).json(poll);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Update poll
const updatePoll = async (req, res) => {
  const { pollId } = req.params; 
  const { title, type, questions, settings } = req.body; 
  try {
    const updatedPoll = await pollService.updatePollById(pollId, title, type, questions, settings);
    if (!updatedPoll) {
      return res.status(404).json({ error: 'Poll not found' });
    }
    res.status(200).json(updatedPoll);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { createPoll, getPoll, updatePoll };
