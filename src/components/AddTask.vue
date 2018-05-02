<template>
  <div class="field has-addons">
    <p class="control is-expanded">
      <input
        v-model="inputValue"
        class="input is-medium"
        type="text"
        placeholder="Add a task to do"
        @keyup.enter="addTask"
      >
    </p>
    <p class="control">
      <button
        class="button is-medium is-expanded is-outlined"
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
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    addTask() {
      if (this.inputValue !== '') {
        this.$emit('addTask', this.inputValue);
        this.inputValue = '';
      }
    },
  },
};
</script>
