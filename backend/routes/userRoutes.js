const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

// Route to register a new user
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await userService.registerUser(username, email, password);

    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'An error occurred while registering user.' });
  }
});

// Route to log in a user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.loginUser(email, password);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'An error occurred while logging in user.' });
  }
});

module.exports = router;
