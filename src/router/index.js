import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/Homepage'
import AppLayout from '@/components/AppLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppLayout',
      component: AppLayout,
      children:[
        {
          path: 'Home',
          name: 'HomePage',
          component: HomePage,
        }
      ]
    }
  ]
})
