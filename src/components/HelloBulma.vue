<template>
  <section class="section">
    <div class="container">
    <!-- Main container -->
      <nav class="level">
        <!-- Left side -->
        <h1 class="title">
          Hello World
        </h1>

        <!-- Right side -->
        <p class="subtitle">
          {{ msg }}
        </p>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App with Bulma',
    };
  },
};
</script>

