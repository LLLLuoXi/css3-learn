<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-06 23:39:20
 * @LastEditors: your name
 * @Description: notes
-->
# filter

css提供了`fitler`属性，可以对元素内部每个像素点的颜色进行更改

更具体的说，就是每个像素点的颜色经过一个插值函数，得到一个新的颜色

![image-20211003140557708](https://note.youdao.com/yws/api/personal/file/50802230D1C74525ABD78F243AE59529?method=download&shareKey=d5942ed52d7cf6335fe7fd941faeab63)

filter属性提供了多种插值函数，在此效果中，需要用到两个插值函数

## blur

```css
filter: blur(5px);
```

blur是一个高斯模糊函数，参数表示模糊半径，简单的说就是模糊程度，值越大、越模糊

![image-20211003140928850](http://mdrs.yuanjin.tech/img/20211003140928.png)

## contrast

```css
filter: contrast(10)
```

contrast是一个调整对比度的函数，参数是对比度百分比，10表示1000%

简单的说，该值越大，则：白的越白，红的越红、黑的越黑、蓝的越蓝、绿的越绿

![image-20211003141541160](http://mdrs.yuanjin.tech/img/20211003141541.png)

## 粘粘效果

先模糊、再调高对比度，即可实现粘粘效果

![image-20211003141818659](https://note.youdao.com/yws/api/personal/file/DFA5E8DD7E514B9499336A0E8D7934F0?method=download&shareKey=02d168a9af3e08620b578ef5dcac3ef2)
