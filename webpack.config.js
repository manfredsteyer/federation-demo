const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

console.log({__dirname});
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
      // shared: ["rxjs"]
    }),
    new HtmlWebpackPlugin({
      template: "./shell/index.html"
    })
  ]
};

const mfe1 =  {
    entry: "./mfe1/main",
    mode: "development",
    devServer: {
      contentBase: path.join(__dirname, "dist/mfe1"),
      port: 3000
    },
    output: {
        publicPath: "http://localhost:3000/",
        path: path.join(__dirname, "dist/mfe1"),
        filename: '[name].js'
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "mfe1",
        library: { type: "var", name: "mfe1" },
        filename: "remoteEntry.js",
        exposes: {
          component: "./mfe1/component"
        },
        // shared: ["rxjs"]
      }),
      new HtmlWebpackPlugin({
        template: "./mfe1/index.html"
      })
  
    ]
  };

  module.exports = [shell, mfe1];