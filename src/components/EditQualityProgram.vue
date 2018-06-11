<template>
  <div>
    <breadcrumbs :items="breadcrumbs"/>
    <!-- details -->
    <v-card>
      <v-card-title
        v-if="isNew"
        primary-title
      >
        <h3 class="headline">{{ $t('editQualityProgram.createAQualityProgram') }}</h3>
      </v-card-title>
      <v-form
        ref="form"
        class="pb-4"
      >
        <v-container fluid>
          <v-layout row>
            <!-- inputs -->
            <v-flex xs7>
              <v-layout
                column
                justify-content-start
              >
                <v-flex shrink>
                  <v-text-field
                    :model="programName"
                    color="orange darken-2"
                    label="Name"
                    placeholder="Quality program name..."
                    required
                  />
                </v-flex>
                <v-flex>
                  <v-text-field
                    color="orange darken-2"
                    label="Description"
                  />
                </v-flex>
                <v-flex v-if="isNew">
                  <v-checkbox
                    v-model="useIndustryStandard"
                    class="mt-4"
                    label="Copy values from an industry standard"
                  />
                  <v-select
                    v-if="useIndustryStandard"
                    v-model="industryStandard"
                    :items="industryStandards"
                    label="Select a standard"
                    single-line
                  />
                </v-flex>
              </v-layout>
            </v-flex>
            <!-- save buttons -->
            <v-flex xs5>
              <v-layout column>
                <v-flex class="text-xs-right">
                  <v-btn flat>Cancel</v-btn>
                  <v-btn
                    :disabled="programName"
                    color="primary"
                  >
                    {{ $t('buttons.save') }}
                  </v-btn>
                </v-flex>
                <v-flex class="text-xs-right">
                  <div class="grey--text text--lighten-1 mr-2">
                    {{ savedAtString }}
                  </div>
                </v-flex>
                <v-spacer/>
                <v-flex class="text-xs-right">
                  <v-btn
                    v-if="!published && !isNew"
                    class="grey--text text--darken-1 mt-5"
                    flat
                  >
                    <v-icon
                      left
                    >publish</v-icon>
                    {{ $t('editQualityProgram.publish') }}
                  </v-btn>
                  <v-btn
                    v-if="published"
                    class="grey--text text--darken-1 mt-5"
                    flat
                  >
                    <v-icon
                      left
                    >publish</v-icon>
                    {{ $t('editQualityProgram.unpublish') }}
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
      <v-stepper
        v-model="e1"
        light
        alt-labels
        non-linear
      >
        <v-stepper-header>
          <v-stepper-step
            :complete="e1 > 1"
            step="1"
            editable
            color="secondary"
          >
            {{ $t('editQualityProgram.errorCategories') }}
          </v-stepper-step>
          <v-divider/>
          <v-stepper-step
            :complete="e1 > 2"
            step="2"
            editable
            color="accent"
          >
            {{ $t('editQualityProgram.severities') }}
          </v-stepper-step>
          <v-divider/>
          <v-stepper-step
            step="3"
            editable
          >
            {{ $t('editQualityProgram.scoring') }}
          </v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <!-- Error categories step -->
          <v-stepper-content step="1">
            <v-layout row class="debuggg">
              <!-- Find and Uncatagorized left column -->
              <v-flex
                xs6
                md6
                lg3
                xl2
                class="debugg"
              >
                <v-layout
                  column
                  justify-start
                >
                  <v-flex
                    shrink
                    class="mb-5"
                  >
                    <v-text-field
                      solo
                      append-icon="search"
                      label="Find..."
                      class="elevation-2 grey lighten-5"
                      ligh
                    />
                  </v-flex>
                  <v-flex>
                    <draggable-list
                      :items="uncategorized"
                      heading="Uncategorized error types"
                      mute-heading
                    />
                  </v-flex>
                </v-layout>
              </v-flex>
              <!-- Categories header and lists -->
              <v-flex
                class="ml-4 debug"
              >
                <v-layout column>
                  <!-- Categories header -->
                  <v-flex
                    class="mb-5"
                    shrink
                  >
                    <v-layout
                      row
                      align-center
                    >
                      <v-flex shrink>
                        <h3 class="headline mr-2">{{ $t('editQualityProgram.categories') }}</h3>
                      </v-flex>
                      <v-flex
                        xs6
                        lg3
                      >
                        <v-text-field
                          label="Quick add..."
                          solo
                          class="elevation-1 grey lighten-5"
                          append-icon="add"
                        />
                      </v-flex>
                      <v-spacer hidden-sm-and-down/>
                      <v-flex
                        class="text-xs-right"
                        hidden-sm-and-down
                        lg9
                      >
                        <v-btn
                          v-if="isNew"
                          :disabled="programName"
                          color="primary"
                        >
                          {{ $t('buttons.next') }}
                          <v-icon
                            right
                            dark
                          >navigate_next</v-icon>
                        </v-btn>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <!-- Category lists -->
                  <v-flex>
                    <v-container
                      grid-list-xl
                      class="pa-0"
                    >
                      <v-layout
                        row
                        wrap
                      >
                        <v-flex
                          v-for="(group, i) in groups"
                          :key="i"
                          xs12
                          md6
                          lg4
                          xl3
                        >
                          <draggable-list
                            :heading="group.name"
                            :items="group.items"
                            :allow-truncate="true"
                          />
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-stepper-content>
          <v-stepper-content step="2">
            Step 2
          </v-stepper-content>
          <v-stepper-content step="3">
            Step 3
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-card>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import DraggableListItem from '@/components/DraggableListItem';
import DraggableList from '@/components/DraggableList';
import { mapGetters } from 'vuex';

