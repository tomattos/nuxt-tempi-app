module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'semi': [1, 'always'],
    'vue/html-self-closing': ['error', {
      'html': {
        'normal': 'never',
        'void': 'always'
      }
    }],
    'space-before-function-paren': ['error', 'never']
  }
};
