const express = require('express');
const router = express.Router();
const nlpService = require('../services/nlpService');

// Route: POST /nlp/analyze
router.post('/analyze', async (req, res) => {
  try {
    const { text } = req.body;
    const result = await nlpService.analyzeText(text);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while analyzing text.' });
  }
});

module.exports = router;
