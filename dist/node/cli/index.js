'use strict';

var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var vueLoader = require('vue-loader');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var vue = require('vue');
var serverRenderer = require('@vue/server-renderer');
var fs = require('fs');
require('webpack-merge');
var WebpackDevServer = require('webpack-dev-server');

/**
 *  dev-server配置
 *  Created by 姚毅
 * 2020-4-9
 */
const entry = {
  path: "src",//设置入口目录
  appPath: "/"//需要打包目录下哪个app，"/"表示打包所有
};
const output = {
  path: "dist"//设置出口目录
};

/**
 *  dev-server配置
 *  Created by 姚毅
 */
var devServer = {
  open: true,
  port: '81',
  //hot: true,
  //inline: true, // 实时刷新
  contentBase: output.path,//本地服务器所加载的页面所在的目录
  historyApiFallback: true
};

/**
 *  生成页面配置
 *  Created by 姚毅
 * 2020-4-9
 */

//这样写不会因为路径提供错误而报错
const entryPath = path.posix.join("./", entry.path, "/");
const appPath = path.posix.join(entryPath, entry.appPath);


function getEntry() {
  const tempRep = path.posix.join(appPath, '**/main.js');
  var entryMap = {};
  glob.sync(tempRep).forEach(function (filePath) {
    let chunkname = path.posix.dirname(filePath.replace(entryPath, ''));
    chunkname = path.posix.join(chunkname, '../js/' + path.posix.parse(chunkname).name);
    entryMap[chunkname] = "./" + filePath;
  });
  //生成打包配置的map
  console.table(entryMap);
  if (JSON.stringify(entryMap) == "{}") {
    console.error("\x1B[31m%s\x1B[39m", "没有文件被打包");
    process.exit();
  }
  console.log("\x1B[36m%s\x1B[0m", "正在打包源码目录", appPath);
  return entryMap
}

var entry$1 = getEntry();

// 引入entry入口配置文件
var output$1 = {
  path: path.posix.resolve(output.path),
  //publicPath: '/dist/',
  filename: "[name].js?v=[Hash]"
};

/**
 *  dev-server配置
 *  Created by 姚毅
 * 2020-4-9
 */
var externals = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'echarts': 'echarts',
  'meui': 'meui',
};

const PLUGIN = "ExtHtmlWebpackPlugin";
class ExtHtmlWebpackPlugin {
  constructor(options) {
    this.options = options;
    //p2
  }
  apply(compiler) {
    //return
    //获取项目入口entry map配置
    this.entry = compiler.options.entry;
    const emit = this.emitCallback.bind(this);
    if (compiler.hooks) {
      compiler.hooks.emit.tap(PLUGIN, emit);
    } else {
      compiler.plugin('emit', emit);
    }
  }
  emitCallback(compilation, callback) {
    //console.log("测试",compilation["autopath"])
    const entry = this.entry;
    const templatefile = path.posix.resolve(this.options.template);
    const config = require(path.posix.resolve(this.options.assetsconfig));

    compilation.chunks.forEach((chunk) => {
      //获取chunk.name文件名 即为html输出文件名
      const baseName = path.posix.parse(chunk.name).name;
      //获取html配置目录
      const configFile = path.posix.resolve(entry[chunk.name], "../import.json");
      //生成输出html文件路径
      const tempPath = this.options.extFilename.replace("[name]", baseName);
      const extFile = path.posix.join(chunk.name, tempPath);
      //初始化clientManifest清单
      var clientManifest = {
        title: "云僖",
        css: [],
        js: [],
        pushSrc(src) {
          let extName = src.substring(src.lastIndexOf('.') + 1);
          const index = extName.indexOf('?');
          if (index > 0) { extName = extName.substring(0, index); }
          //console.log(src, "||", extName)
          //获取文件的后缀类型，然后加入到对应的资源列表
          if (this.hasOwnProperty(extName)) this[extName].push(src);
        }
      };
      //判断是否存在html配置文件
      if (fs.existsSync(configFile)) {
        clientManifest.initial = [];
        //获取对应的html模板数据
        const chunkconfig = require(configFile);
        if (chunkconfig.plugin)
          chunkconfig.plugin.forEach((plugin) => {
            let srcs = config[plugin] || plugin;
            //console.log(srcs)
            if (typeof (srcs) == "object")
              srcs.forEach((src) => {
                clientManifest.pushSrc(src);
              });
            else
              clientManifest.pushSrc(srcs);
          });
        chunk.files.forEach((filename) => {
          //如果路径不是绝对的，就转为绝对路径
          filename = path.posix.resolve("/", filename);
          clientManifest.pushSrc(filename);
        });
        //console.log(clientManifest)
        const template = fs.readFileSync(templatefile, 'utf-8');

        const doctype = "<!DOCTYPE html>";
        const css = {
          data: () => ({ cssFile: clientManifest.css }),
          template: '<link v-for="css in cssFile" rel="stylesheet" :href="css">'
        };
        const js = {
          data: () => ({ jsFile: clientManifest.js }),
          template: '<script v-for="js in jsFile" :src="js"></script>'
        };
        const app = vue.createApp({
          components: { css, js },
          data: () => (clientManifest),
          template: template
        })
          ; (async () => {
            const html = doctype + await serverRenderer.renderToString(app);
            //console.log(clientManifest, html)
            compilation.assets[extFile] = {
              source: () => html,
              size: () => html.length
            };
          })();
      }
    });
    if (callback) {
      callback();
    }
  }
}

