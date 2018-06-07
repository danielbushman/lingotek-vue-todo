<template>
  <v-navigation-drawer
    app
    clipped
    fixed
    width="auto"
    class="elevation-1"
  >
    <side-nav
      :navigation="navigation"
      :allowExpand="allowSideNavExpand"
      @sidenav-toggled="sideNavToggled"
    />
  </v-navigation-drawer>
</template>

<script>
import SideNav from '@/ltk-vue-lib/components/sidenav/SideNav';

export default {
  name: 'SideDrawer',
  components: {
    SideNav,
  },
  data() {
    return {
      sideNavToggledOn: true,
      navigation: [
        {
          icon: 'dvr',
          route: 'list',
          name: this.$t('sidenav.qualityPrograms'),
        },
        {
          icon: 'settings',
          route: 'settings',
          name: this.$t('sidenav.settings'),
        },
      ],
    };
  },
  computed: {
    allowSideNavExpand() {
      return this.$vuetify.breakpoint.name !== 'xs' && this.$vuetify.breakpoint.name !== 'sm';
    },
    sideNavExpanded() {
      return this.allowSideNavExpand && this.sideNavToggledOn;
    },
  },
  watch: {
    sideNavExpanded(value) {
      this.$emit('toggled', this.sideNavExpanded);
    }
  },
  methods: {
    sideNavToggled(expanded) {
      this.sideNavToggledOn = expanded;
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '~vuetify/src/stylus/main'; // import vuetify into scope
</style>
