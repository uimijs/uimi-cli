import { posix as path } from 'path';
// 引入entry入口配置文件
import * as config from './config.base.js';
import  MiniCssExtractPlugin  from 'mini-css-extract-plugin';
export default {
  rules: [
    {
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
