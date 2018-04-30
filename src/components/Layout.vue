<template>
  <section class="section">
    <div class="container">
      <!-- Main container -->
      <div class="level">
        <h1 class="title">
          {{ title }}
        </h1>
      </div>
    </div>
    <div class="container">
      <enter-task/>
    </div>
  </section>
</template>

<script>
import EnterTask from './EnterTask';

export default {
  name: 'Layout',
  components: { EnterTask },
  data() {
    return {
      title: 'todo',
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  color: rgb(180, 180, 180);
}
</style>
