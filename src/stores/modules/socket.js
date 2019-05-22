/**
 * @author Sharp
 * @date 2019-05-18
 * @Description: 登录用户的Vuex
 */
import { Message } from "element-ui";
import io from "socket.io-client";

const socketURL = "ws://127.0.0.1:3000";

/**
 * 用户信息
 *
 * @type {object}
 */
const state = {
  ws: null
};

const actions = {
  connect({ commit }) {
    let ws = io(socketURL);
    ws.on(`error`, data => {
      Message.error(data.msg);
    });
    ws.on(`news`, data => {
      data.msg && Message.info(data.msg);
      console.log(data);
      data.type && commit(data.type, data.data);
    });
    state.ws = ws;
  },
  close({ state }) {
    // state.ws && state.ws.close();
  }
};

const socket = {
  state,
  actions
};

export default socket;
