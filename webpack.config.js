/*
    ./webpack.config.js
*/
const path = require('path');
module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + "/dist",
    filename: 'index.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }      
    ]
  }
}