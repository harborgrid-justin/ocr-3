// queueService.js

const Queue = require('bull');
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';

// Create a new job queue named 'ocrQueue'
const ocrQueue = new Queue('ocrQueue', REDIS_URL);

// Function to add an OCR job to the queue
function addOCRJob(imageFile) {
  try {
    const jobData = {
      imageFile: imageFile,
      createdAt: new Date(),
    };

    ocrQueue.add(jobData);
  } catch (error) {
    console.error('Error adding OCR job to queue:', error);
    throw error;
  }
}

// Process jobs in the queue
ocrQueue.process(async job => {
  try {
    // Perform OCR logic here using job.data.imageFile
    const ocrResult = await performOCR(job.data.imageFile);

    // Example: Log the OCR result
    console.log('OCR Result:', ocrResult);
  } catch (error) {
    console.error('Error processing OCR job:', error);
    throw error;
  }
});

module.exports = {
  addOCRJob,
};
