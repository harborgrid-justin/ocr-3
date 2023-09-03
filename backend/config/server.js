const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const authMiddleware = require('./middleware/auth');
const errorHandlingMiddleware = require('./middleware/errorHandling');
const ocrRoutes = require('./routes/ocrRoutes');
const nlpRoutes = require('./routes/nlpRoutes');
const storageRoutes = require('./routes/storageRoutes');
const db = require('./db');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Authentication Middleware
app.use(authMiddleware);

// Routes
app.use('/ocr', ocrRoutes);
app.use('/nlp', nlpRoutes);
app.use('/storage', storageRoutes);

// Error handling middleware
app.use(errorHandlingMiddleware);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
