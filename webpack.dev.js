const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  //devtool: 'inline-source-map',
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: true
      }
    },
    static: {
      directory: path.join(__dirname, "src")
    },

    compress: true,
    hot: true,
    open: true
  }
});
