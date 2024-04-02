import { createRouter, createWebHistory } from 'vue-router'
import Signup from "./../components/pages/Signup.vue";
import PracticeRecordIndex from "./../components/pages/PracticeRecordIndex.vue"

const routes = [
  { path: '/', component: PracticeRecordIndex },
  { path: '/signup', component: Signup }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
