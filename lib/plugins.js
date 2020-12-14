import path from 'path';
import webpack from "webpack";

import { VueLoaderPlugin } from 'vue-loader'
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ExtHtmlWebpackPlugin from './plugin/ext-html-webpack-plugin.js';
const { version, author } = require(path.resolve('package.json'))
const banner =
  '/*!\n' +
  ` * [name] v${version}\n` +
  ` * Copyright (c) 2019-${new Date().getFullYear()} ${author}\n` +
  ` * ${new Date().toString()}\n` +
  ' * All rights reserved.\n' +
  ' */';
export default [
  new webpack.BannerPlugin(banner),
  // vue-loader请确保引入这个插件！
  new VueLoaderPlugin(),
  // 将css编译到项目对应的css目录
  new MiniCssExtractPlugin({
    moduleFilename: ({
      name
    }) =>
      //输出路径为上级目录的css文件夹，path.parse是为了防止配置入口时没有删除后缀
      path.join(name, '../../css/' + path.basename(name) + ".css?v=[Hash]")
  }),
  // 生成html配置
  new ExtHtmlWebpackPlugin({
    template: "template.html",
    assetsconfig: "cdn.config.json",
    extFilename: "../../[name].html"
  }),
  //hot
  //new webpack.HotModuleReplacementPlugin(),
]
