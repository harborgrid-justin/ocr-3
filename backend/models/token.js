// token.js

const mongoose = require('mongoose');

// Define the Token schema
const tokenSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create the Token model
const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;
