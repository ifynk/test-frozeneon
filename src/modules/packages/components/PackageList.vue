<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="table-container">
          <v-overlay color="#fff" :absolute="true" :value="loading">
            <v-progress-circular color="primary" indeterminate size="64" />
          </v-overlay>

          <v-data-table
            class="elevation-1"
            :loading="loading"
            :headers="$options.tableHeaders"
            :items="formatedData"
            :items-per-page="itemsPerPage"
            :server-items-length="total"
            :footer-props="{
              'disable-items-per-page': true,
              'show-first-last-page': true,
              'show-current-page': true,
            }"
            :page="currentPage"
            @update:page="$emit('on-page', $event)"
            @click:row="$emit('on-select', $event.name)"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { TABLE_LIST_HEADERS } from '../utils/packages.constants'
import { normalizePackageItem } from '../utils/packages.helpers'

export default {
  tableHeaders: TABLE_LIST_HEADERS,

  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: () => [],
    },
    total: {
      type: Number,
      default: 0,
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    formatedData() {
      return this.items.map(i => normalizePackageItem(i))
    },
  },
}
</script>

<style scoped>
.table-container {
  position: relative;
}
</style>