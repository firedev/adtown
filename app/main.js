require('basscss/css/basscss.css');
require('../css/application.css');

import React from 'react';
import App from './components/App';

main();

function main() {
  var app = document.createElement('div');
  document.body.appendChild(app);
  React.render(<App />, app);
}
