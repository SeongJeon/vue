import router from '@/router';
// import {getLogin} from '@/api/admin/login';

const actions = {

  setDimmedExpanded({commit}, payload) {
    commit('setDimmedExpanded', payload);
  },
  setGnbExpanded({commit}, payload) {
    commit('setGnbExpanded', payload);
  },
};
export default actions;
