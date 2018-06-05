const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.stories\.js?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    include: [path.resolve(__dirname, '../src')],
    enforce: 'pre',
  });
  defaultConfig.resolve = {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      vue: 'vue/dist/vue.js',
    }
  };
  return defaultConfig;
};
