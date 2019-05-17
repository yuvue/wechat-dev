const state = {
  discoverAllList: [
    {
      id: "",
      text: "",
      audio: "",
      tags: "",
      pictureList: [],
      config: "",
      likes: 0,
      forwards: 0,
      comments: [
        {
          id: "",
          text: ""
        }
      ],
      add_time: 0
    }
  ],
  discoverSelfList: [],
  discoverFriendList: [],
  discoverCollectList: []
};

const mutations = {
  setDiscoverList(
    state,
    {
      discoverAllList,
      discoverFriendList,
      discoverSelfList,
      discoverCollectList
    }
  ) {
    state.discoverAllList = discoverAllList;
    state.discoverFriendList = discoverFriendList;
    state.discoverSelfList = discoverSelfList;
    state.discoverCollectList = discoverCollectList;
  },
  addDiscoverSelfList(state, discover) {
    state["discoverSelfList"].unshift(discover);
  },
  addDiscoverFriendList(state, discover) {
    state["discoverFriendList"].unshift(discover);
  },
  addDiscoverAllList(state, discover) {
    state["discoverAllList"].unshift(discover);
  },
  likeDiscover(state, { id, tag }) {
    let num = 1;
    if (tag === false) num = -1;
    let item = state["discoverAllList"].filter(({ _id }) => _id === id);
    if (item.length > 0) item[0]["likes"] += num;
    item = state["discoverFriendList"].filter(({ _id }) => _id === id);
    if (item.length > 0) item[0]["likes"] += num;
  },
  discoverComment(state, obj) {
    console.log(obj);
    let id = obj["id"];
    delete obj["id"];
    let item = state["discoverAllList"].filter(({ _id }) => _id === id);
    if (item.length > 0) item[0]["comments"].push(obj);
    item = state["discoverFriendList"].filter(({ _id }) => _id === id);
    if (item.length > 0) item[0]["comments"].push(obj);
    item = state["discoverSelfList"].filter(({ _id }) => _id === id);
    if (item.length > 0) item[0]["comments"].push(obj);
  },
  discoverCollect(state, { id, flag }) {
    let obj = null;
    let item = state["discoverAllList"].filter(({ _id }) => _id === id);
    if (item.length > 0) {
      item[0]["collects"] = flag;
      obj = item[0];
    }
    item = state["discoverFriendList"].filter(({ _id }) => _id === id);
    if (item.length > 0) {
      item[0]["collects"] = flag;
      obj = item[0];
    }
    item = state["discoverSelfList"].filter(({ _id }) => _id === id);
    if (item.length > 0) {
      item[0]["collects"] = flag;
      console.log(obj);
      obj = item[0];
    }
    console.log(obj);
    if (flag) {
      state.discoverCollectList.push(obj);
    } else {
      let idx = state.discoverCollectList.indexOf(item[0]);
      state.discoverCollectList.splice(idx, true);
    }
  }
};

const actions = {
  setDiscoverList({ commit }, list) {
    commit("setDiscoverList", list);
  },
  addDiscover({ rootState, commit }, discover) {
    let { id } = discover;
    let user_id = rootState.user.user._id;
    rootState.contact.contactList.forEach(({ contact_id, remark }) => {
      if (id === contact_id) {
        discover["remark"] = remark;
        commit("addDiscoverFriendList", discover);
      }
    });
    if (id === user_id) {
      discover["remark"] = "我";
      commit("addDiscoverSelfList", discover);
      commit("addDiscoverFriendList", discover);
    }
    commit("addDiscoverAllList", discover);
  },
  likeDiscover({ commit }, obj) {
    commit("likeDiscover", obj);
  },
  discoverComment({ commit }, obj) {
    commit("discoverComment", obj);
  }
};

const getters = {
  getSelfDiscoverList(state) {
    return state.discoverSelfList;
  },
  getFriendDiscoverList(state) {
    return state.discoverFriendList;
  },
  getCollectDiscoverList(state) {
    return state.discoverCollectList;
  },
  getAllDiscoverList(state) {
    return state.discoverAllList;
  }
};

const discover = {
  state,
  mutations,
  getters,
  actions
};

export default discover;
