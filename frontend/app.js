const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// MongoDB setup (replace with your MongoDB connection URL)
mongoose.connect('mongodb://localhost:27017/ocr2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// API routes
app.use('/api/ocr', require('./backend/routes/ocrRoutes'));
app.use('/api/nlp', require('./backend/routes/nlpRoutes'));
app.use('/api/storage', require('./backend/routes/storageRoutes'));

// Serve the Vue.js app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
