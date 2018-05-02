<template>
  <nav
    class="navbar is-fixed-bottom is-dark"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a
        class="navbar-item is-hidden-mobile"
        href="http://danielbushman.com"
      >
        by @danielbushman
      </a>
      <a
        class="navbar-item"
        href="https://github.com/danielbushman/lingotek-vue-todo"
      >
        source on Github
      </a>
      <a
        class="navbar-item"
        href="https://github.com/danielbushman/lingotek-vue-todo/archive/master.zip"
      >
        Download ZIP
      </a>
      <a
        class="navbar-item"
        href="http://lingotek-vue-todo.s3-website-us-east-1.amazonaws.com"
      >
        Live Demo
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'FooterLinks',
};
</script>
