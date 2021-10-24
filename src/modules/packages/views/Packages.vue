<template>
  <div>
    <SearchForm
      :loading="loading"
      :value="currentPackageName"
      @on-search="searchPackages"
    />

    <PackageList
      :items="items"
      :items-per-page="$options.itemsPerPage"
      :total="totalItems"
      :loading="loading"
      :currentPage="currentPage"
      @on-page="handlePageChanged"
      @on-select="showPackageInfo"
    />

    <PackageDetailsDialog
      :value="showInfoDialog"
      :info="packageInfo"
      @on-close="hideInfoDialog"
    />

    <v-snackbar v-model="snackbar">
      Oopps! Something went wrong!

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SearchForm from '../components/SearchForm'
import PackageList from '../components/PackageList'
import PackageDetailsDialog from '../components/PackageDetailsDialog'

export default {
  itemsPerPage: 10,

  components: {
    SearchForm,
    PackageList,
    PackageDetailsDialog,
  },
  data() {
    return {
      snackbar: false,
      showInfoDialog: false,
    }
  },
  computed: {
    ...mapState('packages', ['items', 'packageInfo', 'loading', 'totalItems']),
    currentPage() {
      return +this.$route.query.page || 1
    },
    currentPackageName() {
      return this.$route.query.name || ''
    },
  },
  mounted() {
    this.loadPackages()
  },
  methods: {
    searchPackages(packageName) {
      this.$router.replace({ query: { name: packageName }})

      this.loadPackages()
    },
    async loadPackages() {
      const { name, page } = this.getParamsFromRouteState()

      if (!name) {
        return
      }

      try {
        this.$store.commit('packages/setLoading', true)

        await this.$store.dispatch('packages/search', {
          text: name,
          size: this.$options.itemsPerPage,
          from: (page - 1) * this.$options.itemsPerPage,
        })
      } catch {
        this.snackbar = true
      } finally {
        this.$store.commit('packages/setLoading', false)
      }
    },
    handlePageChanged(page) {
      const queryName = this.$route.query.name

      this.$router.replace({ query: {
        page,
        ...(queryName && { name: queryName }),
      }})

      this.loadPackages()
    },
    getParamsFromRouteState() {
      return {
        name: this.$route.query.name || '',
        page: this.$route.query.page || 1,
      }
    },
    async showPackageInfo(packageName) {
      this.showInfoDialog = true

      try {
        await this.$store.dispatch('packages/getPackageInfo', packageName)
      } catch {
        this.snackbar = true
        this.showInfoDialog = false
      }
    },
    hideInfoDialog() {
      this.showInfoDialog = false
      this.$store.commit('packages/setPackageInfo', null)
    },
  },
}
</script>
