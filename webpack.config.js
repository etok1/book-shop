var path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "main.js",
  },
  mode: "development",
};