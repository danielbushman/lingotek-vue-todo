<template>
  <v-content>
    <v-container
      :class="{ 'drawer-open': drawerOpen }"
      fluid
      fill-height
      justify-start
      class="with-sidenav"
    >
      <v-layout class="with-sidenav">
        <v-flex>
          <div class="app-body">
            <router-view/>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'AppBody',
  props: {
    drawerOpen: {
      type: Boolean,
      default: () => true,
    },
  },
  data() {
    return {
      items: [
        { text: this.$t('breadcrumbs.qualityPrograms'), href: '/list', disabled: false },
        { text: this.$t('breadcrumbs.list') },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '~vuetify/src/stylus/main';

$collapsed-width = 59px;
$expanded-width = 240px;

.container.with-sidenav {
  position: relative;
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  left: $collapsed-width;

  .layout.with-sidenav {
    margin-right: $collapsed-width;
  }

  &.drawer-open {
    left: $expanded-width;

    .layout.with-sidenav {
      margin-right: $expanded-width;
    }
  }
}
</style>
