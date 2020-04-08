const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

const mfe1 =  {
    entry: "./mfe1/main",
    mode: "development",
    devServer: {
      contentBase: path.join(__dirname, "dist"),
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
      })
    ]
  };

  module.exports = mfe1;