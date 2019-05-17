import axios from "axios";

const state = {
  newFriendList: []
};

const mutations = {
  addFriend(state, friend) {
    state["newFriendList"].push(friend);
  },
  setConfig(state, { id, num }) {
    state["newFriendList"].filter(({ contact_id }) => contact_id === id)[0][
      "config"
    ] = num;
  },
  setNewFriendList(state, list) {
    state["newFriendList"] = list;
  }
};

const actions = {
  setConfig({ commit, rootState, state }, { id, num }) {
    if (num === 1) {
      let contact = state["newFriendList"].filter(
        ({ contact_id }) => contact_id === id
      )[0];
      delete contact["config"];
      delete contact["verifyText"];
      console.log(contact);
      commit("addContact", { ...contact, messageList: [] });
    }
    commit("setConfig", { id, num });
    let user_id = rootState["user"]["user"]["_id"];
    console.log(this);
    axios.post("/api/contacts/add/config", {
      user_id,
      contact_id: id,
      num
    });
  },
  setNewFriendList({ commit }, list) {
    commit("setNewFriendList", list);
  }
};

const getters = {
  getNewFriendList(state) {
    return state["newFriendList"]
      .map(({ remark, avatar, config, contact_id, time, verifyText }) => ({
        remark,
        avatar,
        config,
        contact_id,
        time,
        verifyText
      }))
      .sort((a, b) => b["time"] - a["time"]);
  },
  getNewFriendCount(state) {
    return state["newFriendList"].filter(({ config }) => config === 0).length;
  }
};

const newFriend = {
  state,
  mutations,
  actions,
  getters
};

export default newFriend;
