const express = require('express');
const router = express.Router();
const multer = require('multer');
const storageService = require('../services/storageService');

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Route: POST /storage/upload
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { filename } = req.file;
    const url = await storageService.uploadFile(filename);
    res.status(200).json({ url });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while uploading the file.' });
  }
});

module.exports = router;
