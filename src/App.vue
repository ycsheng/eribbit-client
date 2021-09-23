<template>
  <!-- vue2.0 需要根元素， vue3.0可以是代码片段 Fragment -->
  <div class="container">
    <h2>App</h2>
    <button @click="fn">测试request工具函数</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import request from "./utils/request"

export default {
  name: 'App',
  setup () {
    const fn = () => {
      // 测试请求
      request('/member/profile', 'get', {a: 10})
    }
    return {fn}
  }
}
</script>

<style>

</style>