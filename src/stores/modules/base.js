const state = {
  routeFrom: "/chat", // 访问search页面前的页面路由名称
  scrollY: {}
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
