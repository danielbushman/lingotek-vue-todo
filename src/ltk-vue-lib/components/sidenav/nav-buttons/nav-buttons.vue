<template>
  <div class="buttons-container">
    <div class="width-100 f-row f-start button-container" v-for="(item, i) of items" @click="goTo(item.route)" :key="i">
      <router-link class="side-nav-button" v-if="item.icon !== 'assignment_turned_in'" :to="item.route">
        <i class="material-icons">{{item.icon}}</i>
      </router-link>
      <div class="f-row f-center-cross button-label">
        {{item.name}}
      </div>
      <div v-if="item.subnav" class="subnav-indicator">
        <i class="material-icons">arrow_drop_up</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    goTo(route) {
      router.push(route);
    }
  }
};
</script>
<style lang="stylus" src="./nav-buttons.styl" scoped></style>
