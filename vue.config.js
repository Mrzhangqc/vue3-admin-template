'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const pageTitle = 'vue3 Admin Template'
const port = process.env.port || 8989
const isDev = process.env.NODE_ENV === 'development'

// 配置项参考：https://cli.vuejs.org/config/
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: isDev,
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        vue: 'vue/dist/vue.esm-bundler.js',
        '@': resolve('src')
      }
    }
  },
  chainWebpack(config) {
    // 提高首屏加载速度, 开启预加载
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ])

    config
      .plugin('html')
      .tap(args => {
        args[0].title = pageTitle
        // 传递给 html-webpack-plugin's 构造函数的新参数
        return args
      })

    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
  }
}
