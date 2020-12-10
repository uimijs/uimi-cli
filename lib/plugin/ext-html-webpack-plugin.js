import { posix as path } from 'path';
import { createApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import fs from 'fs';
const PLUGIN = "ExtHtmlWebpackPlugin";
//p2
import ExternalModules from 'webpack/lib/ExternalModule';
export class ExtHtmlWebpackPlugin {
  constructor(options) {
    this.options = options
    //p2
    this.externalModules = {};
  }
  apply(compiler) {
    //return
    //获取项目入口entry map配置
    this.entry = compiler.options.entry
    const normalModuleFactory = this.normalModuleFactoryCallback.bind(this);
    const emit = this.emitCallback.bind(this);
    if (compiler.hooks) {
      compiler.hooks.normalModuleFactory.tap(PLUGIN, normalModuleFactory);
      compiler.hooks.emit.tap(PLUGIN, emit);
    } else {
      compiler.plugin('normalModuleFactory', normalModuleFactory);
      compiler.plugin('emit', emit);
    }
  }
  normalModuleFactoryCallback(normalModuleFactory) {
    // parser 将代码转换为语法书 判断有无 import
    normalModuleFactory.hooks.parser.for('javascript/auto').tap('AutoExternalPlugin', (parser, parserOptions) => {
      parser.hooks.import.tap('AutoExternalPlugin', (statement, source) => {
        //console.log("将代码转换为语法书",statement)
        if (source == "vue") {
        }
      })
    })
    // factory 是创建模块的方法
    // data 是创建模块的参数
    normalModuleFactory.hooks.factory.tap(PLUGIN, factory => (data, callback) => {
      const dependencies = data.dependencies;
      const value = dependencies[0].request; // vue
      //console.log(value)
      if (value == "vue") {
        const varName = "Vue"
        //this.externalModules[dependencies[0].originModule.resource].push(value)
        //console.log("你引用了这个插件", value, dependencies[0].originModule.resource)
        callback(null, new ExternalModules(varName, 'window'));
      } else {
        factory(data, callback);
      }
    })
  }
  emitCallback(compilation, callback) {
    //console.log("测试",compilation["autopath"])
    const entry = this.entry
    const templatefile = path.resolve(this.options.template);
    const config = require(path.resolve(this.options.assetsconfig));

    compilation.chunks.forEach((chunk) => {
      //获取chunk.name文件名 即为html输出文件名
      const baseName = path.parse(chunk.name).name
      //获取html配置目录
      const configFile = path.resolve(entry[chunk.name], "../import.json")
      //生成输出html文件路径
      const tempPath = this.options.extFilename.replace("[name]", baseName)
      const extFile = path.join(chunk.name, tempPath)
      //初始化clientManifest清单
      var clientManifest = {
        title: "云僖",
        css: [],
        js: [],
        pushSrc(src) {
          let extName = src.substring(src.lastIndexOf('.') + 1)
          const index = extName.indexOf('?')
          if (index > 0) { extName = extName.substring(0, index) }
          //console.log(src, "||", extName)
          //获取文件的后缀类型，然后加入到对应的资源列表
          if (this.hasOwnProperty(extName)) this[extName].push(src)
        }
      }
      //判断是否存在html配置文件
      if (fs.existsSync(configFile)) {
        clientManifest.initial = []
        //获取对应的html模板数据
        const chunkconfig = require(configFile)
        if (chunkconfig.plugin)
          chunkconfig.plugin.forEach((plugin) => {
            let srcs = config[plugin] || plugin;
            //console.log(srcs)
            if (typeof (srcs) == "object")
              srcs.forEach((src) => {
                clientManifest.pushSrc(src)
              })
            else
              clientManifest.pushSrc(srcs)
          })
        chunk.files.forEach((filename) => {
          //如果路径不是绝对的，就转为绝对路径
          filename = path.resolve("/", filename)
          clientManifest.pushSrc(filename)
        });
        //console.log(clientManifest)
        const template = fs.readFileSync(templatefile, 'utf-8')

        const doctype = "<!DOCTYPE html>"
        const css = {
          data: () => ({ cssFile: clientManifest.css }),
          template: '<link v-for="css in cssFile" rel="stylesheet" :href="css">'
        }
        const js = {
          data: () => ({ jsFile: clientManifest.js }),
          template: '<script v-for="js in jsFile" :src="js"></script>'
        }
        const app = createApp({
          components: { css, js },
          data: () => (clientManifest),
          template: template
        })
          ; (async () => {
            const html = doctype + await renderToString(app)
            //console.log(clientManifest, html)
            compilation.assets[extFile] = {
              source: () => html,
              size: () => html.length
            };
          })()
      }
    });
    if (callback) {
      callback();
    }
  }
}
