const PreloadWebpackPlugin = require("preload-webpack-plugin");

module.exports = function override(config, env) {
  //do stuff with the webpack config...

  config.plugins.push(
    new PreloadWebpackPlugin({
      rel: "preload",
      include: "allAssets", // or 'initial', or 'allChunks'
      as(entry) {
        if (/\.css$/.test(entry)) return "style";
        if (/\.ttf$/.test(entry)) return "font";
        if (/\.svg$/.test(entry)) return "image";
        return "script";
      },
    })
  );
  return config;
};
