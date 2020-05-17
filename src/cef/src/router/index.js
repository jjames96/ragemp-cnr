import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginRegister from '../components/LoginRegister.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/auth',
    name: 'LoginRegister',
    component: LoginRegister
  }
]

const router = new VueRouter({
  routes
})

export default router
