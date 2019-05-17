import axios from "axios";

const state = {
  contactList: [
    {
      remark: "",
      avatar: "",
      contact_id: "",
      signature: "",
      messageList: [
        {
          text: "",
          tag: "send",
          time: ""
        }
      ],
      ContactType: "friend"
    }
  ],
  currentContact: {
    remark: "",
    avatar: "",
    contact_id: "",
    signature: "",
    messageList: [
      {
        text: "",
        tag: "send",
        time: ""
      }
    ]
  }
};

const mutations = {
  // 初始化state
  setContactList(state, val) {
    state.contactList = val;
  },
  // 加入联系人
  addContact(state, contact) {
    state.contactList.push(contact);
  },
  // 读消息
  readMessage(state, contact_id) {
    let contact = state.contactList.filter(
      contact => contact["contact_id"] === contact_id
    )[0];
    contact["messageList"].forEach(message => (message["hasRead"] = true));
  },
  // 发消息
  sendMessage(state, message) {
    state.contactList
      .filter(contact => contact["contact_id"] === message["to_id"])[0]
      ["messageList"].push(message);
  },
  getMessage(state, message) {
    if (message["msg"]["avatar"]) {
      // 群消息
      state.contactList
        .filter(contact => contact["contact_id"] === message["to_id"])[0]
        ["messageList"].push(message);
    } else {
      // 个人消息
      state.contactList
        .filter(contact => contact["contact_id"] === message["from_id"])[0]
        ["messageList"].push(message);
    }
  },
  setCurrentContact(state, contact_id) {
    let contact = state.contactList.filter(
      contact => contact["contact_id"] === contact_id
    )[0];
    state.currentContact = contact;
  }
};

const actions = {
  setContactList({ commit }, val) {
    commit("setContactList", val);
  },
  readMessage({ commit }, contact_id) {
    commit("readMessage", contact_id);
    axios.post("/api/messages/read", { contact_id });
  },
  sendMessage({ state, commit, rootState }, msg) {
    let from_id = rootState["user"]["user"]["_id"];
    let to_id = state["currentContact"]["contact_id"];
    let time = new Date().getTime();
    let fd = new FormData();
    if (msg["type"] === "text") {
      let message = { from_id, to_id, msg, time };
      commit("sendMessage", { ...message, hasRead: true });
      fd.append("from_id", from_id);
      fd.append("to_id", to_id);
      fd.append("type", msg["type"]);
      fd.append("text", msg["text"]);
      axios.post("/api/messages/add", fd);
    }
    if (msg["type"] === "audio") {
      fd.append("from_id", from_id);
      fd.append("to_id", to_id);
      fd.append("type", msg["type"]);
      fd.append("blob", msg["blob"]);
      fd.append("length", Math.round(msg["time"]));
      axios.post("/api/messages/add", fd);
    }
  },
  setCurrentContact({ commit }, contact_id) {
    commit("setCurrentContact", contact_id);
  }
};

const getters = {
  getChatList(state) {
    return state.contactList
      .map(({ remark, messageList, avatar, contact_id }) => {
        if (messageList.length === 0) return;
        let ml = messageList.filter(
          ({ hasRead, from_id }) => hasRead === false && contact_id === from_id
        );
        return {
          contact_id,
          avatar,
          remark,
          endMsg: messageList.last().msg,
          time: messageList.last().time,
          unReadCount: ml.length
        };
      })
      .filter(item => item !== undefined)
      .sort((a, b) => b["time"] - a["time"]);
  },
  getCurrentMessageList(state) {
    return state.currentContact["messageList"];
  },
  getCurrentContact(state) {
    return state.currentContact;
  },
  getAllNotReadCount: state => user_id => {
    let count = 0;
    state.contactList.forEach(contact => {
      if (contact["messageList"].length === 0) return;
      contact["messageList"]
        .filter(({ from_id }) => from_id !== user_id)
        .forEach(message => {
          if (message["hasRead"] === false) count += 1;
        });
    });
    return count;
  },
  getContacts(state) {
    let contacts = state.contactList.filter(
      ({ contactType }) => contactType === "friend"
    );
    let rst = {};
    contacts.sort((a, b) => {
      if (a["alphaFull"] < b["alphaFull"]) {
        return -1;
      } else {
        return 1;
      }
    });
    for (let i = 0; i < contacts.length; i++) {
      let alpha = contacts[i]["alpha"];
      if (typeof rst[`${alpha}`] === "undefined") {
        rst[`${alpha}`] = [];
        rst[`${alpha}`].push(contacts[i]);
      } else {
        rst[`${alpha}`].push(contacts[i]);
      }
    }
    return rst;
  },
  getContactEmails(state) {
    return state.contactList
      .filter(({ contactType }) => contactType === "friend")
      .map(item => item["email"]);
  },
  getGroup(state) {
    return state.contactList.filter(
      ({ contactType }) => contactType === "group"
    );
  },
  getContactIdList(state) {
    return state.contactList
      .filter(({ contactType }) => contactType === "friend")
      .map(({ contact_id }) => contact_id);
  }
};

const contact = {
  state,
  mutations,
  actions,
  getters
};

export default contact;
