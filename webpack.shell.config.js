const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

const shell = {
  entry: "./shell/main",
  mode: "development",
  output: {
    publicPath: "http://localhost:5000/dist/shell/",
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
    })
  ]
};

module.exports = shell;