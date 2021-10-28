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
        test:/\.(js|jsx)$/,
        include: path.resolve('./'),
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env', '@babel/preset-react']
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        include: path.resolve('./'),
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/
      }
    ]
  }
}