<template>
  <v-dialog
    max-width="400"
    :value="value"
    :fullscreen="$vuetify.breakpoint.mobile"
    @click:outside="$emit('on-close')"
  >
    <v-card
      :loading="!info"
      class="d-flex flex-column"
    >
      <v-card-title class="text-h5">
        Package information
      </v-card-title>

      <v-card-text>
        <template v-if="info">
          <p>
            <b class="d-block">Package name</b>
            <small>{{ info.name }}</small>
          </p>

          <p>
            <b class="d-block">Home page</b>
            <small><a :href="info.homepage" target="_blank" rel="noopener noreferrer">{{ info.homepage }}</a></small>
          </p>

          <p>
            <b class="d-block">Author</b>
            <small>{{ info.author ? info.author.name : 'unknown author' }}</small>
          </p>

          <p>
            <b class="d-block">Description</b>
            <small>{{ info.description || 'no description' }}</small>
          </p>

          <p>
            <b class="d-block">Keywords</b>
            <small>{{ info.keywords ? info.keywords.join(', ') : 'no keywords' }}</small>
          </p>

          <p>
            <b class="d-block">License</b>
            <small>{{ info.license || 'no licence' }}</small>
          </p>
        </template>
      </v-card-text>

      <v-spacer></v-spacer>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="green darken-1"
          text
          @click="$emit('on-close')"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    info: {
      type: Object,
      default: null,
    },
  },
}
</script>
