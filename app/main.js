require('basscss/css/basscss.css');
require('../sass/application.sass');

import React from 'react';
import App from './components/App';

main();

function main() {
  var app = document.createElement('div');
  document.body.appendChild(app);
  React.render(<App />, app);
}
