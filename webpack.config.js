const path = require('path');
const webpack = require("webpack");

module.exports = {
  mode: 'production',
  entry: {
    index: './client/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'bundle'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  devServer: {
    static: {
      //publicPath: "/build/bundle/js"
      directory: path.join(__dirname, 'public'), //gives an absolute path of the resource that is going to serve
    },
    compress: true,
    port: 8080,
    proxy: {
      "/api": "http://localhost:3000/",
    },
  },

  module: {
    rules: [
      //compile/load JSX
      {
        test: /\.(jsx|js?)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
