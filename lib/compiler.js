/**
 *  dev-server配置
 *  Created by 姚毅
 * 2020-4-25
 */
import { posix as path } from 'path';
// 引入entry入口配置文件
import devServer from './config/config.devServer.js';
// 引入entry入口配置文件
import entry from './config/config.entry.js';
import output from "./config/config.output.js"
// 引入不需要打包的配置文件
import externals from './config/config.externals.js';
//webpack插件配置
import plugins from './config/config.plugins.js';
//webpack模块配置
import modules from './config/config.module.js';
const webpackConfig = {
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
import webpack from 'webpack';
import merge from 'webpack-merge';
const compiler = webpack(webpackConfig);
export { merge, webpackConfig, compiler }
