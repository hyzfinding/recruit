module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'prettier/prettier': [
    //   // eslint校验不成功后，error或2则报错，warn或1则警告，off或0则无提示
    //   'error',
    //   {
    //     // 不要分号
    //     semi: false,
    //     // 设置单引号
    //     singleQuote: true,
    //     // 文件以单一的换行符结束
    //     'eol-last': 1,
    //     // 首选const
    //     'prefer-const': true,
    //     // 达到该宽度即换行
    //     printWidth: 140
    //   }, 
    // ]
    "prettier/prettier": "off"
  }
}
