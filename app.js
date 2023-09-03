const express = require('express');
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');
const cors = require('./backend/middleware/cors');
const { errorHandler } = require('./backend/middleware/errorHandling');
const { authenticateToken } = require('./backend/middleware/auth');
const userRoutes = require('./backend/routes/userRoutes');
const ocrRoutes = require('./backend/routes/ocrRoutes');
const nlpRoutes = require('./backend/routes/nlpRoutes');
const storageRoutes = require('./backend/routes/storageRoutes');
const db = require('./backend/config/db'); // Import the db connection instance
const path = require('path');
// Load environment variables from .env file
dotenv.config();

const app = express();

// Serve the frontend static files
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// ... Set up your API routes and other middleware

// Catch-all route to serve the frontend application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});



// Middleware
app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

// Routes
app.use('/users', userRoutes);
app.use('/ocr', authenticateToken, ocrRoutes);
app.use('/nlp', authenticateToken, nlpRoutes);
app.use('/storage', authenticateToken, storageRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


