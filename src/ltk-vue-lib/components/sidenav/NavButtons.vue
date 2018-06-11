<template>
  <div class="nav-buttons">
    <router-link
      class="width-100 f-row f-start button-container"
      v-for="(item, i) of items"
      :key="i"
      :to="item.route"
    >
      <div
        class="side-nav-button"
        v-if="item.icon !== 'assignment_turned_in'"
      >
        <v-tooltip
          :disabled="expanded"
          open-delay="1000"
          right
        >
          <i
            slot="activator"
            class="material-icons the-icon"
          >
            {{item.icon}}
          </i>
          <span>{{item.name}}</span>
        </v-tooltip>
      </div>
      <div
        :class="{ expanded }"
        class="f-row f-center-cross button-label"
      >
        {{item.name}}
      </div>
      <div
        v-if="item.subnav"
        class="subnav-indicator"
      >
        <i class="material-icons">arrow_drop_up</i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    expanded: {
      type: Boolean,
      default: () => localStorage.getItem('side-nav-expanded') === 'true',
    }
  }
};
</script>

<style lang="stylus" scoped>
$transition-duration = 0.2s;
$transition = all $transition-duration cubic-bezier(0.25, 0.8, 0.25, 1);
$text-color = rgba(black, 0.54);
$active-background = #e0e0e0;

.nav-buttons {
  a {
    text-decoration: none;
  }

  .button-container {
    color: $text-color;
    cursor: pointer;
    position: relative;
    flex-shrink: 0;
    display: flex;
    align-items: center;

    &.active {
      background: $active-background;
    }

    &:hover {
      background: $active-background;
    }

    &.current-page {
      background: $active-background;
    }

    .side-nav-button {
      color: $text-color;
      width: 56px;
      height: 56px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      border: none;
      background: transparent;
      text-decoration: none;

      &:hover {
        color: $text-color;
      }
    }

    .button-label {
      transition: $transition;
      transition-duration: $transition-duration * 2;
      overflow: hidden;
      white-space: nowrap;
      font-size: 16px;
      color: $text-color;
      text-decoration: none;
      position: relative;
      opacity: 0;

      &.expanded {
        opacity: 1;
      }
    }

    .the-icon {
      display: flex;
    }

    .subnav-indicator {
      position: absolute;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      top: 0px;
      right: -2px;

      i {
        font-size: 20px;
        transform: rotate(90deg);
        color: $text-color;
      }
    }
  }
}
</style>

