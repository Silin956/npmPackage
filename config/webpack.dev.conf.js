const path = require('path');
const base = require('./webpack.conf');

module.exports = Object.assign({}, base, {
  mode:'development',
  devServer: {
    inline: true,
    port: 9999,
  }
})