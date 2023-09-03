const express = require('express');
const router = express.Router();
const nlpService = require('../services/nlpService');

// Route to analyze text using NLP
router.post('/analyze', async (req, res) => {
  try {
    const { text } = req.body;
    const analysisResult = await nlpService.analyzeText(text);

    res.status(200).json({ result: analysisResult });
  } catch (error) {
    console.error('Error analyzing text:', error);
    res.status(500).json({ message: 'An error occurred while analyzing text.' });
  }
});

module.exports = router;
