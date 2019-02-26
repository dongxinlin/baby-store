import Vue from 'vue'
import Router from 'vue-router'
import homeComponent from './pages/home'
import newsComponent from './pages/news'

Vue.use(Router)

import GoodsCategories from './pages/GoodsCategories/'

let router=new Router({
  routes: [
    {path: '/',redirect: '/home'},
    {path: '/home',component: homeComponent},
    {path:'/classify',component:GoodsCategories},
    {path:'/news',component:newsComponent},
  ]
})

export default router
