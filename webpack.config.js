 var path = require('path');
 var webpack = require('webpack');
 module.exports = {
     mode: "production",
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
     target: "web",
         externals: /k6(\/.*)?/,
     devtool: 'source-map'
 };

