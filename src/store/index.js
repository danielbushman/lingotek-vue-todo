import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: [],
  },
  getters,
  mutations,
});

export default store;
