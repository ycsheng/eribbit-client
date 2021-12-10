<script>
// 将此结构删除，暂留
/* <template>
  <div class='xtx-bread'>
    <!-- <div class="xtx-bread-item">
      <RouterLink to="/">首页</RouterLink>
    </div>
    <i class="iconfont icon-angle-right"></i>
    <div class="xtx-bread-item" v-if="parentName">
      <RouterLink v-if="parentPath" :to="parentPath">{{parentName}}</RouterLink>
      <span v-else>{{parentName}}</span>
    </div>
    <i v-if="parentName" class="iconfont icon-angle-right"></i>
    <div class="xtx-bread-item">
      <span><slot /></span>
    </div> -->
    <slot />
  </div>
</template> */
import { h } from "vue";

export default {
  name: 'XtxBread',
  /* props: {
    // 父级类目的路径
    parentPath: {
      type: [String, Object],
      default: '/'
    },
    // 父级类目的名称
    parentName: {
      type: String,
      default: ''
    }
  } */
  // createElement render render选项与形参h(createElement)函数
  // 不生效？？？
  render() {
    // 1. template标签去除，单文件组件
    // 2. 返回值就是组件内容
    // 3. vue2.0 的h函数传参进来的，vue3.0的h函数导入
    // 4. h 第一个参数 标签名，第二参数 标签的属性对象，第三个参数 子节点
    
    // 需求
    // 1. 创建xtx-bread父容器
    // 2. 获取默认插槽内容
    // 3. 去除xtx-bread-item组件的i标签，因该由render函数来组织
    // 4. 遍历插槽中的item，得到一个动态创建的节点，最后一个item不加i标签
    // 5. 把动态创建的节点渲染再xtx-bread标签中
    const items = this.$slots.default()
    // console.log('***************');
    // console.log('items', items);
    const dymanicItems = []
    items.forEach((item, i) => {
      dymanicItems.push(item)
      if (i < (items.length - 1)) {
        dymanicItems.push(h('i', { class: 'iconfont icon-angle-right' }))
      }
    })
    return h('div', { class: 'xtx-bread' }, dymanicItems)
  }
}
</script>

<style lang='less'>
// 去掉 scoped 属性, 目的: 样式作用到xtx-bread-item
// 不是父子关系, 插槽关系
.xtx-bread {
  display: flex;
  // padding: 25px 10px;
  padding: 0px 10px 0px;
  &-item {
    a {
      color: #666;
      color: red;
      transition: all .4s;
      &:hover {
        color: @xtxColor;
      }
    }
  }
  i {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
  }
}
</style>