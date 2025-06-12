import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import PreviewPage from '../views/PreviewPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/preview',
    name: 'preview',
    component: PreviewPage,
  }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;