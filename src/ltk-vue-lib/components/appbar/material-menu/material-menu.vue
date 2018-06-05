<template>
  <div class="material-menu-container">
    <div class="material-menu-toggle" @click="openMenu()" ref="toggle">
      <slot></slot>
    </div>
    <div ref="menuCard" class="material-menu" :class="{'active': menuIsOpen}">
      <div class="material-menu-option" v-for="(option, i) of options" @click="execute(option)" :key="i">
        <i v-if="option.icon" class="material-icons">{{option.icon}}</i>
        <div>{{option.name}}</div>
      </div>
    </div>
    <div class="v-menu-mask" @click="closeMenu" v-if="menuIsOpen"></div>
  </div>
</template>

<script src="./material-menu.js"></script>
<style lang="stylus" src="./material-menu.styl" scoped></style>
