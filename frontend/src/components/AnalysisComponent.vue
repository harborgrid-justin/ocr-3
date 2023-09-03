<template>
    <div>
      <h2>Analysis Component</h2>
      <textarea v-model="text"></textarea>
      <button @click="analyzeText">Analyze</button>
    </div>
  </template>
  
  <script>
  import nlpService from '../services/nlpService';
  
  export default {
    name: 'AnalysisComponent',
    methods: {
      async analyzeText() {
        try {
          const result = await nlpService.analyzeText(this.text);
          this.analysisResult = result;
        } catch (error) {
          console.error('Error analyzing text:', error.message);
        }
      },
    },
    data() {
      return {
        text: '',
        analysisResult: null,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add component-specific styles here */
  </style>
  