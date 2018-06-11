import Router from 'vue-router';
import ListQualityPrograms from '@/components/ListQualityPrograms';
import EditQualityProgram from '@/components/EditQualityProgram';
import ViewQualityProgram from '@/components/ViewQualityProgram';
import Settings from '@/components/Settings';

export default new Router({
  mode: 'history',
  routes: [{
    path: '/quality/programs',
    name: 'ListQualityPrograms',
    component: ListQualityPrograms,
  }, {
    path: '/quality/programs/new',
    name: 'new',
    component: EditQualityProgram,
    props: {
      isNew: true,
      savedAt: null,
    },
  }, {
    path: '/quality/programs/edit/:id',
    name: 'edit',
    component: EditQualityProgram,
    props: {
      isNew: false,
      savedAt: 'Saved 22 May 2018 5:53:07 PM',
    },
  }, {
    path: '/quality/programs/view/:id',
    name: 'view',
    component: ViewQualityProgram,
    props: {
      savedAt: 'Saved 22 May 2018 5:53:07 PM',
    },
  }, {
    path: '/quality/settings',
    name: 'settings',
    component: Settings,
  }],
});
