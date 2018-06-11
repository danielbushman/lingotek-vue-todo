<template>
  <div>
    <div :class="muteHeading ? 'grey--text mb-2' : 'subheading'">
      {{ heading }}
    </div>
    <v-list
      :two-line="$vuetify.breakpoint.mdAndDown && allowTruncate"
      dense
    >
      <div
        v-for="(item, i) in items"
        :key="item.name"
      >
        <draggable-list-item
          :item="item"
          :allow-truncate="allowTruncate"
        />
        <v-divider v-if="i < items.length - 1"/>
      </div>
    </v-list>
  </div>
</template>

<script>
import DraggableListItem from '@/components/DraggableListItem';

export default {
  name: 'DraggableList',
  components: {
    DraggableListItem,
  },
  props: {
    heading: {
      type: String,
      default: () => '',
    },
    muteHeading: {
      type: Boolean,
      default: () => false,
    },
    allowTruncate: {
      type: Boolean,
      default: () => false,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~vuetify/src/stylus/main'; // import into scope
</style>
