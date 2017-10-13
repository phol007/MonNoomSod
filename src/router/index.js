import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import('@/components/login')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
