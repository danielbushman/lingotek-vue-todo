import { storiesOf } from '@storybook/vue';

import Task from './Task';

storiesOf('Task', module)
  .add('without props', () => ({
    components: { Task },
    template: '<task/>',
  }))
  .add('with a name', () => ({
    components: { Task },
    data() {
      return {
        task: { name: 'Do something' },
      };
    },
    template: '<task :task="task"/>',
  }))
  .add('completed', () => ({
    components: { Task },
    data() {
      return {
        task: { completed: true },
      };
    },
    template: '<task :task="task"/>',
  }))
  .add('listed', () => ({
    components: { Task },
    data() {
      return {
        tasks: [{ name: 'Task 1' }, { name: 'Task 2' }, { name: 'Task 3', completed: true }],
      };
    },
    template: '<div class="panel"><task v-for="(task, i) in tasks" :task="task" :key="i"/></div>',
  }));
