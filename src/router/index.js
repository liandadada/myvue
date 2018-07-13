import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header'
import Navbar from '@/components/navbar'

Vue.use(Router)
Vue.component('navbar-list', Navbar)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      component: Header
    }
  ]
})
