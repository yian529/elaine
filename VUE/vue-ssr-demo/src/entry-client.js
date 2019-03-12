import { createApp } from './main'
const { app, router } = createApp()
// 因为可能存在异步组件，所以等待router将所有异步组件加载完毕，服务器端配置也需要此操作
// 客户端 entry 只需创建应用程序，并且将其挂载到 DOM
router.onReady(() => {
  console.log('router ready')
  app.$mount('#app')
})
