<template>
  <v-toolbar
    app
    fixed
    clipped-left
    height="56px"
  >
    <app-bar/>
  </v-toolbar>
</template>

<script>
import AppBar from '@/ltk-vue-lib/components/appbar';

export default {
  name: 'TopMenu',
  components: {
    AppBar,
  },
};
</script>

<style lang="stylus" scoped>
@import '~vuetify/src/stylus/main'; // import vuetify into scope
</style>
