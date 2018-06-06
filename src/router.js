import Vue from 'vue'
import Router from 'vue-router'
import Landing from './views/Landing.vue'
import Shop from './views/shop.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    // {
    //   path: '/landing',
    //   name: 'landing',
    //   component: Landing
    // }
  ]
})
