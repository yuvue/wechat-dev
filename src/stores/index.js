import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import base from "./modules/base";
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
    base,
    user,
    contact,
    socket,
    moment
  },
  plugins: [createPersistedState()]
});
