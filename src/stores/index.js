import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import base from "./modules/base";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    base,
    user
  },
  plugins: [createPersistedState()]
});
