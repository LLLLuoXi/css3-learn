/*
 * @Author: your name
 * @Date: 2021-09-06 23:03:08
 * @LastEditTime: 2021-09-07 01:08:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \css3-exercise\卡片展开\index.js
 */

var card = document.querySelector('.card')
card.addEventListener('click', function() {
    if (card.className == 'card') {
        card.className = 'card active'
    } else {
        card.className = 'card'
    }

}, false);