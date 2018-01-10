const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
    	main: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
	watch: true,
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: ['babel-loader'],
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "less-loader"]
            })
        }, {
        	test: /\.(png|jpg|gif)$/,
	        use: [{
        		loader: 'url-loader',
		        options: {
        			limit: 8192
		        }
	        }]
        }]
    },
	resolve: {

    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
    ]
};