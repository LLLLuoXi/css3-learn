# background-attachment 实现滚动视差的效果
```background-attachment```：如果指定了 ```background-image``` ，那么 ```background-attachment``` 决定背景是在视口中固定的还是随着包含它的区块滚动的。

background-attachment: scroll
scroll 此关键字表示背景相对于元素本身固定， 而不是随着它的内容滚动。

background-attachment: local
local 此关键字表示背景相对于元素的内容固定。如果一个元素拥有滚动机制，背景将会随着元素的内容滚动， 并且背景的绘制区域和定位区域是相对于可滚动的区域而不是包含他们的边框。

background-attachment: fixed
fixed 此关键字表示背景相对于视口固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。


我们使用 ```background-attachment: fixed``` 来实现滚动视差。fixed 此关键字表示背景相对于视口固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。

**这里的关键在于，即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。也就是说，背景图从一开始就已经被固定死在初始所在的位置。**

**当页面滚动到图片应该出现的位置，被设置了 background-attachment: fixed 的图片并不会继续跟随页面的滚动而跟随上下移动，而是相对于视口固定死了。**

# transform3d 实现滚动视差的效果
## 原理
我们给容器设置上 ```transform-style: preserve-3d``` 和 ```perspective: xpx```，那么处于这个容器的子元素就将位于3D空间中，

再给子元素设置不同的 ```transform: translateZ()```，这个时候，不同元素在 3D Z轴方向距离屏幕（我们的眼睛）的距离也就不一样

滚动滚动条，由于子元素设置了不同的 ```transform: translateZ()```，那么他们滚动的上下距离 translateY 相对屏幕（我们的眼睛），也是不一样的，这就达到了滚动视差的效果。

**总结就是父元素设置 transform-style: preserve-3d 和 perspective: 1px，子元素设置不同的 transform: translateZ，滚动滚动条，**
