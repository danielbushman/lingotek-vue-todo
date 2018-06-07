import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import Router from 'vue-router';
import Vuetify from 'vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import App from '@/App';
import store from '@/store';
import messages from '@/languages';
import router from '@/router';

// Plugins
Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(VueI18n);
Vue.use(Router);

const i18n = new VueI18n({
  locale: 'en-US',
  messages,
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App,
  },
  store,
  i18n,
  router,
  template: '<App/>',
});
