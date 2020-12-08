// 引入entry入口配置文件
const path = require('path');
const config = require('./config.base.js');
module.exports={
  path: path.resolve(config.output.path),
  //publicPath: '/dist/',
  filename: "[name].js?v=[Hash]"
}
