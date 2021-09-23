import { createStore } from 'vuex'
// 配置持久化插件的简单方法
import createPersistedState from 'vuex-persistedstate';
// 三个模块
import cart from './modules/cart'
import category from './modules/category'
import user from './modules/user'


// vue2.0 创建仓库 new Vuex.Store({})

// vue3.0 createStore({})
export default createStore({
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    cart,
    user,
    category
  },
  plugins: [
    // 默认存储在localStorage
    createPersistedState({
    // 本地存储名字
    key: 'erabbit-client-pc-store',
    // 指定需要存储的模块
    paths: ['user', 'cart']
  })]
})
