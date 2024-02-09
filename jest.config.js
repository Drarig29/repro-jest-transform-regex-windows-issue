/** @type {import('jest').Config} */
const config = {
  transformIgnorePatterns: ['node_modules/(?!tti-polyfill)'],
  transform: {
    'tti-polyfill\\\\src\\\\.+\\.js': './jest.babel-transform.js',
  },
}

module.exports = config
