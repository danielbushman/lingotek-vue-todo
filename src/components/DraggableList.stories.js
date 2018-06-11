import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import {
  storiesOf,
} from '@storybook/vue';
import {
  withNotes,
} from '@storybook/addon-notes';

import DraggableList from '@/components/DraggableList';
import DraggableListItem from '@/components/DraggableListItem';

Vue.use(Vuetify);


const stories = storiesOf('DraggableList', module);

const vuetifyAppDecorator = () => ({
  template: `
    <v-app>
      <story/>
    </v-app>
  `,
});

stories
  .addDecorator(vuetifyAppDecorator)
  .add(
    'without props',
    withNotes('Draggable list')(() => ({
      components: {
        DraggableList,
      },
      template: '<draggable-list/>',
    })),
  )
  .addDecorator(vuetifyAppDecorator)
  .add(
    'list item',
    withNotes('Just one item')(() => ({
      props: {
        name: 'List item name',
      },
      components: {
        DraggableListItem,
      },
      template: '<v-list dense><draggable-list-item/><draggable-list-item/></v-list>',
    })),
  );
