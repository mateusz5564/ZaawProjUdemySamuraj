const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  stats: {
    hash: true,
  },
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "js/[name]-[contenthash:4].js",
    path: path.resolve(__dirname, "../", "build"),
  },
  module: {
    rules: [
      { test: /\.txt$/, use: "raw-loader" },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "src/templates/template.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name]-[contenthash:4].css",
    }),
  ],
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, "../", "public"),
    port: 5001,
  },
};
