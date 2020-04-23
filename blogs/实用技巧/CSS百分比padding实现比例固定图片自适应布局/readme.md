# CSS百分比padding实现比例固定图片自适应布局
## 一、CSS百分比padding都是相对宽度计算的
内边距的百分比数值，CSS padding 属性的百分比数值是相对于其父元素的 width 计算的，如果改变了父元素的 width，则它们也会改变。
注意：上下内边距与左右内边距一致，即上下内边距的百分数会相对于父元素宽度设置，而不是相对于高度。
padding属性任意方向的百分比padding都现对于宽度计算可以让我们轻松实现固定比例的块级容器，举个例子，假设现在有个<div>元素：
```javascript 
div { padding: 50%; }
```
或者
```javascript     
div { padding: 100% 0 0; }
```
或者
```javascript  
div { padding-bottom: 100%; }
```
则这个<div>元素尺寸就是一个宽高1:1的正方形，无论其父容器宽度是多少，这个<div>元素总能保持比例不变。

对于绝大多数都布局，我们并不要求非要比例固定，但是有一种情况例外，那就是图片，因为图片原始尺寸它是固定的。在传统的固定宽度的布局下，我们会通过给图片设定具体的宽度和高度值，来保证我们的图片占据区域稳固；但是在移动端或者在响应式开发情况下，图片最终展现的宽度很可能是不确定的，例如手机端的一个通栏广告，iPhone7下宽度是375，iPhone7 Plus下是414，还有360等尺寸，此时需要的不是对图片进行固定尺寸设定，而是比例设定。
使用百分比padding，如下：
```javascript 
.banner {
    padding: 15.15% 0 0;
    background-size: cover;
}
```
此时无论图片的外部元素怎么变动，比例都是恒定不变的。

## 二、CSS百分比padding与宽度自适应图片布局
但是有时候我们的图片是不方便作为背景图呈现的，而是内联的<img>，百分比padding也是可以轻松应对的，求套路是比较固定的，图片元素外面需要一个固定比例的容器元素，例如下面的HTML结构：
```javascript 
<div class="banner">
    <img src="banner.jpg">
</div>
```
.banner元素同样负责控制比例，然后图片填充.banner元素即可，CSS代码如下：
```javascript 
.banner {
    padding: 15.15% 0 0;
    position: relative;
}
.banner > img {
    position: absolute;
    width: 100%; 
    height: 100%;
    left: 0; top: 0;
}
```
无论屏幕宽度多宽，我们的广告图片比例都是固定的，不会有任何剪裁，不会有任何区域缺失，布局就显得非常有弹性，也更健壮。
对于复杂布局，如果图片的宽度是不固定的自适应的，我们通常会想到这么一个取巧的做法，就是只设定图片的宽度，例如：
```javascript    
img { width: 100%; }
```
但，有时候，图片宽度并不是100%容器的，例如，图片宽度50%容器宽度，图片高宽比4:3，此时，CSS垂直方向百分比就666了，如下：
```javascript 
.img-box {
    padding: 0 50% 66.66% 0;
}
```
> paddding-bottom比例值为  图片宽度除以高度的值（默认=1）
> 父级的高度完全是由padding撑起来的没有可用空间当然要用定位了

纵横比,基于width的百分比来设置padding百分比值，把这种方式称之为固定纵横比。一般我们通过width的百分比来计算padding-top或padding-bottom的百分比值，其计算公式如下：著作权归作者所有。
```javascript
padding-top = (元素高度 / 元素宽度) * 100% 
padding-bottom = (元素高度 / 元素宽度)  * 100% 
```
此时浏览器默认会保持图片比例显示，图片宽度大了，高度也跟着一起变大；图片宽度小了，高度也跟着一起变小。开发人员似乎无需关心图片真实比例是怎样的。
然而这种技巧有一个非常不好的体验问题，那就是随着页面加载的进行，图片占据的高度会有一个从0到计算高度的图片变化，视觉上会有明显的元素跳动，代码层面会有布局重计算。
所以对图片高宽进行同时约定还是有必要的，但是同时要保证宽度自适应，似乎有点难度。记住，如果遇到这种需求场景，没有比百分比padding布局更好的做法！
对于这种图片宽度100%容器，高度按比例的场景，padding-bottom的百分比值大小就是图片元素的高宽比，就这么简单。

参考文档：
    https://www.w3cschool.cn/css/css-padding.html
    https://www.zhangxinxu.com/wordpress/2017/08/css-percent-padding-image-layout/