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
      .set("utils", resolve("src/utils"))
      .set("services", resolve("src/services"))
      .set("configs", resolve("src/configs"))
      .set("filters", resolve("src/filters"));
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
      }
    }
  }
};
