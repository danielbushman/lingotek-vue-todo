<template>
  <v-container fluid grid-list-sm>
    <v-layout row wrap>
      <!-- section headers -->
      <v-flex xs3>
        <v-text-field
          solo
          append-icon="search"
          label="Find..."
          class="elevation-2 grey lighten-5"
          ligh
        />
      </v-flex>
      <v-flex xs9>

      </v-flex>
      <!-- sort boxes -->
      <v-flex>

      </v-flex>
      <v-flex xs6 s4>
        <v-layout column justify-start>
          <v-flex shrink class="mb-5">

          </v-flex>
          <v-flex>
            <div class="grey--text">
              Uncategorized error types
            </div>
            <v-list dense>
              <v-list-tile class="pa-0 ma-0" style="zoom: 0.8">
                <v-list-tile-action shrink>
                  <v-icon color="grey lighten-1">drag_handle</v-icon>
                </v-list-tile-action>
                <v-list-tile-content class="subheading pa-0 ma-0">
                  Inconsistent with termbase
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon small color="grey lighten-1">drag_handle</v-icon>
                </v-list-tile-action>
                <v-list-tile-title class="body-1">
                  Mistranslation
                </v-list-tile-title>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon small color="grey lighten-1">drag_handle</v-icon>
                </v-list-tile-action>
                <v-list-tile-content class="body-1">
                  Inconsistent use of terminology
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex md8 xs6 class="ml-5">
        <v-layout column>
          <v-flex class="mb-5">
            <v-layout row align-center>
              <v-flex shrink>
                <h3 class="headline mr-2">Categories</h3>
              </v-flex>
              <v-flex xs6 lg3>
                <v-text-field
                  label="Quick add..."
                  solo
                  class="elevation-1 grey lighten-5"
                  append-icon="add"
                />
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ErrorCategories',
  props: {

  },
}
</script>

<style lang="stylus" scoped>
@import '~vuetify/src/stylus/main';

.debug {
  border: 3px dotted red;
}
</style>
