<template>
  <b-field>
    <div class="control">
      <input
        class="input is-medium"
        type="text"
        :placeholder="placeholder"
        @keyup.enter="addTask"
       >
    </div>
    <p class="control">
      <button
        class="button is-primary is-medium is-expanded"
        @click="addTask"
      >
        Add
      </button>
    </p>
  </b-field>
</template>

<script>
export default {
  name: 'EnterTask',
  data() {
    return {
      placeholder: 'Enter a task name',
    };
  },
  methods: {
    addTask() {},
  },
};
</script>
