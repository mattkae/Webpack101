const path = require('path');

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
        test:/\.(js|jsx)$/,
        include: path.resolve('./'),
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env', '@babel/preset-react']
        },
        exclude: [/node_modules/, /loaders/]
      },
      {
        test: /\.css$/,
        include: path.resolve('./'),
        use: ["style-loader", "css-loader"],
        exclude: [/node_modules/, /loaders/]
      },
      {
        test: /\.cupcake$/,
        include: path.resolve('./'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', '@babel/preset-react']
          }
        }, './loaders/cupcakeLoader.js'],
        exclude: [/node_modules/, /loaders/]
      }
    ]
  }
}