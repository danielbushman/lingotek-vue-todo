import {
  isNumber,
  isObject,
} from 'lodash';
import moment from 'moment';

import {
  RECIEVE_QUALITY_PROGRAMS,
  RECIEVE_ERROR_TYPES,
} from './mutation-types';

export default {
  [RECIEVE_QUALITY_PROGRAMS]: (state, programs) => {
    const standardizedPrograms = programs.map((raw) => {
      const version = isObject(raw.version) ? raw.version.version : null;
      let saved;
      if (isNumber(version)) {
        const asDate = isNumber(version) && new Date(version);
        const asISOString = isObject(asDate) && asDate.toISOString();
        const asMoment = moment(asISOString);
        saved = asMoment.isValid() ? asMoment.format('D MMM YYYY HH:mm A') : '';
      }
      return {
        saved,
        ...raw,
      };
    });
    state.qualityPrograms = standardizedPrograms;
  },
  [RECIEVE_ERROR_TYPES]: (state, errorTypes) => {
    state.errorTypes = errorTypes;
  },
};

// "id": "dcbb996c-6ed3-4e02-92b1-22132853b715",
// "name": "Checkmate",
// "community_id": "994851b9-ee13-4387-895f-18952b5e4035",
// "description": "The default Quality Program designed by Lingotek",
// "preset_global": true,
// "preset_enable": false,
// "created_by_id": "bb685e7b-d195-4af7-9965-2a0f2fdab89f",
// "created_by_name": "admin",
// "published": false,
// "can_edit": false
