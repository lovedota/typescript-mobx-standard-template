// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  roots: ['<rootDir>/app'],
  setupFiles: [
    '<rootDir>/config/jest/jest.shim.ts',
    '<rootDir>/config/jest/jest.setup.ts',
  ],
  testURL: 'http://localhost/',
  modulePaths: ['<rootDir>'],
  modulePathIgnorePatterns: [
    '<rootDir>[/\\\\](dist|docs|node_modules|test-result|e2e)[/\\\\]',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/__mocks__/file-mock.js',
    '\\.(scss)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: ['/node_modules/(?!@ansarada).+\\.js$'],
  transform: {
    ...tsjPreset.transform,
    '^(?!.*\\.(js|css|json)$)': '<rootDir>/config/jest/__mocks__/file-mock.ts',
  },
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](dist|docs|node_modules|test-result)[/\\\\]',
  ],
  cacheDirectory: '<rootDir>/.jest-cache',
  collectCoverageFrom: [
    '<rootDir>/app/**/*.{ts,tsx}',
    '!<rootDir>/app/**/*.d.ts',
    '!<rootDir>/node_modules/**',
  ],
  coverageReporters: ['json-summary', 'lcov', 'text', 'text-summary'],
  coverageDirectory: 'test-result/unit-test',
};
