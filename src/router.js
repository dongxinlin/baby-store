import Vue from 'vue'
import Router from 'vue-router'
import homeComponent from './pages/home'

Vue.use(Router)

import GoodsCategories from './pages/GoodsCategories/'

let router=new Router({
  routes: [
    {path: '/',redirect: '/home'},
    {path: '/home',component: homeComponent},
    {path:'/classify',component:GoodsCategories}
  ]
})

export default router
