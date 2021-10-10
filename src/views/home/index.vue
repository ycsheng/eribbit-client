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
  <!-- <xtxMore path="/test"/> -->
  <HomeNew />
  <!-- 人气推荐 -->
  <HomeHot />
  <!-- 使用transition组件 -->
  <!-- <button @click="show=true">显示|创建</button>
  <button @click="show=false">隐藏|移除</button>
  <Transition>
    <div v-show="show" style="width:100px;height:100px;background:red;"></div>
  </Transition> -->
</template>

<script>
import { ref } from 'vue'
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'


// 每使用一次就要导入，采用Vue插件的形式
// import XtxSkeleton from '@/components/library/xtx-skeleton.vue'
export default {
  name: 'HomePage',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot,
  },
  setup() {
    const show = ref(true)
    return { show }
  }
}
</script>

<style lang="less" scoped>
// @import '../../assets/styles/mixins.less';
// @import '../../assets/styles/variables.less';
// .container {
//   // .hoverShadow();
//   color: @xtxColor; 
// }

// vue3和vue2不同
// 进入 v-enter v-enter-active v-enter-to
/* .v-enter-from {
  opacity: 1;
}
.v-enter-active {
  transition: all 2s;
}
.v-enter-to {
  opacity: 0;
} */
// 离开 v-leave v-leave-active v-leave-to
</style>
