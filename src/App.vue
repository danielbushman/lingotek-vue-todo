<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <add-task @addTask="addTask"/>
        <task-progress
          v-if="count > 0"
          :completed-count="completedCount"
          :count="count"
        />
        <div class="panel">
          <task
            v-for="task in tasks"
            :key="task.id"
            :task="task"
            @toggle="toggle"
            @remove="remove"
          />
        </div>
      </div>
    </section>
    <footer-links/>
  </div>
</template>

<script>
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import faTimesCircle from '@fortawesome/fontawesome-free-solid/faTimesCircle';

import { mapState, mapGetters, mapMutations } from 'vuex';
import AddTask from './components/AddTask';
import FooterLinks from './components/FooterLinks';
import Task from './components/Task';
import TaskProgress from './components/TaskProgress';
import { TOGGLE_TASK, ADD_TASK, REMOVE_TASK } from './store/mutation-types';

fontawesome.library.add(solid, faTimesCircle);

export default {
  name: 'App',
  components: { AddTask, FooterLinks, Task, TaskProgress },
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
