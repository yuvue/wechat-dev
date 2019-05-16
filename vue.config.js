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
      .set("component", resolve("src/components"));
      .set("img", resolve("src/assets/img"));
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: ["/Users/sharp/Project/wechat/src/assets/css/index.less"]
    }
  }
};
