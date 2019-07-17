import Vue from 'vue'
import Router from 'vue-router'
import T02 from '@/components/01'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/01',
      name: 'HelloWorld',
      component: T02
    },
    {
      path: '/02',
      name: 'h1',
      component: HelloWorld
    }
  ]
})
