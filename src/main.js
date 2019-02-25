import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入样式初始化
import './styles/common.css'
// 引入vant所有的css
import 'vant/lib/index.css';
//按需引入vant 
import Button from 'vant/lib/button';
Vue.use(Button);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
