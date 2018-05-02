# Vue.js Todo app for Lingotek

[Live Demo](http://lingotek-vue-todo.s3-website-us-east-1.amazonaws.com/)

## Setup local development

Instructions use [Yarn](https://yarnpkg.com/en/) as dependency manager. Use NPM at your own descretion.

```bash
# install
yarn

# dev server with hot reload
yarn dev

# run tests
yarn test
```

## build for production

```bash
# build and view bundle analyzer report
yarn build --report
```

## TODO

### Asked for

* [x] Allows you to add a task
* [x] Allows you to remove a task
* [x] Allows you to mark a task complete
* [x] Has some kind of graph comparing the percentage of completed tasks to the percentage of remaining tasks.

### Granular list

* [x] git and yarn setup
* [x] editorconfig, eslint
* [x] Vue app structure
* [x] Webpack
* [x] Bulma, Sass
* [x] Vue layout
* [x] task entry component
* [x] task component
* [x] task removal component
* [x] task complete component
* [x] graph component
* [x] base Vuex store
* [x] tests for in-memory tasks store
* [x] tasks store

### Stretch goals

* [ ] send done to bottom of list and grey out
* [ ] storybook
* [ ] i18n

#### Proposed features

* [ ] hide/show completed tests
* [ ] vuex-persist
