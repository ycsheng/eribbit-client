// 提供复用逻辑的函数（钩子）
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
/**
 * 数据懒加载
 * @param {Element} target - Dom对象
 * @param {Function} apiFn - API函数
 */
export const useLazyData = (target, apiFn) => {
  const data = ref(null)
  const result = ref([])
  // stop 停止观察
  const { stop } = useIntersectionObserver(
    // 监听的目标元素
    target,
    ([{ isIntersecting }], observerElement) => {
      // targetIsVisible.value = isIntersecting
      if(isIntersecting) {
        stop()
        // 调用API函数获取数据
        apiFn().then(data => {
          result.value = data.result
        })
      }
    },
  )
  // 返回--->数据（dom,后台数据）
  return { target, result }
}