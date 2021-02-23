
import { createStore } from 'vuex'
import getters from './getters.js'

// const modulesFiles = require.context('./modules', true, /\.js$/)

// // you do not need `import app from './modules/app'`
// // it will auto require all vuex module from modules file
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {})

import app from './modules/app.js'
import user from './modules/user.js'

const store = createStore({
  modules: {
    app,
    user
  },
  getters
})

export default store
