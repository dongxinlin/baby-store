import Vue from 'vue'
import Router from 'vue-router'
import homeComponent from './pages/home'
import newsComponent from './pages/news'

Vue.use(Router)

import GoodsCategories from './pages/GoodsCategories/'
import GoodsList from './pages/GoodsList/'
import GoodsInfo from './pages/GoodsInfo/'

let router=new Router({
  routes: [
<<<<<<< HEAD
    {path: '/',redirect: '/home'},
    {path: '/home',component: homeComponent},
    {path:'/classify',component:GoodsCategories},
    {path:'/news',component:newsComponent},
=======
    {path:'/classify',component:GoodsCategories},
    {path:'/goodslist',component:GoodsList},
    {path:'/goodsinfo/:id',component:GoodsInfo},
>>>>>>> origin/yan
  ]
})

export default router
