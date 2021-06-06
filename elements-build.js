const fs = require('fs-extra');
const concat = require('concat');

(async function build () {
  const files = [
    './dist/angular-elements/runtime.js',
    './dist/angular-elements/main.js',
    './dist/angular-elements/polyfills.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/fy-charts.js');
  await fs.copy('./dist/angular-elements/styles.css', 'elements/styles.css')
})()