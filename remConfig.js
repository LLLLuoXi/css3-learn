/*
 * @Author: your name
 * @Date: 2021-07-29 16:51:32
 * @LastEditTime: 2021-07-29 16:51:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \css3-exercise\定位练习-弹出层\remConfig.js
 */

(function () {
    var b = document.createElement("meta");
    b.setAttribute("name", "viewport");
    var c = window.devicePixelRatio,
      a = c ? 1 / c : 1;
    window.screen.availWidth == document.documentElement.offsetWidth &&
      (c = a = 1);
    document.documentElement.setAttribute("data-dpr", c || 1);
    window.navigator.userAgent.match(/android/i)
      ? b.setAttribute(
          "content",
          "width=device-width, initial-scale=" +
            a +
            ", maximum-scale=" +
            a +
            ", minimum-scale=" +
            a +
            ", user-scalable=no"
        )
      : b.setAttribute(
          "content",
          "initial-scale=" +
            a +
            ", maximum-scale=" +
            a +
            ", minimum-scale=" +
            a +
            ", user-scalable=no"
        );
    document.head.appendChild(b);
  })();
  var dpr = document.documentElement.getAttribute("data-dpr") || 1,
    width = document.documentElement.offsetWidth,
    fontSize = (100 / 750) * width;
  document.querySelector("html").style.fontSize = fontSize + "px";
  window.addEventListener("resize", function () {
    var a = (100 / 750) * document.querySelector("html").offsetWidth;
    document.querySelector("html").style.fontSize = a + "px";
  });