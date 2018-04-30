import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

import App from './App';

Vue.use(Buefy);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
