import Router from 'vue-router';
import ListQualityPrograms from '@/components/ListQualityPrograms';
import EditQualityProgram from '@/components/EditQualityProgram';
import Settings from '@/components/Settings';

export default new Router({
  mode: 'history',
  routes: [{
    path: '/list',
    name: 'ListQualityPrograms',
    component: ListQualityPrograms,
  }, {
    path: '/new',
    name: 'new',
    component: EditQualityProgram,
    props: {
      isNew: true,
      savedAt: 'Saved 22 May 2018 5:53:07 PM',
    },
  }, {
    path: '/settings',
    name: 'settings',
    component: Settings,
  }],
});
