import {
  cloneDeep,
} from 'lodash';
import {
  createLocalVue,
} from '@vue/test-utils';
import Vuex from 'vuex';

import getters from './getters';
import mutations from './mutations';
import {
  RECIEVE_QUALITY_PROGRAMS,
  RECIEVE_ERROR_TYPES,
  // RECIEVE_ERROR_TYPES,
} from './mutation-types';

const qualityPrograms = [{
  id: '0635a27c-bd3d-46fb-bcc2-a5da0a2380ad',
  name: 'From Checkmate',
  community_id: 'ad59581e-dec7-4814-88fb-8114c606d1ab',
  description: 'Created from industry standard Checkmate',
  preset_global: false,
  preset_enable: true,
  created_by_id: 'd6896d96-9d5b-47e6-bc7e-ee277c4a3561',
  created_by_name: 'Daniel Bushman',
  published: false,
  can_edit: true,
  version: {
    version: 1528330938571,
  },
}, {
  id: 'fd7f9ca4-e56a-4719-b983-a5d4b606571b',
  name: 'Nifty Program',
  community_id: 'ad59581e-dec7-4814-88fb-8114c606d1ab',
  description: '',
  preset_global: false,
  preset_enable: true,
  created_by_id: 'd6896d96-9d5b-47e6-bc7e-ee277c4a3561',
  created_by_name: 'Daniel Bushman',
  published: true,
  can_edit: true,
  version: {
    version: 1528134758988,
  },
}];

const errorTypes = [{
  id: '20945e0c-fc8f-41a4-abb4-2f3c1332fbe0',
  name: 'Third-party style',
  alias: 'Third-party style',
  help_text: 'The text violates a third-party style guide.',
}, {
  id: 'e2b94f11-4c79-45a5-ab05-5dd8da19a307',
  name: 'Grammatical register',
  alias: 'Grammatical register',
  help_text: 'The content uses the wrong grammatical register, such as using informal pronouns or verb forms when their formal counterparts are required.',
}, {
  id: 'cbeed936-d74d-499b-b5fb-a80bf2855b49',
  name: 'Omission',
  alias: 'Omission',
  help_text: 'Content is missing from the translation that is present in the source.',
}];

const testStore = {
  state: {
    qualityPrograms: [],
    errorTypes: [],
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

  test('RECIEVE_QUALITY_PROGRAMS should create a human-readable `saved` property', () => {
    store.commit(RECIEVE_QUALITY_PROGRAMS, qualityPrograms);
    expect(store.state.qualityPrograms[0].saved).toEqual('6 Jun 2018 18:22 PM');
  });
  test('RECIEVE_QUALITY_PROGRAMS should otherwise be unchanged', () => {
    store.commit(RECIEVE_QUALITY_PROGRAMS, qualityPrograms);
    const saved = '6 Jun 2018 18:22 PM';
    expect(store.state.qualityPrograms[0]).toMatchObject({
      saved,
      ...qualityPrograms[0],
    });
  });
  test('RECIEVE_ERROR_TYPES should set state of errorTypes unmodified', () => {
    store.commit(RECIEVE_ERROR_TYPES, errorTypes);
    expect(store.state.errorTypes).toMatchObject(errorTypes);
  });
});
