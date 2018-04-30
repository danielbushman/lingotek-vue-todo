import { configure } from '@storybook/vue';

import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

const req = require.context('../src/components', true, /\.stories\.js$/);

Vue.use(Buefy);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
