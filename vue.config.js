const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 开启代理服务器
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  devServer: {
    proxy: {
      '/student': {
        target: 'http://localhost:5000/',
        pathRewrite:{'^/student':''},
        ws: true,
        changeOrigin: true
      },
      '/car': {
        target: 'http://localhost:5001/',
        pathRewrite:{'^/car':''},
        ws: true,
        changeOrigin: true
      },
    }
  }
})