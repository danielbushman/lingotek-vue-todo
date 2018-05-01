export default {
  completedTasks: state => state.tasks.filter(t => t.completed),
  count: state => state.tasks.length,
  completedCount: (state, getters) => getters.completedTasks.length,
};
