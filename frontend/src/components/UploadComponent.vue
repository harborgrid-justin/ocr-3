<template>
  <div>
    <h2>Upload Component</h2>
    <input type="file" @change="handleFileChange">
    <button @click="uploadFile">Upload</button>
  </div>
</template>

<script>
import ocrService from '../services/ocrService';

export default {
  name: 'UploadComponent',
  methods: {
    async handleFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    async uploadFile() {
      if (!this.selectedFile) return;

      try {
        const result = await ocrService.uploadFile(this.selectedFile);
        this.analysisResult = result;
      } catch (error) {
        console.error('Error uploading file:', error.message);
      }
    },
  },
  data() {
    return {
      selectedFile: null,
      analysisResult: null,
    };
  },
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
