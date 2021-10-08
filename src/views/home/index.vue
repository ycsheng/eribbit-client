<template>
  <div class="container">
    <!-- 首页入口（分类+广告） -->
    <div class="home-entry">
      <!-- 左侧分类 -->
      <HomeCategory />
      <!-- 轮播图 -->
    </div>
    <!-- 测试骨架效果 -->
    <!-- <XtxSkeleton width="200px" height="200px" bg="red" animated/> -->
  </div>
</template>

<script>
import HomeCategory from './components/home-category.vue'
// 每使用一次就要导入，采用Vue插件的形式
// import XtxSkeleton from '@/components/library/xtx-skeleton.vue'
export default {
  name: 'HomePage',
  components: {
    HomeCategory,
  }
}
</script>

<style lang="less" scoped>
// @import '../../assets/styles/mixins.less';
// @import '../../assets/styles/variables.less';

  .container {
    // .hoverShadow();
    color: @xtxColor; 
  }
</style>
