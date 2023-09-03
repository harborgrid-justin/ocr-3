// Mock storageService
const storageService = {
    async uploadFile(file) {
      // Simulate file upload
      const uploadedUrl = await new Promise(resolve => {
        setTimeout(() => {
          resolve(`http://example.com/uploads/${file.name}`);
        }, 1500);
      });
  
      return uploadedUrl;
    },
  };
  
  export default storageService;
  