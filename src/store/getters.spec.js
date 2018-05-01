import { cloneDeep } from 'lodash';
import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import getters from './getters';
import mutations from './mutations';

const incompleteTask = { id: 'a', name: 'a', completed: false };
const completedTask = { id: 'b', name: 'b', completed: true };
const completedTask2 = { id: 'c', name: 'c', completed: true };

const testStore = {
  state: {
    tasks: [incompleteTask, completedTask, completedTask2],
  },
  mutations,
  getters,
};

describe('getters', () => {
  test('count returns number of tasks', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store(cloneDeep(testStore));
    expect(store.getters.count).toBe(3);
  });

  test('completedTasks returns...wait for it...completed tasks!', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store(cloneDeep(testStore));
    expect(store.getters.completedTasks).not.toContain(incompleteTask);
    expect(store.getters.completedTasks).not.toContain(completedTask);
    expect(store.getters.completedTasks).not.toContain(completedTask2);
  });

  test('completedCount is the number of of completed tasks', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store(cloneDeep(testStore));
    expect(store.getters.completedCount).toBe(2);
  });
});
