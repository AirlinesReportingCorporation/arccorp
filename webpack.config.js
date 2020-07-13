 const path = require('path');
 const ExtractTextPlugin = require("extract-text-webpack-plugin");
 const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
 const webpack = require('webpack');

 const extractSass = new ExtractTextPlugin({
   filename: "[name].min.css",
   disable: process.env.NODE_ENV === "development"
 });

 module.exports = [{
   entry: {
     main: './src/js/main.js',
     blog: './src/js/blog.js'
   },
   output: {
     filename: '[name].min.js',
     path: path.resolve(__dirname, 'dest')
   },
   module: {
     rules: [{
         test: /\.js$/,
         exclude: /(node_modules|bower_components)/,
         use: {
           loader: 'babel-loader',
           options: {
             presets: ['env'],
             minified: false,
             compact: true
           }
         }
       },
       {
         test: /\.scss$/,
         use: extractSass.extract({
           use: [{
             loader: "css-loader"
           }, {
             loader: "sass-loader",
             options: {
               outputStyle: "compressed"
             }
           }],
           fallback: "style-loader"
         })
       },
       /*{
         test: require.resolve('jquery'),
         use: [{
           loader: 'expose-loader',
           options: 'jQuery'
         }, {
           loader: 'expose-loader',
           options: '$'
         }]
       }*/
     ]
   },
   resolve: {
     alias: {
       'masonry': 'masonry-layout',
       'isotope': 'isotope-layout',
       'vue': 'vue/dist/vue.js'
     }
   },
   plugins: [
     new webpack.ProvidePlugin({
       $: 'jquery',
       jquery: 'jquery',
       'window.jQuery': 'jquery',
       jQuery: 'jquery'
     }),
     extractSass,
     /*new UglifyJsPlugin({
       test: /\main.min.js($|\?)/i
     })*/
   ]
 }];
