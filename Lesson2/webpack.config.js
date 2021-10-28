const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve('./'),
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env']
        }
      }
    ]
  }
}