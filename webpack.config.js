 var path = require('path');
 var webpack = require('webpack');
 module.exports = {
     entry: './main.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         libraryTarget: "commonjs",
         filename: 'app.bundle.js'
     },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
             }
         ]
     },
     stats: {
         colors: true
     },
     target: "node",
     devtool: 'source-map'
 };

