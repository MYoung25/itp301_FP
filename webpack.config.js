module.exports = {
	devtool: "eval-source-map",
	entry: __dirname + "/app/main.js",
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},

	module: {
		loaders: [
			{test: /\.json$/, loader: "json"},
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel'}, 
			{test: /\.css$/, loader: 'style!css'},
		    { test: /\.png$/, loader: "url-loader?limit=100000" },
		    { test: /\.jpg$/, loader: "file-loader" }		
		]
	}, 

	devServer: {
		contentBase: "./public",
		port: 8080,
		colors: true,
		historyApiFallback: true,
		inline: true
	}
}