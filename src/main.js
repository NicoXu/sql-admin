// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import axios from 'axios'
import router from './router'

Vue.prototype.$axios = axios
Vue.prototype.HOME = '/api'
Vue.config.productionTip = false
Vue.use(Antd)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


