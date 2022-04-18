const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = (env, options) => {
  return {
    entry: "./src/main.js",
    output: {
      filename: "main.js",
    },
    resolve: {
      extensions: [".js", ".vue"],
    },
    module: {
      rules: [
        {
          test: /\.vue/,
          use: "vue-loader",
        },
        {
          test: /\.js/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [["@babel/plugin-transform-runtime", { corejs: 3 }]],
            },
          },
        },
        {
          test: /\.css/,
          use: [MiniCssExtractPlugin.loader, "css-loader", 
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: ["autoprefixer"],
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),
      new CopyPlugin({
        patterns: [{ from: "static" }],
      }),
      new MiniCssExtractPlugin({
        filename: "style.css",
      }),
      new VueLoaderPlugin(),
    ],
  };
};