<template>
  <!-- 首页入口（分类+广告）-->
  <div class="home-entry">
    <div class="container">
      <!-- 左侧分类 -->
      <HomeCategory />
      <!-- 轮播图 -->
      <HomeBanner />
    </div>
    <!-- 测试骨架效果 -->
    <!-- <XtxSkeleton width="200px" height="200px" bg="red" animated/> -->
  </div>
  <!-- 新鲜好物 -->
  <!-- 人气推荐 -->
</template>

<script>
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'
// 每使用一次就要导入，采用Vue插件的形式
// import XtxSkeleton from '@/components/library/xtx-skeleton.vue'
export default {
  name: 'HomePage',
  components: {
    HomeCategory,
    HomeBanner,
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
