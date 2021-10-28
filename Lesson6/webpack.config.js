const path = require('path');

module.exports = {
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
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
        test:/\.(ts|tsx)$/,
        include: path.resolve('./'),
        loader: 'ts-loader',
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