const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const minimizeJs = new UglifyJsPlugin({
  cache: true,
  parallel: true,
  sourceMap: true
});

const minimizeCss = new OptimizeCSSAssetsPlugin({});

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].[contenthash].js'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0
    },
    minimizer: [minimizeJs, minimizeCss]
  }
});