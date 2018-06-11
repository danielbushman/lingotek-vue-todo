<template>
  <div class="side-nav-container">
    <div class="vue-side-nav" :class="{'side-nav-expanded': expanded}">
      <nav-buttons :items="navigation" :expanded="expanded"/>
      <div class="flex-fill"></div>
      <nav-buttons :items="utilities" :expanded="expanded"/>
      <div v-if="allowExpand" class="width-100 f-row f-end button-container" @click="$emit('sidenav-toggled')">
        <div class="side-nav-button">
          <div :class="{flipped: expanded}">
            <svg width="14px" height="13px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Expand_Icon</title><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Expand_Icon" fill="#000000"><g id="Expand-Navigation" transform="translate(7.500000, 6.500000) scale(-1, 1) translate(-7.500000, -6.500000) translate(1.000000, 0.000000)"><g id="Arrow-Right" transform="translate(6.000000, 0.000000)"><polygon id="Shape" points="7.4 11.1 2.8 6.5 7.4 1.9 6 0.5 -8.8817842e-16 6.5 6 12.5"></polygon></g><g id="Arrow-Right"><polygon id="Shape" points="7.4 11.1 2.8 6.5 7.4 1.9 6 0.5 -8.8817842e-16 6.5 6 12.5"></polygon></g></g></g></g></svg>
          </div>
        </div>
      </div>
    </div>
    <sub-nav-menu ref="subMenu" :subnav="currentSubNav" @onaction="toggleSubnav()"></sub-nav-menu>
    <div class="mask" v-if="expanded" @click="toggleSubnav($event)"></div>
  </div>
</template>
<script src="./sidenav.js"></script>
<style lang="stylus" src="./sidenav.styl" scoped></style>
