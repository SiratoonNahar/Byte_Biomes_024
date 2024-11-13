const bcrypt = require('bcryptjs');
const { generateToken } = require('../config/jwt');
const { db } = require('../config/firebase');
const { userService } = require('../services/userService');

const register = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const userExists = await userService.getUserByEmail(email);
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT_ROUNDS));
    const newUser = await userService.createUser(email, name, hashedPassword);
    const token = generateToken(newUser.id);
    res.status(201).json({ token, user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    const token = generateToken(user.id);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { register, login };
