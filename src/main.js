import Vue from 'vue';
import Vuex from 'vuex';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

import App from './App';
import store from './store';

Vue.use(Vuex);
Vue.use(Buefy);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  store,
  template: '<App/>',
});
