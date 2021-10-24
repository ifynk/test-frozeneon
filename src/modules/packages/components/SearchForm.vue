<template>
  <v-container>
    <form @submit.prevent="submit">
      <v-row no-gutters>
        <v-col>
          <v-text-field
            v-model="packageName"
            class="mr-sm-3"
            label="Input package name"
          />
        </v-col>

        <v-col cols="12" sm="2">
          <v-btn
            block
            :disabled="!canSubmit"
            color="primary"
            type="submit"
          >
            Search
          </v-btn>
        </v-col>
      </v-row>
    </form>
  </v-container>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      packageName: this.value,
    }
  },
  computed: {
    canSubmit() {
      return !this.loading && !!this.packageName
    },
  },
  methods: {
    submit() {
      this.$emit('on-search', this.packageName)
    },
  },
}
</script>
