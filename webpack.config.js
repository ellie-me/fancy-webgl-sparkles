const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'fancy-webgl-sparkles.js',
    library: 'FancyWebGLSparkles',
    libraryTarget: 'umd'
  }
};
