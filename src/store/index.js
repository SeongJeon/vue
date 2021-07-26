import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  isAuth: false,
  isLoginError: false,
  isLoginMsg: null,
  token: null,

  dimVisible: false,
  gnbExpanded: false,
};

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  // strict: process.env.NODE_ENV !== 'production',
});

export default store;
