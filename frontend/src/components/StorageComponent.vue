<template>
    <div>
      <h2>Storage Component</h2>
      <input type="file" @change="handleFileChange">
      <button @click="uploadFile">Upload</button>
      <p>Uploaded URL: {{ uploadedUrl }}</p>
    </div>
  </template>
  
  <script>
  import storageService from '../services/storageService';
  
  export default {
    name: 'StorageComponent',
    methods: {
      async handleFileChange(event) {
        this.selectedFile = event.target.files[0];
      },
      async uploadFile() {
        if (!this.selectedFile) return;
  
        try {
          const url = await storageService.uploadFile(this.selectedFile);
          this.uploadedUrl = url;
        } catch (error) {
          console.error('Error uploading file:', error.message);
        }
      },
    },
    data() {
      return {
        selectedFile: null,
        uploadedUrl: null,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add component-specific styles here */
  </style>
  