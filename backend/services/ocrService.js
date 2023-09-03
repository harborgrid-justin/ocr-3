// ocrService.js

const { createWorker } = require('tesseract.js');

// Function to perform OCR on an image
async function performOCR(imageFile) {
  try {
    const worker = createWorker();
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');

    const result = await worker.recognize(imageFile.buffer);
    await worker.terminate();

    return result.data.text;
  } catch (error) {
    console.error('Error performing OCR:', error);
    throw error;
  }
}

module.exports = {
  performOCR,
};
