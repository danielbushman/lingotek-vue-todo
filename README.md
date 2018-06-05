# Quality Manager

This is a rewrite of the [Quality Manger App](https://bitbucket.org/lingotek/quality-manager-app/src/master/) into Vue.js.

## Setup local development

```bash
# install
npm i

# dev server with hot reload
npm run dev

# run tests
npm run test

# launch storybook
npm run storybook
```

## build for production

```bash
# build and view bundle analyzer report
npm run build --report
```

## TODO

### App

- [x] Remove Bulma and add Vuetify
- [x] Re-organize project
- [x] Start ltk-vue-lib folder locally
- [x] Add vue-i18n
- [ ] Create ltk-vue-lib/components/sidenav
- [ ] HARD CODE sidebar nav items
- [ ] Create ltk-vue-lib/components/appbar
- [ ] HARD CODE ltk-vue-lib/store/user-info
- [ ] HARD CODE appbar items
- [ ] Add breadcrumbs using Vuetify

### List

- [ ] tests for store module
- [ ] HARD CODE actions
- [ ] write mutations and getters
- [ ] List Quality Programs
- [ ] List sorting
- [ ] List item actions
- [ ] Search (filter) programs in list
- [ ] "Created By" column filter
- [ ] List Pagination
- [ ] Move generic components ltk-vue-lib/components
- [ ] Finalize .stories

### Base and Details

- [ ] tests for store module
- [ ] HARD CODE actions
- [ ] write mutations and getters
- [ ] View details
- [ ] Edit details
- [ ] Save/Cancel actions (use with existing to avoid validation errors)
- [ ] Publish/Unpublish actions
- [ ] Stepper
- [ ] Move generic components ltk-vue-lib/components
- [ ] Finalize .stories

### Categories

- [ ] tests for store module
- [ ] HARD CODE actions
- [ ] write mutations and getters
- [ ] View error types and categories
- [ ] Base edit view
- [ ] Find error types
- [ ] Add/remove/rename categories
- [ ] Drag and drop organizing
- [ ] Move generic components ltk-vue-lib/components
- [ ] Finalize .stories

### Severities

- [ ] tests for store module
- [ ] HARD CODE actions
- [ ] write mutations and getters
- [ ] View severities
- [ ] add/remove/rename severities
- [ ] sort severities
- [ ] Move generic components ltk-vue-lib/components
- [ ] Finalize .stories

### Scoring

- [ ] UX prototype
- [ ] tests for store module
- [ ] HARD CODE actions
- [ ] write mutations and getters
- [ ] View/Edit algorithm options
- [ ] Add/edit/remove scorecards
- [ ] Metadata field auto-completion
- [ ] Move generic components ltk-vue-lib/components
- [ ] Finalize .stories

### Settings

- [ ] tests for store module
- [ ] HARD CODE actions
- [ ] write mutations and getters
- [ ] View Permissions
- [ ] Edit assigned groups/users
- [ ] Move generic components ltk-vue-lib/components
- [ ] Finalize .stories

### Deploy

- [ ] HARD CODE lt-vue-lib/plugins/ltk-environment
- [ ] Move node-app-server to folder in this repo
- [ ] Integrate node-app-server for use with webpack
- [ ] Finish ltk-vue-lib/plugins/ltk-environment
- [ ] Finish ltk-vue-lib/components/sidenav
- [ ] Finish ltk-vue-lib/store/user-info
- [ ] Finish ltk-vue-lib/components/appbar
- [ ] Move ltk-vue-lib to it's own repo
- [ ] Finish store/list/actions
- [ ] Finish store/program/actions
- [ ] Finish store/categories/actions
- [ ] Finish store/severities/actions
- [ ] Finish store/scoring/actions
- [ ] Finish store/settings/actions
- [ ] Move node-app-server folder to branch of node-app-server