export default {
  name: 'EditQualityProgram',
  components: {
    Breadcrumbs,
    DraggableListItem,
    DraggableList,
  },
  props: {
    isNew: {
      type: Boolean,
      default: () => false,
    },
    published: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      programName: null,
      useIndustryStandard: false,
      breadcrumbs: [
        { i18n: 'breadcrumbs.qualityPrograms', to: '/quality/programs' },
        { i18n: this.isNew ? 'breadcrumbs.new' : 'breadcrumbs.edit' },
      ],
      e1: 1, // dummy step
      valid: false,
      industryStandard: null,
      industryStandards: [
        { text: 'Checkmate' },
        { text: 'DQF' },
      ],
      groups: [
        {
          name: 'Group A',
          items: [
            { name: 'Third-party style' },
            { name: 'Grammatical register' },
            { name: 'Shortcut key' },
            { name: 'Under-translation' },
            { name: 'Non-conformance' },
            { name: 'Truncation/text expansion' },
          ],
        },
        {
          name: 'Group B',
          items: [
            { name: 'Culture-specific reference' },
            { name: 'Link/cross-reference' },
          ],
        },
        {
          name: 'Group C',
          items: [
            { name: 'Culture-specific reference' },
            { name: 'Link/cross-reference' },
            { name: 'Local formatting' },
            { name: 'Address format' },
          ],
        },
        {
          name: 'Group D',
          items: [
            { name: 'Uncategorized' },
            { name: 'Inconsistent entities' },
            { name: 'Internationalization' },
          ],
        },
      ],
    };
  },
  computed: {
    savedAtString() {
      return `${this.$t('editQualityProgram.saved')} ${this.savedAt}`;
    },
    ...mapGetters({
      errorTypes: 'errorTypes',
      uncategorized: 'uncategorizedErrorTypes',
    }),
  },
};
</script>

<style lang="stylus" scoped>
@import '~vuetify/src/stylus/main';

.breadcrumb {
  text-transform: capitalize;
}

.debug {
  border: 3px dotted red;
}

.debugg {
  border: 3px dotted blue;
}

.debuggg {
  border: 3px dotted yellow;
}
</style>
