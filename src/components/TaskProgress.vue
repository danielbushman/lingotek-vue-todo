<template>
  <div class="columns is-vcentered">
    <div class="column is-one-fifth is-size-7 has-text-right has-text-grey-light is-hidden-mobile">
      100% complete
    </div>
    <div class="column is-three-fifths">
      <progress
        class="progress is-info is-large"
        value="15"
        max="100"
      >
        15%
      </progress>
    </div>
    <div class="column is-one-fifth is-size-7 has-text-left has-text-grey-light is-hidden-mobile">
      0% remaining
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskProgress',
};
</script>
