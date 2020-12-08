/**
 *  dev-server配置
 *  Created by 姚毅
 * 2020-4-9
 */
module.exports = {
  entry: {
    path: "src",//设置入口目录
    appPath: "/"//需要打包目录下哪个app，"/"表示打包所有
  },
  output: {
    path: "dist"//设置出口目录
  }
}