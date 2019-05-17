const state = {
  newGroup: []
};

const getters = {
  //
};

const mutations = {
  addNewGroupMember(state, id) {
    state.newGroup.push(id);
  }
};

const actions = {
  addNewGroupMember({ commit }, id) {
    commit("addNewGroupMember", id);
  }
};

const user = {
  state,
  mutations,
  actions,
  getters
};

export default user;
