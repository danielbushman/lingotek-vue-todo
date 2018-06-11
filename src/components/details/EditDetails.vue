<template>
  <v-form ref="form" class="pb-4">
    <v-container fluid>
      <v-layout row>
        <!-- inputs -->
        <v-flex xs7>
          <v-layout column justify-content-start>
            <v-flex shrink>
              <v-text-field
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
          </v-layout>
        </v-flex>
        <!-- save buttons -->
        <v-flex xs5>
          <v-layout column>
            <v-flex class="text-xs-right">
              <v-btn>Cancel</v-btn>
              <v-btn color="primary">Save</v-btn>
            </v-flex>
            <v-flex class="text-xs-right">
              <div class="grey--text text--lighten-1 mr-2">{{ savedAt }}</div>
            </v-flex>
            <v-spacer/>
            <v-flex class="text-xs-right">
              <v-btn
                flat
                :disabled="!valid"
                v-if="!valid"
                class="grey--text text--darken-1 mt-5"
              >
                <v-icon
                  left
                >publish</v-icon>
                Publish
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>
