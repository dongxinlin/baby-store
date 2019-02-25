import Vue from 'vue'
import axios from 'axios'
import config from './config'

//把axios挂载到Vue的prototype上
Vue.prototype.$axios=axios


for (const key in config) {
    axios.defaults[key] = config[key]
}