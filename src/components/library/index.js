// 扩展vue原有的功能：全局组件，自定义指令，挂载原型方法，vue3没有过滤器
// 这就是插件

/**  
 * vue2.0插件写法要素：
 * 导出一个对象
 * 有install函数，默认传入了Vue构造函数，Vue基础之上扩展
 */
/** 
 * vue3.0插件写法要素：
 * 导出一个对象，
 * 有install函数，默认传入了app应用实例，app基础之上扩展
 */ 

import XtxSkeleton from './xtx-skeleton.vue'
import XtxCarousel from './xtx-carousel.vue'
import XtxMore from './xtx-more.vue'
import XtxBrend from './xtx-bread.vue'
import XtxBreadItem from './xtx-bread-item.vue'

export default {
  install(app) {
    // 在app上进行扩展，app提供 compont directive 函数
    // 如果要挂载原型 app.config.globalProperties 方式
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
    app.component(XtxBrend.name, XtxBrend)
    app.component(XtxBreadItem.name, XtxBrend)
    
    // 定义指令
    defineDirective(app)
  }
}

// 定义指令
const defineDirective = (app) => {
  // 1. 图片懒加载指令
  // 原理：下存储图片地址不能在src上，当图片进入可视区，将存储的图片地址设置给照片元素即可

  app.directive('lazy', {
    // vue2.0 监听使用指令的DOM是否创建好，钩子函数：inserted
    // vue3.0 的指令拥有的钩子函数和组件的一样，使用指令的DOM是否创建好，钩子函数：mounted
    mounted(el, binging) {
      // 2. 创建一个观察对象，来观察当前使用指令的元素
      var observer = new IntersectionObserver(([{isIntersecting }]) => {
        if(isIntersecting) {
          // 停止观察
          observer.unobserve(el)
          console.log('进入可视区' );
          // 把指令的值设置给el的src属性，binging.value就是指令的值
          // 4. 加载失败时默认
          el.onerror = () => ({})
          el.src = binging.value
        }
      }, {
        threshold: 0
      });
      // 开始观察
      observer.observe(el)
    }
  })
}