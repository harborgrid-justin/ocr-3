const express = require('express');
const router = express.Router();
const ocrService = require('../services/ocrService');

// Route to upload and process an image for OCR
router.post('/upload', async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: 'No files were uploaded.' });
    }

    const uploadedFile = req.files.file;
    const ocrResult = await ocrService.performOCR(uploadedFile);

    res.status(200).json({ result: ocrResult });
  } catch (error) {
    console.error('Error processing OCR:', error);
    res.status(500).json({ message: 'An error occurred while processing OCR.' });
  }
});

module.exports = router;
