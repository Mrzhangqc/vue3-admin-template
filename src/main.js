import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

import '@/styles/index.less'

// 采用全局引用，在vite构建中不需要再配置按需引入
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App)

app.config.errorHandler = (err) => {
  if (err) {
    console.error(`${err}`)
  }
}

app.use(ElementPlus)
  .use(store)
  .use(router)
  .mount('#app')
