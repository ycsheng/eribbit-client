<template>
  <div class="hom-new">
    <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质可靠">
      <template #right>
        <xtxMore path="/"/>
      </template>
      <div ref="target" style="position:relative;height:426px">
        <!-- 在实现列表过渡时，如果需要过渡的元素是通过v-for渲染出来的，不能使用
          transition 包裹，需要使用 transition-group -->
        <Transition-group name="fade">
          <!-- 面板内容 -->
          <ul v-if="goods.length" class="goods-list">
            <li v-for="item in goods" :key="item.id">
              <RouterLink :to="`/product/${item.id}`">
                <img :src="item.picture" alt="">
                <p class="name ellipsis">{{item.name}}</p>
                <p class="price">&yen;{{item.price}}</p>
              </RouterLink>
            </li>
          </ul>
          <!-- 骨架屏效果 -->
          <HomeSkeleton v-else bg="#f0f9f4"/>
        </Transition-group>
      </div>
    </HomePanel>
  </div>
</template>

<script>
import { ref } from 'vue'
import HomePanel from './home-panel.vue'
import { findNew } from '@/api/home'
import HomeSkeleton from './home-skeleton.vue'
import { useLazyData } from '@/hooks/index'
export default {
  name: 'HomeNew',
  components: {
    HomePanel,
    HomeSkeleton,
  },
  setup() {
    // const goods = ref([])
    // findNew().then((data) => {
    //   goods.value = data.result
    // })
    const target = ref(null)
    const {result} = useLazyData(target, findNew)
    return { target, goods: result }
  }
}
</script>

<style lang="less" scoped>
// 骨架移除动画
.fade{
  &-leave {
    &-active {
      position: absolute;
      width: 100%;
      transition: opacity .5s .2s;
      z-index: 1;
    }
    &-to {
      opacity: 0;
    }
  }
}
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: @priceColor;
    }
  }
}
</style>