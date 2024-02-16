const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const extractSass = new MiniCssExtractPlugin({
  filename: "[name].min.css",
  chunkFilename: "[id].css",
});

module.exports = {
  entry: {
    single: {
      import: "./src/single.jsx",
      dependOn: "shared",
    },
    main: "./src/js/main.js",
    "main-react": { import: "./src/index.jsx", dependOn: "shared" },
    "footer-react": { import: "./src/footer.jsx", dependOn: "shared" },
    shared: [
      "react",
      "react-dom",
      "react-app-polyfill/ie11",
      "react-app-polyfill/stable",
      "core-js/stable",
    ],
  },

  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: ["web", "es5"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /@babel(?:\/|\\{1,2})runtime|core-js/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              [
                "@babel/plugin-proposal-class-properties",
                {
                  loose: true,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.js",
    },
    extensions: [".*", ".js", ".jsx"],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    new webpack.HotModuleReplacementPlugin(),
    extractSass,
    new NodePolyfillPlugin(),
  ],
};
