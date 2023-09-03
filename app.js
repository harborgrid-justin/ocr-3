const dotenv = require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const cors = require('./backend/middleware/cors');
const { errorHandler } = require('./backend/middleware/errorHandling');
const { authenticateToken } = require('./backend/middleware/auth');
const userRoutes = require('./backend/routes/userRoutes');
const ocrRoutes = require('./backend/routes/ocrRoutes');
const nlpRoutes = require('./backend/routes/nlpRoutes');
const storageRoutes = require('./backend/routes/storageRoutes');
const mongoose = require('mongoose');
const db = require('./backend/config/db');


// Connect to the database using mongoose
mongoose.connect(db.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

// Middleware
app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// API routes
app.use('/users', userRoutes);
app.use('/ocr', authenticateToken, ocrRoutes);
app.use('/nlp', authenticateToken, nlpRoutes);
app.use('/storage', authenticateToken, storageRoutes);

// Serve the Vue.js app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
