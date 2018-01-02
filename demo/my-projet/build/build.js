const config = require('./webpack.config');
const webpack = require('webpack');

const compiler = webpack(config);




compiler.run((err) => {
	err && console.log(err);
});

compiler.watch({}, (err) => {
	err && console.log(err);
});


