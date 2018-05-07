import { storiesOf } from '@storybook/vue';

import AddTask from './AddTask';

storiesOf('AddTask', module).add('without props', () => ({
  components: { AddTask },
  template: '<add-task/>',
}));
