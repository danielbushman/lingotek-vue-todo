<template>
  <v-app>
    <v-navigation-drawer
      app
      clipped
      fixed
      class="elevation-1"
    >
      <side-nav/>
    </v-navigation-drawer>
    <v-toolbar
      app
      fixed
      clipped-left
      height="56px"
    >
      <app-bar/>
    </v-toolbar>
    <v-content>
      <v-container
        fluid
        fill-height
        justify-start
      >
        <v-layout
          align-start
        >
          <v-flex
            shrink
          >
            <app-body/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from '@/ltk-vue-lib/components/appbar';
import SideNav from '@/ltk-vue-lib/components/sidenav';
import AppBody from '@/components/AppBody';

export default {
  name: 'App',
  components: {
    AppBar,
    SideNav,
    AppBody,
  },
};
</script>

<style lang="stylus">
// not scoped
@import '~vuetify/src/stylus/main'; // Ensure you are using stylus-loader

.debug {
  border: 2px dotted blue;
}

.debugg {
  border: 2px dotted red;
}

.debuggg {
  border: 2px dotted green;
}
</style>
