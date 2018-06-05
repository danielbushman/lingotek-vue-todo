<template>
  <v-breadcrumbs class="pt-0">
    <v-icon slot="divider">chevron_right</v-icon>
    <v-breadcrumbs-item
      v-for="item in items"
      :key="item.text"
      :disabled="item.disabled"
      :to="item.route"
      class="breadcrumb"
    >
      {{ item.text }}
    </v-breadcrumbs-item>
  </v-breadcrumbs>
</template>

<script>
export default {
  name: 'AppBody',
  data() {
    return {
      items: [
        { text: this.$t('programs.collectionName') },
        { text: this.$t('programs.list') },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.breadcrumb {
  text-transform: capitalize;
}
</style>
