import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/vue';
import { action } from '@storybook/addon-actions';

import Task from './Task';

const stories = storiesOf('Task', module);

stories.addDecorator(withKnobs);

stories
  .add('without props', () => ({
    components: { Task },
    template: '<task/>',
  }))
  .add('with knobs and actions', () => ({
    components: { Task },
    data() {
      return {
        task: {
          id: text('id', 'SOME-ID'),
          name: text('label', 'Do something'),
          completed: boolean('completed'),
        },
      };
    },
    methods: {
      toggle: action('toggle'),
      remove: action('remove'),
    },
    template: '<task :task="task" @toggle="toggle" @remove="remove"/>',
  }))
  .add('listed in a panel', () => ({
    components: { Task },
    data() {
      return {
        tasks: [{ name: 'Task 1' }, { name: 'Task 2' }, { name: 'Task 3', completed: true }],
      };
    },
    template: '<div class="panel"><task v-for="(task, i) in tasks" :task="task" :key="i"/></div>',
  }));
