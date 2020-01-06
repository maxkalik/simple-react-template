const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.base.js');

const hashedModuleInsPlugin = new webpack.HashedModuleIdsPlugin();
const miniCssPlugin = new MiniCssExtractPlugin({
  filename: 'css/[name].css'
});

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'hidden-source-map',
  output: {
    path: path.resolve(__dirname, '../build'),
    chunkFilename: 'js/chunk.[chunkhash].js',
    filename: 'js/[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.css|.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [hashedModuleInsPlugin, miniCssPlugin]
});
