<template>
  <div>
    <v-layout
      row
      align-center
    >
      <v-flex shrink>
        <span class="headline grey--text text--darken-2 ml-2 mb-0">Quality Programs</span>
      </v-flex>
      <v-flex>
        <v-btn
          fab
          small
          color="primary"
          to="/quality/programs/new"
        >
          <v-icon dark>add</v-icon>
        </v-btn>
      </v-flex>
      <v-spacer/>
      <v-flex
        xs3
        align-start
      >
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
          class="mb-3 mt-0"
        />
      </v-flex>
    </v-layout>
    <v-data-table
      v-if="programs.length > 0"
      :headers="headers"
      :items="programs"
      :search="search"
      :pagination.sync="pagination"
      :hide-actions="programs.length < 5"
      item-key="id"
      class="elevation-1"
    >
      <template
        slot="headers"
        slot-scope="props"
        fluid
      >
        <tr>
          <th
            v-for="header in props.headers"
            :key="header.value"
            :class="[
              `text-xs-${header.align}`,
              'column',
              header.sortable !== false ? 'sortable' : '',
              pagination.descending ? 'desc' : 'asc',
              header.value === pagination.sortBy ? 'active' : ''
            ]"
            @click="changeSort(header.value)"
          >
            {{ header.text }}
            <v-icon
              v-if="header.sortable !== false"
              small
            >arrow_upward</v-icon>
          </th>
        </tr>
      </template>
      <template
        slot="items"
        slot-scope="props"
      >
        <tr>
          <td
            class="text-xs-left primary--text body-2"
            xs4
          >
            {{ props.item.name }}
          </td>
          <td
            class="text-xs-left"
            xs4
          >
            {{ props.item.description }}
          </td>
          <td
            class="text-xs-left"
            xs3
          >
            {{ props.item.created_by }}
          </td>
          <td
            class="text-xs-right"
            xs1
          >
            {{ props.item.saved }}
          </td>
          <td
            class="text-xs-center"
            xs1
          >
            <v-icon
              v-if="props.item.published"
              color="success"
            >
              check
            </v-icon>
          </td>
          <td class="text-xs-center">
            <v-menu
              offset-y
              left
            >
              <v-btn
                slot="activator"
                icon
                class="mx-0"
                @click="openRowActions(props.item)"
              >
                <v-icon color="grey">more_vert</v-icon>
              </v-btn>
              <v-list dense>
                <v-list-tile>
                  <v-list-tile-title>
                    {{ $t("list-quality-programs.action-menu.view") }}
                  </v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-title>
                    {{ $t("list-quality-programs.action-menu.edit") }}
                  </v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-title>
                    {{ $t("list-quality-programs.action-menu.publish") }}
                  </v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-title>
                    {{ $t("list-quality-programs.action-menu.create-duplicate") }}
                  </v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </td>
        </tr>
      </template>
      <template
        slot="pageText"
        slot-scope="props"
      >
        {{ props.pageStart }} - {{ props.pageStop }} of {{ props.itemsLength }}
      </template>
    </v-data-table>
    <div
      v-if="programs.length === 0"
      class="grey--text text--lighten-1 ml-5 mt-5"
    >
      <router-link to="/quality/programs/new">Add a Quality Program</router-link>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    search: '',
    pagination: {
      sortBy: 'saved',
      descending: true,
      rowsPerPage: 10,
    },
    hasLoaded: false,
    headers: [
      // add width or class
      { text: 'Program Name', align: 'left', value: 'name' },
      { text: 'Description', align: 'left', value: 'description' },
      { text: 'Created By', align: 'left', value: 'created_by' },
      { text: 'Saved', align: 'center', value: 'saved' },
      { text: 'Published', align: 'center', value: 'published' },
      { text: 'Actions', align: 'center', value: 'actions', sortable: false },
    ],
  }),
  computed: {
    ...mapGetters({
      programs: 'qualityPrograms',
    }),
  },
  watch: {
    pagination: {
      pagination() { this.storePaginationLocally(); },
      rowsPerPage() { this.storePaginationLocally(); },
      descending() { this.storePaginationLocally(); },
    },
  },
  mounted() {
    this.getPrograms()
      .then(() => {
        this.hasLoaded = true;
        const pagination = JSON.parse(localStorage.getItem('quality-programs-pagination'));
        if (_.isObject(pagination)) this.pagination = pagination;
      });
  },
  methods: {
    ...mapActions({
      getPrograms: 'getQualityPrograms',
    }),
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    },
    storePaginationLocally() {
      return this.hasLoaded && localStorage.setItem('quality-programs-pagination', JSON.stringify(this.pagination));
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~vuetify/src/stylus/main'; // import for each scope using vuetify

@media (device-width: 768px) and (device-height: 1024px) {
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
}
</style>
