/* eslint-disable @typescript-eslint/no-var-requires */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { globalStyles } = require('../paths');

const createStyleLoader = isProd => ({
  loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader',
});

const createPostCssLoader = () => ({
  loader: 'postcss-loader',
  options: {
    plugins: function() {
      return [require('precss'), require('autoprefixer')];
    },
  },
});

const createCssLoader = (isProd, cssModule = false) => {
  if (cssModule) {
    return {
      loader: 'css-loader',
      options: {
        modules: {
          mode: 'local',
          localIdentName: isProd
            ? '[hash:base64:5]'
            : '[name]__[local]___[hash:base64:5]',
          hashPrefix: 'typescript-mobx-stable-template',
        },
        importLoaders: 2,
      },
    };
  }

  return { loader: 'css-loader' };
};

const createSassLoader = () => ({
  loader: 'sass-loader',
});

module.exports = isProd => [
  {
    test: /\.(scss)$/,
    include: [globalStyles],
    use: [
      createStyleLoader(isProd),
      createCssLoader(isProd),
      createPostCssLoader(),
      createSassLoader(),
    ],
  },
  {
    test: /\.(scss)$/,
    exclude: [globalStyles],
    use: [
      createStyleLoader(isProd),
      createCssLoader(isProd, true),
      createPostCssLoader(),
      createSassLoader(),
    ],
  },
];
