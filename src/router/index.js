import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import('@/components/login')
const MainMenu = () => import('@/components/main_menu')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'main_menu',
      component: MainMenu
    }
  ]
})
