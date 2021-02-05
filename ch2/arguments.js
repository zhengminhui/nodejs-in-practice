// run cmd `node arguments.js -r arguments.js -r console-1.js`
const args = {
  '-h': displayHelp,
  '-r': readFile
};

function displayHelp() {
  console.log('Argument processor:', args);
}

function readFile(file) {
  console.log('Reading:', file);
  require('fs').createReadStream(file).pipe(process.stdout);
}

if (process.argv.length > 0) {
  // console.log('argv', process.argv);
  process.argv.forEach(function (arg, index) {
    // 如果指令在 args 对象中，调用该方法，
    // 并获取指令之后的数组，该数组的第一个就是 readingFile 的入参
    if (args[arg]) {
      console.log(index, arg, process.argv.slice(index + 1));
      // 这里为什么不能用 call，因为 argv slice之后是个数组
      args[arg].apply(this, process.argv.slice(index + 1));
    }
  });
}
