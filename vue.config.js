const { defineConfig } = require("@vue/cli-service");
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/fintess/" : "/",
};
module.exports = defineConfig({
  transpileDependencies: true,
});
