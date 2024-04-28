import { createRouter, createWebHistory } from 'vue-router'
import Signup from "./../components/pages/Signup.vue";
import Login from "./../components/pages/Login.vue";
import PracticeRecordIndex from "./../components/pages/PracticeRecordIndex.vue"
import Home from "./../components/pages/Home.vue"
import store from '../../store';

const routes = [
  { path: '/', component: Home, meta: { requiresAuth: true }},
  { path: "/signup", component: Signup },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// ナビゲーションガードを設定

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isLoggedIn = store.getters.isLoggedIn

  if (requiresAuth && !isLoggedIn) {
    next('/login')
  } else if (!requiresAuth && isLoggedIn && to.path == "/login") {
    next('/')
  } else {
    next()
  }
});

export default router;
