<template>
  <div class="top-category">
    <div class="container">
      <!-- 面包屑 -->
      <!-- 不要在 xtx-bread 组件插槽写注释，也会被解析。 -->
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem to="/category/1005000">电器</XtxBreadItem>
        <XtxBreadItem >空调</XtxBreadItem>
      </XtxBread>
      <!-- 轮播图 -->
      <!-- 全部分类 -->
      <!-- 各个分类下推荐商品 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopCategory'
}
</script>

<style lang="less" scoped>

</style>>
