import NpmRegistryApi from '@/api/NpmRegistryApi'

export default {
  async search({ commit }, payload) {
    const { data } = await NpmRegistryApi.get('/-/v1/search', { params: payload})

    commit('setItems', data.objects)
    commit('setItemsTotal', data.total)

    return data
  },

  async getPackageInfo({ commit }, packageName) {
    const { data } = await NpmRegistryApi.get(`/${packageName}`)

    commit('setPackageInfo', data)

    return data
  },
}
