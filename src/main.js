import Vue from 'vue'
import App from './App.vue'
import store from './plugins/store'
import router from './plugins/router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
