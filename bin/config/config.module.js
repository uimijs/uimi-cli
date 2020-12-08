const path = require('path');
//const webpack = require("webpack");
// 引入entry入口配置文件
const config = require('./config.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  rules: [{
    test: /.jsx?$/,
    include: [
      path.resolve(config.entry.path),
    ],
    exclude: [
      path.resolve('node_modules')
    ],
    loader: 'babel-loader'
  },
  {
    test: /\.vue$/,
    loader: 'vue-loader'
  },
  {
    test: /\.s[ac]ss$/i,
    use: [
      // 提取css文件
      MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader'
    ]
  }
  ]
}
