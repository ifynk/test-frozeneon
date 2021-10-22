import Api from '@/api/JsdelivrApi'

export default {
  getInfo: async ({ commit }) => {
    const { data } = await Api.get('/users/info')

    commit('setBalance', data.balance)

    return data
  },
}
