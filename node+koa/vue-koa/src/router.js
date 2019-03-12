import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import TodoList from './components/TodoList'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
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
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('demo-token')
  if (to.path == '/') { //如果是跳转到登录页的
    if (to.path != 'null' && token != 'null' && token != null) {
      next('/todolist') // 如果有token就转向todolist不返回登录页
    }
    next() // 否则跳转回登录页
  } else {
    if (token != 'null' && token != null) {
      Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token; // 全局设定header的token验证，注意Bearer后有个空格
      next()  // 如果有token就正常转向
    } else {
      next('/') // 否则跳转回登录页
    }
  }
})
export default router
