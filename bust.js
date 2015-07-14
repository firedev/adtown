var bust = require('cache-bust');
var path = require('path');
var file = path.resolve(__dirname, 'build/bundle.js');

var hash = bust.alias(file).split('/');
bust(file, { remove: true});

var replace = require('replace-in-file');

replace({
  files: 'index.html',
  replace: /bundle.*\.js/g,
  with: hash[hash.length - 1]
});
