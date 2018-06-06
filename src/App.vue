<template>
  <v-app>
    <v-navigation-drawer
      app
      clipped
      fixed
      width="auto"
      class="elevation-1"
    >
      <side-nav
        :navigation="sidenav.navigation"
        @sidenav-toggled="toggleSideNav"
      />
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
  data() {
    return {
      sidebar: {
        expanded: true,
        navigation: [
          {
            icon: 'dvr',
            route: 'list',
            name: this.$t('sidebar.qualityPrograms'),
          },
          {
            icon: 'settings',
            route: 'settings',
            name: this.$t('sidebar.settings'),
          },
        ],
      },
    };
  },
  methods: {
    toggleSideNav(expanded) {
      this.sidenav.expanded = expanded;
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
  border: 2px dotted red;
}

.debuggg {
  border: 2px dotted green;
}
</style>
