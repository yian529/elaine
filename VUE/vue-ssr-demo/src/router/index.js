import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
// 类似于 createApp，我们也需要给每个请求一个新的 router 实例，所以文件导出一个 createRouter 函数
export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Hello',
        component: HelloWorld
      }, {
        path: '/test',
        name: 'Test',
        component: () => import('@/components/Test')
      }
    ]
  })
}
