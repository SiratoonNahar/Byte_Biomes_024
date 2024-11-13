const { pollModel } = require('../models/pollModel');

const createPoll = async (ownerId, title, type, questions, settings) => {
  return pollModel.createPoll(ownerId, title, type, questions, settings);
};

const getPollById = async (pollId) => {
  return pollModel.getPollById(pollId);
};

module.exports = { createPoll, getPollById };
