<template>
  <div class="side-nav-container">
    <div class="vue-side-nav" :class="{'side-nav-expanded': expanded}">
      <nav-buttons :items="navigation" :expanded="expanded"/>
      <div class="flex-fill"></div>
      <nav-buttons :items="utilities" :expanded="expanded"/>
      <div v-if="allowExpand" class="width-100 f-row f-end button-container" @click="toggleExpanded">
        <div class="side-nav-button">
          <div :class="{flipped: expanded}">
            <svg width="14px" height="13px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Expand_Icon</title><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Expand_Icon" fill="#000000"><g id="Expand-Navigation" transform="translate(7.500000, 6.500000) scale(-1, 1) translate(-7.500000, -6.500000) translate(1.000000, 0.000000)"><g id="Arrow-Right" transform="translate(6.000000, 0.000000)"><polygon id="Shape" points="7.4 11.1 2.8 6.5 7.4 1.9 6 0.5 -8.8817842e-16 6.5 6 12.5"></polygon></g><g id="Arrow-Right"><polygon id="Shape" points="7.4 11.1 2.8 6.5 7.4 1.9 6 0.5 -8.8817842e-16 6.5 6 12.5"></polygon></g></g></g></g></svg>
          </div>
        </div>
      </div>
    </div>
    <sub-menu ref="subMenu" :menuItems="currentSubMenu" @onaction="toggleSubMenu($event)"></sub-menu>
    <div class="mask" v-if="subMenuExpanded" @click="toggleSubMenu($event)"></div>
  </div>
</template>

<script>
import NavButtons from './NavButtons';
import SubMenu from './SubMenu';

export default {
  components: {
    NavButtons,
    SubMenu,
  },
  props: {
    navigation: {
      type: Array,
      default: () => [],
    },
    utilities: {
      type: Array,
      default: () => [],
    },
    allowExpand: {
      type: Boolean,
      default: () => true,
    }
  },
  data() {
    return {
      subMenuExpanded: false,
      currentSubMenu: [],
      userDidExpand: true,
    };
  },
  methods: {
    toggleExpanded() {
      this.userDidExpand = !this.userDidExpand;
      localStorage.setItem('quality-user-expanded-sidenav', this.userDidExpand);
      this.$emit('sidenav-toggled', this.expanded);
      console.log('this.userDidExpand', this.userDidExpand);
    },
    toggleSubMenu(event) {
      this.subMenuExpanded = !this.subMenuExpanded;
      const subMenu = this.$refs.subMenu.$refs.element;
      if (this.subMenuExpanded) {
        const rect = event.currentTarget.getBoundingClientRect();
        subMenu.style.top = `${rect.top}px`;
        subMenu.offsetHeight = subMenu.offsetHeight; // forces css reflow
        this.$nextTick(() => {
          const subMenuRect = subMenu.getBoundingClientRect();
          if (subMenuRect.bottom > window.innerHeight) {
            const newTop = window.innerHeight - (subMenuRect.height + 8);
            subMenu.style.top = `${newTop}px`;
          }
        });
        subMenu.style.transition = 'all .2s cubic-bezier(.25,.8,.25,1)';
        subMenu.style.left = this.expanded ? '243px' : '59px';
      } else {
        subMenu.style.left = '-240px';
        subMenu.style.zIndex = 50;
        subMenu.offsetHeight = subMenu.offsetHeight; // forces css reflow
        subMenu.style.transition = '0ms';
      }
      window.setTimeout(() => {
        if (this.expaned) subMenu.style.zIndex = 52;
      }, 200);
    },
  },
  computed: {
    expanded() {
      console.log('this.allowExpand && this.userDidExpand', this.allowExpand && this.userDidExpand);
      return this.allowExpand && this.userDidExpand;
    }
  },
  mounted() {
    this.userDidExpand = localStorage.getItem('quality-user-expanded-sidenav') || this.userDidExpand;
    console.log('this.userDidExpand', this.userDidExpand);
  },
};
</script>

<style lang="stylus" scoped>
// vars
$transition-duration = 0.2s;
$transition = all $transition-duration cubic-bezier(0.25, 0.8, 0.25, 1);
$card-background = white;
$collapsed-width = 56px;
$expanded-width = 240px;
$text-color = rgba(black, 0.54);
$background = rgb(250, 250, 250);
$active-background = #e0e0e0;
$hover-background = $active-background;

.side-nav-container {
  z-index: 1;

  .vue-side-nav {
    z-index: 51;
    flex: 1 1 auto;
    width: $collapsed-width;
    height: 100%;
    background: $card-background;
    display: flex;
    flex-direction: column;
    transition: $transition;

    &.side-nav-expanded {
      width: $expanded-width;
    }
  }

  .mask {
    z-index: 51;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }

  .button-container {
    color: $text-color;
    cursor: pointer;
    position: relative;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &.active {
      background: $active-background;
    }

    &:hover {
      background: $hover-background;
    }

    &.current-page {
      background: $active-background;
    }

    .side-nav-button {
      width: 56px;
      height: 56px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      border: none;
      background: transparent;
      text-decoration: none;
      color: $text-color;

      &:hover {
        color: $text-color;
      }

      div {
        transition: $transition;
        transition-duration: $transition-duration * 3;
        user-select: none;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.54;

        &.flipped {
          transform: rotate(180deg);
        }
      }
    }
  }
}
</style>

