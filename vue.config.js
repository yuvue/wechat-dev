const path = require('path')
const workbox = require('workbox-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('v', resolve('src/views'))
      .set('c', resolve('src/components'))
      .set('css', resolve('src/assets/css'))
      .set('img', resolve('src/assets/img'))
      .set('util', resolve('src/utils'))
      .set('service', resolve('src/services'))
      .set('config', resolve('src/configs'))
      .set('filter', resolve('src/filters'))
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: ['/Users/sharp/Project/wechat/src/assets/css/index.less'],
    },
  },
  pwa: {
    name: 'My App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: resolve('src/service-worker.js'),
    },
    iconPaths: {
      favicon32: 'img/icons/apple-touch-icon.png',
      favicon16: 'img/icons/apple-touch-icon.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      maskIcon: 'img/icons/apple-touch-icon.png',
      msTileImage: 'img/icons/apple-touch-icon.png',
    },
  },
  devServer: {
    proxy: {
      '/img': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/audio': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/upload': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      'http://localhost:3000/upload': {
        target: 'http://localhost:3000/upload',
        changeOrigin: true,
      },
    },
  },
}
