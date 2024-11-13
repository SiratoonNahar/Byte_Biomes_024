const { db } = require('../config/firebase');

const createPoll = async (ownerId, title, type, questions, settings) => {
  const pollRef = db.ref('polls').push();
  const poll = {
    title,
    type,
    owner: ownerId,
    questions,
    settings,
    responses: {},
    analytics: {
      totalVotes: 0,
      votesPerOption: {},
    },
  };
  await pollRef.set(poll);
  return { id: pollRef.key, ...poll };
};

const getPollById = async (pollId) => {
  const pollSnapshot = await db.ref(`polls/${pollId}`).once('value');
  return pollSnapshot.val();
};

module.exports = { createPoll, getPollById };
