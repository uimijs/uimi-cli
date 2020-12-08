/**
 *  dev-server配置
 *  Created by 姚毅
 * 2020-4-25
 */
const path = require('path');
// 引入entry入口配置文件
const devServer = require('./config/config.devServer.js');
// 引入entry入口配置文件
const entry = require('./config/config.entry.js');
const output = require("./config/config.output.js")
// 引入不需要打包的配置文件
const externals = require('./config/config.externals.js');
//webpack插件配置
const plugins = require('./config/config.plugins.js');
//webpack模块配置
const modules = require('./config/config.module.js');
webpackConfig = {
  mode: 'production',
  devtool: '#source-map',//源映射
  devServer: devServer,
  entry: entry,
  output: output,
  externals: externals,
  plugins: plugins,
  module: modules,
  resolve: {
    //省略后缀后的查找顺序
    extensions: ['.js', '.vue', '.css', '.scss', '.json'],
    //别名配置
    alias: {
      components: path.resolve('src/components'),
    }
  }
}
//console.log(webpackConfig)
const webpack = require('webpack');
const merge = require('webpack-merge');
const compiler = webpack(webpackConfig);
module.exports = { merge, webpackConfig, compiler }
