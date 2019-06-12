/* eslint-disable @typescript-eslint/no-var-requires */

const { DefinePlugin } = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { output, publicPath, entry, source } = require('./config/paths');
const createCssLoader = require('./config/webpack/create-css-loader');
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const BUNDLE_FILE_NAME = IS_PRODUCTION ? 'bundle.[contenthash]' : 'bundle';

const webpackConfig = {
  output: {
    filename: `${BUNDLE_FILE_NAME}.js`,
    path: output,
    publicPath,
  },
  entry: {
    index: entry,
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      ...createCssLoader(IS_PRODUCTION),
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.html'],
    alias: {
      app: source,
    },
  },
  devServer: {
    hot: false,
    inline: false,
    port: 8181,
    host: '0.0.0.0',
    historyApiFallback: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${BUNDLE_FILE_NAME}.css`,
    }),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new HtmlWebPackPlugin({
      template: './app/index.html',
      filename: './index.html',
      favicon: './app/favicon.ico',
    }),
  ],
};

if (IS_PRODUCTION) {
  webpackConfig.optimization = {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parallel: true,
          output: {
            comments: false,
          },
        },
      }),
    ],
  };

  webpackConfig.stats = {
    children: false,
  };

  webpackConfig.plugins.push(new ManifestPlugin());
}

module.exports = webpackConfig;
