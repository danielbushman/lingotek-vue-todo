<template>
  <div class="field has-addons">
    <p class="control is-expanded">
      <input
        class="input is-medium"
        type="text"
        placeholder="Enter a task name"
        @keyup.enter="addTask"
      >
    </p>
    <p class="control">
      <button
        class="button is-light is-medium is-expanded"
        @click="addTask"
      >
        Add
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'AddTask',
  methods: {
    addTask() {},
  },
};
</script>
