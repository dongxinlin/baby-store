import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入api
import './api/index'

//引入样式初始化
import './styles/common.css'
// 引入vant所有的css
import 'vant/lib/index.css';
//按需引入vant 
import {Button, Swipe, SwipeItem ,Tabbar, TabbarItem,NavBar,Icon} from 'vant';
Vue.use(Button).use(Swipe).use(SwipeItem).use(Tabbar).use(TabbarItem).use(NavBar).use(Icon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
