/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { path: rootPath } = require('app-root-path');

const getPublicPath = () => {
  const { ENVIRONMENT } = process.env;

  if (ENVIRONMENT) {
    if (ENVIRONMENT === 'production') {
      return `https://spa.ansarada.com/marketplace/pathway-marketplace-spa/`;
    }

    return `https://spa.${ENVIRONMENT}.ansarada.com/marketplace/pathway-marketplace-spa/`;
  }

  return 'http://localhost:8181/';
};

module.exports = {
  globalStyles: path.resolve(rootPath, 'app', 'sass'),
  source: path.resolve(rootPath, 'app'),
  entry: path.resolve(rootPath, 'app', 'index.tsx'),
  output: path.resolve(rootPath, 'dist'),
  publicPath: getPublicPath(),
};
