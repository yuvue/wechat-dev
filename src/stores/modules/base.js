/**
 * @author Sharp
 * @date 2019-05-18
 * @Description: 登录用户的Vuex
 */

export const SET_SCROLL = 'SET_SCROLL'

const state = {
  scroll: '',
}

const mutations = {
  /**
   * 设置页面滚动位置
   * @param {Number} data 页面滚动位置
   */
  [SET_SCROLL](state, data) {
    state.scroll = { ...state.scroll, ...data }
  },
}

const getters = {
  scroll: state => path => {
    return state.scroll[path] || 0
  },
}

const base = {
  state,
  mutations,
  getters,
}

export default base
