import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import App from '@/App';
import store from '@/store';
import Localization from '@/ltk-vue-lib/plugins/Localization';
import languages from '@/languages.json';

// Plugins
Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(Localization, store);

Vue.l10n(languages);

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
