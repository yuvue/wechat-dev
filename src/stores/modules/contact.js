import { _setRemark, _addContactConfig } from "@/services/contact";
import { _sendMessage, _readMessage } from "@/services/message";

const SET_LIST = "SET_LIST";
const ADD_CONTACT = "ADD_CONTACT";
const SEND_MESSAGE = "SEND_MESSAGE";
const READ_MESSAGE = "READ_MESSAGE";
const READ_GROUP_MESSAGE = "READ_GROUP_MESSAGE";
const GET_MESSAGE = "GET_MESSAGE";
const SET_CUR_CONTACT = "SET_CUR_CONTACT";
const SET_REMARK = "SET_REMARK";
const CONFIG_FRIEND = "ADD_FRIEND";

const state = {
  contactList: [],
  curContact: ""
};

function last(arr) {
  let len = arr.length;
  if (len > 0) return arr[len - 1];
  else return "";
}

const mutations = {
  /**
   * 设置联系人列表
   * @param {object} val 联系人列表
   */
  [SET_LIST](state, val) {
    state.contactList = val;
  },
  [ADD_CONTACT](state, contact) {
    state.contactList.push(contact);
  },
  [SET_CUR_CONTACT](state, val) {
    typeof val === "object" && (state.curContact = val);
    typeof val === "string" &&
      (state.curContact = state.contactList.filter(
        ({ contact_id }) => contact_id === val
      )[0]);
  },
  [GET_MESSAGE](state, val) {
    state.contactList.some(c => {
      c.contact_id === val.from_id && c.messageList.push(val);
    });
  },
  [SEND_MESSAGE](state, val) {
    state.contactList.some(c => {
      c.contact_id === val.to_id && c.messageList.push(val);
    });
  },
  [READ_MESSAGE](state, from_id) {
    state.contactList.some(c => {
      if (c.contact_id === from_id) {
        c.messageList.forEach(m => m.from_id === from_id && (m.hasRead = true));
      }
    });
  },
  [SET_REMARK](state, val) {
    state.contactList.some(c => {
      c.contact_id === val.id &&
        (c.remark = val.remark) &&
        (c.alpha = val.alpha);
    });
  },
  [CONFIG_FRIEND](state, { id, config }) {
    state.contactList.some(c => {
      c.contact_id === id && (c.config = config);
    });
  },
  [READ_GROUP_MESSAGE](state, id) {
    state.contactList.some(c => {
      c._id = id && c.messageList.forEach(m => (m.hasRead = true));
    });
  }
};

const actions = {
  setList({ commit }, val) {
    commit(SET_LIST, val);
  },
  setCurContact({ commit }, val) {
    commit(SET_CUR_CONTACT, val);
  },
  async setRemark({ commit }, val) {
    let { data } = await _setRemark(val);
    data && commit(SET_REMARK, data);
  },
  async sendMessage({ commit }, msg) {
    let { data } = await _sendMessage(msg);
    commit(SEND_MESSAGE, data);
  },
  async configFriend({ commit }, data) {
    let res = await _addContactConfig(data);
    if (res) {
      commit(CONFIG_FRIEND, data);
    }
  },
  async readMessage({ commit }, from_id) {
    console.log(from_id);
    let res = await _readMessage({ from_id });
    res && commit(READ_MESSAGE, from_id);
  }
};

const getters = {
  contacts(state) {
    let contacts = state.contactList
      .filter(({ config }) => config === 1)
      .sort((a, b) => (a["alpha"] < b["alpha"] ? -1 : 1))
      .reduce((pre, cur) => {
        let alpha = cur.alpha[0];
        !pre[alpha] && (pre[alpha] = []);
        pre[alpha].push(cur);
        return pre;
      }, {});
    return contacts;
  },
  chats: state => id => {
    return state.contactList
      .filter(
        ({ config, messageList, type }) =>
          (config === 1 || type === "group") && messageList.length > 0
      )
      .sort((a, b) => last(a.messageList)["time"] < last(b.messageList)["time"])
      .map(({ avatar, remark, contact_id: _id, messageList }) => {
        let unReadCount = 0;
        messageList.forEach(
          m => m.hasRead === false && id !== m.from_id && unReadCount++
        );
        return {
          avatar,
          remark,
          _id,
          msg: last(messageList),
          time: last(messageList).time,
          unReadCount
        };
      });
  },
  newfriends(state) {
    return state.contactList.filter(
      ({ addFrom, contact_id }) => addFrom === contact_id
    );
  },
  groups(state) {
    return state.contactList.filter(({ type }) => type === "group");
  },
  avatar: state => id => {
    let avatar = "";
    state.contactList.some(c => c.contact_id === id && (avatar = c.avatar));
    return avatar;
  },
  allUnReadCount: state => id => {
    let num = 0;
    state.contactList.forEach(c => {
      c.messageList.forEach(m => {
        m.hasRead === false && m.from_id !== id && num++;
      });
    });
    return num;
  }
};

const contact = {
  state,
  mutations,
  actions,
  getters
};

export default contact;
