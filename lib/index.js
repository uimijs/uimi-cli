import webpackConfig from "./config.js";
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

const compiler = webpack(webpackConfig);
if (process.argv.includes('build')) {
  compiler.run((err, stats) => { });
}

if (process.argv.includes('server')) {
  const devServer = webpackConfig.devServer
  const server = new WebpackDevServer(compiler, devServer);
  server.listen(devServer.port, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:' + devServer.port);
  });
}
