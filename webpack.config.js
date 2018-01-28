require('babel-polyfill');

const path      = require('path'),
      webpack   = require('webpack');

const DEV = !process.argv.includes('--env.prod');
const plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.HotModuleReplacementPlugin(),
  new webpack.optimize.LoaderOptionsPlugin({ debug: true }),
];

if(!DEV) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({ compress: {screw_ie8: false, warnings: false }}),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.DedupePlugin()
  )
}

module.exports = {
  entry: [
    path.join(__dirname, 'src/index.js'),
    require.resolve('react-hot-loader/patch'),
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        loaders: ['react-hot-loader', 'babel-loader'],
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        include: [src],
      },
    ]
  },
  resolve: {
    extensions: ['.js','.jsx'],
  },
  devtool: DEV ? 'source-map' : false,
  plugins: plugins,
}