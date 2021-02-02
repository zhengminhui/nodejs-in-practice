const assert = require("assert");
const CountStream = require("./countstream");
// find 'nodejs' in path to this file
const countStream = new CountStream("nodejs");
const fs = require("fs");

let passed = 0;

console.log(__filename);
console.log(__dirname);

countStream.on("total", function (count) {
  // equal is deprecated, use strictEqual instead
  assert.strictEqual(count, 1);
  passed++;
});

fs.createReadStream(__filename).pipe(countStream);

process.on("exit", function () {
  console.log("Assertion passed: ", passed);
});
