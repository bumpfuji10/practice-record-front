import { createApp } from 'vue';
import './styles/base.scss';
import './styles/header.scss';
import './styles/login.scss';
import './styles/signup.scss';
import App from './App.vue';
import router from '../router';

createApp(App)
  .use(router)
  .mount('#app');
