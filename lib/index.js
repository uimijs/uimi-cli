import { webpackConfig, compiler } from './compiler.js';
import WebpackDevServer from 'webpack-dev-server';
//console.log(process.env.npm_lifecycle_event, process.argv)

//process.exit()

if (process.argv.includes('build')) {
  compiler.run((err, stats) => { // Stats Object
    // ...
  });
}
if (process.argv.includes('server')) {
  const devServer = webpackConfig.devServer
  const server = new WebpackDevServer(compiler, devServer);
  server.listen(devServer.port, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:' + devServer.port);
  });
}
