const SET_ALL_LIST = "SET_ALL_LIST";
const SET_FRIEND_LIST = "SET_FRIEND_LIST";
const ADD_LIST = "ADD_LIST";
const ADD_SELF_LIST = "ADD_SELF_LIST";
const ADD_ALL_LIST = "ADD_ALL_LIST";
const ADD_COMMENT = "ADD_COMMENT";
const COLLECT_MOMENT = "COLLECT_MOMENT";

import { _collectMoment, _postComent } from "service/moment";

const state = {
  allList: [
    // {
    //   id: "",
    //   text: "",
    //   audio: "",
    //   tags: "",
    //   img: [],
    //   config: 0,
    //   likes: 0,
    //   forwards: 0,
    //   comments: [
    //     {
    //       id: "",
    //       text: ""
    //     }
    //   ],
    //   collects: [],
    //   last_edit_time: 0
    // }
  ],
  friendList: []
};

const mutations = {
  [SET_ALL_LIST](state, { allList, friendList }) {
    state.allList = allList;
    state.friendList = friendList;
  },
  [SET_FRIEND_LIST](state, friendList) {
    state.friendList = friendList;
  },
  [ADD_LIST](state, moment) {
    state.allList.push(moment);
    state.friendList.push(moment);
  },
  [ADD_SELF_LIST](state, moment) {
    state.friendList.push(moment);
  },
  [ADD_ALL_LIST](state, moment) {
    state.allList.push(moment);
  },
  [ADD_COMMENT](state, { id, comment }) {
    state.allList.some(moment => {
      moment._id === id && moment.comments.push(comment);
    });
    state.friendList.some(moment => {
      moment._id === id && moment.comments.push(comment);
    });
  },
  [COLLECT_MOMENT](state, { id, config, user_id }) {
    state.allList.some(moment => {
      if (moment._id === id) {
        let collects = moment.collects;
        config === -1 && collects.splice(collects.indexOf(user_id), 1);
        config === 1 && collects.push(user_id);
      }
    });
  }
};

const getters = {};

const actions = {
  async addComment({ commit, rootState }, comment) {
    let avatar = rootState.user.user.avatar;
    let { data } = await _postComent({
      id: comment.id,
      text: comment.text
    });
    if (data) {
      commit(ADD_COMMENT, { id: comment.id, comment: { ...data, avatar } });
    }
  },
  async collectMoment({ commit, rootState }, data) {
    let res = await _collectMoment(data);
    let user_id = rootState.user.user._id;
    if (res) commit(COLLECT_MOMENT, { ...data, user_id });
  }
};

const moment = {
  state,
  mutations,
  getters,
  actions
};

export default moment;
