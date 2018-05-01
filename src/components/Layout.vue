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
import { mapState, mapGetters, mapMutations } from 'vuex';
import AddTask from './AddTask';
import Task from './Task';
import TaskProgress from './TaskProgress';
import { TOGGLE_TASK, ADD_TASK, REMOVE_TASK } from '../store';

export default {
  name: 'Layout',
  components: { AddTask, Task, TaskProgress },
  computed: {
    ...mapState(['tasks']),
    ...mapGetters(['count', 'completedCount']),
  },
  methods: {
    ...mapMutations({
      toggle: TOGGLE_TASK,
      remove: REMOVE_TASK,
      addTask: ADD_TASK,
    }),
  },
};
</script>

