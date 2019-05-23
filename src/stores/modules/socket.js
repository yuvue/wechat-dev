import { Message } from "element-ui";

const state = {
  ws: ""
};

const mutations = {
  wssendMessage(state, message) {
    console.log(message);
    state["ws"].send(JSON.stringify(message));
  }
};

const actions = {
  connect({ state, commit, rootGetters }) {
    let id = rootGetters.user._id;
    if (!id) return;
    let ws = new WebSocket(`ws://127.0.0.1:3000/wechat?id=${id}`);
    ws.onmessage = ({ data: buffer }) => {
      console.log(buffer);
      console.log(typeof buffer);
      let { data, msg, type } = JSON.parse(buffer);
      msg && Message.info(msg);
      type && data && commit(type, data);
    };
    ws.onclose = () => Message.warning("您已掉线");
    state.ws = ws;
  },
  close({ state }) {
    if (state.ws !== null) {
      state.ws.close();
    }
  }
};

const getters = {
  getsocket(state) {
    return state.ws;
  }
};

const socket = {
  state,
  mutations,
  actions,
  getters
};

export default socket;
