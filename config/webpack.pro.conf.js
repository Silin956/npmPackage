const path = require('path');
const base = require('./webpack.conf');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = Object.assign({}, base, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
  plugins:[
    new CleanWebpackPlugin(),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.(sa|sc|c)ss$/g,
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../src/assets/fonts'),
      to: path.resolve(__dirname, '../bundle/assets/fonts')
    },{
        from: path.resolve(__dirname, '../src'),
        to: path.resolve(__dirname, '../dist/lib')
      },{
        from: path.resolve(__dirname, '../package.json'),
        to: path.resolve(__dirname, '../dist/package.json')
      },{
        from: path.resolve(__dirname, '../README.md'),
        to: path.resolve(__dirname, '../dist/README.md'),
      }]),
    new BundleAnalyzerPlugin(),
    ...base.plugins
  ]
})