const path = require("path");

module.exports = {
  devtool: "source-map", // generate source map
  // bundling mode
  mode: "production",

  // entry files
  entry: "./index.ts",

  // output bundles (location)
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  // file resolutions
  resolve: {
    extensions: [".ts", ".js"],
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // set watch mode to `true`
  watch: true,
};
