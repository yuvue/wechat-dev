/**
 * @author Sharp
 * @date 2019-05-18
 * @Description: 登录用户的Vuex
 */
import { Message } from "element-ui";
import io from "socket.io-client";

const socketURL = "ws://127.0.0.1:3000";

let ws = null;

const CONNECT = "CONNECT";
const DISCONNECT = "DISCONNECT";

/**
 * 用户信息
 *
 * @type {object}
 */
const state = {
  connected: false
};

const mutations = {
  [CONNECT](state) {
    state.connected = true;
  },
  [DISCONNECT](state) {
    state.connected = true;
  }
};

const actions = {
  connect({ commit, state }) {
    if (ws && ws.connected) {
      console.log("connec");
      ws.close();
    }
    if (ws) {
      console.log("ws", ws);
    }
    ws = io(socketURL);
    ws.on("connect", () => {
      commit(CONNECT);
    });
    ws.on(`error`, data => {
      Message.error(data.msg);
    });
    ws.on(`news`, data => {
      data.msg && Message.info(data.msg);
      console.log(data);
      data.type && commit(data.type, data.data);
    });
    ws.on("disconnect", () => {
      Message.warning("失去socket连接");
      commit(DISCONNECT);
    });
  },
  close({ state }) {
    ws && ws.close();
    ws = null;
    state.connected = false;
  }
};

const socket = {
  state,
  mutations,
  actions
};

export default socket;
