const menus = [
  {
    path: '/home',
    name: 'Home',
    meta: { title: '首页', icon: 'el-icon-s-home' }
  }, {
    path: '/about',
    meta: { title: '介绍', icon: 'el-icon-coffee-cup' },
    alwaysShow: true,
    redirect: 'noRedirect',
    children: [{
      path: '/about1',
      name: 'About1',
      meta: { title: '介绍1', icon: 'el-icon-ice-tea' }
    }, {
      path: '/about2',
      name: 'About2',
      meta: { title: '介绍2', icon: 'el-icon-milk-tea' },
      alwaysShow: true,
      redirect: 'noRedirect',
      children: [{
        path: '/about2/child1',
        name: 'Home',
        meta: { title: '介绍2-1', icon: 'el-icon-milk-tea' }
      }, {
        path: '/about2/child2',
        name: 'Home',
        meta: { title: '介绍2-2', icon: 'el-icon-milk-tea' }
      }]
    }]
  }
]

export default menus
