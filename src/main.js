// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import SweetAlert from 'bootstrap-sweetalert'
import 'bootstrap-sweetalert/dist/sweetalert.css'
import './css/index.css'
import './css/ipad.css'
import './css/iphone6.css'
import './css/panel.css'

Vue.config.productionTip = false
Vue.use(SweetAlert)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
