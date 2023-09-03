// middleware/fileTypeCheck.js

const allowedFileTypes = ['image/jpeg', 'image/png', 'application/pdf'];

function checkFileType(req, res, next) {
  if (!req.files || !req.files.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const file = req.files.file;

  if (!allowedFileTypes.includes(file.mimetype)) {
    return res.status(400).json({ message: 'Invalid file type' });
  }

  next();
}

module.exports = {
  checkFileType,
};
