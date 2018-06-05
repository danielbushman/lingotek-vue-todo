import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import App from '@/App';
import store from '@/store';

// Plugins
Vue.use(Vuex);
Vue.use(Vuetify);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App,
  },
  store,
  template: '<App/>',
});
