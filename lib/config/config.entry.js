/**
 *  生成页面配置
 *  Created by 姚毅
 * 2020-4-9
 */
'use strict';
import { posix as path } from 'path';
import glob from 'glob'
import { entry } from './config.base.js';

//这样写不会因为路径提供错误而报错
const entryPath = path.join("./", entry.path, "/")
const appPath = path.join(entryPath, entry.appPath)


function getEntry() {
  const tempRep = path.join(appPath, '**/main.js')
  var entryMap = {};
  glob.sync(tempRep).forEach(function (filePath) {
    let chunkname = path.dirname(filePath.replace(entryPath, ''));
    chunkname = path.join(chunkname, '../js/' + path.parse(chunkname).name)
    entryMap[chunkname] = "./" + filePath
  })
  //生成打包配置的map
  console.table(entryMap)
  if (JSON.stringify(entryMap) == "{}") {
    console.error("\x1B[31m%s\x1B[39m", "没有文件被打包")
    process.exit()
  }
  console.log("\x1B[36m%s\x1B[0m", "正在打包源码目录", appPath);
  return entryMap
}

export default getEntry()
