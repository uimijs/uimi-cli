/**
 *  dev-server配置
 *  Created by 姚毅
 */
const { output } = require('./config.base.js');
module.exports = {
    open: true,
    port: '81',
    //hot: true,
    //inline: true, // 实时刷新
    contentBase: output.path,//本地服务器所加载的页面所在的目录
    historyApiFallback: true
}
