// storageService.js

const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Configure AWS credentials and S3 bucket
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
const s3 = new AWS.S3();

// Function to upload a file to S3
async function uploadFile(file) {
  try {
    const fileExtension = path.extname(file.name);
    const uniqueFilename = `${uuidv4()}${fileExtension}`;
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: uniqueFilename,
      Body: fs.createReadStream(file.path),
    };

    const result = await s3.upload(params).promise();
    return result.Location;
  } catch (error) {
    console.error('Error uploading file to S3:', error);
    throw error;
  }
}

// Function to get a signed URL for downloading a file from S3
async function getDownloadUrl(filename) {
  try {
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: filename,
      Expires: 3600, // URL expiration time in seconds (1 hour)
    };

    const url = await s3.getSignedUrlPromise('getObject', params);
    return url;
  } catch (error) {
    console.error('Error generating download URL:', error);
    throw error;
  }
}

module.exports = {
  uploadFile,
  getDownloadUrl,
};
