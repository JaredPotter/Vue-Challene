// var path = require('path');
// var PrerenderSpaPlugin = require('prerender-spa-plugin');
// var config = require('./nuxt.config.js');
//require("gsap");
module.exports = {
  // mode: 'spa',

  // plugins: [
  // '~/plugins/vue-js-modal'
  // ],

  head: {
    title: 'vue-challenge',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'},
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css'}
    ],
    script: [
      {type: 'text/javascript', src:"https://code.jquery.com/jquery-3.3.1.min.js"},
      {type: 'text/javascript', src:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"},
      {type: 'text/javascript', src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/plugins/CSSPlugin.min.js"},
      {type: 'text/javascript', src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenLite.min.js"}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  // build: {

  //     // extend (config, {isClient, dev}) {
  //     //   if (isClient) {

  //     //     config.entry['app'] = '~/node_modules/gsap/src/uncompressed/plugins/DrawSVGPlugin';
  //     //   }

  //   },
    //plugins: ["~plugins/DrawSVGPlugin.js"],
    // extend(config, {isDev, isClient}) {
    //   if (isClient) {
    //     config.entry.app = ["~/plugins/DrawSVGPlugin.min.js", config.entry.app];
    //   }
    // },
    // extend (config, ctx) {
    //   if (ctx.isClient) {
    //     config.entry.app = ['gsap','~plugins/DrawSVGPlugin', config.entry.app];
    //   }
    // }
    /*
    ** Run ESLint on save
    */
//     plugins: [
//       new PrerenderSpaPlugin(
//         path.join(__dirname, '../dist'),
//         [ '/', '/about' ]
//       )
// 'vue-js-modal'
//     ],
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