var version = "1.0.1";
var author = "Yao Yi";

const banner =
  '/*!\n' +
  ` * [name] v${version}\n` +
  ` * Copyright (c) 2019-${new Date().getFullYear()} ${author}\n` +
  ` * ${new Date().toString()}\n` +
  ' * All rights reserved.\n' +
  ' */';
var plugins = [
  new webpack.BannerPlugin(banner),
  // vue-loader请确保引入这个插件！
  new vueLoader.VueLoaderPlugin(),
  // 将css编译到项目对应的css目录
  new MiniCssExtractPlugin({
    moduleFilename: ({
      name
    }) =>
      //输出路径为上级目录的css文件夹，path.parse是为了防止配置入口时没有删除后缀
      path.posix.posix.join(name, '../../css/' + path.posix.parse(name).name + ".css?v=[Hash]")
  }),
  // 生成html配置
  new ExtHtmlWebpackPlugin({
    template: "template.html",
    assetsconfig: "cdn.config.json",
    extFilename: "../../[name].html"
  }),
  //hot
  //new webpack.HotModuleReplacementPlugin(),
  // 3.0新功能 范围提升 （Scope Hoisting ）似乎没什么用
  // new webpack.optimize.ModuleConcatenationPlugin()
];

var modules = {
  rules: [
    {
      test: /.jsx?$/,
      include: [
        path.posix.resolve(entry.path),
      ],
      exclude: [
        path.posix.resolve('node_modules')
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
};

/**
 *  dev-server配置
 *  Created by 姚毅
 * 2020-4-25
 */
const webpackConfig = {
  mode: 'production',
  devtool: '#source-map',//源映射
  devServer: devServer,
  entry: entry$1,
  output: output$1,
  externals: externals,
  plugins: plugins,
  module: modules,
  resolve: {
    //省略后缀后的查找顺序
    extensions: ['.js', '.vue', '.css', '.scss', '.json'],
    //别名配置
    alias: {
      components: path.posix.resolve('src/components'),
    }
  }
};
const compiler = webpack(webpackConfig);

//console.log(process.env.npm_lifecycle_event, process.argv)

//process.exit()

if (process.argv.includes('build')) {
  compiler.run((err, stats) => { // Stats Object
    // ...
  });
}
if (process.argv.includes('server')) {
  const devServer = webpackConfig.devServer;
  const server = new WebpackDevServer(compiler, devServer);
  server.listen(devServer.port, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:' + devServer.port);
  });
}
