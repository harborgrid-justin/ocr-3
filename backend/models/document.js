// document.js

const mongoose = require('mongoose');

// Define the Document schema
const documentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  fileUrl: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

// Create the Document model
const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
