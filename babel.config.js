module.exports = {
  presets: [
    '@babel/typescript',
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions', 'ie >= 11'],
        },
        useBuiltIns: 'entry',
        corejs: 3,
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/proposal-object-rest-spread',
    [
      '@babel/transform-runtime',
      {
        corejs: 3,
      },
    ],
  ],
};
