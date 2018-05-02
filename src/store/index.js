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
  strict: process.env.NODE_ENV !== 'production',
});

export default store;
