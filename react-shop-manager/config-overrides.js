const { override, fixBabelImports, addLessLoader } = require('customize-cra')
const path = require('path')
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    style: true
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true
      // modifyVars: { '@primary-color': '#1DA57A' }
    }
  }),
  config => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      components: path.resolve('src/components')
    }
    return config
  }
)
