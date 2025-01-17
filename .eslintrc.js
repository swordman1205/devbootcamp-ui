module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    //parser: 'babel-eslint'
    parser: '@typescript-eslint/parser'
  },
  extends: [
    'plugin:vue/recommended',
    '@nuxtjs/eslint-config-typescript',
    'prettier/vue',
    'plugin:prettier/recommended'
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    semi: [2, 'never'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': ['error', { semi: false }]
  }
};
