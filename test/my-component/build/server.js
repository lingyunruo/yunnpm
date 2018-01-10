const config = require('./webpack.config.js');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const path = require('path');

const compiler = webpack(config);

const server = new webpackDevServer(compiler, {
	contentBase: path.join(__dirname, '../'),
	port: 9000,
	hot: true,
	watchContentBase: true,
	overlay: true,
	watchOptions: {
		poll: true
	},
	open: true,
	openPage: '/example/index.html'
});

server.listen(9000);