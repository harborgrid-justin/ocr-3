// services/userService.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Token = require('../models/token');

async function registerUser(username, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username: username,
    email: email,
    password: hashedPassword,
  });

  try {
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    throw error;
  }
}

async function loginUser(email, password) {
  const user = await User.findOne({ email: email });

  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  const token = generateToken(user);

  return { user: user, token: token };
}

function generateToken(user) {
  const token = jwt.sign(
    {
      userId: user._id,
      username: user.username,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  const newToken = new Token({
    userId: user._id,
    token: token,
  });

  newToken.save();

  return token;
}

async function getUserById(userId) {
  const user = await User.findById(userId);
  return user;
}

module.exports = {
  registerUser,
  loginUser,
  getUserById,
};
