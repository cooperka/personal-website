/*
 * Many thanks to https://gist.github.com/int128/e0cdec598c5b3db728ff35758abdbafd
 * for this script.
 */

process.env.NODE_ENV = 'production';

const fs = require('fs-extra');
const paths = require('react-scripts/config/paths');
const webpack = require('webpack');
const config = require('react-scripts/config/webpack.config.prod.js');

// removes react-dev-utils/webpackHotDevClient.js at first in the array
config.entry.shift();

webpack(config).watch({}, (err, stats) => {
  if (err) {
    console.error(err);
  } else {
    copyPublicFolder();
  }
  console.error(stats.toString({
    chunks: false,
    colors: true,
  }));
});

function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: (file) => file !== paths.appHtml,
  });
}
