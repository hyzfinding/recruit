module.exports = {
  publicPath: './',
  outputDir: 'recruit', //build输出目录
  // assetsDir: 'assets', //静态资源目录（js, css, img）
  // lintOnSave: false, //是否开启eslint
  devServer: {
    open: false, //是否自动弹出浏览器页面
    //   host: "localhost",
    //   port: '8081',
    https: false, //是否使用https协议
    hotOnly: true, //是否开启热更新
    proxy: {
      '/api': {
        // target: 'http://172.19.50.79:8180/', //API服务器的地址
        // target: 'https://testgemini.ihasl.com/api/v1/hasl/recruit/service/', //API服务器的地址
        target: 'https://testfile.ihasl.com/', // API服务器的地址
        // target: 'http://172.19.38.191:8810/', //API服务器的地址
        // ws: true, //代理websockets
        changeOrigin: true, // 虚拟的站点需要更管origin
        pathRewrite: {
          //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
          '^/api': ''
        }
      }
    }
  }
}
