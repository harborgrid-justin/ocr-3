// backend/config/db.js

const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI || 'mongodb+srv://justinsaadein:ei3KgDhF@cluster1.ynksy.mongodb.net/test?retryWrites=true&w=majority'; // Replace with your MongoDB URI

const db = mongoose.connection;

mongoose.connect(db.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch(err => {
  console.error('MongoDB connection error:', err);
});


db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

module.exports = db; // Export the connection instance
