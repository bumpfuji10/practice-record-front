import { createApp } from 'vue';
import './styles/base.scss';
import './styles/header.scss';
import './styles/login.scss';
import './styles/signup.scss';
import './styles/dropdownMenu.scss';
import App from './App.vue';
import router from './router';
import store from './../store/index'

const token = localStorage.getItem('authToken')
if (token) {
  store.dispatch('login', token)
}

const app = createApp(App)

app.use(router)
app.use(store)
app.mount("#app")
