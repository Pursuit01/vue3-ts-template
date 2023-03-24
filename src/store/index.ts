import { createStore } from "vuex";

export default createStore({
  state: {
    lang: "EN",
    collapse: false,
  },
  getters: {},
  mutations: {
    SET_LANG(state, val) {
      state.lang = val;
    },
    SET_COLLAPSE(state, val) {
      state.collapse = val;
    },
  },
  actions: {},
  modules: {},
});
