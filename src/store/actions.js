import router from '@/router';
// import {getLogin} from '@/api/admin/login';

const actions = {
  setDimmedExpanded({commit}, payload) {
    commit('setDimmedExpanded', payload);
  },
  setGnbExpanded({commit}, payload) {
    commit('setGnbExpanded', payload);
  },
  setPageTitle({commit}, title) {
    commit('setPageTitle', title);
  },
};
export default actions;
