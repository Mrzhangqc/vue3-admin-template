module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'semi': 'off',
    'template-curly-spacing': 'off',
    'indent': ['error', 2, {
      'ignoredNodes': ['TemplateLiteral']
    }],
    'no-trailing-spaces': 'off'
  }
}
