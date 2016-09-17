module.exports = function() {
  'use strict';

  var build = './build/';
  var client = './';
  var clientApp = client + 'app/';
  var root = './';
  var styles = client + 'styles/';
  var sass = styles + 'sass/';

  var config = {
    build: build,
    client: client,
    clientApp: clientApp,
    root: root,
    sass: sass,
    styles: styles,
    tmp: './tmp/'
  };

  return config;
};
