import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import AddTask from './AddTask';

storiesOf('AddTask', module).add('with actions', () => ({
  components: { AddTask },
  template: '<add-task @addTask="addTask"/>',
  methods: {
    addTask: action('addTask'),
  },
}));
