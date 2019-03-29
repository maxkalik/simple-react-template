const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    compress: true,
    historyApiFallback: true,
    port: 8000,
    publicPath: '/'
  },
});