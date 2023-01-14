// https://nx.dev/recipes/other/customize-webpack
const { merge } = require('webpack-merge');

module.exports = (config, context) => {
  return merge(config, {
    module: {
      rules: [
        {
          test: /\.ts$/i,
          use: ['babel-loader'],
        },
      ],
    },
  });
};
