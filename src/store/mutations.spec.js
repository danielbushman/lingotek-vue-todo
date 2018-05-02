import { cloneDeep } from 'lodash';
import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import getters from './getters';
import mutations from './mutations';
import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK } from './mutation-types';

const testTask = { id: 'a', name: 'a', completed: false };

const testStore = {
  state: {
    tasks: [testTask],
  },
  mutations,
  getters,
};

describe('mutations', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let store;
  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(testStore));
  });

  test('ADD_TASK adds a task, given a name, to the begining of the array', () => {
    store.commit(ADD_TASK, 'some task');
    expect(store.state.tasks[0]).toMatchObject({ name: 'some task' });
    expect(store.state.tasks[0]).toHaveProperty('id');
    expect(store.state.tasks[0].completed).toBeFalsy();
  });

  test('ADD_TASK with not add an empty string as a task', () => {
    const startingCount = store.state.tasks.length;
    store.commit(ADD_TASK, '     ');
    expect(store.state.tasks.length).toEqual(startingCount);
  });

  test('REMOVE_TASK removes the provided task', () => {
    expect(store.state.tasks).toContainEqual(testTask);
    store.commit(REMOVE_TASK, testTask);
    expect(store.state.tasks).not.toContainEqual(testTask);
  });

  test('TOGGLE_TASK toggles the completed property of a task between true and false', () => {
    let task;
    task = store.state.tasks[0];
    expect(task.completed).toEqual(false);
    task = store.state.tasks[0];
    store.commit(TOGGLE_TASK, task);

    task = store.state.tasks[0];
    expect(task.completed).toEqual(true);
    task = store.state.tasks[0];
    store.commit(TOGGLE_TASK, task);

    task = store.state.tasks[0];
    expect(task.completed).toEqual(false);
    task = store.state.tasks[0];
    store.commit(TOGGLE_TASK, task);
  });
});
