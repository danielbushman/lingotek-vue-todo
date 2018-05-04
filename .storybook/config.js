import { configure } from '@storybook/vue';

import Vue from 'vue';
import '../node_modules/bulma/css/bulma.min.css';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
