/*
 * @Author: your name
 * @Date: 2021-09-30 10:29:26
 * @LastEditTime: 2021-09-30 10:36:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \css3-exercise\风景动画\index.js
 */
let swch = document.querySelector('.switch')
swch.addEventListener('click', e => {
    // swch.classList.toggle('switched')
    //为后期预留操作空间 所以选择下面写法
    if (swch.classList.contains('switched')) {
        swch.classList.remove('switched')
    } else {
        swch.classList.add('switched')

    }

})