const { defineConfig } = require("@vue/cli-service");
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/my-project/" : "/",
};
module.exports = defineConfig({
  transpileDependencies: true,
});
