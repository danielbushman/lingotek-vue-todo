import { storiesOf } from '@storybook/vue';

import FooterLinks from './FooterLinks';

const stories = storiesOf('FooterLinks', module);

stories.add('without props', () => ({
  components: { FooterLinks },
  template: '<footer-links/>',
}));
