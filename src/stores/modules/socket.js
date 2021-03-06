import { Message } from 'element-ui'

const state = {
  ws: null,
}

const baseURL = `wss://demo.jajun.top/socket/wechat`

const mutations = {
  wssendMessage(state, message) {
    state['ws'].send(JSON.stringify(message))
  },
}

const actions = {
  connect({ state, commit, rootGetters }) {
    let id = rootGetters.user._id
    if (!id) return
    let URL = baseURL + `/wechat?id=${id}`
    let ws = new WebSocket(URL)
    ws.onmessage = ({ data: buffer }) => {
      let { data, msg, type } = JSON.parse(buffer)
      msg && Message.info(msg)
      type && data && commit(type, data)
    }
    ws.onclose = () => Message.warning('您已掉线')
    state.ws = ws
  },
  close({ state }) {
    if (state.ws !== null) {
      state.ws.close()
      state.ws = null
    }
  },
}

const getters = {
  getsocket(state) {
    return state.ws
  },
}

const socket = {
  state,
  mutations,
  actions,
  getters,
}

export default socket
