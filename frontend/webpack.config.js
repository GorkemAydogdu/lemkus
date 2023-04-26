const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "build"),
    clean: true,
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node__modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Lemkus | Sneakers & Culture | Lemkus",
      favicon: "src/assets/favicon.svg",
      filename: "index.html",
      template: "src/template.html",
    }),
    //https://stackoverflow.com/a/53844967
    new Dotenv(),
    //https://stackoverflow.com/a/64553486
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
