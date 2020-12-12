import { createRouter, createWebHashHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import menus from './menus'
/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

function asyncLoader(fn) {
  return defineAsyncComponent({
    loader: fn,
    loadingComponent: {
      template: '<div>Loading...</div>'
    }
  })
}

const routes = [
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const addRoutes = (menus) => {
  menus.forEach(item => {
    if (item.children) {
      addRoutes(item.children)
    } else {
      routes.push({
        path: item.path,
        component: asyncLoader(() => import(`@/views/${item.name}`)),
        meta: item.meta
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
