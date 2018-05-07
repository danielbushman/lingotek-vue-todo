import { storiesOf } from '@storybook/vue';

import AddTask from './AddTask';

storiesOf('AddTask', module).add('to add a task', () => ({
  components: { AddTask },
  template: '<add-task/>',
}));
