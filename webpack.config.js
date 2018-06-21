 const path = require('path');
 const ExtractTextPlugin = require("extract-text-webpack-plugin");
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

 const extractSass = new ExtractTextPlugin({
    filename: "[name].min.css",
    disable: process.env.NODE_ENV === "development"
});

  module.exports = [
		{
			entry: {
					main: './src/main.js'
			},
			output: {
				filename: '[name].min.js',
				path: path.resolve(__dirname, 'dest')
			},
			module: {
				rules: [
					{
						test: /\.js$/,
						exclude: /(node_modules|bower_components)/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: ['env'],
								minified: true,
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
					}
				]
			},
			resolve: {
				alias: {
					'masonry': 'masonry-layout',
					'isotope': 'isotope-layout'
				}
			},
			plugins: [
        extractSass,
				new UglifyJSPlugin()
			]
		}
  ];
