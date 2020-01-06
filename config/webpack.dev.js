const merge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const baseConfig = require('./webpack.base.js');

const browserSync = new BrowserSyncPlugin(
  {
    host: 'localhost',
    port: 3000,
    files: ['*.html', '*.css'],
    proxy: 'http://localhost:8000/'
  },
  {
    reload: true
  }
);

module.exports = merge(baseConfig, {
  mode: 'development',
  watch: true,
  devtool: 'source-map',
  plugins: [browserSync],
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 8000
  }
});
