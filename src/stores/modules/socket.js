let baseSocketURL =
  process.env.NODE_ENV === "development"
    ? "ws://localhost:3000/chat"
    : "ws://47.96.72.48/chat";

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
  wson({ state, commit, dispatch }) {
    let ws = new WebSocket(baseSocketURL);
    ws.onmessage = ({ data }) => {
      let message = null;
      try {
        message = JSON.parse(data);
      } catch (e) {
        return;
      }
      if (message["type"] === "msgToDest") {
        commit("getMessage", message);
      }
      if (message["type"] === "msgToUser") {
        commit("sendMessage", message);
      }
      if (message["type"] === "addUser") {
        delete message["type"];
        commit("addFriend", message);
      }
      if (
        message["type"] === "addUserConfig" ||
        message["type"] === "createdGroup"
      ) {
        delete message["type"];
        commit("addContact", message);
      }
      if (message["type"] === "discoverLike") {
        delete message["type"];
        commit("likeDiscover", message);
      }
      if (message["type"] === "discoverComment") {
        delete message["type"];
        commit("discoverComment", message);
      }
      if (message["type"] === "discoverCollect") {
        delete message["type"];
        commit("discoverCollect", message);
      }
      if (message["type"] === "createdDiscover") {
        delete message["type"];
        dispatch("addDiscover", message);
      }
    };
    state.ws = ws;
  },
  wsclose({ state }) {
    console.log(state.ws === null);
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
