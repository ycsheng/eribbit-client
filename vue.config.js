const path = require('path');

module.exports = {
  lintOnSave:false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 使用绝对路径
      patterns: [
        path.join(__dirname, './src/assets/styles/mixins.less'),
        path.join(__dirname, './src/assets/styles/variables.less')
      ]
    }
  }
}
