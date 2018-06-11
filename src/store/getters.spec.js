import {
  cloneDeep,
} from 'lodash';
import {
  createLocalVue,
} from '@vue/test-utils';
import Vuex from 'vuex';

import getters from './getters';
import mutations from './mutations';

const qualityPrograms = [{
  name: 'Quality Program 1',
  description: 'A great quality program',
}, {
  name: 'Quality Program 2',
  description: 'A fair quality program',
}];

const errorTypes = [{
  id: 'AAA',
  name: 'Legal',
}, {
  id: 'BBB',
  name: 'Currency format',
}, {
  id: 'CCC',
  name: 'Over-translation',
}];

const errorCategories = [{
  id: 'a6bc6b1e-da6e-415b-9476-fda1db9c6d15',
  name: 'General',
  description: 'Missing translations, white space differences etc.',
  lqi_types: [{
    id: '3da2c259-17da-47e7-b71d-3dcadd041a17',
    lqi_type_id: 'AAA',
    category_id: 'a6bc6b1e-da6e-415b-9476-fda1db9c6d15',
  }, {
    id: 'aacd5768-97bf-4649-aad2-fcac6c85fd07',
    lqi_type_id: 'BBB',
    category_id: 'a6bc6b1e-da6e-415b-9476-fda1db9c6d15',
  }],
}, {
  id: '979f75fd-2e8b-40e5-ba90-a6589eb535ee',
  name: 'Inline Codes',
  lqi_types: [{
    id: 'f87cd692-0368-4d77-bef0-82ace40abd41',
    lqi_type_id: 'BBB',
    category_id: '979f75fd-2e8b-40e5-ba90-a6589eb535ee',
  }],
}, {
  id: '979f75fd-2e8b-40e5-ba90-a6589eb535ee',
  name: 'Foo',
  lqi_types: [{
    id: '3333f87c',
    lqi_type_id: 'AAA',
    category_id: '979f75fd-2e8b-40e5-ba90-a6589eb535ee',
  }],
}];

const testStore = {
  state: {
    qualityPrograms,
    errorTypes,
    errorCategories,
  },
  mutations,
  getters,
};

describe('getters', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let store;
  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(testStore));
  });

  test('.qualityPrograms returns list of quality programs', () => {
    expect(store.getters.qualityPrograms.length).toBe(qualityPrograms.length);
    expect(store.getters.qualityPrograms[0]).toMatchObject(qualityPrograms[0]);
  });

  test('.errorTypes returns list of error types', () => {
    expect(store.getters.errorTypes.length).toBe(errorTypes.length);
    expect(store.getters.errorTypes[0]).toMatchObject(errorTypes[0]);
  });

  test('.uncategorizedErrorTypes returns list of only uncategorized error types', () => {
    expect(store.getters.uncategorizedErrorTypes.length).toEqual(1);
    expect(store.getters.uncategorizedErrorTypes[0].id).toEqual('CCC');
  });
});
