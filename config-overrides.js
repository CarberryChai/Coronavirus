const {
  addLessLoader,
  fixBabelImports,
  override,
  addBabelPlugins,
} = require('customize-cra')
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
  ...addBabelPlugins(
    '@babel/plugin-syntax-optional-chaining',
    '@babel/plugin-proposal-optional-chaining'
  )
)
