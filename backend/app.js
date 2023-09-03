const dotenv = require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('./middleware/cors');
const { errorHandler } = require('./middleware/errorHandling');
const { authenticateToken } = require('./middleware/auth');
const userRoutes = require('./routes/userRoutes');
const ocrRoutes = require('./routes/ocrRoutes');
const nlpRoutes = require('./routes/nlpRoutes');
const storageRoutes = require('./routes/storageRoutes');
const mongoose = require('mongoose');
const db = require('./config/db');

dotenv.config();                // Load environment variables from .env file

if (process.env.NODE_ENV!== 'production') {
  require('dotenv').config();
}                             // Load environment variables from .env file


// Set mongoose options
mongoose.set('useFindAndModify', false); // Set to false to make findOneAndUpdate() and findOneAndRemove() use native findOneAndUpdate() rather than findAndModify().
mongoose.set('useUnifiedTopology', true); // Set to true to opt in to using the MongoDB driver's new connection management engine. You should set this option to true, except for the unlikely case that it negatively impacts your application's performance.
mongoose.set('useNewUrlParser', true); // Set to false to opt out of using the MongoDB driver's findOneAndUpdate() instead of findAndModify().

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
