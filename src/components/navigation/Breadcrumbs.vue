<template>
  <v-breadcrumbs class="pt-0">
    <v-icon slot="divider">chevron_right</v-icon>
    <v-breadcrumbs-item
      v-for="(item, i) in items"
      :key="i"
      :to="item.to"
      append
      class="breadcrumb"
    >
      {{ $t(item.i18n) }}
    </v-breadcrumbs-item>
  </v-breadcrumbs>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~vuetify/src/stylus/main';

.breadcrumb {
  text-transform: capitalize;
}
</style>

