const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const shell = {
  entry: {
    main: "./shell/main", 
    styles: "./shell/styles.css",
    polyfills: "./shell/polyfills"
  },
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
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },      
    ],
  },  
  resolve: {
    extensions: [ '.ts', '.js' ],
  },  
  output: {
    publicPath: "http://localhost:5000/",
    uniqueName: 'shell',
    path: path.join(__dirname, "dist/shell"),
    filename: '[name].js'
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ModuleFederationPlugin({
      name: "shell",
      remoteType: 'var',
      library: { type: "var", name: "shell" },
      remotes: {
        mfe1: "mfe1"
      },
      shared: {
        "rxjs": {
          eager: true
        },
      }
      // shared: {
      //   "rxjs": {},
      //   "libs/shared-lib/index.ts": {
      //     import: "shared-lib",
      //     packageName: "shared-lib",
      //     shareKey: "shared-lib",
      //     requiredVersion: "0.0.1" // or false
      //   }
      //}
    }),
    new HtmlWebpackPlugin({
      template: "./shell/index.html"
    })
  ]
};

module.exports = shell;