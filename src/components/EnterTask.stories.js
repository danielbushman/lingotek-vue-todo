import { storiesOf } from '@storybook/vue';

import EnterTask from './EnterTask';

storiesOf('EnterTask', module).add('enter task', () => ({
  components: { EnterTask },
  template: '<enter-task/>',
}));
