const path = require('path');
const { DefinePlugin } = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
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
  },
  plugins: [
    new DefinePlugin({
      INSERTED_STRING: '\"I am an inserted string!\"'
    })
  ]
}