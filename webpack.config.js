var ManifestPlugin = require('webpack-manifest-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

module.exports = {
  entry: {
    bundle: ["babel-polyfill", './src/script.js'],
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name]-[chunkhash:8].js',
    pathinfo: false,
  },

  module: {
    loaders: [
      // ESLint
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: { rules: { semi: 0 } },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
      // Extract CSS
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          loader: 'css-loader?sourceMap!postcss-loader!sass-loader?sourceMap',
        }),
      },
    ],
  },
  devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000,
      stats: "errors-only"
  },
  plugins: [
    // Inbed styles & scripts into HTML for hashing
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: '../dist/index.html'
    }),
    new ExtractTextPlugin({
      filename: 'styles-[chunkhash:8].css',
    }),
    new webpack.ProvidePlugin({
      Promise: 'es6-promise-promise'
    }),
    new ManifestPlugin({
         fileName: 'build-manifest.json'
    }),
  ],
  watch: true,
  devtool: 'source-map',
};