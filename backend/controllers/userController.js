const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

// Route: POST /user/register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await userService.registerUser(username, email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while registering the user.' });
  }
});

// Route: POST /user/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await userService.loginUser(email, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while logging in.' });
  }
});

module.exports = router;
