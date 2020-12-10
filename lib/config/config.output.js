// 引入entry入口配置文件
import { posix as path } from 'path';
import * as config from'./config.base.js';
export default {
  path: path.resolve(config.output.path),
  //publicPath: '/dist/',
  filename: "[name].js?v=[Hash]"
}
