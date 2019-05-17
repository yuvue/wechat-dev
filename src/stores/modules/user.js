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
  }
};

const actions = {
  setUser({ commit }, val) {
    commit("setUser", val);
  }
};

const user = {
  state,
  mutations,
  actions,
  getters
};

export default user;
