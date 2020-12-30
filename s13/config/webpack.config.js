const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  stats: {
    hash: true,
  },
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name]-[contenthash:4].js",
    path: path.resolve(__dirname, "../", "build"),
  },
  module: {
    rules: [{ test: /\.txt$/, use: "raw-loader" }],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "src/template.html"
    }),
  ],
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, '../', 'public'),
    port: 5001
  }
};
