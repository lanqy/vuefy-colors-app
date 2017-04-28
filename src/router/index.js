import Vue from 'vue'
import Router from 'vue-router'
import Color from '@/components/color'
import List from '@/components/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Color',
      component: Color
    },
    {
      path: '/material/:title',
      name: 'list',
      component: List,
      props: true
    }
  ],
  mode: 'history'
})
