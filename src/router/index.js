import Vue from 'vue'
import Router from 'vue-router'
import Color from '@/components/color'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Color',
      component: Color
    }
  ]
})
