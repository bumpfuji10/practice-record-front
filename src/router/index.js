import { createRouter, createWebHistory } from 'vue-router'
import Signup from "./../components/pages/Signup.vue";
import Login from "./../components/pages/Login.vue";
import PracticeRecordIndex from "./../components/pages/PracticeRecordIndex.vue"

const routes = [
  { path: '/', component: Signup },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
