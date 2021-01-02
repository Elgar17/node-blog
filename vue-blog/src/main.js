import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'
// axios.defaults.baseURL = '/api'，作用是我们每次发送的请求都会带一个/api的前缀。

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
