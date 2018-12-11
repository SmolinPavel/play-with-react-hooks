const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

console.log(`${chalk.green('✓')} START publishing...`);

const data = fs.readFileSync(
  path.resolve(__dirname, '../CHANGELOG.md'),
  'utf8'
);

console.log('data', data);
