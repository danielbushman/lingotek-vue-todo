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

- [ ] Start ltk-vue-lib
- [ ] Create ltk-vue-lib/plugins/i18n
- [ ] Create ltk-vue-lib/components/sidenav
- [ ] Add sidebar nav items
- [ ] Create ltk-vue-lib/components/appbar
- [ ] Create ltk-vue-lib/store/user-info
- [ ] Add appbar items
- [ ] Move ltk-vue-lib to it's own repo
- [ ] Remove Bulma and add Vuetify
- [ ] Add breadcrumbs using Vuetify

### List

- [ ] List Quality Programs
- [ ] List sorting
- [ ] List item actions
- [ ] Search (filter) programs in list
- [ ] "Created By" column filter
- [ ] List Pagination

### Base and Details

- [ ] View details
- [ ] Edit details
- [ ] Save/Cancel actions (use with existing to avoid validation errors)
- [ ] Publish/Unpublish actions
- [ ] Stepper

### Categories

- [ ] View error types and categories
- [ ] Base edit view
- [ ] Find error types
- [ ] Add/remove/rename categories
- [ ] Drag and drop organizing

### Severities

- [ ] View severities
- [ ] add/remove/rename severities
- [ ] sort severities

### Scoring

- [ ] UX prototype
- [ ] View/Edit algorithm options
- [ ] Add/edit/remove scorecards
- [ ] Metadata field auto-completion

### Settings

- [ ] View Permissions
- [ ] Edit assigned groups/users
