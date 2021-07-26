const mutations = {
  isLogin(state) {
    state.isAuth = true;
  },
  isLogout(state) {
    state.isAuth = false;
  },
  isLoginError(state, payload) {
    state.isLoginError = payload;
  },
  isLoginMsg(state, msg) {
    state.isLoginMsg = msg;
  },

  setDimmedExpanded(state, payload) {
    state.dimVisible = payload;
  },
  setGnbExpanded(state, payload) {
    state.gnbExpanded = payload;
  },
};

export default mutations;
