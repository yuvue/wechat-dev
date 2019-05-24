import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import user from "./modules/user";
import contact from "./modules/contact";
import socket from "./modules/socket";
import moment from "./modules/moment";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    contact,
    socket,
    moment
  },
  plugins: [createPersistedState()]
});
