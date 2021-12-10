import { createRouter, createWebHashHistory } from 'vue-router'

// 路由懒加载
const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home')
const Index = () => import('@/views/category')

// 路由规则
const routes = [
  // 一级路由布局容器
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Index
      }
    ]
  }
]

// vue2.0 new VueRouter({}) 创建路由实例

// vue3.0 createRouter({})
const router = createRouter({
  // 路由模式--哈希
  history: createWebHashHistory(),
  routes
})

export default router
