const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.[contenthash].js',
  },
  plugins: [
        new HtmlWebpackPlugin({
        title:'xl',
        template:'src/assets/index.html'
        }),
    ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
        {
        test: /\.styl$/,

        use:[
          "style-loader",
          "css-loader",
          {
            loader:"stylus-loader"
          }
        ]
        },
        {
        test: /\.less$/i,

        use:[
          "style-loader",
          "css-loader",
          {
            loader:"less-loader"
          }
        ],
        //loader: ['style-loader','css-loader','less-loader'], // compiles Less to CSS
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
              loader:"sass-loader",
              options:{implementation:require("dart-sass")}
          },
        ],
      },
    ],
  },
};
