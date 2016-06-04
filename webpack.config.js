var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
  	loaders: [
  		{
  			test: /\.js$/,
  			loader: 'babel'
  		},
      {
        test: /\.css/,
        loader: 'style!css'
      },
      {
        test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000"
      }
  	]
  },
  devServer: {
    contentBase: 'build',
    stats: { color: true},
    inline: true
  },
  resolve: {
    extensions: ["", ".js", ".jsx", ".css", ".json"]
  },
  devtool: 'cheap-module-source-map'
};
