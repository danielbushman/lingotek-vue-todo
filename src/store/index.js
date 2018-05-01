import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// mutation types
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

const store = new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {
    completedTasks: state => state.tasks.filter(t => t.completed),
    count: state => state.tasks.length,
    completedCount: (state, getters) => getters.completedTasks.length,
  },
  mutations: {
    [ADD_TASK]: (state, name) => {
      const id = btoa(Math.random() * Date.now()).slice(0, 7);
      state.tasks.push({ id, name, completed: false });
    },
    [REMOVE_TASK]: (state, task) => {
      state.tasks.splice(state.tasks.indexOf(task), 1);
    },
    [TOGGLE_TASK]: (state, task) => {
      const completedTask = { ...task };
      completedTask.completed = !completedTask.completed;
      state.tasks.splice(state.tasks.indexOf(task), 1, completedTask);
    },
  },
});

export default store;
