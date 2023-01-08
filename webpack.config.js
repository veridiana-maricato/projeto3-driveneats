const path = require('path'); // CommonJS

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'public', 'assets', 'js'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        }
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }]
    },
    devtool: 'source-map'
  };
  