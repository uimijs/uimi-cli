import path from 'path';
import glob from 'glob';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import plugins from './plugins.js';
import chalk from 'chalk'
const input = {
  path: "src",//设置入口目录
  appPath: "/"//需要打包目录下哪个app，"/"表示打包所有
};

//这样写不会因为路径提供错误而报错

const appPath = path.join(input.path, input.appPath);

function getInput() {
  const tempRep = path.join(appPath, '**/main.js');
  var inputMap = {};
  glob.sync(tempRep).forEach(function (filePath) {
    let chunkname = path.basename(path.join(filePath, '../'));
    //console.log(chunkname)
    chunkname = path.join(filePath, '../../js/', chunkname);
    chunkname = path.relative(input.path, chunkname)
    //console.log(chunkname)
    inputMap[chunkname] = "./" + filePath;
  });

  //生成打包配置的map
  console.table(inputMap);
  //process.exit();
  if (JSON.stringify(inputMap) == "{}") {
    console.error(chalk.yellow("没有文件被打包"))
    process.exit();
  }
  console.log(chalk.bgBlue(`正在打包源码目录:${appPath}`));
  return inputMap
}

var entry = getInput();

const externals = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'echarts': 'echarts',
  'uimi': 'uimi',
};

const cwd = process.cwd()

export default {
  mode: 'production',
  devtool: '#source-map',//源映射
  entry,
  output: {
    path: path.resolve(cwd, "dist"),
    filename: "[name].js?v=[Hash]"
  },
  externals,
  plugins,
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [
          path.resolve(cwd, input.path),
        ],
        exclude: [
          path.resolve(cwd, 'node_modules')
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
  },
  devServer: {
    open: true,
    port: '81',
    //hot: true,
    contentBase: path.resolve(cwd, "dist"),//本地服务器所加载的页面所在的目录
    //historyApiFallback: true
  },
  resolve: {
    //省略后缀后的查找顺序
    extensions: ['.js', '.vue', '.css', '.scss', '.json'],
    //别名配置
    alias: {
      components: path.resolve('src/components'),
    }
  }
};
