const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const shell = {
  entry: ["./shell/main", "./shell/styles.css"],
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist/shell"),
    port: 5000
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },  
  output: {
    publicPath: "http://localhost:5000/",
    path: path.join(__dirname, "dist/shell"),
    filename: '[name].js'
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ModuleFederationPlugin({
      name: "shell",
      library: { type: "var", name: "shell" },
      remotes: {
        mfe1: "mfe1"
      },
      shared: ["rxjs"]
    }),
    new HtmlWebpackPlugin({
      template: "./shell/index.html"
    })
  ]
};

module.exports = shell;