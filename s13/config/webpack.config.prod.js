const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  stats: {
    hash: true,
  },
  mode: "production",
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
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpg|png|svg|gif|jpeg)$/,
        loader: "file-loader",
        options: {
          name: '[name]-[contenthash:4].[ext]',
          outputPath: 'images'
        }
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "src/templates/template.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash:4].css",
    }),
  ],
};
