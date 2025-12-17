const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports =   {
  mode: 'production',
  entry: './src/js/snowflakes.js',
  output: {
    filename: 'snowflakes.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'snowflakes.css'  
    })
  ]
};