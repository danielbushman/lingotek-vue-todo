<template>
  <div id="app">
    <layout/>
  </div>
</template>

<script>
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import faTimesCircle from '@fortawesome/fontawesome-free-solid/faTimesCircle';

import Layout from './components/Layout';

fontawesome.library.add(solid, faTimesCircle);

export default {
  name: 'App',
  components: {
    Layout,
  },
};
</script>
