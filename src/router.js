import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import GoodsCategories from './pages/GoodsCategories/'
import GoodsList from './pages/GoodsList/'
import GoodsInfo from './pages/GoodsInfo/'

let router=new Router({
  routes: [
    {path:'/classify',component:GoodsCategories},
    {path:'/goodslist',component:GoodsList},
    {path:'/goodsinfo/:id',component:GoodsInfo},
  ]
})

export default router
