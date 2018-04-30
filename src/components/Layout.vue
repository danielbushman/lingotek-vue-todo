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
      List
    </div>
  </section>
</template>

<script>
export default {
  name: 'Layout',
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
