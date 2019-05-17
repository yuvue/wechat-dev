const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("view", resolve("src/views"))
      .set("component", resolve("src/components"))
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
      "/tool/location": {
        target: "http://ip.taobao.com/service/getIpInfo.php",
        changeOrigin: true,
        pathRewrite: {
          "^/tool/location": ""
        }
      },
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
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
