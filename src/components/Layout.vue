<template>
  <section class="section">
    <div class="container">
      <nav class="panel">
        <p class="panel-heading">
          Tasks
        </p>
        <div class="panel-block">
          100% tasks complete
          <progress class="progress is-primary is-large" value="15" max="100">15%</progress>

        </div>
        <div class="panel-block">
          <div class="field has-addons">
            <div class="control">
              <input
                class="input is-medium"
                type="text"
                placeholder="Enter a task name"
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

          </div>
        </div>
        <label class="panel-block" v-for="(task, i) in tasks" :key="i">
          <input type="checkbox">
          {{ task.name }}
        </label>

      </nav>
    </div>
  </section>
</template>

<script>
import EnterTask from './EnterTask';
import Task from './Task';

export default {
  name: 'Layout',
  data() {
    return {
      tasks: [
        {
          name: 'task A',
        },
        {
          name: 'task B',
        },
      ],
    };
  },
  methods: {
    addTask() {},
  },
};
</script>

<style lang="scss" scoped>

</style>
