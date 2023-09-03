// Mock ocrService
const ocrService = {
    async uploadFile(file) {
      // Simulate OCR process
      const result = await new Promise(resolve => {
        setTimeout(() => {
          resolve(`OCR result for ${file.name}`);
        }, 2000);
      });
  
      return result;
    },
  };
  
  export default ocrService;
  