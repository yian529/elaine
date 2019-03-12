import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui' // 引入element-ui
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import Axios from 'axios'

Vue.use(ElementUI) // Vue全局使用
Vue.use(VueRouter)

Vue.config.productionTip = false
Vue.prototype.$http = Axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
