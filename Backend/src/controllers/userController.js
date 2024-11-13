const { userService } = require('../services/userService');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../config/jwt'); // Assuming this generates a JWT token

// Get user profile by ID
const getUserProfile = async (req, res) => {
  try {
    const user = await userService.getUserById(req.userId);  
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Register new user
const registerUser = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    // Check if the user already exists
    const userExists = await userService.getUserByEmail(email);
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT_ROUNDS));

    // Create the new user
    const newUser = await userService.createUser(email, name, hashedPassword);

    // Generate a token (assuming you have JWT setup)
    const token = generateToken(newUser.id);

    // Send response with the token and user details
    res.status(201).json({ token, user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getUserProfile, registerUser };
