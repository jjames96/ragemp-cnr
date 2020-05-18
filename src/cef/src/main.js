import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import 'buefy/dist/buefy.css'
import router from './router'

Vue.use(Buefy, {
  defaultIconPack: 'fas'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
