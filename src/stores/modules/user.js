import { userEdit } from "service/user";

const state = {
  user: {
    _id: "",
    email: "",
    nickname: "",
    avatar: "",
    address: "",
    signature: ""
  }
};

const getters = {
  getUser(state) {
    return state.user;
  }
};

const mutations = {
  setUser(state, val) {
    state.user = val;
  },
  updateAvatar(state, val) {
    state.user.avatar = val;
  }
};

const actions = {
  setUser({ commit }, val) {
    commit("setUser", val);
  },
  updateAvatar({ commit, state }, val) {
    console.log(state);
    commit("updateAvatar", val);
    userEdit({ avatar: val, _id: state.user._id });
  }
};

const user = {
  state,
  mutations,
  actions,
  getters
};

export default user;
