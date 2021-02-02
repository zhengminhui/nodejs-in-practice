const CountStream = require("./countstream");
const countStream = new CountStream("sign in");
// use https instead of http
const http = require("https");

http.get("https://www.manning.com/", function (res) {
  res.pipe(countStream);
});

countStream.on("total", function (count) {
  console.log("Total matches", count);
});
