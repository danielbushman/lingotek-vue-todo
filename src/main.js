import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import Vuetify from 'vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import App from '@/App';
import store from '@/store';
import messages from '@/languages';

// Plugins
Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en-CA',
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
  template: '<App/>',
});
