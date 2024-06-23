const uni = require('@uni-helper/eslint-config')

// module.exports = uni()

module.exports = uni(
  {
    // 为 uniHelper 配置规则.

  },

  // 从第二个参数开始，为 ESLint Flat 配置，它可以存在多个

  {
    rules: {},
    languageOptions: {
      globals: {
        uni: 'readable',
      },
    },
  },
)
