import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import 'buefy/dist/buefy.css'
import router from './router'

Vue.use(Buefy, {
  defaultIconPack: 'fas'
})

Vue.config.productionTip = false

window.vm = {}

vm = new Vue({
  router,
  render: h => h(App),
  methods: {
    showError: function(error) {
      this.$buefy.dialog.alert({
        title: 'Error',
        message: error,
        type: 'is-danger',
        hasIcon: true,
        icon: 'times-circle',
        iconPack: 'fa',
        ariaRole: 'alertdialog',
        ariaModal: true
      })
    }
  }
}).$mount('#app')
