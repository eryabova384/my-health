const path = require('path'),
	  uglifyJsPlugin = require('uglifyjs-webpack-plugin'),
	  optimizeCSS = require('optimize-css-assets-webpack-plugin'),
	  cssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: 'development',
	entry: ['./src/scripts/index.js', './src/styles/index.sass'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
                            name: '[name].css',
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								indentWidth: 4,
								includePaths: ['./src/sass/template/var.sass'],
							},
						}
                    },
				],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                        presets: ['@babel/preset-env']
                    }
                }
			},
		]
	},
	plugins: [
		new cssExtractPlugin({
			filename: "[name].css",
			minimize: true
		}),
		new uglifyJsPlugin({
			uglifyOptions: {
				minimize: true,
				compress: true,
				sourceMap: true,
				comments: false
			}
		})
	]
};