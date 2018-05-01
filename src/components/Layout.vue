<template>
  <section class="section">
    <div class="container">
      <add-task/>
      <task-progress/>
      <nav class="panel">
        <task
          v-for="(task, i) in tasks"
          :key="i"
          :task="task"
        />
      </nav>
    </div>
  </section>
</template>

<script>
import AddTask from './AddTask';
import Task from './Task';
import TaskProgress from './TaskProgress';

export default {
  name: 'Layout',
  components: { AddTask, Task, TaskProgress },
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
};
</script>

<style lang="scss" scoped>

</style>
