<template>
  <div class="vue-app-bar">
    <a class="logo" :href="dashboardApp.url">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         width="40px" height="40px" viewBox="0 0 128 128" enable-background="new 0 0 128 128" xml:space="preserve">
      <path fill="#F37F16" d="M38.701,27.486L19.229,59.003c0,0-3.568,4.637-0.801,9.266l18.663,31.513l-1.85,0.929L0.822,65.489
        c0,0-1.85-1.85,0-3.707l36.013-35.221L38.701,27.486z"/>
      <g>
        <path fill="none" d="M50.834,70.727l12.793,21.318l13.542-21.318c4.028-6.734,0.805-13.453,0.805-13.453L64.8,35.947L51.623,57.273
          C51.623,57.273,46.79,63.992,50.834,70.727z"/>
        <polygon fill="#F37F16" points="79.876,11.551 77.181,10.205 64.608,22.582 69.797,27.857 	"/>
        <polygon fill="#FFFFFF" points="48.127,116.446 50.806,117.795 63.387,105.415 58.372,100.317 	"/>
        <path fill="#F37F16" d="M68.58,100.297l-4.953-8.252L50.834,70.727c-4.044-6.734,0.789-13.453,0.789-13.453L64.8,35.947
          l-5.205-8.429L25.271,61.313c-2.683,2.679,0,5.377,0,5.377l33.1,33.627l5.015,5.098l12.188,12.38l2.694-1.349L68.58,100.297z"/>
        <path fill="#FFFFFF" d="M102.728,61.313L69.797,27.857l-5.188-5.275L52.427,10.205l-2.695,1.346l9.862,15.968l5.205,8.429
          l13.174,21.326c0,0,3.224,6.719-0.805,13.453L63.627,92.045l4.953,8.252l34.147-33.606C102.728,66.69,105.41,63.992,102.728,61.313
          z"/>
      </g>
      <path fill="#FFFFFF" d="M90.895,27.486l19.469,31.517c0,0,1.989,4.637-0.801,9.266L89.302,99.781l1.854,0.929l36.021-35.221
        c0,0,1.854-1.85,0-3.707L92.761,26.562L90.895,27.486z"/>
      </svg>
    </a>
    <div v-for="app in availableApplications" :key="app.id" v-if="app.link_order">
      <a class="app" :href="app.url">{{app.name}}</a>
    </div>
    <div class="flex-fill"></div>
    <material-menu :options="menuOptions">
      <div class="f-column">
        <div class="username">{{user.name}}</div>
        <div class="username organization">{{organization.name}}</div>
      </div>
    </material-menu>
  </div>
</template>
<script src="./appbar.js"></script>
<style lang="stylus" src="./appbar.styl"></style>
