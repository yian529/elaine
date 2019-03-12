
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import Axios from 'axios'

Vue.prototype.$http = Axios // 类似于vue-resource的调用方法，之后可以在实例里直接用this.$http.get()等

Vue.use(ElementUI);
Vue.use(VueRouter);

import Login from './components/Login'
import TodoList from './components/TodoList'

const router =  new VueRouter({
  mode: 'history', // 开启HTML5的history模式，可以让地址栏的url长得跟正常页面跳转的url一样。（不过还需要后端配合，讲Koa的时候会说）
  base: __dirname, 
  routes: [
    {
      path: '/',  // 默认首页打开是登录页
      component: Login
    },
    {
      path: '/todolist',
      component: TodoList
    },
    {
      path: '*',
      redirect: '/' // 输入其他不存在的地址自动跳回首页
    }
  ]
})

//Tips：这种只判断token存不存在就通过的验证是很不安全的，此例只是做了一个演示，实际上还应该进行更深一层的判断，比如从token解包出来的信息里包含我们想要的信息才可以作为有效token，才可以登录。等等。本文只是做一个简要介绍
router.beforeEach((to,from,next) =>{
  const token = sessionStorage.getItem('demo-token');
  if(to.path == '/'){ 
    if(token != 'null' && token != null){
      next('/todolist') 
    }
    next(); 
  }else{
    if(token != 'null' && token != null){
      Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token; // 全局设定header的token验证，注意Bearer后有个空格
      next() 
    }else{
      next('/') 
    }
  }
})

/*const app = new Vue({
  router: router, // 启用router
  render: h => h(App) 
}).$mount('#app') //挂载到id为app的元素上

*/

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
