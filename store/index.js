import { createStore } from 'vuex';

const storage = window.localStorage
const keys = { exp: "exp" }

function setStorage(exp) {
  storage.setItem(keys.exp, exp * 1000)
};

function removeStorage () {
  for (const key of Object.values(keys)) {
    storage.removeItem(key)
  }
};

function getExpire () {
  return storage.getItem(key.exp)
};

function isAuthenticated () {
  return new Date().getTime() < this.getExpire()
};

const store = createStore({
  state: {
    current: {
      user: null,
    }
  },
  getters: {},
  mutations: {
    // login ({ exp, user }) {
    //   this.setStorage(exp)
    //   this.store.dispatch('getCurrentUser', user)
    // },
    logout () {
      this.$axios.$delete('/api/v1/user_token')
      this.removeStorage()
      this.store.dispatch('getCurrentUser', null)
    },
    setCurrentUser(state, payload) {
      state.current.user = payload
    }
  },
  actions: {
    getCurrentUser ({ commit }, user) {
      commit('setCurrentUser', user)
    },
    login({ commit }, { exp, user }) {
      setStorage(exp);
      commit('setCurrentUser', user)
    }
  }
});

export default store;
