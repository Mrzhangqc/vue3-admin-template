import { createRouter, createWebHashHistory } from 'vue-router'
import menus from './menus'

/**
 * Note: sub-menu only appear when route children.length >= 1
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

const routes = [
  {
    path: '/404',
    component: () => import('../views/404/index.vue'),
    hidden: true
  },
  {
    path: '/',
    redirect: '/home'
  }
]

// 添加路由配置(根据菜单扁平化数组)
const addRoutes = (menus, parentRoute) => {
  menus.forEach(item => {
    if (item.children) {
      const parent = { ...item, children: null }
      addRoutes(item.children, parent)
    } else {
      routes.push({
        path: item.path,
        // vite dynamic-import: Imports must end with a file extension
        component: () => import(`../views/${item.name}.vue`),
        props: (route) => ({ query: route.query }),
        meta: {
          parentRoute: parentRoute || null,
          ...item.meta
        }
      })
    }
  })
}
addRoutes(menus)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
