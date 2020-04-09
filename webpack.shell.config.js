const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const shell = {
  entry: "./shell/main",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist/shell"),
    port: 5000
  },
  output: {
    publicPath: "http://localhost:5000/",
    path: path.join(__dirname, "dist/shell"),
    filename: '[name].js'
  },
  plugins: [
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