<template>
  <v-app>
    <side-drawer @toggled="drawerToggled"/>
    <top-menu/>
    <app-body :drawer-open="drawerOpen"/>
  </v-app>
</template>

<script>
import TopMenu from '@/components/navigation/TopMenu';
import SideDrawer from '@/components/navigation/SideDrawer';
import AppBody from '@/components/AppBody';

export default {
  name: 'App',
  components: {
    TopMenu,
    SideDrawer,
    AppBody,
  },
  data() {
    return {
      drawerOpen: true,
    };
  },
  methods: {
    drawerToggled(expanded) {
      this.drawerOpen = expanded;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~vuetify/src/stylus/main'; // import for all contexts using vuetify
</style>
