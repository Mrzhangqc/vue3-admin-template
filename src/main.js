import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/styles/index.less'
import {
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDivider,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElPopover,
  ElPopper,
  ElScrollbar,
  ElSubmenu,
  ElTooltip,
  ElLoading,
  ElMessage
} from 'element-plus';
const components = [
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDivider,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElPopover,
  ElPopper,
  ElScrollbar,
  ElSubmenu,
  ElTooltip,
  ElLoading,
  ElMessage
]
const plugins = [
  ElLoading,
  ElMessage
]

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})
plugins.forEach(plugin => {
  app.use(plugin)
})

app.config.errorHandler = (err) => {
  if (err) {
    console.error(`${err}`)
  }
}

app.use(store)
  .use(router)
  .mount('#app')
