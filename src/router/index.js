import Vue from 'vue'
import Router from 'vue-router'
import Color from '@/components/color'
import Users from '@/components/users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'color',
      component: Color
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    }
  ],
  mode: 'history'
})
