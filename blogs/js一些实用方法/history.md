# 用JavaScript在浏览器中操作HTML，经历了若干发展阶段
## 第一阶段，直接用JavaScript操作DOM节点，使用浏览器提供的原生API：
```javascript
var dom = document.getElementById('name');
dom.innerHTML = 'Homer';
dom.style.color = 'red';
```
## 第二阶段，由于原生API不好用，还要考虑浏览器兼容性，jQuery横空出世，以简洁的API迅速俘获了前端开发者的芳心：
```javascript
$('#name').text('Homer').css('color', 'red');
```
第三阶段，MVC模式，需要服务器端配合，JavaScript可以在前端修改服务器渲染后的数据。

现在，随着前端页面越来越复杂，用户对于交互性要求也越来越高，想要写出Gmail这样的页面，仅仅用jQuery是远远不够的。MVVM模型应运而生。

MVVM最早由微软提出来，它借鉴了桌面应用程序的MVC思想，在前端页面中，把Model用纯JavaScript对象表示，View负责显示，两者做到了最大限度的分离。

把Model和View关联起来的就是ViewModel。ViewModel负责把Model的数据同步到View显示出来，还负责把View的修改同步回Model。

如果我们使用MVVM框架来实现同样的功能，我们首先并不关心DOM的结构，而是关心数据如何存储。最简单的数据存储方式是使用JavaScript对象：
```javascript
var person = {
    name: 'Bart',
    age: 12
};
```
我们把变量person看作Model，把HTML某些DOM节点看作View，它们之间被关联起来了。
要把显示的name从Bart改为Homer，把显示的age从12改为51，我们并不操作DOM，而是直接修改JavaScript对象
这就是MVVM的设计思想：关注Model的变化，让MVVM框架去自动更新DOM的状态，从而把开发者从操作DOM的繁琐步骤中解脱出来！
