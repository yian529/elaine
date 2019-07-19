# 事件机制
DOM事件流（event  flow ）存在三个阶段：事件捕获阶段、处于目标阶段、事件冒泡阶段。

## 事件捕获（event  capturing）：通俗的理解就是，当鼠标点击或者触发dom事件时，浏览器会从根节点开始由外到内进行事件传播，即点击了子元素，如果父元素通过事件捕获方式注册了对应的事件的话，会先触发父元素绑定的事件。

## 事件冒泡（dubbed  bubbling）：与事件捕获恰恰相反，事件冒泡顺序是由内到外进行事件传播，直到根节点。

无论是事件捕获还是事件冒泡，它们都有一个共同的行为，就是事件传播

　dom标准事件流的触发的先后顺序为：先捕获再冒泡。 即当触发dom事件时，会先进行事件捕获，捕获到事件源之后通过事件传播进行事件冒泡。不同的浏览器对此有着不同的实现，IE10及以下不支持捕获型事件，所以就少了一个事件捕获阶段，IE11、Chrome 、Firefox、Safari等浏览器则同时存在。

说到事件冒泡与捕获就不得不提一下两个用于事件绑定的方法addEventListener、attachEvent。

 - addEventListener(event, listener, useCapture)　　

　　　　·参数定义：event---（事件名称，如click，不带on），listener---事件监听函数，useCapture---是否采用事件捕获进行事件捕捉，

　　　　　　　　默认为false，即采用事件冒泡方式

　　　　addEventListener在 IE11、Chrome 、Firefox、Safari等浏览器都得到支持。

 - attachEvent(event,listener)　　

　　　　·参数定义：event---（事件名称，如onclick，带on），listener---事件监听函数。

　　　　attachEvent主要用于IE浏览器，并且仅在IE10及以下才支持，IE11已经废了这个方法了（微软还是挺识趣的，慢慢向标准靠拢）。

## 事件委托
```
var parent = document.getElementById("parent");
var child = document.getElementById("child");
parent.onclick = function(e){
            if(e.target.id == "child"){
                console.log("您点击了child元素")
            }
}
```