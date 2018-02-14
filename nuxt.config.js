// Pre-render code.
// var path = require('path');
// var PrerenderSpaPlugin = require('prerender-spa-plugin');

var webpack = require('webpack');

module.exports = {
  build: {
    vendor: ['jquery', 'bootstrap'],
      plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },
  css: ['bootstrap/dist/css/bootstrap.css'],
  // include bootstrap js on startup
  plugins: [
    '~plugins/bootstrap.js'
    // new PrerenderSpaPlugin(
    //     path.join(__dirname, '../dist'),
    //     [ '/', '/about' ]
    //   )
  ],
  head: {
    title: 'vue-challenge',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' }

  /*
  ** Run ESLint on save
  */
  // extend (config, { isDev, isClient }) {
  //   if (isDev && isClient) {
  //     config.module.rules.push({
  //       enforce: 'pre',
  //       test: /\.(js|vue)$/,
  //       loader: 'eslint-loader',
  //       exclude: /(node_modules)/
  //     })
  //   }
  // }
};
