import { createRouter, createWebHashHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
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
  // {
  //   path: '/404',
  //   component: () => import('@/views/404'),
  //   hidden: true
  // },
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: asyncLoader(() => import('@/views/Home')),
    meta: { title: '首页', icon: 'el-icon-s-home' }
  }, {
    path: '/about',
    redirect: '/about/about1',
    //TODO: 待处理
    component: asyncLoader(() => import('@/views/About1.vue')),
    meta: { title: '联系' },
    children: [{
      path: 'about1',
      name: 'about1',
      component: asyncLoader(() => import('@/views/About1.vue')),
      meta: { title: '联系1', icon: 'el-icon-s-home' }
    }, {
      path: 'about2',
      name: 'about2',
      component: asyncLoader(() => import('@/views/About2.vue')),
      meta: { title: '联系2', icon: 'el-icon-s-home' }
    }]
  }
]


const handleRoute = () => {

}

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
