const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const pkg = require('./package')

const build = `${__dirname}/public`
const source = `${__dirname}/src`

module.exports = {
  devtool: 'source-map',
  entry: {
    jono: [`${source}/index.js`],
  },
  output: {
    filename: '[name].js',
    path: build,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: source,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|)$/,
        loader: 'url-loader?mimetype=image/png',
      },
    ],
  },
  resolve: {
    modules: [source, 'node_modules'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/index.html`,
      title: pkg.name,
    }),
    new Webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
    new UglifyJSPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
    }),
  ],
}
