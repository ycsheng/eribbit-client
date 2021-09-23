import { createRouter, createWebHashHistory } from 'vue-router'

// 路由规则
const routes = []

// vue2.0 new VueRouter({}) 创建路由实例

// vue3.0 createRouter({})
const router = createRouter({
  // 路由模式--哈希
  history: createWebHashHistory(),
  routes
})

export default router
