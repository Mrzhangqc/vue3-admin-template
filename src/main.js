import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@/styles/index.less'

const app = createApp(App)

app.use(ElementPlus)
  .use(store)
  .use(router)
  .mount('#app')

app.config.errorHandler = (err, vm, info) => {
  if (err) {
    console.error(`${err}`)
  }
}
