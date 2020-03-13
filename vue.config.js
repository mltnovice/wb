const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack (config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/assets/common'))
      .set('api', resolve('src/assets/api'))
      .set('base', resolve('src/base'))
      .set('views', resolve('src/views'))

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/common/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/common/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .end()
  }
}
