// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from '@rollup/plugin-eslint';
import path from 'path'

module.exports = defineConfig({
  plugins: [
    vue(),
    eslint({
      include: '**/*.+(vue|js|jsx|ts|tsx)',
      useEslintrc: true
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  },
  base: './',
  build: {
    rollupOptions: {
      output: {
        // 第三方库分割
        manualChunks: {
          vueLib: ['lodash', 'axios', 'vue-router', 'vue', 'vuex'],
          lib: ['element-plus'],
        }
      }
    },
    // chunk size kbs
    chunkSizeWarningLimit: 800
  },
  // server: {
  //   port:8080,
  //   open: true,
  //   proxy: {
  //     '/api': 'http://123.56.85.24:5000'
  //   },
  //   cors:true
  // }
})