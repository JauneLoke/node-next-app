// https://webpack.js.org/configuration/
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const npm_package = require('./package.json')

const buildPath = path.resolve(__dirname, './build');
const NODE_ENV = (process.env.NODE_ENV === "development") ? "development" : "production";
console.log('Environnement : ' + NODE_ENV)
console.log('Build path : ' + buildPath)

module.exports = {
	target: 'node',
	node: {
		__dirname: false
	},
	entry: './srv/server.js',
	mode: NODE_ENV, // "production" | "development" | "none"
	watch: (NODE_ENV === 'development'),
	resolve: {
		alias: npm_package._moduleAliases || {}, // Load _moduleAliases from package.json
		extensions: ['.ts', '.js'],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CopyPlugin({
			patterns: [
				{ from: './.env', to: buildPath },
				{ from: './srv/services/apiSchema/swagger.yaml', to: buildPath }, // Load Swagger schema
				{
					from: './node_modules/swagger-ui-dist/', to: 'node_modules/swagger-ui-dist', // Load css, js from swagger
					globOptions: {
						ignore: ['index.js', 'absolute-path.js', '*.map']
					},
				},
			],
			options: {
				concurrency: 100,
			},
		}),
	],
	output: {
		path: buildPath,
		filename: 'server-bundle.js',
		library: '[name]',
		libraryTarget: 'umd'
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
};