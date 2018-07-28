import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import Menu from '@/components/menu'
import Footer from '@/components/footer'
import Comments from '@/components/comments'
import Store from '@/components/store'

Vue.use(Router)
Vue.component('header-list', Header)
Vue.component('navbar-list', Navbar)
Vue.component('menu-list', Menu)
Vue.component('footer-list', Footer)
Vue.component('store-list', Store)

export default new Router({
  routes: [
    {
      path: '/',
      component: Menu
    },
    {
      path: '/comments',
      component: Comments
    },
    {
      path: '/store',
      component: Store
    }
  ]
})
