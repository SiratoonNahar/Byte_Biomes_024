const { db } = require('../config/firebase');

const createUser = async (email, name, password) => {
  const userRef = db.ref('users').push();
  const user = {
    email,
    name,
    password,
    pollsCreated: {},
  };
  await userRef.set(user);
  return { id: userRef.key, ...user };
};

const getUserByEmail = async (email) => {
  const usersRef = db.ref('users');
  const usersSnapshot = await usersRef.orderByChild('email').equalTo(email).once('value');
  const users = usersSnapshot.val();
  if (users) {
    const userId = Object.keys(users)[0];
    return { id: userId, ...users[userId] };
  }
  return null;
};

const getUserById = async (userId) => {
  const userSnapshot = await db.ref(`users/${userId}`).once('value');
  return userSnapshot.val();
};

module.exports = { createUser, getUserByEmail, getUserById };
