import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import store from '@/store';
import vuetify from '@/plugins/vuetify';

Vue.use(Vuex);

// Ajax Axios
import axios from 'axios';
Vue.prototype.$http = axios;

// Router
import router from '@/router/index.js';

// UI
import 'animate.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
  vuetify,
}).$mount('#app');
