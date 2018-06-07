<template>
  <div
    ref="element"
    class="side-nav-sub-menu"
  >
    <router-link
      v-for="option of menuItems"
      v-if="option.show !== false"
      :key="option.name"
      :to="option.route"
      class="option"
    >
      {{ option.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="stylus" scoped>
.side-nav-sub-menu {
  min-height: 56px;
  z-index: 50;
  background: white;
  background: var(--card-background);
  position: fixed;
  width: 240px;
  left: -240px;
  box-shadow: var(--box-shadow-3);

  .option {
    font-size: 14px;
    cursor: pointer;
    height: 48px;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;

    &:hover {
      color: rgba(245, 124, 0, 0.75);
    }
  }
}
</style>
