const express = require('express');
const router = express.Router();
const ocrService = require('../services/ocrService');

// Route: POST /ocr/upload
router.post('/upload', async (req, res) => {
  try {
    const { file } = req.body;
    const result = await ocrService.performOCR(file);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while performing OCR.' });
  }
});

module.exports = router;
