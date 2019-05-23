const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("v", resolve("src/views"))
      .set("c", resolve("src/components"))
      .set("css", resolve("src/assets/css"))
      .set("img", resolve("src/assets/img"))
      .set("util", resolve("src/utils"))
      .set("service", resolve("src/services"))
      .set("config", resolve("src/configs"))
      .set("filter", resolve("src/filters"));
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: ["/Users/sharp/Project/wechat/src/assets/css/index.less"]
    }
  },
  devServer: {
    proxy: {
      "/img": {
        target: "http://localhost:3000",
        changeOrigin: true
      },
      "/audio": {
        target: "http://localhost:3000",
        changeOrigin: true
      },
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true
      },
      "/upload": {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
