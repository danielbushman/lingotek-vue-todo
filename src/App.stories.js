import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import {
  storiesOf,
} from '@storybook/vue';
import {
  withNotes,
} from '@storybook/addon-notes';

import App from '@/App';
import store from '@/store';

Vue.use(Vuex);
Vue.use(Vuetify);

const stories = storiesOf('App', module);

stories.add(
  'without props',
  withNotes('Entire app, including its store')(() => ({
    components: {
      App,
    },
    template: '<app/>',
    store,
  })),
);
