<template>
  <v-app>
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
        :class="{ 'sidenav-expanded': sidenav.expanded }"
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
    <side-drawer @toggled="drawerToggled"/>
  </v-app>
</template>

<script>
import AppBar from '@/ltk-vue-lib/components/appbar';
import SideDrawer from '@/components/navigation/SideDrawer';
import AppBody from '@/components/AppBody';

export default {
  name: 'App',
  components: {
    AppBar,
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

<style lang="stylus">
// not scoped
@import '~vuetify/src/stylus/main'; // Ensure you are using stylus-loader

.container {
  margin-left: 59px;

  &.sidenav-expanded {
    margin-left: 240px;
  }
}

.debug {
  border: 2px dotted blue;
}

.debugg {
  border: 3px dotted red;
}

.debuggg {
  border: 4px dotted green;
}
</style>
