// We need to transform ES6 exports from `tti-polyfill` into CommonJs. It's not
// needed when bundling browser because it's done by webpack.
const babelCore = require('@babel/core')

module.exports = {
  process(code) {
    return {
      code: babelCore.transform(code, {
        plugins: ['@babel/plugin-transform-modules-commonjs'],
      }).code,
    }
  },
}
