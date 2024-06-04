var path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "main.js",
  },
  mode: "production",
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, "css-loader"] },
    ],
  },
};
