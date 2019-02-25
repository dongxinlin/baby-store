import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import GoodsCategories from './pages/GoodsCategories/'

let router=new Router({
  routes: [
    {path:'/classify',component:GoodsCategories}
  ]
})

export default router
