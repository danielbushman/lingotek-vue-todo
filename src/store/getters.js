import _ from 'lodash';

export default {
  qualityPrograms: state => state.qualityPrograms,
  errorTypes: state => state.errorTypes,
  uncategorizedErrorTypes: (state, getters) => {
    const allErrorTypeEntries = _.flatMap(getters.errorCategories, category => category.lqi_types);
    const uniqueErrorTypesUsed = _.uniqBy(allErrorTypeEntries, obj => obj.lqi_type_id);
    const uncategorizedErrorTypes = _.filter(getters.errorTypes, type => (
      uniqueErrorTypesUsed.filter(errorType => errorType.lqi_type_id === type.id).length === 0));
    console.log('uncategorizedErrorTypes', uncategorizedErrorTypes);
    return uncategorizedErrorTypes;
  },
  errorCategories: state => state.errorCategories,
};
