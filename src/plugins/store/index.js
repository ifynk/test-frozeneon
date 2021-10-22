import Vuex from 'vuex'
import Vue from 'vue'
import packages from '@/modules/packages/store'
import root from './root'

Vue.use(Vuex)

const store = new Vuex.Store({
  ...root,
  modules: {
    packages,
  },
})

export default store
