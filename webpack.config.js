var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/js/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'react-hot', 'babel' ],
        exclude: /node_modules/
      },
      {
        test: /\.(less|css)$/,
        loader: 'style!css!less'
      },
      {
        test: /\.styl$/,
        loader: 'style!css!stylus-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test   : /\.(jpe?g|png|gif|svg)$/,
        include: /assets/,
        loader : 'url'
      },
      {
        test: /.*font.*\.(otf|eot|svg|ttf|woff|woff2)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  resolve: {
    extensions: [ '', '.js', '.json', '.styl' ]
  }
}
