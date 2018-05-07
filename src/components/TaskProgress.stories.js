import { storiesOf } from '@storybook/vue';
import { withKnobs, number } from '@storybook/addon-knobs/vue';

import TaskProgress from './TaskProgress';

const stories = storiesOf('TaskProgress', module);

stories.addDecorator(withKnobs);

stories
  .add('without props', () => ({
    components: { TaskProgress },
    template: '<task-progress/>',
  }))
  .add('with knobs', () => ({
    components: { TaskProgress },
    data() {
      return {
        count: number('count', 10),
        completedCount: number('completedCount', 3),
      };
    },
    template: '<task-progress :completed-count="completedCount" :count="count"/>',
  }));
