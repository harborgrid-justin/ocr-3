import { createRouter, createWebHistory } from 'vue-router';
import UploadComponent from './components/UploadComponent.vue';
import ResultsComponent from './components/ResultsComponent.vue';
import AnalysisComponent from './components/AnalysisComponent.vue';
import StorageComponent from './components/StorageComponent.vue';

const routes = [
  {
    path: '/',
    name: 'Upload',
    component: UploadComponent,
  },
  {
    path: '/results',
    name: 'Results',
    component: ResultsComponent,
  },
  {
    path: '/analysis',
    name: 'Analysis',
    component: AnalysisComponent,
  },
  {
    path: '/storage',
    name: 'Storage',
    component: StorageComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
