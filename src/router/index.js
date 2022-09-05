import Vue from 'vue'
import Router from 'vue-router'
import HeaderComponent from '@/components/header'
import SearchComponent from '@/components/search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HeaderComponent
    },
    {
      path: '/test',
      component: SearchComponent
    },
    {
      path: '*',
      component: HeaderComponent
    }
  ]
})
