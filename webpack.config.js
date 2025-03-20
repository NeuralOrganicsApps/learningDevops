const path = require("path");

module.exports = {
  entry: "./index.js", // Replace with your main file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "node",
  mode: "production",
};
