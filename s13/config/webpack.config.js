const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { normalize } = require("path");

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
    new CleanWebpackPlugin()
  ],
};
