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
      path: '/sql',
      name: 'Sql',
      component: Sql,
      children: [
        {
          path: '/querySql',
          name: 'SqlList',
          component: 'SqlList',
        },
        {
          path: '/addSql',
          name: 'AddSql',
          component: 'AddSql',
        },
        {
          path: '/updateSql',
          name: 'UpdateSql',
          component: 'updateSql'
        }
      ]
    }
  ]
})
