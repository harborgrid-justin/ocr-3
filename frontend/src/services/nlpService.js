// Mock nlpService
const nlpService = {
  async analyzeText(text) {
    // Simulate NLP analysis
    const result = await new Promise(resolve => {
      setTimeout(() => {
        resolve(`Analysis result for: ${text}`);
      }, 1000);
    });

    return result;
  },
};

export default nlpService;
