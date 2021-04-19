const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 9000,
    allowedHosts: [
      'localhost:8080'
    ],
    stats: 'errors-only',
    clientLogLevel: 'error'
  },
});