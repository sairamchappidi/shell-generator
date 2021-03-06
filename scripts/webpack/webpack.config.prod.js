process.env.NODE_ENV = 'production';

var entry = require('./webpack-configs/entry/entry-prod.js');
var output = require('./webpack-configs/output/output-prod.js');
var modules = require('./webpack-configs/modules.js');
var plugins = require('./webpack-configs/plugins.js');
var extResolve = require('./webpack-configs/resolve.js');

module.exports = {
	devtool: '#inline-source-map',
	entry:entry,
	output: output,
	module: modules,
	resolve: extResolve,
	plugins: [
		plugins.CommonChunksPlugin,
		plugins.HtmlWebpackPluginConfig,
		plugins.HMRPlugin,
		plugins.ModuleConcatenationPlugin,
		plugins.UglifyJSPluginConfig,	
	]
}



