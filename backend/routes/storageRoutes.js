// routes/storageRoutes.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const storageService = require('../services/storageService');

// Upload a file
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const uploadResult = await storageService.uploadFile(file);
    res.status(200).json({ message: 'File uploaded successfully', data: uploadResult });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Download a file
router.get('/download/:filename', async (req, res) => {
  const filename = req.params.filename;
  try {
    const downloadStream = await storageService.downloadFile(filename);
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    downloadStream.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: 'File not found' });
  }
});

module.exports = router;
