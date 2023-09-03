import UploadComponent from './components/UploadComponent.vue'; // Update the component filename here


<template>
    <div id="app">
      <UploadComponent />
      <ResultsComponent :analysisResult="analysisResult" />
      <AnalysisComponent />
      <StorageComponent />
    </div>
  </template>
  
  <script>
 