import Vue from 'vue'
import Router from 'vue-router'
import Color from '@/components/color'
import List from '@/components/list'
import NotFound from '@/components/notFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Color',
      component: Color
    },
    {
      path: '*',
      name: '404',
      component: NotFound
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
