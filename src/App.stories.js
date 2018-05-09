import Vue from 'vue';
import Vuex from 'vuex';
import { storiesOf } from '@storybook/vue';
import { withNotes } from '@storybook/addon-notes';

import App from './App';
import store from './store';

Vue.use(Vuex);

const stories = storiesOf('App', module);

stories.add(
  'without props',
  withNotes('This is simply the app, including a store')(() => ({
    components: { App },
    template: '<app/>',
    store,
  })),
);
