import { storiesOf } from '@storybook/vue';

import Layout from './Layout';

storiesOf('Layout', module).add('layout', () => ({
  components: { Layout },
  template: '<layout/>',
}));
