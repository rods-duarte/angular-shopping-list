const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './app/app.module.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
        {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.html$/i,
          loader: 'html-loader'
      }

    ]
  },
  resolve: {
    extensions: ['*', '.js']
  }
};