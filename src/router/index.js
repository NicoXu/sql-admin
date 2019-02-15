import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Sql from '@/pages/Sql'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sql/list',
      name: 'Sql',
      component: Sql
    },
    {
      path: '/sql/add',
      name: '',
    }
  ]
})
