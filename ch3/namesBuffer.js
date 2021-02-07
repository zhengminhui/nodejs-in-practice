const fs = require('fs')

fs.readFile('./names.txt', function (err, buf) {
  console.log(buf);
  console.log(Buffer.isBuffer(buf));
  console.log(buf.toString('ascii'));
})