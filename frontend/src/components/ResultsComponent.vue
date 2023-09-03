<template>
    <div>
      <h2>Results Component</h2>
      <p>Analysis Result: {{ analysisResult }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResultsComponent',
    props: ['analysisResult'],
  };
  </script>
  
  <style scoped>
  /* Add component-specific styles here */
  </style>
  