<template>
  <div>
    <!-- 顶部通栏 -->
    <AppNavbar />
    <!-- 头部组件 -->
    <AppHeader />
    <!-- 吸顶头部 -->
    <AppHeaderSticky />
      <!-- 内容容器 -->
      <div class="app-body"></div>
      <!-- 二级路由 -->
      <RouterView />
    <!-- 底部组件 -->
    <AppFooter />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import AppFooter from '../components/app-footer.vue'
import AppHeaderSticky from '../components/app-header-sticky.vue'
import AppHeader from '../components/app-header.vue'
import AppNavbar from '../components/app-navbar.vue'


export default {
  name: 'Layout',
  components: {
    AppNavbar,
    AppHeader,
    AppFooter,
    AppHeaderSticky,
  },
  setup() {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style scoped lang='less'>
  // .app-body {
  //   min-height: 600px;
  // }
</style>
