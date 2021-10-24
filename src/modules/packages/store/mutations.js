export default {
  setItems: (state, items) => {
    state.items = items
  },
  setItemsTotal: (state, total) => {
    state.totalItems = total
  },
  setPackageInfo: (state, info) => {
    state.packageInfo = info
  },
  setLoading: (state, value) => {
    state.loading = value
  },
}
