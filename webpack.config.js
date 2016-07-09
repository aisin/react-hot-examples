var webpack = require('webpack');
var path = require('path');

module.exports = {

	entry: [
		'webpack-dev-server/client?http://localhost:3001',
		'webpack/hot/only-dev-server',
		'./src/index'
	],

	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/assets/'
	},

    module: {
        loaders: [
        	{
		        test: /.js?$/,
		        loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'],
		        include: path.join(__dirname, 'src'),
		        exclude: /node_modules/
			}
        ]
    },
    
    plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};