module.exports = {
  root: true,
  extends: [
    // vue官方eslint规则：eslint-plugin-vue
    'plugin:vue/vue3-essential',
    // 基于standard的eslint规则
    'standard'
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    "parser": "babel-eslint",
    "sourceType": "module",
    "allowImportExportEverywhere": true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'semi': 'off',
    'comma': 'off',
    'template-curly-spacing': 'off',
    'indent': ['error', 2, {
      'ignoredNodes': ['TemplateLiteral']
    }],
    'no-trailing-spaces': 'off',
    'no-multiple-empty-lines': 'off',
    'eol-last': 'off'
  }
}
