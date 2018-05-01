<template>
  <div class="columns is-vcentered">
    <div class="column is-one-fifth is-size-7 has-text-right has-text-grey-light is-hidden-mobile">
      {{ percentComplete }}% complete
    </div>
    <div class="column is-three-fifths">
      <progress
        :value="completedCount"
        :max="count"
        class="progress is-info is-large"
      >
        15%
      </progress>
    </div>
    <div class="column is-one-fifth is-size-7 has-text-left has-text-grey-light is-hidden-mobile">
      {{ percentRemaining }}% remaining
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskProgress',
  props: {
    count: {
      type: Number,
      default: 0,
    },
    completedCount: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    percentComplete() {
      const ratio = this.completedCount / this.count;
      return (ratio * 100).toFixed(0);
    },
    percentRemaining() {
      return 100 - this.percentComplete;
    },
  },
};
</script>
