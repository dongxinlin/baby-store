import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//定义tabBar全局组件

import tabBar from './components/tabBar'
Vue.component('tabBar',tabBar)

//引入api
import './api/index'

//引入样式初始化
import './styles/common.css'
// 引入vant所有的css
import 'vant/lib/index.css';
//按需引入vant 

import {Button, Swipe, SwipeItem ,Tabbar, TabbarItem,NavBar,Icon,Tab, Tabs,Row,Col,List} from 'vant';
Vue.use(Button).use(Swipe).use(SwipeItem).use(Tabbar).use(TabbarItem).use(NavBar).use(Icon)
.use(Tab).use(Tabs).use(Row).use(Col).use(List)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
