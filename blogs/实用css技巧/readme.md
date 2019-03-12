#scroll-behavior
##实际用途
在PC浏览器中，网页默认滚动是在<html>标签上的，移动端大多数在<body>标签上，于是，加上这么一句：
```javascript 
html, body { scroll-behavior:smooth; }
```

##JS scrollIntoView与平滑滚动
DOM元素的scrollIntoView()方法是一个IE6浏览器也支持的原生JS API，可以让元素进入视区，通过触发滚动容器的定位实现。

随着Chrome和Firefox浏览器开始支持CSS scroll-behavior属性，顺便对，scrollIntoView()方法进行了升级，使支持更多参数，其中一个参数就是可以使滚动平滑。

语法如下：
```javascript
target.scrollIntoView({
    behavior: "smooth"
});
```
我们随便打开一个有链接的页面，把首个链接滚动到屏幕外，然后控制台输入类似下面代码，我们就可以看到页面平滑滚动定位了：
```javascript
document.links[0].scrollIntoView({
    behavior: "smooth"
});
```
其它：
- scrollIntoView()升级后的方法，除了支持'behavior'，还有'block'和'inline'等参数，有兴趣可以参阅MDN相关文档(https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)。
- 如果我们的网页已经通过CSS设置了scroll-behavior:smooth声明，则我们直接执行target.scrollIntoView()方法就会有平滑滚动，无需再额外设置behavior参数。例如，如果你是在鑫空间原站浏览的此文章，打开控制台，执行下面代码，就可以看到平滑滚动效果了：
```javascript
document.forms[0].scrollIntoView();
```
#background-size
background-size：100% 100%;---按容器比例撑满，图片变形；
background-size：cover;---把背景图片放大到适合元素容器的尺寸，图片比例不变，但是要注意，超出容器的部分可能会裁掉。

#flex
flex实现左固定，右自适应。
```javascript```
.container {
    display: flex;
}
.left {
    flex:  0 0 300px;
    background-color: #5616;
}
.right {
    flex:  1 1;
    background-color: #438; 
}
```

> 如果所有元素的 flex-grow/shrink 之和大于等于 1，则所有子元素的尺寸一定会被调整到适应父元素的尺寸（在不考虑 max/min-width/height 的前提下），而如果 flex-grow/shrink 之和小于 1，则只会 grow 或 shrink 所有元素 flex-grow/shrink 之和相对于 1 的比例。grow 时的每个元素的权重即为元素的 flex-grow 的值；shrink 时每个元素的权重则为元素 flex-shrink 乘以 width 后的值。

###-webkit-min-device-pixel-ratio
```javascript```
@media (min-resolution: 2dppx) {
    .image {
        background-image: url(image@2x.png);
    }
}
```

###flex-grow是对剩余空间进行分配，而flex-shrink则是对不足空间进行分配。