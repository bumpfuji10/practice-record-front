import { createStore } from 'vuex';

const store = createStore({
  state: {
    authToken: null
  },
  mutations: {
    setAuthToken(state, token) {
      state.authToken = token;
    }
  },
  actions: {
    login({ commit }, token) {
      commit('setAuthToken', token);
      localStorage.setItem('authToken', token);
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
