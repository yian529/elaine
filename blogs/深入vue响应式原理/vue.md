ue全家桶使用总结
 
对于框架选型来说，应该选择最适合自己公司项目的而不是目前市场是最新的。对于开发人员来说，首先要会的是自己公司目前使用的。其次是市场占有率较高的。前者是为了更好的为公司服务，后者是更好的为自己的未来服务。

相关技术：

　　Vue2.0全家桶(vue+vue-router+vuex+axios+es6+sass)

　　Nuxt.js ，基于Vue.js 的通用应用框架

第三方组件使用场景和封装原理
VueScript2
vuex-shared-mutations
1.框架和库的区别：
框架：framework 有着自己的语法特点、都有对应的各个模块
库 library 专注于一点

框架的好处：

　　1.提到代码的质量，开发速度
　　2.提高代码的复用率
　　3.降低模块之间的耦合度（高内聚低耦合）

思维模式的转换：从操作DOM的思维模式 切换到 以数据为主

2.Vue概述
　　1、what 
　　　　是一个渐进式的构建用户界面的js框架,与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
　　2、where
　　小到的简单的表单处理，大到复杂的数据操作比较频繁的单页面应用程序
　　3、why
　　　　1.方便阅读的中文文档
　　　　2.容易上手 （学习曲线比较缓和）
　　　　3.体积小
　　　　4.基于组件化的开发方式
　　　　5.代码的可读性、可维护性得到了提高
　　4、how
　　　　工作方式：可以通过丰富的指令扩展模板，可以通过各种各样的插件来增强功能

搭建环境：
　　方式1
　　　　全局安装 vue-cli
　　　　$ npm install --global vue-cli
　　　　# 创建一个基于 webpack 模板的新项目
　　　　$ vue init webpack my-project
　　　　# 安装依赖，走你
　　　　$ cd my-project
　　　　$ npm install
　　　　$ npm run dev
　　方式2:
　　　　直接引入对应的js文件

3.Vue中基础知识
1、双花括号(模板语法)
mustache(胡子)/interpolation（插值表达式）

语法：
<any>{{表达式}}</any>

2、指令-循环指令

3、指令-选择指令

4、指令-事件绑定的元素 将handleEvent的方法绑定给指定eventName事件
5、指令-属性绑定

　　动态样式绑定

　　动态样式类绑定

6、指令-双向数据绑定

4.组件化
组件：组件就是可被反复使用的，带有特定功能的视图

所谓的组件化，就像玩积木一样，把封装的组件进行复用,把积木（组件）拼接在一起，构成一个复杂的页面应用程序。

组件树就是由各个组件构成的一种数据结构，它存在的意义是为了帮梳理应用程序

3、注意事项
1.组件的id和使用方式 遵循烤串式命名方式：a-b-c 
2.如果一个组件 要渲染多个元素，将多个元素放在一个顶层标签中，比如div、form
3.全局组件可以用在id为example的范围内的任何一个组件内部，直接调用可以；但是局部组件只能在父模板中直接调用

 参考：https://cn.vuejs.org/v2/guide/components-registration.html
5.自定义指令
1、创建和使用

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
<input v-focus>
参考：https://cn.vuejs.org/v2/guide/custom-directive.html
6.过滤器
过滤器是针对一些数据 进行筛选、过滤、格式化等相关的处理，变成我们想要的数据

过滤器的本质 就是一个带有参数带有返回值的方法

Vue1. 支持内置的过滤器，但是Vue2. 就不再内置过滤器，但是支持自定义过滤器。

<!-- 在双花括号中 -->
{{ message | capitalize }}

<!-- 在 `v-bind` 中 -->
<div v-bind:id="rawId | formatId"></div>

你可以在一个组件的选项中定义本地的过滤器：

filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
或者在创建 Vue 实例之前全局定义过滤器：

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  // ...
})