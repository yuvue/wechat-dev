/**
 * @author Sharp
 * @date 2019-05-18
 * @Description: 登录用户的Vuex
 */

import { userEdit } from "@/services/user";

export const SET_USER = "SET_USER";
export const UPDATE_AVATAR = "UPDATE_AVATAR";

/**
 * 用户信息
 *
 * @type {object}
 */
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

const mutations = {
  /**
   * 设置用户信息
   * @param {object} val 用户信息
   */
  [SET_USER](state, val) {
    state.user = val;
    localStorage.getItem("userinfo") && localStorage.removeItem("userinfo");
    localStorage.setItem("userinfo", JSON.stringify(val));
  },
  /**
   * 更新用户头像
   *
   * @param {string} val 用户头像url
   */
  [UPDATE_AVATAR](state, val) {
    state.user.avatar = val;
  }
};

const actions = {
  setUser({ commit }, val) {
    commit(SET_USER, val);
  },
  updateAvatar({ commit, state }, val) {
    console.log(state);
    commit(UPDATE_AVATAR, val);
    userEdit({ avatar: val, _id: state.info._id });
  }
};

const getters = {
  user(state) {
    return state.user;
  }
};

const user = {
  state,
  mutations,
  actions,
  getters
};

export default user;
