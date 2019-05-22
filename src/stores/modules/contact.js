import { _setRemark } from "@/services/contact";
import { _sendMessage } from "@/services/message";

const SET_LIST = "SET_LIST";
const ADD_CONTACT = "ADD_CONTACT";
const SEND_MESSAGE = "SEND_MESSAGE";
const GET_MESSAGE = "GET_MESSAGE";
const SET_CUR_CONTACT = "SET_CUR_CONTACT";
const SET_REMARK = "SET_REMARK";

const state = {
  contactList: []
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
    console.log("addcontact", contact);
    // state.contactList.push(contact);
  },
  [SET_CUR_CONTACT](state, val) {
    typeof val === "object" && (state.curContact = val);
    typeof val === "string" &&
      (state.curContact = state.contactList.filter(
        ({ _id }) => _id === val
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
  [SET_REMARK](state, val) {
    state.contactList.some(c => {
      c.contact_id === val.id &&
        (c.remark = val.remark) &&
        (c.alpha = val.alpha);
    });
  }
};

const actions = {
  setList({ commit }, val) {
    commit(SET_LIST, val);
  },
  addContact({ commit }, val) {
    commit(ADD_CONTACT, val);
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
  }
};

const getters = {
  getContacts(state) {
    let contacts = state.contactList
      .filter(
        ({ contactType, config }) => contactType === "friend" && config === 1
      )
      .sort((a, b) => (a["alpha"] < b["alpha"] ? -1 : 1))
      .reduce((pre, cur) => {
        let alpha = cur.alpha[0];
        !pre[alpha] && (pre[alpha] = []);
        pre[alpha].push(cur);
        return pre;
      }, {});
    return contacts;
  },
  chats(state) {
    return state.contactList
      .filter(
        ({ contactType, config, messageList }) =>
          contactType === "friend" && config === 1 && messageList.length > 0
      )
      .sort((a, b) => last(a.messageList)["time"] < last(b.messageList)["time"])
      .map(({ avatar, remark, _id, messageList }) => ({
        avatar,
        remark,
        _id,
        msg: last(messageList),
        time: last(messageList).time
      }));
  }
};

const contact = {
  state,
  mutations,
  actions,
  getters
};

export default contact;
