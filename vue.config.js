const { defineConfig } = require('@vue/cli-service')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'website',  // 输出到website文件夹
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      },
      runtimeChunk: 'single'
    },
    plugins: [
      new CompressionPlugin({
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  },
  chainWebpack: config => {
    // 优化资源加载顺序
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    
    // 启用缓存
    config.cache(true)
    
    // 优化图片加载
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(() => {
        return {
          limit: 8192,
          fallback: {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        }
      })
  }
})
