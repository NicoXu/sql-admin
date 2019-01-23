import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Sql from '@/pages/Sql'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sql',
      name: 'Sql',
      component: Sql
    }
  ]
})
