// in this folder run
// cat file.txt | node process.js
const process = require('process');

process.stdin.resume()
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (text) {
  process.stdout.write(text.toUpperCase())
});
