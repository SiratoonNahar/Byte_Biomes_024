const { userModel } = require('../models/userModel');

const createUser = async (email, name, password) => {
  return userModel.createUser(email, name, password);
};

const getUserByEmail = async (email) => {
  return userModel.getUserByEmail(email);
};

const getUserById = async (userId) => {
  return userModel.getUserById(userId);
};

module.exports = { createUser, getUserByEmail, getUserById };
