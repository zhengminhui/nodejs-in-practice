const EventEmitter = require('events').EventEmitter;
const fs = require('fs');
let content;

function readFileIfRequired(cb) {
  if (!content) {
    fs.readFile(__filename, 'utf8', function (err, data) {
      console.log(__filename, data);
      content = data;
      console.log('readFileIfRequired: readFile');
      cb(err, content);
    });
  } else {
    // 注意这里如果不使用nextTick 转换成异步的话，打印的顺序
    process.nextTick(function () {
      console.log('readFileIfRequired: cached');
      cb(null, content);
    });
  }
}

readFileIfRequired(function (err, data) {
  console.log('1. Length:', data.length);

  readFileIfRequired(function (err, data2) {
    console.log('2. Length:', data2.length);
  });

  console.log('Reading file again...');
});

console.log('Reading file...');
