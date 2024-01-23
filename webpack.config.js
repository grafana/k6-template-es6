var webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
var path = require("path");
const GlobEntries = require("webpack-glob-entries");

module.exports = {
  mode: "production",
  entry: GlobEntries("./src/*-test.js"), // Generates multiple entry for each test
  output: {
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs",
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        // by default, it resolves `node_modules`
      },
    ],
  },
  stats: {
    colors: true,
  },
  plugins: [new CleanWebpackPlugin()],
  externals: /^(k6|https?\:\/\/)(\/.*)?/,
};
