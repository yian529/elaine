// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { createRouter } from './router'

Vue.config.productionTip = false

/* eslint-disable */
export function createApp () {
  // 创建 router 实例
  const router = new createRouter()
  const app = new Vue({
    // 注入 router 到根 Vue 实例
    router,
    render: h => h(App)
  })
  // 返回 app 和 router
  return { app, router }
}

//main.js 是我们应用程序的通用入口,初始化的main.js只适合在浏览器的运行，在纯客户端应用程序中，我们将在此文件中创建根 Vue 实例，并直接挂载到 DOM。但是，对于服务器端渲染(SSR)，main.js 简单地使用 export 导出一个 createApp 函数