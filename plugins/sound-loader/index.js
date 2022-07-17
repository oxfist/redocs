module.exports = function (context, options) {
  return {
    name: "sound-loader",
    configureWebpack(config, isServer) {
      return {
        module: {
          rules: [
            {
              test: /\.ogg$/i,
              use: ["file-loader"],
            },
          ],
        },
      };
    },
  };
};
