import { createStore } from 'vuex';

const store = createStore({
  state: {
    authToken: localStorage.getItem('authToken') || null
  },
  mutations: {
    setAuthToken(state, token) {
      state.authToken = token;
      localStorage.setItem('authToken', token)
    },
    clearAuthToken(state) {
      state.authToken = null
      localStorage.removeItem('authToken')
    }
  },
  actions: {
    login({ commit }, token) {
      commit('setAuthToken', token);
      localStorage.setItem('authToken', token); // トークンをローカルストレージに保存
    },
    logout({ commit }) {
      commit('setAuthToken', null);
      localStorage.removeItem('authToken');
    }
  },
  getters: {
    isLoggedIn: state => !!state.authToken
  }
});

export default store;
