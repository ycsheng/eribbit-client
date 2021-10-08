import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入自己UI组件库
import UI from '@/components/library'

// 重置样式使用normalize.css，项目公用样式common.less
import 'normalize.css'
import '@/assets/styles/common.less'

createApp(App).use(store).use(router).use(UI).mount('#app')
