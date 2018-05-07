import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/vue';

import Task from './Task';

const stories = storiesOf('Task', module);

stories.addDecorator(withKnobs);

stories
  .add('without props', () => ({
    components: { Task },
    template: '<task/>',
  }))
  .add('with knobs', () => ({
    components: { Task },
    data() {
      return {
        task: { name: text('label', 'Do something'), completed: boolean('completed') },
      };
    },
    template: '<task :task="task"/>',
  }))
  .add('listed in panel', () => ({
    components: { Task },
    data() {
      return {
        tasks: [{ name: 'Task 1' }, { name: 'Task 2' }, { name: 'Task 3', completed: true }],
      };
    },
    template: '<div class="panel"><task v-for="(task, i) in tasks" :task="task" :key="i"/></div>',
  }));
