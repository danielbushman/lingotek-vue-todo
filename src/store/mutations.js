import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK } from './mutation-types';

export default {
  [ADD_TASK]: (state, name) => {
    if (name.trim() === '') return;
    const id = btoa(Math.random() * Date.now()).slice(0, 7);
    state.tasks.unshift({ id, name, completed: false });
  },
  [REMOVE_TASK]: (state, task) => {
    state.tasks.splice(state.tasks.indexOf(task), 1);
  },
  [TOGGLE_TASK]: (state, task) => {
    const toggledTask = { ...task };
    toggledTask.completed = !task.completed;
    state.tasks.splice(state.tasks.indexOf(task), 1, toggledTask);
  },
};
