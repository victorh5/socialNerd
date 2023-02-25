module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended'
  ],
  'overrides': [
  ],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'parser': '@typescript-eslint/parser',
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'vue',
    '@typescript-eslint'
  ],
  'rules': {
    '@typescript-eslint/no-explicit-any': 'off',
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ]
  }
}
