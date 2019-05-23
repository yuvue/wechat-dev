"use strict";
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = {
  context: path.resolve(__dirname, "./"),
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": resolve("src"),
      v: resolve("src/views"),
      c: resolve("src/components"),
      css: resolve("src/assets/css"),
      img: resolve("src/assets/img"),
      util: resolve("src/utils"),
      service: resolve("src/services"),
      config: resolve("src/configs"),
      filter: resolve("src/filters")
    }
  }
};
