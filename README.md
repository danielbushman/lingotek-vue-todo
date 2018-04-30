# Vue.js Todo app for Lingotek

## Setup local development

Instructions use [Yarn](https://yarnpkg.com/en/) as dependency manager. Use NPM at your own descretion.

```bash
# install
yarn

# dev server with hot reload
yarn dev

## run tests
yarn test
```

## build for production

```bash
# build and view bundle analyzer report
yarn build --report
```

## TODO

### Asked for

* [ ] Allows you to add a task
* [ ] Allows you to remove a task
* [ ] Allows you to mark a task complete
* [ ] Has some kind of graph comparing the percentage of completed tasks to the percentage of remaining tasks.

### Granular list

* [x] git and yarn setup
* [x] editorconfig, eslint
* [x] Vue app structure
* [x] Webpack
* [x] Bulma, Sass
* [x] Vue layout
* [ ] Storybook for Vue
* [ ] story: layout
* [ ] task entry component
* [ ] story: task entry
* [ ] task removal component
* [ ] story: task removal
* [ ] task complete component
* [ ] story: task complete
* [ ] graph component
* [ ] story: graph (simple CSS rather than chart lib)
* [ ] base Vuex store
* [ ] tests for in-memory tasks store
* [ ] tasks store

#### Proposed features

* [ ] hide/show completed tests
* [ ] vuex-persist
