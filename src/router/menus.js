const menus = [
  {
    path: '/home',
    name: 'Home',
    meta: { title: '首页', icon: 'el-icon-s-home' }
  }, {
    path: '/about',
    meta: { title: '联系', icon: 'el-icon-s-home' },
    alwaysShow: true,
    children: [{
      path: '/about/about1',
      name: 'About1',
      meta: { title: '联系1', icon: 'el-icon-s-home' }
    }, {
      path: '/about/about2',
      name: 'About2',
      meta: { title: '联系2', icon: 'el-icon-s-home' }
    }]
  }
]

export default menus
