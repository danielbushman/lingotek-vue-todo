<template>
  <v-list-tile
    :style="{ zoom: $vuetify.breakpoint.lgAndUp ? 0.8 : 0.7 }"
    class="pr-0"
  >
    <v-list-tile-action shrink>
      <v-icon color="grey lighten-1">drag_handle</v-icon>
    </v-list-tile-action>
    <v-list-tile-content
      :class="{ 'allow-truncate': allowTruncate }"
      class="subheading pr-0"
    >
      {{ item.name }}
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  name: 'DraggableListItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    allowTruncate: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~vuetify/src/stylus/main'; // import for scope

.allow-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
