<template>
  <section class="section">
    <div class="container">
      <add-task @addTask="addTask"/>
      <task-progress
        v-if="count > 0"
        :completed-count="completedCount"
        :count="count"
      />
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

