function monitor() {
  console.log(process.memoryUsage());
}

const id = setInterval(monitor, 1000);
// 程序执行完成（setTimeout 结束后）取消interval
id.unref();

setTimeout(function () {
  console.log('Done!');
}, 5000);
