const state = {
  routeFrom: "/chat", // 访问search页面前的页面路由名称
  scrollY: {},

  // 头部
  isEdit: false // 个人信息是否编辑状态
};

const mutations = {
  setRouteFrom(state, val) {
    state.routeFrom = val;
  },
  setScrollY(state, val) {
    state.scrollY = {
      ...state.scrollY,
      ...val
    };
  },
  meEdit(state) {
    state.isEdit = !state.isEdit;
  }
};

const getters = {
  getScrollY(state) {
    return state.scrollY;
  }
};

const actions = {
  //
};

const base = {
  state,
  mutations,
  getters,
  actions
};

export default base;
