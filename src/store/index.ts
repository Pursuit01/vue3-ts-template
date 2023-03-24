import { createStore } from 'vuex'

export default createStore({
  state: {
    lang: 'EN'
  },
  getters: {},
  mutations: {
    SET_LANG(state, val) {
      state.lang = val
    }
  },
  actions: {},
  modules: {}
})
