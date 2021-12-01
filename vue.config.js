/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
const path = require('path')

module.exports = {
  publicPath: process.env.DEPLOY_ENV === 'GH_PAGES'
    ? '/admin-one-vue-tailwind/'
    : '/',

  // Remove moment.js from chart.js
  configureWebpack: config => {
    return {
      externals: {
        moment: 'moment'
      },
      resolve: {
        alias: {
          '@': path.join(__dirname, './src/'),
          '@capi': path.join(__dirname, './src/composition-api')
        }
      }
    }
  }

}
